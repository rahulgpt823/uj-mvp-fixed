<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p class="text-gray-600">Loading product details...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="min-h-screen flex items-center justify-center">
      <div class="text-center bg-white p-8 rounded-lg shadow-lg">
        <svg class="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Product not found</h3>
        <p class="text-gray-600 mb-4">{{ error }}</p>
        <button @click="router.push('/products')" class="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
          Browse All Products
        </button>
      </div>
    </div>

    <!-- Product Detail -->
    <div v-else-if="product" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <NuxtLink to="/" class="hover:text-amber-600 transition-colors">Home</NuxtLink>
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <NuxtLink to="/products" class="hover:text-amber-600 transition-colors">Products</NuxtLink>
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="text-gray-900">{{ product.name }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Images -->
        <div class="space-y-4">
          <!-- Main Image -->
          <div class="relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              v-if="currentImage"
              :src="currentImage.url"
              :alt="product.name"
              class="w-full h-full object-cover cursor-zoom-in"
              @click="openImageModal"
            />
            <div v-else class="w-full h-full flex items-center justify-center bg-gray-100">
              <div class="text-center">
                <svg class="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p class="text-gray-500">No Image Available</p>
              </div>
            </div>

            <!-- Image Navigation Arrows -->
            <button
              v-if="product.images && product.images.length > 1"
              @click="previousImage"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
            >
              <svg class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              v-if="product.images && product.images.length > 1"
              @click="nextImage"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
            >
              <svg class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Zoom Icon -->
            <div class="absolute top-4 right-4 bg-white/90 rounded-full p-2 cursor-pointer" @click="openImageModal">
              <svg class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Thumbnail Images -->
          <div v-if="product.images && product.images.length > 1" class="grid grid-cols-4 gap-2">
            <button
              v-for="(image, index) in product.images"
              :key="index"
              @click="setCurrentImage(index)"
              :class="[
                'aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200',
                index === currentImageIndex ? 'border-amber-500 ring-2 ring-amber-200' : 'border-gray-200 hover:border-amber-300'
              ]"
            >
              <img
                :src="image.url"
                :alt="`${product.name} - Image ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        <!-- Product Information -->
        <div class="space-y-6">
          <!-- Category -->
          <div class="text-sm text-amber-600 font-medium uppercase tracking-wide">
            {{ product.subcategory?.category?.name ? formatCategoryName(product.subcategory.category.name) : 'Jewelry' }}
          </div>

          <!-- Product Name -->
          <h1 class="text-3xl font-bold text-gray-900 font-playfair">
            {{ product.name }}
          </h1>

          <!-- Price -->
          <div class="flex items-baseline space-x-4">
            <span class="text-4xl font-bold text-gray-900">
              ₹{{ (product.price || 0).toLocaleString() }}
            </span>
            <span v-if="product.salePrice && product.salePrice < product.price" class="text-2xl text-gray-500 line-through">
              ₹{{ product.salePrice.toLocaleString() }}
            </span>
          </div>

          <!-- Stock Status -->
          <div class="flex items-center space-x-2">
            <div :class="[
              'w-3 h-3 rounded-full',
              product.stockQuantity > 10 ? 'bg-green-500' :
              product.stockQuantity > 0 ? 'bg-yellow-500' : 'bg-red-500'
            ]"></div>
            <span :class="[
              'text-sm font-medium',
              product.stockQuantity > 10 ? 'text-green-700' :
              product.stockQuantity > 0 ? 'text-yellow-700' : 'text-red-700'
            ]">
              {{ product.stockQuantity > 10 ? 'In Stock' :
                 product.stockQuantity > 0 ? `Only ${product.stockQuantity} left` : 'Out of Stock' }}
            </span>
          </div>

          <!-- Product Details -->
          <div class="bg-gray-50 rounded-lg p-4 space-y-3">
            <h3 class="font-semibold text-gray-900">Product Details</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div v-if="product.sku">
                <span class="text-gray-600">SKU:</span>
                <span class="font-medium text-gray-900 ml-2">{{ product.sku }}</span>
              </div>
              <div v-if="product.karat">
                <span class="text-gray-600">Karat:</span>
                <span class="font-medium text-gray-900 ml-2">{{ product.karat }}</span>
              </div>
              <div v-if="product.weight">
                <span class="text-gray-600">Weight:</span>
                <span class="font-medium text-gray-900 ml-2">{{ product.weight }}g</span>
              </div>
              <div v-if="product.subcategory?.name">
                <span class="text-gray-600">Type:</span>
                <span class="font-medium text-gray-900 ml-2">{{ formatSubcategoryName(product.subcategory.name) }}</span>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div v-if="product.description" class="space-y-2">
            <h3 class="font-semibold text-gray-900">Description</h3>
            <p class="text-gray-600 leading-relaxed">{{ product.description }}</p>
          </div>

          <!-- Tags -->
          <div v-if="product.tags && product.tags.length > 0" class="space-y-2">
            <h3 class="font-semibold text-gray-900">Tags</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in product.tags" 
                :key="tag" 
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Actions -->
          <div class="space-y-4 pt-6 border-t border-gray-200">
            <!-- Quantity Selector -->
            <div class="flex items-center space-x-4">
              <label class="text-sm font-medium text-gray-700">Quantity:</label>
              <div class="flex items-center border border-gray-300 rounded-lg">
                <button
                  @click="decreaseQuantity"
                  :disabled="quantity <= 1"
                  class="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span class="px-4 py-2 text-gray-900 font-medium border-x border-gray-300">{{ quantity }}</span>
                <button
                  @click="increaseQuantity"
                  :disabled="quantity >= product.stockQuantity"
                  class="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  +
                </button>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-4">
              <button
                @click="addToCart"
                :disabled="product.stockQuantity === 0"
                class="flex-1 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 4.32a1 1 0 00.95 1.68h11.46a1 1 0 00.95-1.68L16 13" />
                </svg>
                <span>{{ product.stockQuantity === 0 ? 'Out of Stock' : 'Add to Cart' }}</span>
              </button>

              <button
                @click="handleFavoriteClick"
                :class="[
                  'w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 border',
                  isFavorite ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-600 border-gray-300 hover:border-red-300 hover:text-red-500'
                ]"
              >
                <svg class="w-6 h-6" :fill="isFavorite ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            <!-- Buy Now Button -->
            <button
              @click="buyNow"
              :disabled="product.stockQuantity === 0"
              class="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Buy Now
            </button>
          </div>

          <!-- Additional Info -->
          <div class="bg-amber-50 rounded-lg p-4 space-y-2">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span class="text-sm text-amber-800 font-medium">Secure Purchase</span>
            </div>
            <p class="text-sm text-amber-700">100% authentic jewelry with quality guarantee</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <ImageModal 
      v-if="showImageModal" 
      :images="product?.images || []" 
      :current-index="currentImageIndex"
      @close="closeImageModal"
      @change-image="setCurrentImage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useProducts } from '~/composables/useProducts'
