-- Setup Favorites Functionality for Urvashi Jewellers
-- Run this script in your Supabase SQL Editor

-- 1. Create user_favorites table
CREATE TABLE IF NOT EXISTS user_favorites (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    product_id VARCHAR(255) NOT NULL,
    product_name VARCHAR(500) NOT NULL,
    product_image TEXT NOT NULL,
    product_price DECIMAL(10,2) NOT NULL,
    product_category VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Ensure a user can only favorite a product once
    UNIQUE(user_id, product_id)
);

-- 2. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_favorites_user_id ON user_favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_user_favorites_product_id ON user_favorites(product_id);
CREATE INDEX IF NOT EXISTS idx_user_favorites_created_at ON user_favorites(created_at);

-- 3. Enable Row Level Security
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS policies for user_favorites table
-- Users can only see their own favorites
CREATE POLICY "Users can view their own favorites" ON user_favorites
    FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own favorites
CREATE POLICY "Users can insert their own favorites" ON user_favorites
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own favorites
CREATE POLICY "Users can update their own favorites" ON user_favorites
    FOR UPDATE USING (auth.uid() = user_id);

-- Users can delete their own favorites
CREATE POLICY "Users can delete their own favorites" ON user_favorites
    FOR DELETE USING (auth.uid() = user_id);

-- 5. Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 6. Create trigger to automatically update updated_at
CREATE TRIGGER update_user_favorites_updated_at 
    BEFORE UPDATE ON user_favorites 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- 7. Create function to delete user account and all related data
CREATE OR REPLACE FUNCTION delete_user_account(user_id UUID)
RETURNS VOID AS $$
BEGIN
    -- Delete user favorites
    DELETE FROM user_favorites WHERE user_id = $1;
    
    -- Delete user sessions
    DELETE FROM user_sessions WHERE user_id = $1;
    
    -- Delete OTP records
    DELETE FROM otp_records WHERE user_id = $1;
    
    -- Delete user profile
    DELETE FROM users WHERE id = $1;
    
    -- Note: The actual auth user deletion should be handled by the application
    -- as it requires admin privileges
END;
$$ LANGUAGE plpgsql;

-- 8. Grant necessary permissions
GRANT ALL ON user_favorites TO authenticated;
GRANT ALL ON user_favorites TO anon;

-- 9. Create a view for easier querying (optional)
CREATE OR REPLACE VIEW user_favorites_view AS
SELECT 
    uf.id,
    uf.user_id,
    uf.product_id,
    uf.product_name,
    uf.product_image,
    uf.product_price,
    uf.product_category,
    uf.created_at,
    uf.updated_at,
    u.first_name,
    u.last_name,
    u.email
FROM user_favorites uf
JOIN users u ON uf.user_id = u.id;

-- Grant permissions on the view
GRANT SELECT ON user_favorites_view TO authenticated;

-- 10. Create function to get user favorites count
CREATE OR REPLACE FUNCTION get_user_favorites_count(user_uuid UUID)
RETURNS INTEGER AS $$
BEGIN
    RETURN (
        SELECT COUNT(*) 
        FROM user_favorites 
        WHERE user_id = user_uuid
    );
END;
$$ LANGUAGE plpgsql;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION get_user_favorites_count(UUID) TO authenticated;

-- 11. Create function to check if product is favorited by user
CREATE OR REPLACE FUNCTION is_product_favorited(user_uuid UUID, product_uuid VARCHAR)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS(
        SELECT 1 
        FROM user_favorites 
        WHERE user_id = user_uuid AND product_id = product_uuid
    );
END;
$$ LANGUAGE plpgsql;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION is_product_favorited(UUID, VARCHAR) TO authenticated;

-- 12. Insert some sample data for testing (optional - remove in production)
-- INSERT INTO user_favorites (user_id, product_id, product_name, product_image, product_price, product_category)
-- VALUES 
--     ('your-user-id-here', 'product-1', 'Diamond Necklace', 'https://example.com/image1.jpg', 45000.00, 'Necklaces'),
--     ('your-user-id-here', 'product-2', 'Gold Bangles', 'https://example.com/image2.jpg', 28000.00, 'Bracelets');

-- 13. Verify the setup
SELECT 
    'user_favorites table created successfully' as status,
    COUNT(*) as total_favorites
FROM user_favorites; 