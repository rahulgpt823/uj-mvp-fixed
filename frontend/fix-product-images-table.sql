-- Fix product_images table structure
-- Run this in Supabase SQL Editor to add missing columns

-- Add missing columns to product_images table
ALTER TABLE product_images 
ADD COLUMN IF NOT EXISTS is_default BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS width INTEGER,
ADD COLUMN IF NOT EXISTS height INTEGER,
ADD COLUMN IF NOT EXISTS format TEXT;

-- Update existing records to have one default image per product
-- (Set the first image of each product as default)
UPDATE product_images 
SET is_default = TRUE 
WHERE id IN (
    SELECT DISTINCT ON (product_id) id 
    FROM product_images 
    ORDER BY product_id, created_at ASC
);

-- Ensure only one default image per product
-- (In case there were multiple defaults)
UPDATE product_images 
SET is_default = FALSE 
WHERE id NOT IN (
    SELECT DISTINCT ON (product_id) id 
    FROM product_images 
    WHERE is_default = TRUE 
    ORDER BY product_id, created_at ASC
);

-- Verify the changes
SELECT 'Table structure updated successfully' as status,
       (SELECT count(*) FROM product_images) as total_images,
       (SELECT count(*) FROM product_images WHERE is_default = TRUE) as default_images;

-- Show sample data to verify
SELECT product_id, url, is_default, width, height, format, created_at 
FROM product_images 
ORDER BY product_id, created_at 
LIMIT 10; 