-- Enhanced Collection Management System
-- Dynamic tag-based collections with admin management

-- Collections table - Admin managed collections
CREATE TABLE IF NOT EXISTS collections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    banner_image TEXT NOT NULL,
    banner_alt TEXT,
    meta_title VARCHAR(255),
    meta_description TEXT,
    
    -- Admin management fields
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    display_order INTEGER DEFAULT 0,
    
    -- Collection configuration
    tag_filters TEXT[] NOT NULL, -- Tags that products must have to appear in this collection
    tag_match_mode VARCHAR(10) DEFAULT 'ANY' CHECK (tag_match_mode IN ('ANY', 'ALL')), -- ANY = OR logic, ALL = AND logic
    min_price DECIMAL(10,2),
    max_price DECIMAL(10,2),
    
    -- Date management for seasonal collections
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    
    -- Analytics fields
    view_count INTEGER DEFAULT 0,
    product_count INTEGER DEFAULT 0, -- Cached count for performance
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Product tags table (if not exists) - Normalized tag system
CREATE TABLE IF NOT EXISTS product_tags (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    color VARCHAR(7), -- Hex color for UI display
    is_active BOOLEAN DEFAULT true,
    usage_count INTEGER DEFAULT 0, -- How many products use this tag
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Product-Tag mapping table (many-to-many)
CREATE TABLE IF NOT EXISTS product_tag_mappings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id VARCHAR(255) NOT NULL,
    tag_id UUID NOT NULL REFERENCES product_tags(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(product_id, tag_id)
);

-- Collection analytics for admin insights
CREATE TABLE IF NOT EXISTS collection_analytics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    collection_id UUID NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    views INTEGER DEFAULT 0,
    unique_views INTEGER DEFAULT 0,
    product_clicks INTEGER DEFAULT 0,
    favorites_added INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(collection_id, date)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_collections_active ON collections(is_active);
CREATE INDEX IF NOT EXISTS idx_collections_featured ON collections(is_featured);
CREATE INDEX IF NOT EXISTS idx_collections_display_order ON collections(display_order);
CREATE INDEX IF NOT EXISTS idx_collections_dates ON collections(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_collections_tags ON collections USING GIN(tag_filters);

CREATE INDEX IF NOT EXISTS idx_product_tags_active ON product_tags(is_active);
CREATE INDEX IF NOT EXISTS idx_product_tags_usage ON product_tags(usage_count DESC);

CREATE INDEX IF NOT EXISTS idx_product_tag_mappings_product ON product_tag_mappings(product_id);
CREATE INDEX IF NOT EXISTS idx_product_tag_mappings_tag ON product_tag_mappings(tag_id);

CREATE INDEX IF NOT EXISTS idx_collection_analytics_collection ON collection_analytics(collection_id);
CREATE INDEX IF NOT EXISTS idx_collection_analytics_date ON collection_analytics(date);

-- Enable Row Level Security
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_tag_mappings ENABLE ROW LEVEL SECURITY;
ALTER TABLE collection_analytics ENABLE ROW LEVEL SECURITY;

-- Public read access for collections (active ones only)
CREATE POLICY "Public can view active collections" ON collections
    FOR SELECT USING (is_active = true AND (
        start_date IS NULL OR start_date <= NOW()
    ) AND (
        end_date IS NULL OR end_date >= NOW()
    ));

-- Admin can manage collections
CREATE POLICY "Admins can manage collections" ON collections
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'admin'
        )
    );

-- Public read access for active product tags
CREATE POLICY "Public can view active product tags" ON product_tags
    FOR SELECT USING (is_active = true);

-- Admin can manage product tags
CREATE POLICY "Admins can manage product tags" ON product_tags
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'admin'
        )
    );

-- Public read access for product tag mappings
CREATE POLICY "Public can view product tag mappings" ON product_tag_mappings
    FOR SELECT USING (true);

-- Admin can manage product tag mappings
CREATE POLICY "Admins can manage product tag mappings" ON product_tag_mappings
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'admin'
        )
    );

-- Function to update collection product counts
CREATE OR REPLACE FUNCTION update_collection_product_count()
RETURNS TRIGGER AS $$
BEGIN
    -- Update all collections that might be affected
    UPDATE collections 
    SET product_count = (
        SELECT COUNT(DISTINCT p.id)
        FROM products p
        JOIN product_tag_mappings ptm ON p.id::text = ptm.product_id
        JOIN product_tags pt ON ptm.tag_id = pt.id
        WHERE p.is_published = true
        AND pt.name = ANY(collections.tag_filters)
        AND (collections.min_price IS NULL OR p.price >= collections.min_price)
        AND (collections.max_price IS NULL OR p.price <= collections.max_price)
        GROUP BY p.id
        HAVING (
            collections.tag_match_mode = 'ANY' OR 
            (collections.tag_match_mode = 'ALL' AND COUNT(pt.name) = array_length(collections.tag_filters, 1))
        )
    ),
    updated_at = NOW();
    
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Function to update tag usage counts
CREATE OR REPLACE FUNCTION update_tag_usage_count()
RETURNS TRIGGER AS $$
BEGIN
    -- Update the tag usage count
    IF TG_OP = 'DELETE' THEN
        UPDATE product_tags 
        SET usage_count = usage_count - 1,
            updated_at = NOW()
        WHERE id = OLD.tag_id;
        RETURN OLD;
    ELSE
        UPDATE product_tags 
        SET usage_count = usage_count + 1,
            updated_at = NOW()
        WHERE id = NEW.tag_id;
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER update_collection_counts_on_product_tag_change
    AFTER INSERT OR DELETE ON product_tag_mappings
    FOR EACH ROW EXECUTE FUNCTION update_collection_product_count();