import { useAuthStore } from '~/stores/auth'
import { useFavoritesStore } from '~/stores/favorites'
import type { Product } from '~/types/product'

// Route and router
const route = useRoute()
const router = useRouter()

// Composables
const { products, loading, error, fetchProducts } = useProducts()

// Stores
const authStore = useAuthStore()
const favoritesStore = useFavoritesStore()

// Reactive state
const currentImageIndex = ref(0)
const quantity = ref(1)
const showImageModal = ref(false)

// Computed properties
const product = computed((): Product | null => {
  const id = parseInt(route.params.id as string)
  return products.value.find(p => p.id === id) || null
})

const currentImage = computed(() => {
  if (product.value?.images && product.value.images.length > 0) {
    return product.value.images[currentImageIndex.value] || product.value.images[0]
  }
  return null
})

const isFavorite = computed(() => {
  if (!product.value) return false
  return favoritesStore.isFavorite(product.value.id)
})

// Methods
const setCurrentImage = (index: number) => {
  currentImageIndex.value = index
}

const nextImage = () => {
  if (product.value?.images && product.value.images.length > 1) {
    currentImageIndex.value = (currentImageIndex.value + 1) % product.value.images.length
  }
}

const previousImage = () => {
  if (product.value?.images && product.value.images.length > 1) {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? product.value.images.length - 1 
      : currentImageIndex.value - 1
  }
}

const increaseQuantity = () => {
  if (product.value && quantity.value < product.value.stockQuantity) {
    quantity.value++
  }
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  // TODO: Implement add to cart functionality
  console.log('Add to cart:', product.value?.id, 'quantity:', quantity.value)
}

const buyNow = () => {
  // TODO: Implement buy now functionality
  console.log('Buy now:', product.value?.id, 'quantity:', quantity.value)
}

const handleFavoriteClick = async () => {
  if (!product.value) return
  
  if (!authStore.isLoggedIn) {
    navigateTo('/login?returnTo=' + encodeURIComponent(`/products/${product.value.id}`))
    return
  }
  
  try {
    await favoritesStore.toggleFavorite({
      productId: product.value.id,
      productName: product.value.name,
      productImage: product.value.images?.[0]?.url || '',
      productPrice: product.value.price,
      productCategory: product.value.subcategory?.category?.name || 'Jewelry'
    })
  } catch (error: any) {
    console.error('Failed to update favorite:', error)
    // Show user-friendly error message
    if (error.message?.includes('Unauthorized')) {
      navigateTo('/login?returnTo=' + encodeURIComponent(`/products/${product.value.id}`))
    } else {
      alert(error.message || 'Failed to update favorite')
    }
  }
}

const openImageModal = () => {
  showImageModal.value = true
}

const closeImageModal = () => {
  showImageModal.value = false
}

const formatCategoryName = (category: string) => {
  return category.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ')
}

const formatSubcategoryName = (subcategory: string) => {
  return subcategory.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ')
}

// Meta
definePageMeta({
  title: 'Product Details',
  description: 'View detailed information about this jewelry piece'
})

// Lifecycle
onMounted(async () => {
  if (products.value.length === 0) {
    await fetchProducts()
  }
  
  // Set default image to the one marked as default
  if (product.value?.images && product.value.images.length > 0) {
    const defaultImageIndex = product.value.images.findIndex(img => img.isDefault)
    if (defaultImageIndex !== -1) {
      currentImageIndex.value = defaultImageIndex
    }
  }
})
</script>

<style scoped>
.font-playfair {
  font-family: 'Playfair Display', serif;
}
</style> 