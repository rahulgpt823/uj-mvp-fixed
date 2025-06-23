<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-amber-50 to-yellow-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 font-playfair mb-4">
            Exquisite Jewelry Collection
          </h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted jewelry pieces, each telling a unique story of elegance and craftsmanship
          </p>
        </div>
      </div>
    </section>

    <!-- Filters & Search -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Search -->
          <div class="md:col-span-1">
            <label class="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search jewelry..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Category Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              v-model="selectedCategory"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              <option v-for="category in availableCategories" :key="category" :value="category">
                {{ formatCategoryName(category) }}
              </option>
            </select>
          </div>

          <!-- Price Range -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <select
              v-model="selectedPriceRange"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Any Price</option>
              <option value="0-10000">Under ₹10,000</option>
              <option value="10000-25000">₹10,000 - ₹25,000</option>
              <option value="25000-50000">₹25,000 - ₹50,000</option>
              <option value="50000-100000">₹50,000 - ₹1,00,000</option>
              <option value="100000-999999">Above ₹1,00,000</option>
            </select>
          </div>

          <!-- Sort -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select
              v-model="sortBy"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        <!-- Active Filters -->
        <div v-if="hasActiveFilters" class="mt-4 flex flex-wrap gap-2">
          <span class="text-sm text-gray-600">Active filters:</span>
          <span v-if="selectedCategory" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            {{ formatCategoryName(selectedCategory) }}
            <button @click="selectedCategory = ''" class="ml-1 text-amber-600 hover:text-amber-800">×</button>
          </span>
          <span v-if="selectedPriceRange" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            {{ formatPriceRange(selectedPriceRange) }}
            <button @click="selectedPriceRange = ''" class="ml-1 text-amber-600 hover:text-amber-800">×</button>
          </span>
          <button @click="clearFilters" class="text-xs text-amber-600 hover:text-amber-800 underline">
            Clear all
          </button>
        </div>
      </div>

      <!-- Results Summary -->
      <div class="flex justify-between items-center mb-6">
        <div class="text-sm text-gray-600">
          Showing {{ filteredProducts.length }} of {{ products.length }} products
        </div>
        <div class="flex space-x-2">
          <!-- View Toggle -->
          <button
            @click="viewMode = 'grid'"
            :class="[
              'p-2 rounded-lg',
              viewMode === 'grid' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            @click="viewMode = 'list'"
            :class="[
              'p-2 rounded-lg',
              viewMode === 'list' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-amber-500 transition ease-in-out duration-150">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading jewelry...
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
          <svg class="mx-auto h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <h3 class="mt-4 text-lg font-medium text-red-900">Unable to load products</h3>
          <p class="mt-2 text-sm text-red-700">{{ error }}</p>
          <button @click="fetchProducts" class="mt-4 bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded-lg transition-colors">
            Try Again
          </button>
        </div>
      </div>

      <!-- No Results -->
      <div v-else-if="filteredProducts.length === 0 && !loading" class="text-center py-12">
        <svg class="mx-auto h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-gray-900">No jewelry found</h3>
        <p class="mt-2 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
        <button @click="clearFilters" class="mt-4 bg-amber-100 hover:bg-amber-200 text-amber-800 px-4 py-2 rounded-lg transition-colors">
          Clear Filters
        </button>
      </div>

      <!-- Products Grid -->
      <div v-else-if="viewMode === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @click="goToProduct(product.id)"
          @quickView="openQuickView(product)"
        />
      </div>

      <!-- Products List -->
      <div v-else class="space-y-4">
        <ProductListItem
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @click="goToProduct(product.id)"
          @quickView="openQuickView(product)"
        />
      </div>
    </section>

    <!-- Quick View Modal -->
    <ProductQuickViewModal
      :is-open="showQuickViewModal"
      :product="selectedProduct"
      @close="closeQuickView"
      @viewProduct="handleViewProduct"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useProducts } from '~/composables/useProducts'
import type { Product } from '~/types/product'
import ProductQuickViewModal from '~/components/ProductQuickViewModal.vue'

// Meta
definePageMeta({
  title: 'Jewelry Collection',
  description: 'Explore our exquisite collection of handcrafted jewelry'
})

// Composables
const { products, loading, error, fetchProducts } = useProducts()
const router = useRouter()

// Reactive state
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedPriceRange = ref('')
const sortBy = ref('newest')
const viewMode = ref('grid')
const showQuickViewModal = ref(false)
const selectedProduct = ref<Product | null>(null)

// Computed properties
const availableCategories = computed(() => {
  const categories = new Set()
  products.value.forEach(product => {
    if (product.subcategory?.category?.name) {
      categories.add(product.subcategory.category.name)
    }
  })
  return Array.from(categories) as string[]
})

const hasActiveFilters = computed(() => {
  return selectedCategory.value || selectedPriceRange.value || searchQuery.value
})

const filteredProducts = computed(() => {
  let filtered = [...products.value]

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description?.toLowerCase().includes(query) ||
      product.tags?.some(tag => tag.toLowerCase().includes(query))
    )
  }

  // Category filter
  if (selectedCategory.value) {
    filtered = filtered.filter(product => 
      product.subcategory?.category?.name === selectedCategory.value
    )
  }

  // Price range filter
  if (selectedPriceRange.value) {
    const [min, max] = selectedPriceRange.value.split('-').map(Number)
    filtered = filtered.filter(product => {
      const price = product.price || 0
      if (max) {
        return price >= min && price <= max
      } else {
        return price >= min
      }
    })
  }

  // Only show published products
  filtered = filtered.filter(product => product.isPublished)

  // Sort
  switch (sortBy.value) {
    case 'newest':
      filtered.sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime())
      break
    case 'oldest':
      filtered.sort((a, b) => new Date(a.createdAt || '').getTime() - new Date(b.createdAt || '').getTime())
      break
    case 'price-low':
      filtered.sort((a, b) => (a.price || 0) - (b.price || 0))
      break
    case 'price-high':
      filtered.sort((a, b) => (b.price || 0) - (a.price || 0))
      break
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'name-desc':
      filtered.sort((a, b) => b.name.localeCompare(a.name))
      break
  }

  return filtered
})

// Methods
const formatCategoryName = (category: string) => {
  return category.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ')
}

const formatPriceRange = (range: string) => {
  const [min, max] = range.split('-').map(Number)
  if (max) {
    return `₹${min.toLocaleString()} - ₹${max.toLocaleString()}`
  } else {
    return `Above ₹${min.toLocaleString()}`
  }
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  selectedPriceRange.value = ''
}

const goToProduct = (productId: number) => {
  router.push(`/products/${productId}`)
}

const openQuickView = (product: Product) => {
  selectedProduct.value = product
  showQuickViewModal.value = true
}

const closeQuickView = () => {
  showQuickViewModal.value = false
  selectedProduct.value = null
}

const handleViewProduct = (productId: string | number) => {
  router.push(`/products/${productId}`)
}

// Lifecycle
onMounted(() => {
  fetchProducts()
})

// Watch for URL query parameters
watch(() => useRoute().query, (query) => {
  if (query.category) selectedCategory.value = query.category as string
  if (query.search) searchQuery.value = query.search as string
  if (query.sort) sortBy.value = query.sort as string
}, { immediate: true })
</script>

<style scoped>
.font-playfair {
  font-family: 'Playfair Display', serif;
}
</style> 