CREATE TRIGGER update_tag_usage_counts
    AFTER INSERT OR DELETE ON product_tag_mappings
    FOR EACH ROW EXECUTE FUNCTION update_tag_usage_count();

-- Function to get products for a collection (optimized aggregation)
CREATE OR REPLACE FUNCTION get_collection_products(
    p_collection_id UUID,
    p_limit INTEGER DEFAULT 20,
    p_offset INTEGER DEFAULT 0,
    p_sort_by VARCHAR DEFAULT 'created_at',
    p_sort_order VARCHAR DEFAULT 'DESC'
)
RETURNS TABLE(
    product_id VARCHAR,
    product_name VARCHAR,
    product_price DECIMAL,
    product_image TEXT,
    product_tags TEXT[]
) AS $$
BEGIN
    RETURN QUERY
    EXECUTE format('
        SELECT DISTINCT
            p.id::text as product_id,
            p.name as product_name,
            p.price as product_price,
            pi.url as product_image,
            ARRAY_AGG(DISTINCT pt.name) as product_tags
        FROM products p
        JOIN product_tag_mappings ptm ON p.id::text = ptm.product_id
        JOIN product_tags pt ON ptm.tag_id = pt.id
        LEFT JOIN product_images pi ON p.id::text = pi.product_id::text AND pi.id = (
            SELECT id FROM product_images 
            WHERE product_id::text = p.id::text 
            ORDER BY created_at ASC 
            LIMIT 1
        )
        WHERE p.is_published = true
        AND pt.name = ANY(
            SELECT tag_filters FROM collections WHERE id = $1
        )
        AND (
            (SELECT min_price FROM collections WHERE id = $1) IS NULL OR 
            p.price >= (SELECT min_price FROM collections WHERE id = $1)
        )
        AND (
            (SELECT max_price FROM collections WHERE id = $1) IS NULL OR 
            p.price <= (SELECT max_price FROM collections WHERE id = $1)
        )
        GROUP BY p.id, p.name, p.price, pi.url, p.%I
        HAVING (
            (SELECT tag_match_mode FROM collections WHERE id = $1) = ''ANY'' OR
            (
                (SELECT tag_match_mode FROM collections WHERE id = $1) = ''ALL'' AND 
                COUNT(DISTINCT pt.name) >= array_length((SELECT tag_filters FROM collections WHERE id = $1), 1)
            )
        )
        ORDER BY p.%I %s
        LIMIT $2 OFFSET $3
    ', p_sort_by, p_sort_by, p_sort_order)
    USING p_collection_id, p_limit, p_offset;
END;
$$ LANGUAGE plpgsql;

-- Insert sample collections
INSERT INTO collections (name, slug, description, banner_image, tag_filters, is_active, is_featured, display_order) VALUES
('Bridal Collection', 'bridal-collection', 'Exquisite jewelry for your special day', 'https://example.com/bridal-banner.jpg', ARRAY['bridal', 'wedding', 'traditional'], true, true, 1),
('Diamond Collection', 'diamond-collection', 'Sparkling diamonds for every occasion', 'https://example.com/diamond-banner.jpg', ARRAY['diamond'], true, true, 2),
('Pearl Collection', 'pearl-collection', 'Elegant pearls for sophisticated taste', 'https://example.com/pearl-banner.jpg', ARRAY['pearl'], true, false, 3),
('Gold Collection', 'gold-collection', 'Traditional and modern gold designs', 'https://example.com/gold-banner.jpg', ARRAY['gold'], true, false, 4),
('Diwali Special', 'diwali-special', 'Festive jewelry for Diwali celebrations', 'https://example.com/diwali-banner.jpg', ARRAY['diwali', 'festival', 'gold'], true, true, 5)
ON CONFLICT (name) DO NOTHING;

-- Insert sample product tags
INSERT INTO product_tags (name, slug, description, color) VALUES
('bridal', 'bridal', 'Wedding and bridal jewelry', '#FF69B4'),
('wedding', 'wedding', 'Wedding ceremony jewelry', '#FFB6C1'),
('traditional', 'traditional', 'Traditional designs', '#DAA520'),
('diamond', 'diamond', 'Diamond jewelry', '#B9F2FF'),
('pearl', 'pearl', 'Pearl jewelry', '#F5F5DC'),
('gold', 'gold', 'Gold jewelry', '#FFD700'),
('silver', 'silver', 'Silver jewelry', '#C0C0C0'),
('diwali', 'diwali', 'Diwali festival jewelry', '#FF8C00'),
('festival', 'festival', 'Festival jewelry', '#FF6347'),
('modern', 'modern', 'Modern contemporary designs', '#4169E1'),
('antique', 'antique', 'Antique style jewelry', '#CD853F'),
('kundan', 'kundan', 'Kundan jewelry', '#FFFF99'),
('polki', 'polki', 'Polki diamond jewelry', '#FFFACD'),
('temple', 'temple', 'Temple jewelry', '#DEB887')
ON CONFLICT (name) DO NOTHING; 