<template>
  <div class="product-form-page">
    <div class="page-header">
      <h1>{{ isNewProduct ? 'Add New Product' : 'Edit Product' }}</h1>
      <div class="header-actions">
        <button @click="router.back()" class="secondary-btn">
          <span class="material-icons">arrow_back</span>
          Back
        </button>
        <button @click="saveProduct" class="primary-btn" :disabled="loading">
          <span v-if="loading" class="material-icons loading">sync</span>
          <span v-else class="material-icons">save</span>
          Save Product
        </button>
      </div>
    </div>

    <form @submit.prevent="saveProduct" class="product-form">
      <!-- Basic Information -->
      <div class="form-section">
        <h2>Basic Information</h2>
        <div class="form-grid">
          <div class="form-group">
            <label for="name">Product Name*</label>
            <input 
              id="name"
              v-model="product.name"
              type="text"
              required
              placeholder="Enter product name"
            />
          </div>

          <div class="form-group">
            <label for="slug">Slug*</label>
            <input 
              id="slug"
              v-model="product.slug"
              type="text"
              required
              placeholder="product-url-slug"
            />
          </div>

          <div class="form-group">
            <label for="category">Category*</label>
            <select 
              id="category"
              v-model="product.category"
              required
              @change="onCategoryChange"
            >
              <option value="">Select Category</option>
              <option value="GOLD ORNAMENTS">GOLD ORNAMENTS</option>
              <option value="SILVER ARTICLES">SILVER ARTICLES</option>
              <option value="SILVER ORNAMENTS">SILVER ORNAMENTS</option>
              <option value="SILVER JEWELLERY">SILVER JEWELLERY</option>
            </select>
          </div>

          <div class="form-group">
            <label for="subcategory">Subcategory*</label>
            <select 
              id="subcategory"
              v-model="product.subcategory"
              required
              :disabled="!product.category"
            >
              <option value="">Select Subcategory</option>
              <option v-for="subcategory in availableSubcategories" :key="subcategory" :value="subcategory">
                {{ subcategory }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="gender">Gender*</label>
            <select 
              id="gender"
              v-model="product.gender"
              required
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="UNISEX">Unisex</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Product Details -->
      <div class="form-section">
        <h2>Product Details</h2>
        <div class="form-grid">
          <div class="form-group full-width">
            <label for="description">Description</label>
            <textarea 
              id="description"
              v-model="product.description"
              rows="4"
              placeholder="Enter product description"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="netWeight">Net Weight (g)*</label>
            <input 
              id="netWeight"
              v-model="product.netWeight"
              type="number"
              step="0.01"
              required
            />
          </div>

          <div class="form-group">
            <label for="grossWeight">Gross Weight (g)</label>
            <input 
              id="grossWeight"
              v-model="product.grossWeight"
              type="number"
              step="0.01"
            />
          </div>

          <div class="form-group">
            <label for="huid">HUID*</label>
            <input 
              id="huid"
              v-model="product.huid"
              type="text"
              required
              placeholder="Enter HUID"
            />
          </div>

          <div class="form-group">
            <label for="sku">SKU*</label>
            <input 
              id="sku"
              v-model="product.sku"
              type="text"
              required
              placeholder="Enter SKU"
            />
          </div>

          <div class="form-group">
            <label for="karat">Karat*</label>
            <select 
              id="karat"
              v-model="product.karat"
              required
            >
              <option value="">Select karat</option>
              <option value="14K">14K</option>
              <option value="18K">18K</option>
              <option value="22K">22K</option>
              <option value="24K">24K</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Pricing and Inventory -->
      <div class="form-section">
        <h2>Pricing & Inventory</h2>
        <div class="form-grid">
          <div class="form-group">
            <label for="price">Price (₹)*</label>
            <input 
              id="price"
              v-model="product.price"
              type="number"
              step="0.01"
              required
            />
          </div>

          <div class="form-group">
            <label for="salePrice">Sale Price (₹)</label>
            <input 
              id="salePrice"
              v-model="product.salePrice"
              type="number"
              step="0.01"
            />
          </div>

          <div class="form-group">
            <label for="stockQuantity">Stock Quantity*</label>
            <input 
              id="stockQuantity"
              v-model="product.stockQuantity"
              type="number"
              required
            />
          </div>
        </div>
      </div>

      <!-- Images -->
      <div class="form-section">
        <h2>Product Images</h2>
        <ProductImageUpload 
          v-model="product.images"
          :productId="productId"
        />
      </div>

      <!-- SEO -->
      <div class="form-section">
        <h2>SEO Information</h2>
        <div class="form-grid">
          <div class="form-group full-width">
            <label for="metaTitle">Meta Title</label>
            <input 
              id="metaTitle"
              v-model="product.metaTitle"
              type="text"
              placeholder="Enter meta title"
            />
          </div>

          <div class="form-group full-width">
            <label for="metaDescription">Meta Description</label>
            <textarea 
              id="metaDescription"
              v-model="product.metaDescription"
              rows="3"
              placeholder="Enter meta description"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Publishing -->
      <div class="form-section">
        <h2>Publishing</h2>
        <div class="form-grid">
          <div class="form-group">
            <label class="checkbox-label">
              <input 
                type="checkbox"
                v-model="product.isPublished"
              />
              <span>Publish this product</span>
            </label>
            <p class="help-text">When checked, the product will be visible on the website</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Category, SubcategoryByCategory, getSubcategoriesForCategory } from '~/types/enums'

interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  stockQuantity: number
  sku: string
  karat: string
  category: string
  subcategory: string
  gender: string
  netWeight: number
  grossWeight: number
  huid: string
  salePrice?: number
  isPublished: boolean
  images: Array<{
    id: number
    url: string
    isDefault: boolean
    priority: number
  }>
}

definePageMeta({
  layout: 'admin',
  middleware: ['admin']
})

const route = useRoute()
const router = useRouter()
const product = ref<Product>({
  id: 0,
  name: '',
  slug: '',
  description: '',
  price: 0,
  stockQuantity: 0,
  sku: '',
  karat: '',
  category: '',
  subcategory: '',
  gender: '',
  netWeight: 0,
  grossWeight: 0,
  huid: '',
  salePrice: 0,
  isPublished: false,
  images: []
})
const loading = ref(true)
const saving = ref(false)
const productId = computed(() => route.params.id === 'new' ? null : Number(route.params.id))
const isNewProduct = computed(() => !productId.value)

// Computed property for available subcategories based on selected category
const availableSubcategories = computed(() => {
  if (!product.value.category) return []
  return getSubcategoriesForCategory(product.value.category as Category)
})

// Watch category changes to reset subcategory
watch(() => product.value.category, () => {
  product.value.subcategory = ''
})

const onCategoryChange = () => {
  product.value.subcategory = ''
}

onMounted(async () => {
  try {
    if (!isNewProduct.value) {
      // Fetch product data - replace with actual API call
      const productId = route.params.id
      product.value = {
        id: Number(productId),
        name: 'Sample Gold Ring',
        slug: 'sample-gold-ring',
        description: 'Beautiful gold ring',
        price: 25000,
        stockQuantity: 5,
        sku: 'GR001',
        karat: '22K',
        category: 'GOLD ORNAMENTS',
        subcategory: 'RINGS FOR WOMEN',
        gender: 'FEMALE',
        netWeight: 5.5,
        grossWeight: 6.0,
        huid: 'HUID123456',
        salePrice: 23000,
        isPublished: true,
        images: []
      }
    }
  } catch (error) {
    console.error('Error fetching product:', error)
  } finally {
    loading.value = false
  }
})

// Auto-generate slug from name
watch(() => product.value.name, (newName) => {
  if (!product.value.slug || isNewProduct.value) {
    product.value.slug = newName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }
})

// Save product
const saveProduct = async () => {
  if (!product.value) return
  
  saving.value = true
  try {
    // API call to save product
    console.log('Saving product:', product.value)
    await router.push('/admin/products')
  } catch (error) {
    console.error('Error saving product:', error)
  } finally {
    saving.value = false
  }
}
</script>

<style scoped>
.product-form-page {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.product-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-section {
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.form-section h2 {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-size: 0.875rem;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--primary);
  outline: none;
  box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.1);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.help-text {
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.25rem;
}

.primary-btn,
.secondary-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.primary-btn {
  background-color: var(--primary);
  color: white;
}

.primary-btn:hover {
  background-color: var(--primary-dark);
}

.secondary-btn {
  background-color: #f3f4f6;
  color: #4b5563;
}

.secondary-btn:hover {
  background-color: #e5e7eb;
}

.loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style> 