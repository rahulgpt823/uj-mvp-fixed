<template>
  <div 
    class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-100 hover:border-amber-200 overflow-hidden"
    @click="$emit('click')"
  >
    <div class="flex">
      <!-- Product Image -->
      <div class="flex-shrink-0 w-32 h-32 bg-gray-50">
        <img
          v-if="product.images && product.images.length > 0"
          :src="defaultImage.url"
          :alt="product.name"
          class="w-full h-full object-cover"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
          <svg class="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      <!-- Product Details -->
      <div class="flex-1 p-4 flex flex-col justify-between">
        <div>
          <!-- Category and New Badge -->
          <div class="flex items-center justify-between mb-2">
            <p class="text-xs text-amber-600 font-medium uppercase tracking-wide">
              {{ product.subcategory?.category?.name ? formatCategoryName(product.subcategory.category.name) : 'Jewelry' }}
            </p>
            <div class="flex gap-2">
              <span v-if="isNew" class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                New
              </span>
              <span v-if="product.stockQuantity <= 5 && product.stockQuantity > 0" class="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Only {{ product.stockQuantity }} left
              </span>
              <span v-else-if="product.stockQuantity === 0" class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Out of Stock
              </span>
            </div>
          </div>

          <!-- Product Name -->
          <h3 class="font-semibold text-gray-900 mb-2 text-lg hover:text-amber-600 transition-colors">
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
            <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {{ product.subcategory?.name ? formatSubcategoryName(product.subcategory.name) : '' }}
            </span>
          </div>

          <!-- Tags -->
          <div v-if="product.tags && product.tags.length > 0" class="flex flex-wrap gap-1 mb-3">
            <span 
              v-for="tag in product.tags.slice(0, 4)" 
              :key="tag" 
              class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
            >
              #{{ tag }}
            </span>
            <span v-if="product.tags.length > 4" class="text-xs text-gray-400">
              +{{ product.tags.length - 4 }} more
            </span>
          </div>
        </div>

        <!-- Price and Actions -->
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <div class="flex items-baseline space-x-2">
              <span class="text-2xl font-bold text-gray-900">
                ₹{{ (product.price || 0).toLocaleString() }}
              </span>
              <span v-if="product.salePrice && product.salePrice < product.price" class="text-sm text-gray-500 line-through">
                ₹{{ product.salePrice.toLocaleString() }}
              </span>
            </div>
            <div class="text-sm text-gray-500">
              SKU: {{ product.sku }}
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center space-x-2">
            <!-- Wishlist Button -->
            <button
              @click.stop="toggleWishlist"
              :class="[
                'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border',
                isWishlisted ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-600 border-gray-300 hover:border-red-300 hover:text-red-500'
              ]"
            >
              <svg class="w-5 h-5" :fill="isWishlisted ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <!-- Add to Cart Button -->
            <button
              @click.stop="addToCart"
              :disabled="product.stockQuantity === 0"
              class="bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors shadow-sm flex items-center space-x-2"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 4.32a1 1 0 00.95 1.68h11.46a1 1 0 00.95-1.68L16 13" />
              </svg>
              <span class="hidden sm:inline">Add to Cart</span>
            </button>

            <!-- Quick View Button -->
            <button
              @click.stop="$emit('quickView')"
              class="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Product } from '~/types/product'

interface Props {
  product: Product
}

const props = defineProps<Props>()

// Emits
const emit = defineEmits<{
  click: []
  quickView: []
}>()

// Reactive state
const isWishlisted = ref(false)

// Computed properties
const defaultImage = computed(() => {
  if (props.product.images && props.product.images.length > 0) {
    return props.product.images.find(img => img.isDefault) || props.product.images[0]
  }
  return null
})

const isNew = computed(() => {
  if (!props.product.createdAt) return false
  const createdDate = new Date(props.product.createdAt)
  const daysDifference = (Date.now() - createdDate.getTime()) / (1000 * 3600 * 24)
  return daysDifference <= 7 // Consider new if created within 7 days
})

// Methods
const toggleWishlist = () => {
  isWishlisted.value = !isWishlisted.value
  // TODO: Implement wishlist API call
  console.log('Wishlist toggled for product:', props.product.id)
}

const addToCart = () => {
  // TODO: Implement add to cart functionality
  console.log('Add to cart:', props.product.id)
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 