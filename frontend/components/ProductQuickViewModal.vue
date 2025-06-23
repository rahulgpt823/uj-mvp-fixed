<template>
  <div
    v-if="isOpen && product"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click="closeModal"
  >
    <div
      class="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-6 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900">Quick View</h3>
        <button
          @click="closeModal"
          class="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Product Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <!-- Product Images -->
        <div class="space-y-4">
          <!-- Main Image -->
          <div class="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
            <img
              v-if="currentImage"
              :src="currentImage.url"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p class="text-sm text-gray-500">No Image</p>
              </div>
            </div>

            <!-- Image Navigation Arrows -->
            <button
              v-if="product.images && product.images.length > 1"
              @click="previousImage"
              class="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200"
            >
              <svg class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              v-if="product.images && product.images.length > 1"
              @click="nextImage"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200"
            >
              <svg class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Wishlist Button -->
            <button
              @click="handleFavoriteClick"
              :class="[
                'absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md',
                isFavorite ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-600 hover:bg-white'
              ]"
            >
              <svg class="w-5 h-5" :fill="isFavorite ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <!-- Stock Badge -->
            <div v-if="product.stockQuantity <= 5 && product.stockQuantity > 0" class="absolute top-3 left-3">
              <span class="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Only {{ product.stockQuantity }} left
              </span>
            </div>
            
            <div v-else-if="product.stockQuantity === 0" class="absolute top-3 left-3">
              <span class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Out of Stock
              </span>
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
          <h1 class="text-2xl font-bold text-gray-900">
            {{ product.name }}
          </h1>

          <!-- Price -->
          <div class="flex items-baseline space-x-3">
            <span class="text-3xl font-bold text-gray-900">
              ₹{{ (product.price || 0).toLocaleString() }}
            </span>
            <span v-if="product.salePrice && product.salePrice < product.price" class="text-xl text-gray-500 line-through">
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

          <!-- Description -->
          <div v-if="product.description">
            <h3 class="font-semibold text-gray-900 mb-2">Description</h3>
            <p class="text-gray-600 text-sm">{{ product.description }}</p>
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

          <!-- Action Buttons -->
          <div class="space-y-3">
            <!-- Quantity Selector -->
            <div class="flex items-center space-x-4">
              <span class="text-sm font-medium text-gray-900">Quantity:</span>
              <div class="flex items-center border border-gray-300 rounded-lg">
                <button
                  @click="decreaseQuantity"
                  :disabled="quantity <= 1"
                  class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                  </svg>
                </button>
                <div class="w-12 h-10 flex items-center justify-center border-l border-r border-gray-300">
                  <span class="font-medium">{{ quantity }}</span>
                </div>
                <button
                  @click="increaseQuantity"
                  :disabled="quantity >= product.stockQuantity"
                  class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Action Buttons Row -->
            <div class="flex space-x-3">
              <!-- Add to Favorites Button -->
              <button
                @click="handleFavoriteClick"
                :class="[
                  'flex-1 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2',
                  isFavorite 
                    ? 'bg-red-100 text-red-700 border-2 border-red-200 hover:bg-red-200' 
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
                ]"
              >
                <svg class="w-5 h-5" :fill="isFavorite ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}</span>
              </button>

              <!-- Enquire Button -->
              <button
                @click="showEnquiryModal = true"
                class="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Enquire Now</span>
              </button>
            </div>

            <!-- View Full Details Button -->
            <button
              @click="viewFullDetails"
              class="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View Full Details
            </button>
          </div>

          <!-- Tags -->
          <div v-if="product.tags && product.tags.length > 0" class="flex flex-wrap gap-2">
            <span 
              v-for="tag in product.tags.slice(0, 5)" 
              :key="tag" 
              class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
            >
              #{{ tag }}
            </span>
            <span v-if="product.tags.length > 5" class="text-xs text-gray-400">
              +{{ product.tags.length - 5 }} more
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Enquiry Modal -->
    <ProductEnquiryModal
      :is-open="showEnquiryModal"
      :product="product"
      @close="showEnquiryModal = false"
      @submitted="handleEnquirySubmitted"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Product } from '~/types/product'
import { useAuthStore } from '~/stores/auth'
import { useFavoritesStore } from '~/stores/favorites'
import ProductEnquiryModal from './ProductEnquiryModal.vue'

interface Props {
  isOpen: boolean
  product?: Product | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  viewProduct: [productId: string | number]
}>()

// Stores
const authStore = useAuthStore()
const favoritesStore = useFavoritesStore()

// Reactive state
const currentImageIndex = ref(0)
const quantity = ref(1)
const showEnquiryModal = ref(false)

// Computed properties
const currentImage = computed(() => {
  if (props.product?.images && props.product.images.length > 0) {
    return props.product.images[currentImageIndex.value] || props.product.images[0]
  }
  return null
})

const isFavorite = computed(() => {
  if (!props.product) return false
  return favoritesStore.isFavorite(props.product.id)
})

// Methods
const setCurrentImage = (index: number) => {
  currentImageIndex.value = index
}

const nextImage = () => {
  if (props.product?.images && props.product.images.length > 1) {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.product.images.length
  }
}

const previousImage = () => {
  if (props.product?.images && props.product.images.length > 1) {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? props.product.images.length - 1 
      : currentImageIndex.value - 1
  }
}

const increaseQuantity = () => {
  if (props.product && quantity.value < props.product.stockQuantity) {
    quantity.value++
  }
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const handleFavoriteClick = async () => {
  if (!props.product) return
  
  if (!authStore.isLoggedIn) {
    navigateTo('/login?returnTo=' + encodeURIComponent(`/product/${props.product.id}`))
    return
  }
  
  try {
    await favoritesStore.toggleFavorite({
      productId: props.product.id,
      productName: props.product.name,
      productImage: props.product.images?.[0]?.url || '',
      productPrice: props.product.price,
      productCategory: props.product.subcategory?.category?.name || 'Jewelry'
    })
  } catch (error: any) {
    console.error('Failed to update favorite:', error)
    // Show user-friendly error message
    if (error.message?.includes('Unauthorized')) {
      navigateTo('/login?returnTo=' + encodeURIComponent(`/product/${props.product.id}`))
    } else {
      alert(error.message || 'Failed to update favorite')
    }
  }
}

const handleEnquirySubmitted = (enquiry: any) => {
  console.log('Enquiry submitted:', enquiry)
  showEnquiryModal.value = false
}

const viewFullDetails = () => {
  if (props.product) {
    emit('viewProduct', props.product.id)
    closeModal()
  }
}

const closeModal = () => {
  emit('close')
  // Reset state
  currentImageIndex.value = 0
  quantity.value = 1
  showEnquiryModal.value = false
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
</script>

<style scoped>
/* Modal animation */
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Apply animation to modal content */
.bg-white {
  animation: modalFadeIn 0.2s ease-out;
}
</style> 