# Enums Usage Guide

This document explains how to use the enums defined in `~/types/enums.ts` for consistent data handling across the application.

## Available Enums

### Karat
Used for jewelry karat values:
- `Karat.K14` = '14K'
- `Karat.K18` = '18K'
- `Karat.K22` = '22K'
- `Karat.K24` = '24K'

### Category
Main product categories:
- `Category.GOLD_ORNAMENTS` = 'GOLD ORNAMENTS'
- `Category.SILVER_ARTICLES` = 'SILVER ARTICLES'
- `Category.SILVER_ORNAMENTS` = 'SILVER ORNAMENTS'
- `Category.SILVER_JEWELLERY` = 'SILVER JEWELLERY'

### Gender
Target gender for products:
- `Gender.MALE` = 'Male'
- `Gender.FEMALE` = 'Female'
- `Gender.UNISEX` = 'UNISEX'
- `Gender.KIDS` = 'KIDS'

## Subcategories

Subcategories are mapped to their parent categories in `SubcategoryByCategory`:

```typescript
// Get subcategories for a specific category
const goldSubcategories = getSubcategoriesForCategory(Category.GOLD_ORNAMENTS)
// Returns: ['RINGS FOR WOMEN', 'RINGS FOR MEN', 'PENDENTS', ...]

// Find category for a subcategory
const category = getCategoryForSubcategory('RINGS FOR WOMEN')
// Returns: Category.GOLD_ORNAMENTS
```

## Usage in Forms

### Admin Product Form

```vue
<template>
  <!-- Category Dropdown -->
  <select v-model="form.category">
    <option value="">Select a category</option>
    <option v-for="category in Object.values(Category)" :key="category" :value="category">
      {{ category }}
    </option>
  </select>

  <!-- Subcategory Dropdown (filtered by category) -->
  <select v-model="form.subcategory" :disabled="!form.category">
    <option value="">Select a subcategory</option>
    <option v-for="subcategory in availableSubcategories" :key="subcategory" :value="subcategory">
      {{ subcategory }}
    </option>
  </select>

  <!-- Karat Dropdown -->
  <select v-model="form.karat">
    <option value="">Select karat</option>
    <option v-for="karat in Object.values(Karat)" :key="karat" :value="karat">
      {{ karat }}
    </option>
  </select>
</template>

<script setup>
import { Category, Karat, getSubcategoriesForCategory } from '~/types/enums'

// Make enums available in template
const { Category, Karat } = { Category, Karat }

const form = ref({
  category: '' as Category | '',
  subcategory: '',
  karat: '' as Karat | ''
})

// Computed property for subcategories
const availableSubcategories = computed(() => {
  if (!form.value.category) return []
  return getSubcategoriesForCategory(form.value.category)
})

// Watch category changes to reset subcategory
watch(() => form.value.category, () => {
  form.value.subcategory = ''
})
</script>
```

## Benefits

1. **Type Safety**: TypeScript will catch invalid enum values at compile time
2. **Consistency**: All components use the same category/subcategory structure
3. **Maintainability**: Changes to categories only need to be made in one place
4. **Intelligent Filtering**: Subcategories automatically filter based on selected category
5. **Auto-completion**: IDEs provide auto-completion for enum values

## Files Updated

- `~/types/enums.ts` - Enum definitions
- `~/pages/admin/products/index.vue` - Admin product list with add/edit form
- `~/pages/admin/products/[id]/edit.vue` - Product edit form
- `~/components/MegaMenu.vue` - Navigation menu using enums
- `~/ENUMS_USAGE.md` - This documentation

## Future Enhancements

Consider adding these enums in the future:
- `Material` enum for different materials (Gold, Silver, Platinum, etc.)
- `ProductStatus` enum for product lifecycle states
- `PriceRange` enum for filtering products by price ranges
- `Occasion` enum for special occasions (Wedding, Festival, Daily wear, etc.) 