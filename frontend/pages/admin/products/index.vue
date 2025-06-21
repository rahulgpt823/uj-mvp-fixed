<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Product Management</h1>
      <button
        @click="showAddModal = true"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add New Product
      </button>
    </div>

    <!-- Error Display -->
    <div v-if="error" class="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
      <div class="flex items-start">
        <svg class="w-5 h-5 text-red-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <div>
          <h3 class="text-sm font-medium text-red-800">Database Connection Error</h3>
          <p class="text-sm text-red-700 mt-1">{{ error }}</p>
          <div class="mt-3">
            <button 
              @click="retryConnection" 
              :disabled="loading"
              class="bg-red-100 hover:bg-red-200 text-red-800 text-xs px-3 py-1 rounded-md transition-colors disabled:opacity-50"
            >
              {{ loading ? 'Retrying...' : 'Retry Connection' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading && !error" class="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div class="flex items-center">
        <svg class="animate-spin w-5 h-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="text-blue-700">Loading products...</span>
      </div>
    </div>

    <!-- Success State -->
    <div v-if="!loading && !error && products.length === 0" class="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        <span class="text-yellow-700">No products found. Start by adding your first product!</span>
      </div>
    </div>

    <!-- Search and Filter -->
    <div class="mb-6 flex gap-4">
      <div class="flex-1">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search products..."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <select
        v-model="selectedCategory"
        class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>

    <!-- Products Table -->
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Stock
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="product in filteredProducts" :key="product.id">
            <!-- Product Image -->
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  v-if="product.images && product.images.length > 0"
                  :src="getDefaultImage(product.images)"
                  :alt="product.name"
                  class="w-full h-full object-cover"
                />
                <div v-else class="text-gray-400 text-xs text-center">
                  <svg class="w-8 h-8 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                  </svg>
                  No Image
                </div>
              </div>
            </td>
            <!-- Product Info -->
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
              <div class="text-sm text-gray-500">{{ product.sku }}</div>
            </td>
            <!-- Category -->
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ product.subcategory?.category?.name }}</div>
              <div class="text-sm text-gray-500">{{ product.subcategory?.name }}</div>
            </td>
            <!-- Price -->
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              ₹{{ product.price?.toLocaleString() }}
            </td>
            <!-- Stock -->
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="[
                'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                product.stockQuantity > 10 ? 'bg-green-100 text-green-800' : 
                product.stockQuantity > 0 ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'
              ]">
                {{ product.stockQuantity }} units
              </span>
            </td>
            <!-- Status -->
            <td class="px-6 py-4 whitespace-nowrap">
              <button
                @click="togglePublish(product.id)"
                :class="[
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full cursor-pointer',
                  product.isPublished ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                ]"
              >
                {{ product.isPublished ? 'Published' : 'Draft' }}
              </button>
            </td>
            <!-- Actions -->
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                @click="editProduct(product)"
                class="text-indigo-600 hover:text-indigo-900 mr-4"
              >
                Edit
              </button>
              <button
                @click="confirmDelete(product.id)"
                class="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add/Edit Product Modal -->
    <div v-if="showAddModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium leading-6 text-gray-900 mb-4">
            {{ editingProduct ? 'Edit Product' : 'Add New Product' }}
          </h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">SKU</label>
              <input
                v-model="form.sku"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Category</label>
              <select
                v-model="form.category"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a category</option>
                <option v-for="category in Object.values(Category)" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Subcategory</label>
              <select
                v-model="form.subcategory"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                :disabled="!form.category"
              >
                <option value="">Select a subcategory</option>
                <option v-for="subcategory in availableSubcategories" :key="subcategory" :value="subcategory">
                  {{ subcategory }}
                </option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Price</label>
              <input
                v-model.number="form.price"
                type="number"
                step="0.01"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Stock Quantity</label>
              <input
                v-model.number="form.stockQuantity"
                type="number"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Karat</label>
              <select
                v-model="form.karat"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select karat</option>
                <option v-for="karat in Object.values(Karat)" :key="karat" :value="karat">
                  {{ karat }}
                </option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Weight (grams)</label>
              <input
                v-model.number="form.weight"
                type="number"
                step="0.01"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                v-model="form.description"
                rows="3"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Tags</label>
              <div class="mt-1 flex flex-wrap gap-2">
                <div
                  v-for="(tag, index) in form.tags"
                  :key="index"
                  class="inline-flex items-center px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                >
                  {{ tag }}
                  <button
                    type="button"
                    @click="removeTag(index)"
                    class="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </div>
                <input
                  v-model="newTag"
                  @keydown.enter.prevent="addTag"
                  type="text"
                  placeholder="Add tag..."
                  class="flex-1 min-w-[120px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <!-- Product Images -->
            <ImageUploadField
              v-model="form.images"
              label="Product Images"
              :max-files="6"
              :max-size="5"
              help-text="Upload up to 6 images. First image will be the default. Supports JPG, PNG, WebP up to 5MB each."
            />
            <div class="flex justify-end gap-4">
              <button
                type="button"
                @click="showAddModal = false"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {{ isSubmitting ? 'Saving...' : 'Save Product' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useProducts } from '~/composables/useProducts'
import { Karat, Category, SubcategoryByCategory, getSubcategoriesForCategory } from '~/types/enums'
import ImageUploadField from '~/components/ImageUploadField.vue'

interface Product {
  id: number
  name: string
  sku: string
  price: number
  stockQuantity: number
  isPublished: boolean
  salePrice?: number
  subcategory: {
    id: number
    name: string
    category: {
      id: number
      name: string
    }
  }
  images: Array<{
    url: string
    publicId: string
  }>
  description?: string
  karat?: string
  weight?: number
  tags?: string[]
}

const {
  products,
  categories,
  subcategories,
  loading,
  error,
  fetchProducts,
  fetchCategories,
  fetchSubcategories,
  createProduct,
  updateProduct,
  deleteProduct,
  togglePublish
} = useProducts()

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSubcategory = ref('')
const showAddModal = ref(false)
const showEditModal = ref(false)
const showDeleteModal = ref(false)
const editingProduct = ref<Product | null>(null)
const deletingProductId = ref(0)
const isSubmitting = ref(false)
const newTag = ref('')

const form = ref({
  name: '',
  sku: '',
  price: 0,
  stockQuantity: 0,
  description: '',
  category: '' as Category | '',
  subcategory: '',
  images: [] as Array<{ file: File; preview: string }>,
  karat: '' as Karat | '',
  weight: 0,
  tags: [] as string[]
})

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    // Defensive checks to prevent undefined errors
    if (!product || !product.name || !product.sku || !product.subcategory) {
      return false
    }
    
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = !selectedCategory.value || (product.subcategory.category && product.subcategory.category.id === selectedCategory.value)
    const matchesSubcategory = !selectedSubcategory.value || product.subcategory.id === selectedSubcategory.value
    return matchesSearch && matchesCategory && matchesSubcategory
  })
})

