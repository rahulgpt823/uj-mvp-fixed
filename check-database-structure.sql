-- Check what categories exist
SELECT 'CATEGORIES:' as type, id, name, description FROM categories ORDER BY name;

-- Check what subcategories exist
SELECT 'SUBCATEGORIES:' as type, s.id, s.name, s.description, c.name as category_name 
FROM subcategories s 
JOIN categories c ON s.category_id = c.id 
ORDER BY c.name, s.name;

-- Count subcategories per category
SELECT c.name as category_name, COUNT(s.id) as subcategory_count
FROM categories c
LEFT JOIN subcategories s ON c.id = s.category_id
GROUP BY c.id, c.name
ORDER BY c.name; 