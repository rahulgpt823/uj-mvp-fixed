# 🎯 How to Add New Collections - Complete Guide

## 📋 **Step 1: Database Migration (One-time Setup)**

### **For Supabase Users (Recommended):**
1. Open https://supabase.com/dashboard
2. Select your project
3. Go to **SQL Editor**
4. Copy & paste the entire content from `frontend/database/collections-schema.sql`
5. Click **Run** ✅

### **For Local PostgreSQL:**
```bash
# Replace 'your_database_name' with your actual database name
psql -d your_database_name -f ./database/collections-schema.sql
```

---

## 🆕 **Step 2: Adding New Collections**

### **Method 1: Using API (Recommended for Admin)**

Send a POST request to `/api/admin/collections` with the following data:

```javascript
// Example: Creating a Valentine's Day Collection
const newCollection = {
  // REQUIRED FIELDS
  name: "Valentine's Special 2024",                    // Collection name (must be unique)
  banner_image: "https://example.com/valentine.jpg",   // Banner image URL
  tag_filters: ["valentine", "romantic", "love"],      // Tags that products must have
  
  // OPTIONAL FIELDS
  description: "Romantic jewelry for your special someone",
  banner_alt: "Valentine's Day jewelry collection",
  meta_title: "Valentine's Jewelry - Urvashi Jewellers",
  meta_description: "Discover romantic jewelry perfect for Valentine's Day",
  
  // ADMIN CONTROLS
  is_active: true,           // Enable/disable collection
  is_featured: true,         // Show in featured section
  display_order: 1,          // Lower number = appears first
  
  // TAG MATCHING
  tag_match_mode: "ANY",     // "ANY" or "ALL" - how to match tags
  
  // PRICE FILTERING (Optional)
  min_price: 1000,           // Minimum price filter
  max_price: 100000,         // Maximum price filter
  
  // SEASONAL DATES (Optional)
  start_date: "2024-02-01",  // When collection becomes active
  end_date: "2024-02-20"     // When collection becomes inactive
}
```

### **Method 2: Direct Database Insert**

```sql
INSERT INTO collections (
  name, slug, description, banner_image, banner_alt,
  tag_filters, tag_match_mode, is_active, is_featured,
  display_order, min_price, max_price, start_date, end_date
) VALUES (
  'Valentine''s Special 2024',
  'valentines-special-2024',
  'Romantic jewelry for your special someone',
  'https://example.com/valentine.jpg',
  'Valentine''s Day jewelry collection',
  ARRAY['valentine', 'romantic', 'love'],
  'ANY',
  true,
  true,
  1,
  1000,
  100000,
  '2024-02-01',
  '2024-02-20'
);
```

---

## 📝 **Complete Field Reference**

### **Required Fields:**
| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `name` | String | Collection name (unique) | "Diwali Special 2024" |
| `banner_image` | String | Image URL for collection banner | "https://cdn.example.com/diwali.jpg" |
| `tag_filters` | Array | Tags that products must have | `["diwali", "festival", "gold"]` |

### **Optional Fields:**
| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `description` | String | Collection description | "Festive jewelry for Diwali" |
| `banner_alt` | String | Alt text for banner image | "Diwali jewelry collection" |
| `meta_title` | String | SEO title | "Diwali Jewelry - Urvashi Jewellers" |
| `meta_description` | String | SEO description | "Beautiful Diwali jewelry collection" |
| `is_active` | Boolean | Enable/disable collection | `true` or `false` |
| `is_featured` | Boolean | Show in featured section | `true` or `false` |
| `display_order` | Number | Display priority (lower = first) | `1`, `2`, `3`... |
| `tag_match_mode` | String | How to match tags | `"ANY"` or `"ALL"` |
| `min_price` | Number | Minimum price filter | `5000` |
| `max_price` | Number | Maximum price filter | `500000` |
| `start_date` | Date | When collection becomes active | `"2024-10-15"` |
| `end_date` | Date | When collection becomes inactive | `"2024-11-15"` |

---

## 🎯 **Real-World Examples**

### **Example 1: Diwali Collection (Seasonal)**
```javascript
{
  name: "Diwali Special 2024",
  description: "Celebrate the festival of lights with our stunning jewelry",
  banner_image: "https://cdn.example.com/diwali-banner.jpg",
  banner_alt: "Diwali jewelry collection banner",
  tag_filters: ["diwali", "festival", "gold", "traditional"],
  tag_match_mode: "ANY",     // Product needs ANY of these tags
  is_active: true,
  is_featured: true,
  display_order: 1,
  start_date: "2024-10-15",  // Start before Diwali
  end_date: "2024-11-15"     // End after Diwali
}
```

