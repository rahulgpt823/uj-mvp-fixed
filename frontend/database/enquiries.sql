-- Create enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    customer_name VARCHAR(255) NOT NULL,
    customer_mobile VARCHAR(20) NOT NULL,
    customer_email VARCHAR(255),
    message TEXT NOT NULL,
    enquiry_type VARCHAR(50) DEFAULT 'individual' CHECK (enquiry_type IN ('individual', 'bulk')),
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed', 'cancelled')),
    admin_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create enquiry_items table for bulk enquiries
CREATE TABLE IF NOT EXISTS enquiry_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    enquiry_id UUID REFERENCES enquiries(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    product_name VARCHAR(255) NOT NULL,
    product_price DECIMAL(10,2) NOT NULL,
    product_category VARCHAR(100),
    product_image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_enquiries_user_id ON enquiries(user_id);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_enquiry_items_enquiry_id ON enquiry_items(enquiry_id);
CREATE INDEX IF NOT EXISTS idx_enquiry_items_product_id ON enquiry_items(product_id);

-- Enable Row Level Security
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiry_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for enquiries
CREATE POLICY "Users can view their own enquiries" ON enquiries
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create enquiries" ON enquiries
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own enquiries" ON enquiries
    FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for enquiry_items
CREATE POLICY "Users can view items from their enquiries" ON enquiry_items
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM enquiries 
            WHERE enquiries.id = enquiry_items.enquiry_id 
            AND enquiries.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can create enquiry items" ON enquiry_items
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM enquiries 
            WHERE enquiries.id = enquiry_items.enquiry_id 
            AND enquiries.user_id = auth.uid()
        )
    );

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_enquiries_updated_at 
    BEFORE UPDATE ON enquiries 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions
GRANT ALL ON enquiries TO authenticated;
GRANT ALL ON enquiry_items TO authenticated; 