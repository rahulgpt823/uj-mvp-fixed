-- First, let's make sure we have the categories (insert only if they don't exist)
INSERT INTO categories (name, description) 
SELECT 'GOLD_ORNAMENTS', 'Gold ornaments and jewelry'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'GOLD_ORNAMENTS');

INSERT INTO categories (name, description) 
SELECT 'SILVER_ARTICLES', 'Silver articles and items'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'SILVER_ARTICLES');

INSERT INTO categories (name, description) 
SELECT 'SILVER_ORNAMENTS', 'Silver ornaments and decorative items'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'SILVER_ORNAMENTS');

INSERT INTO categories (name, description) 
SELECT 'SILVER_JEWELLERY', 'Silver jewelry and accessories'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'SILVER_JEWELLERY');

-- Clear existing subcategories to avoid duplicates
DELETE FROM subcategories;

-- Now insert subcategories for each category
-- GOLD_ORNAMENTS subcategories
INSERT INTO subcategories (name, description, category_id) VALUES 
('RINGS FOR WOMEN', 'Gold rings for women', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('RINGS FOR MEN', 'Gold rings for men', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('EARRINGS', 'Gold earrings', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('NECKLACES', 'Gold necklaces', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('BRACELETS', 'Gold bracelets', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('PENDANTS', 'Gold pendants', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('CHAINS', 'Gold chains', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS')),
('BANGLES', 'Gold bangles', (SELECT id FROM categories WHERE name = 'GOLD_ORNAMENTS'));

-- SILVER_ARTICLES subcategories
INSERT INTO subcategories (name, description, category_id) VALUES 
('PLATES', 'Silver plates', (SELECT id FROM categories WHERE name = 'SILVER_ARTICLES')),
('BOWLS', 'Silver bowls', (SELECT id FROM categories WHERE name = 'SILVER_ARTICLES')),
('GLASSES', 'Silver glasses', (SELECT id FROM categories WHERE name = 'SILVER_ARTICLES')),
('UTENSILS', 'Silver utensils', (SELECT id FROM categories WHERE name = 'SILVER_ARTICLES'));

-- SILVER_ORNAMENTS subcategories
INSERT INTO subcategories (name, description, category_id) VALUES 
('DECORATIVE_ITEMS', 'Silver decorative items', (SELECT id FROM categories WHERE name = 'SILVER_ORNAMENTS')),
('FIGURINES', 'Silver figurines', (SELECT id FROM categories WHERE name = 'SILVER_ORNAMENTS')),
('FRAMES', 'Silver frames', (SELECT id FROM categories WHERE name = 'SILVER_ORNAMENTS'));

-- SILVER_JEWELLERY subcategories
INSERT INTO subcategories (name, description, category_id) VALUES 
('RINGS', 'Silver rings', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('EARRINGS_SILVER', 'Silver earrings', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('NECKLACES_SILVER', 'Silver necklaces', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('BRACELETS_SILVER', 'Silver bracelets', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('PENDANTS_SILVER', 'Silver pendants', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('CHAINS_SILVER', 'Silver chains', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY')),
('BANGLES_SILVER', 'Silver bangles', (SELECT id FROM categories WHERE name = 'SILVER_JEWELLERY'));

-- Verify the data
SELECT 
    c.name as category_name,
    s.name as subcategory_name,
    s.description
FROM categories c
LEFT JOIN subcategories s ON c.id = s.category_id
ORDER BY c.name, s.name; 