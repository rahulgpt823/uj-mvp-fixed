-- Temporarily disable RLS for development testing
-- Run this in Supabase SQL Editor

-- Disable Row Level Security for all tables
ALTER TABLE categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE subcategories DISABLE ROW LEVEL SECURITY;
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE product_images DISABLE ROW LEVEL SECURITY;

-- Verify tables exist and show sample data
SELECT 'Categories:' as table_name, count(*) as count FROM categories
UNION ALL
SELECT 'Subcategories:', count(*) FROM subcategories
UNION ALL
SELECT 'Products:', count(*) FROM products
UNION ALL
SELECT 'Product Images:', count(*) FROM product_images; 