const availableSubcategories = computed(() => {
  if (!form.value.category) return []
  return getSubcategoriesForCategory(form.value.category)
})

watch(() => form.value.category, () => {
  form.value.subcategory = ''
})

onMounted(async () => {
  await Promise.all([
    fetchProducts(),
    fetchCategories()
  ])
})

const handleCategoryChange = async () => {
  if (form.value.category) {
    await fetchSubcategories(form.value.category)
  }
}

const addTag = () => {
  if (newTag.value.trim() && !form.value.tags.includes(newTag.value.trim())) {
    form.value.tags.push(newTag.value.trim())
    newTag.value = ''
  }
}

const removeTag = (index: number) => {
  form.value.tags.splice(index, 1)
}

const resetForm = () => {
  // Clean up any existing image preview URLs
  form.value.images.forEach(image => {
    if (image.preview) {
      URL.revokeObjectURL(image.preview)
    }
  })
  
  form.value = {
    name: '',
    sku: '',
    price: 0,
    stockQuantity: 0,
    description: '',
    category: '' as Category | '',
    subcategory: '',
    images: [],
    karat: '' as Karat | '',
    weight: 0,
    tags: []
  }
  editingProduct.value = null
}

const handleSubmit = async () => {
  try {
    console.log('🚀 Form submission started')
    isSubmitting.value = true
    
    // Convert images to base64 for Cloudinary upload
    const imagePromises = form.value.images.map(imageObj => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = reject
        reader.readAsDataURL(imageObj.file)
      })
    })
    
    const base64Images = form.value.images.length > 0 ? await Promise.all(imagePromises) : []
    console.log('📷 Images processed:', base64Images.length)
    
    // For now, we'll use the enum values directly as IDs
    // In a real implementation, you'd need to either:
    // 1. Create categories/subcategories if they don't exist, or
    // 2. Map enum values to existing database IDs
    const categoryId = form.value.category || ''
    const subcategoryId = form.value.subcategory || ''
    
    const productData = {
      name: form.value.name,
      sku: form.value.sku,
      price: Number(form.value.price),
      stockQuantity: Number(form.value.stockQuantity),
      description: form.value.description,
      categoryId,
      subcategoryId,
      karat: form.value.karat,
      weight: Number(form.value.weight),
      tags: form.value.tags,
      images: base64Images
    }
    
    console.log('📝 Product data to be saved:', productData)
    console.log('✅ Enum values working correctly:')
    console.log('- Category:', form.value.category)
    console.log('- Subcategory:', form.value.subcategory) 
    console.log('- Karat:', form.value.karat)
    console.log('- Available subcategories for category:', availableSubcategories.value)
    
    console.log('🔄 About to call API...')
    if (editingProduct.value) {
      console.log('📝 Updating existing product:', editingProduct.value.id)
      await updateProduct(editingProduct.value.id, productData)
    } else {
      console.log('🆕 Creating new product')
      const result = await createProduct(productData)
      console.log('✅ Product creation result:', result)
    }
    
    console.log('🔄 Refreshing products list...')
    await fetchProducts() // Refresh the products list
    
    console.log('✅ Form submission completed successfully')
    showAddModal.value = false
    resetForm()
  } catch (err) {
    console.error('❌ Error saving product:', err)
    console.error('❌ Error details:', {
      message: err instanceof Error ? err.message : 'Unknown error',
      stack: err instanceof Error ? err.stack : undefined,
      cause: err instanceof Error ? err.cause : undefined
    })
    // Show user-friendly error message
    alert(`Error saving product: ${err instanceof Error ? err.message : 'Unknown error'}`)
  } finally {
    console.log('🏁 Form submission finished')
    isSubmitting.value = false
  }
}

