-- Create tables for Urvashi Jewellers MVP
-- Run this in Supabase SQL Editor

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create subcategories table
CREATE TABLE IF NOT EXISTS subcategories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sku VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    karat VARCHAR(10),
    weight DECIMAL(8,2),
    tags TEXT[],
    is_published BOOLEAN DEFAULT FALSE,
    subcategory_id INTEGER NOT NULL REFERENCES subcategories(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create product_images table
CREATE TABLE IF NOT EXISTS product_images (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    public_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample categories
INSERT INTO categories (name, description) VALUES
('GOLD ORNAMENTS', 'Gold jewelry and ornaments'),
('SILVER ORNAMENTS', 'Silver jewelry and ornaments'),
('SILVER ARTICLES', 'Silver articles and items'),
('SILVER JEWELLERY', 'Silver jewellery collection')
ON CONFLICT (name) DO NOTHING;

-- Insert sample subcategories
INSERT INTO subcategories (name, category_id) VALUES
-- Gold Ornaments subcategories
('RINGS FOR MEN', (SELECT id FROM categories WHERE name = 'GOLD ORNAMENTS')),
('RINGS FOR WOMEN', (SELECT id FROM categories WHERE name = 'GOLD ORNAMENTS')),
('NECKLACE FOR WOMEN', (SELECT id FROM categories WHERE name = 'GOLD ORNAMENTS')),
('EARRINGS FOR WOMEN', (SELECT id FROM categories WHERE name = 'GOLD ORNAMENTS')),
('BANGLES FOR WOMEN', (SELECT id FROM categories WHERE name = 'GOLD ORNAMENTS')),
('PENDENTS', (SELECT id FROM categories WHERE name = 'GOLD ORNAMENTS')),
('CHAND BALI', (SELECT id FROM categories WHERE name = 'GOLD ORNAMENTS')),
('LONG HARA', (SELECT id FROM categories WHERE name = 'GOLD ORNAMENTS')),

-- Silver Ornaments subcategories
('RINGS FOR MEN', (SELECT id FROM categories WHERE name = 'SILVER ORNAMENTS')),
('RINGS FOR WOMEN', (SELECT id FROM categories WHERE name = 'SILVER ORNAMENTS')),
('NECKLACE FOR WOMEN', (SELECT id FROM categories WHERE name = 'SILVER ORNAMENTS')),
('EARRINGS FOR WOMEN', (SELECT id FROM categories WHERE name = 'SILVER ORNAMENTS')),
('BANGLES FOR WOMEN', (SELECT id FROM categories WHERE name = 'SILVER ORNAMENTS')),

-- Silver Articles subcategories
('POOJA ITEMS', (SELECT id FROM categories WHERE name = 'SILVER ARTICLES')),
('GIFT ITEMS', (SELECT id FROM categories WHERE name = 'SILVER ARTICLES')),
('HOME DECOR', (SELECT id FROM categories WHERE name = 'SILVER ARTICLES')),

-- Silver Jewellery subcategories
('CHAINS', (SELECT id FROM categories WHERE name = 'SILVER JEWELLERY')),
('BRACELETS', (SELECT id FROM categories WHERE name = 'SILVER JEWELLERY')),
('ANKLETS', (SELECT id FROM categories WHERE name = 'SILVER JEWELLERY'))
ON CONFLICT DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_subcategory_id ON products(subcategory_id);
CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);
CREATE INDEX IF NOT EXISTS idx_products_is_published ON products(is_published);
CREATE INDEX IF NOT EXISTS idx_subcategories_category_id ON subcategories(category_id);
CREATE INDEX IF NOT EXISTS idx_product_images_product_id ON product_images(product_id);

-- Enable Row Level Security (RLS) for better security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access (you can modify these as needed)
CREATE POLICY "Allow public read access on categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access on subcategories" ON subcategories FOR SELECT USING (true);
CREATE POLICY "Allow public read access on products" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public read access on product_images" ON product_images FOR SELECT USING (true);

-- Allow authenticated users to insert/update/delete (you can modify these as needed)
CREATE POLICY "Allow authenticated insert on categories" ON categories FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update on categories" ON categories FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete on categories" ON categories FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated insert on subcategories" ON subcategories FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update on subcategories" ON subcategories FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete on subcategories" ON subcategories FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated insert on products" ON products FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update on products" ON products FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete on products" ON products FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated insert on product_images" ON product_images FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update on product_images" ON product_images FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete on product_images" ON product_images FOR DELETE USING (auth.role() = 'authenticated'); 