### **Example 2: Premium Diamond Collection**
```javascript
{
  name: "Premium Diamond Collection",
  description: "Exquisite diamonds for the most special occasions",
  banner_image: "https://cdn.example.com/premium-diamond.jpg",
  tag_filters: ["diamond", "premium"],
  tag_match_mode: "ALL",     // Product needs ALL these tags
  is_active: true,
  is_featured: true,
  min_price: 50000,          // Only high-value diamonds
  max_price: 1000000
}
```

### **Example 3: Bridal Collection**
```javascript
{
  name: "Bridal Collection",
  description: "Timeless pieces for your special day",
  banner_image: "https://cdn.example.com/bridal-banner.jpg",
  tag_filters: ["bridal", "wedding", "traditional", "kundan"],
  tag_match_mode: "ANY",
  is_active: true,
  is_featured: true,
  display_order: 2
}
```

---

## 🔧 **Tag Matching Logic Explained**

### **ANY Mode (Recommended for most collections):**
```javascript
// Collection: Gold Collection
tag_filters: ["gold", "yellow-gold", "rose-gold"]
tag_match_mode: "ANY"

// Product appears if it has ANY of these tags:
// ✅ Product with ["gold", "necklace"] → APPEARS
// ✅ Product with ["rose-gold", "earrings"] → APPEARS  
// ✅ Product with ["silver", "gold"] → APPEARS
// ❌ Product with ["silver", "diamond"] → DOESN'T APPEAR
```

### **ALL Mode (For specific collections):**
```javascript
// Collection: Premium Bridal Kundan
tag_filters: ["bridal", "kundan", "premium"]
tag_match_mode: "ALL"

// Product appears only if it has ALL these tags:
// ✅ Product with ["bridal", "kundan", "premium", "necklace"] → APPEARS
// ❌ Product with ["bridal", "kundan", "necklace"] → DOESN'T APPEAR (missing "premium")
// ❌ Product with ["bridal", "premium"] → DOESN'T APPEAR (missing "kundan")
```

---

## 🎮 **Admin Management Workflow**

### **Before Festival Season (e.g., Diwali):**
1. **Create Collection:**
   ```javascript
   POST /api/admin/collections
   {
     name: "Diwali Special 2024",
     tag_filters: ["diwali", "festival"],
     is_active: true,
     is_featured: true,
     start_date: "2024-10-15"
   }
   ```

2. **Result:** Collection automatically shows products with "diwali" or "festival" tags

### **After Festival:**
1. **Disable Collection:**
   ```javascript
   PUT /api/admin/collections/[collection-id]
   {
     is_active: false,
     is_featured: false
   }
   ```

2. **Result:** Collection disappears from frontend immediately

---

## 🔍 **Testing Your New Collection**

### **Step 1: Create Collection**
Use the API or database insert method above

### **Step 2: Verify Collection Appears**
- Visit: `http://localhost:3000/collections`
- Should see your new collection in the grid

### **Step 3: Check Products**
- Click on your collection
- Should see products that match your tag filters

### **Step 4: Test Admin Controls**
- Disable collection: `is_active: false`
- Should disappear from frontend
- Enable again: `is_active: true`
- Should reappear

---

## 🚨 **Common Issues & Solutions**

### **Issue: Collection created but no products appear**
**Solution:** Check that:
- Products have the tags you specified in `tag_filters`
- Products are published (`is_published: true`)
- Tags are active in the `product_tags` table

### **Issue: Collection doesn't appear on frontend**
**Solution:** Check that:
- `is_active: true`
- Current date is between `start_date` and `end_date` (if set)

### **Issue: "Tag does not exist" error**
**Solution:** Create the tags first:
```sql
INSERT INTO product_tags (name, slug, description, is_active) VALUES
('diwali', 'diwali', 'Diwali festival jewelry', true),
('valentine', 'valentine', 'Valentine''s Day jewelry', true);
```

---

## 🎯 **Quick Start Checklist**

- [ ] Run database migration (`collections-schema.sql`)
- [ ] Verify sample collections were created
- [ ] Test frontend at `/collections`
- [ ] Create your first collection using the examples above
- [ ] Verify products appear in the collection
- [ ] Test enable/disable functionality

**Your dynamic collection system is now ready! 🎉** 