const editProduct = (product: Product) => {
  editingProduct.value = product
  form.value = {
    name: product.name,
    sku: product.sku,
    price: product.price,
    stockQuantity: product.stockQuantity,
    description: product.description || '',
    category: product.subcategory.category.name as Category,
    subcategory: product.subcategory.name,
    images: [], // Don't load existing images for editing - user can upload new ones
    karat: product.karat as Karat | '',
    weight: product.weight || 0,
    tags: product.tags || []
  }
  showAddModal.value = true
}

const confirmDelete = async () => {
  if (deletingProductId.value) {
    try {
      await deleteProduct(deletingProductId.value)
      showDeleteModal.value = false
      deletingProductId.value = 0
    } catch (err) {
      console.error('Error deleting product:', err)
    }
  }
}

const handleDelete = (productId: number) => {
  deletingProductId.value = productId
  showDeleteModal.value = true
}

const handleToggleStatus = async (product: Product) => {
  try {
    await togglePublish(product.id)
  } catch (err) {
    console.error('Error toggling product status:', err)
  }
}

const getDefaultImage = (images: any[]) => {
  if (!images || images.length === 0) return null
  
  // Find the default image or use the first one
  const defaultImage = images.find(img => img.isDefault) || images[0]
  return defaultImage.url
}

const retryConnection = async () => {
  console.log('🔄 Retrying database connection...')
  await fetchProducts()
}
</script>

<style scoped>
.admin-products-page {
  min-height: 100vh;
  background-color: #f9fafb;
}

/* Add any additional styles here */
</style> 