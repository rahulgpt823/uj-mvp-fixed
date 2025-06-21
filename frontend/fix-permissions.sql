-- Fix RLS permissions for Urvashi Jewellers MVP
-- Run this in Supabase SQL Editor to fix permission issues

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Allow authenticated insert on categories" ON categories;
DROP POLICY IF EXISTS "Allow authenticated update on categories" ON categories;
DROP POLICY IF EXISTS "Allow authenticated delete on categories" ON categories;

DROP POLICY IF EXISTS "Allow authenticated insert on subcategories" ON subcategories;
DROP POLICY IF EXISTS "Allow authenticated update on subcategories" ON subcategories;
DROP POLICY IF EXISTS "Allow authenticated delete on subcategories" ON subcategories;

DROP POLICY IF EXISTS "Allow authenticated insert on products" ON products;
DROP POLICY IF EXISTS "Allow authenticated update on products" ON products;
DROP POLICY IF EXISTS "Allow authenticated delete on products" ON products;

DROP POLICY IF EXISTS "Allow authenticated insert on product_images" ON product_images;
DROP POLICY IF EXISTS "Allow authenticated update on product_images" ON product_images;
DROP POLICY IF EXISTS "Allow authenticated delete on product_images" ON product_images;

-- Create more permissive policies for development
-- Allow all operations for anonymous users (for testing)
CREATE POLICY "Allow all operations on categories" ON categories FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on subcategories" ON subcategories FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on products" ON products FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on product_images" ON product_images FOR ALL USING (true) WITH CHECK (true);

-- Alternative: Disable RLS entirely for development (uncomment if needed)
-- ALTER TABLE categories DISABLE ROW LEVEL SECURITY;
-- ALTER TABLE subcategories DISABLE ROW LEVEL SECURITY;
-- ALTER TABLE products DISABLE ROW LEVEL SECURITY;
-- ALTER TABLE product_images DISABLE ROW LEVEL SECURITY; 