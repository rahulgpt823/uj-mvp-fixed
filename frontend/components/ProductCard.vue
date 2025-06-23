<template>
  <div 
    class="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-amber-200"
    @click="$emit('click')"
  >
    <!-- Product Image -->
    <div class="relative aspect-square overflow-hidden bg-gray-50">
      <!-- Image Carousel -->
      <div v-if="product.images && product.images.length > 0" class="relative w-full h-full">
        <img
          :src="currentImage.url"
          :alt="product.name"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <!-- Image Navigation Dots -->
        <div v-if="product.images.length > 1" class="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <button
            v-for="(image, index) in product.images"
            :key="index"
            @click.stop="setCurrentImage(index)"
            :class="[
              'w-2 h-2 rounded-full transition-all duration-200',
              index === currentImageIndex ? 'bg-white shadow-md' : 'bg-white/60 hover:bg-white/80'
            ]"
          />
        </div>

        <!-- Quick View Overlay -->
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div class="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button 
              @click.stop="$emit('quickView')"
              class="bg-white text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg hover:bg-gray-50 transition-colors"
            >
              Quick View
            </button>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          v-if="product.images.length > 1"
          @click.stop="previousImage"
          class="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md"
        >
          <svg class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          v-if="product.images.length > 1"
          @click.stop="nextImage"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md"
        >
          <svg class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Placeholder Image -->
      <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div class="text-center">
          <svg class="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="text-xs text-gray-500">No Image</p>
        </div>
      </div>

      <!-- Wishlist Button -->
      <button
        @click.stop="handleFavoriteClick"
        :class="[
          'absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-md',
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

      <!-- New Badge -->
      <div v-if="isNew" class="absolute top-3 left-3">
        <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          New
        </span>
      </div>
    </div>

    <!-- Product Info -->
    <div class="p-4">
      <!-- Category -->
      <p class="text-xs text-amber-600 font-medium uppercase tracking-wide mb-1">
        {{ product.subcategory?.category?.name ? formatCategoryName(product.subcategory.category.name) : 'Jewelry' }}
      </p>

      <!-- Product Name -->
      <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
        {{ product.name }}
      </h3>

      <!-- Description -->
      <p v-if="product.description" class="text-sm text-gray-600 line-clamp-2 mb-3">
        {{ product.description }}
      </p>

      <!-- Product Details -->
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-if="product.karat" class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
          {{ product.karat }}
        </span>
        <span v-if="product.weight" class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {{ product.weight }}g
        </span>
      </div>

      <!-- Price and Actions -->
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <div class="flex items-baseline space-x-2">
            <span class="text-xl font-bold text-gray-900">
              ₹{{ (product.price || 0).toLocaleString() }}
            </span>
            <span v-if="product.salePrice && product.salePrice < product.price" class="text-sm text-gray-500 line-through">
              ₹{{ product.salePrice.toLocaleString() }}
            </span>
          </div>
          <div class="text-xs text-gray-500">
            {{ product.subcategory?.name ? formatSubcategoryName(product.subcategory.name) : '' }}
          </div>
        </div>

        <!-- Enquire Button -->
        <button
          @click.stop="showEnquiryModal = true"
          class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm flex items-center space-x-2"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>Enquire</span>
        </button>
      </div>

      <!-- Tags -->
      <div v-if="product.tags && product.tags.length > 0" class="flex flex-wrap gap-1 mt-3">
        <span 
          v-for="tag in product.tags.slice(0, 3)" 
          :key="tag" 
          class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
        >
          #{{ tag }}
        </span>
        <span v-if="product.tags.length > 3" class="text-xs text-gray-400">
          +{{ product.tags.length - 3 }} more
        </span>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { Product } from '~/types/product'
import { useAuthStore } from '~/stores/auth'
import { useFavoritesStore } from '~/stores/favorites'
import ProductEnquiryModal from './ProductEnquiryModal.vue'

interface Props {
  product: Product
}

const props = defineProps<Props>()

// Emits
const emit = defineEmits<{
  click: []
  quickView: []
}>()

// Stores
const authStore = useAuthStore()
const favoritesStore = useFavoritesStore()

// Reactive state
const currentImageIndex = ref(0)
const autoSlideTimer = ref<NodeJS.Timeout | null>(null)
const showEnquiryModal = ref(false)

// Computed properties
const currentImage = computed(() => {
  if (props.product.images && props.product.images.length > 0) {
    return props.product.images[currentImageIndex.value] || props.product.images[0]
  }
  return null
})

const isNew = computed(() => {
  if (!props.product.createdAt) return false
  const createdDate = new Date(props.product.createdAt)
  const daysDifference = (Date.now() - createdDate.getTime()) / (1000 * 3600 * 24)
  return daysDifference <= 7 // Consider new if created within 7 days
})

const isFavorite = computed(() => favoritesStore.isFavorite(props.product.id))

// Methods
const setCurrentImage = (index: number) => {
  currentImageIndex.value = index
  resetAutoSlide()
}

const nextImage = () => {
  if (props.product.images && props.product.images.length > 1) {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.product.images.length
    resetAutoSlide()
  }
}

const previousImage = () => {
  if (props.product.images && props.product.images.length > 1) {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? props.product.images.length - 1 
      : currentImageIndex.value - 1
    resetAutoSlide()
  }
}

const startAutoSlide = () => {
  if (props.product.images && props.product.images.length > 1) {
    autoSlideTimer.value = setInterval(() => {
      nextImage()
    }, 4000) // Change image every 4 seconds
  }
}

const stopAutoSlide = () => {
  if (autoSlideTimer.value) {
    clearInterval(autoSlideTimer.value)
    autoSlideTimer.value = null
  }
}

const resetAutoSlide = () => {
  stopAutoSlide()
  startAutoSlide()
}

const handleFavoriteClick = async () => {
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
  // You can add additional logic here like tracking analytics
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

// Lifecycle
onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 