-- COMPREHENSIVE FIX FOR ALL CATEGORIES AND SUBCATEGORIES
-- This script will ensure everything matches our enum structure

-- Step 1: Clear all existing data to start fresh
DELETE FROM products WHERE id > 0;  -- Clear products first (foreign key constraint)
DELETE FROM subcategories WHERE id > 0;  -- Clear subcategories
DELETE FROM categories WHERE id > 0;  -- Clear categories

-- Step 2: Reset auto-increment sequences
ALTER SEQUENCE categories_id_seq RESTART WITH 1;
ALTER SEQUENCE subcategories_id_seq RESTART WITH 1;
ALTER SEQUENCE products_id_seq RESTART WITH 1;

-- Step 3: Insert categories with exact enum names
INSERT INTO categories (name, description) VALUES 
('GOLD_ORNAMENTS', 'Gold ornaments and jewelry'),
('SILVER_ARTICLES', 'Silver articles and items'),
('SILVER_ORNAMENTS', 'Silver ornaments and decorative items'),
('SILVER_JEWELLERY', 'Silver jewelry and accessories');

-- Step 4: Insert subcategories for GOLD_ORNAMENTS
INSERT INTO subcategories (name, description, category_id) VALUES 
('RINGS FOR WOMEN', 'Gold rings for women', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('RINGS FOR MEN', 'Gold rings for men', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('EARRINGS', 'Gold earrings', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('NECKLACES', 'Gold necklaces', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('BRACELETS', 'Gold bracelets', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('PENDANTS', 'Gold pendants', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('CHAINS', 'Gold chains', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('BANGLES', 'Gold bangles', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS'));

-- Step 5: Insert subcategories for SILVER_ARTICLES
INSERT INTO subcategories (name, description, category_id) VALUES 
('PLATES', 'Silver plates', (SELECT id FROM categories WHERE name = 'SILVER_ARTICLES')),
('BOWLS', 'Silver bowls', (SELECT id FROM categories WHERE name = 'SILVER_ARTICLES')),
('GLASSES', 'Silver glasses', (SELECT id FROM categories WHERE name = 'SILVER_ARTICLES')),
('UTENSILS', 'Silver utensils', (SELECT id FROM categories WHERE name = 'SILVER_ARTICLES'));

-- Step 6: Insert subcategories for SILVER_ORNAMENTS
INSERT INTO subcategories (name, description, category_id) VALUES 
('DECORATIVE_ITEMS', 'Silver decorative items', (SELECT id FROM categories WHERE name = 'SILVER_ORNAMENTS')),
('FIGURINES', 'Silver figurines', (SELECT id FROM categories WHERE name = 'SILVER_ORNAMENTS')),
('FRAMES', 'Silver frames', (SELECT id FROM categories WHERE name = 'SILVER_ORNAMENTS'));

-- Step 7: Insert subcategories for SILVER_JEWELLERY
INSERT INTO subcategories (name, description, category_id) VALUES 
('RINGS', 'Silver rings', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('EARRINGS_SILVER', 'Silver earrings', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('NECKLACES_SILVER', 'Silver necklaces', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('BRACELETS_SILVER', 'Silver bracelets', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('PENDANTS_SILVER', 'Silver pendants', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('CHAINS_SILVER', 'Silver chains', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('BANGLES_SILVER', 'Silver bangles', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY'));

-- Step 8: Verification - Show final structure
SELECT 'FINAL CATEGORIES:' as section, id, name, description FROM categories ORDER BY id;

SELECT 'FINAL SUBCATEGORIES:' as section, s.id, s.name, s.description, c.name as category_name 
FROM subcategories s 
JOIN categories c ON s.category_id = c.id 
ORDER BY c.id, s.id;

-- Step 9: Count verification
SELECT 'COUNTS:' as section, c.name as category_name, COUNT(s.id) as subcategory_count
FROM categories c
LEFT JOIN subcategories s ON c.id = s.category_id
GROUP BY c.id, c.name
ORDER BY c.id; 