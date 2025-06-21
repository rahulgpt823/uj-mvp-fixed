-- Script to publish all products
UPDATE products SET is_published = true;

-- Verify the update
SELECT id, name, is_published FROM products; 