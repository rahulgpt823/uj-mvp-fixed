<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-4">
            <button
              @click="navigateTo('/')"
              class="text-gray-500 hover:text-gray-700 transition-colors duration-150"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 class="text-2xl font-bold text-gray-900">My Favorites</h1>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- Selection Mode Toggle -->
            <button
              @click="toggleSelectionMode"
              :class="[
                'px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-150',
                selectionMode 
                  ? 'bg-amber-100 text-amber-800 border border-amber-200' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ selectionMode ? 'Cancel Selection' : 'Select Items' }}
            </button>
            
            <!-- Bulk Actions (only show in selection mode) -->
            <div v-if="selectionMode" class="flex items-center space-x-2">
              <span class="text-sm text-gray-500">
                {{ selectedItems.length }} selected
              </span>
              <button
                v-if="selectedItems.length > 0"
                @click="showBulkEnquiryModal = true"
                class="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-150 text-sm font-medium"
              >
                Enquire About Selected
              </button>
            </div>
            
            <span class="text-sm text-gray-500">
              {{ favoritesCount }} {{ favoritesCount === 1 ? 'item' : 'items' }}
            </span>
            <button
              v-if="favoritesCount > 0"
              @click="showClearConfirm = true"
              class="text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-150"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Loading State -->
      <div v-if="favoritesStore.loading" class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>

      <!-- Empty State -->
      <div v-else-if="favoritesCount === 0" class="text-center py-12">
        <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
        <p class="text-gray-500 mb-6">Start exploring our collection and add items to your favorites!</p>
        <button
          @click="navigateTo('/')"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors duration-150"
        >
          Browse Products
        </button>
      </div>

      <!-- Favorites Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="item in favoritesStore.items"
          :key="item.id"
          class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
        >
          <!-- Selection Checkbox (only show in selection mode) -->
          <div v-if="selectionMode" class="p-3 border-b border-gray-100">
            <label class="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                :checked="selectedItems.includes(item.productId)"
                @change="toggleItemSelection(item.productId)"
                class="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
              />
              <span class="text-sm text-gray-700">Select for enquiry</span>
            </label>
          </div>

          <!-- Product Image -->
          <div class="relative aspect-square bg-gray-100">
            <img
              :src="item.productImage"
              :alt="item.productName"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            
            <!-- Remove Button -->
            <button
              @click="removeFromFavorites(item.productId)"
              class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-red-500 hover:text-red-700 hover:bg-red-50 transition-all duration-150"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Product Info -->
          <div class="p-4">
            <div class="mb-2">
              <span class="inline-block px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                {{ item.productCategory }}
              </span>
            </div>
            
            <h3 class="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
              {{ item.productName }}
            </h3>
            
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-gray-900">
                ₹{{ item.productPrice.toLocaleString() }}
              </span>
              
              <div class="flex items-center space-x-2">
                <!-- Individual Enquire Button -->
                <button
                  @click="enquireAboutItem(item)"
                  class="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors duration-150"
                >
                  Enquire
                </button>
                
                <!-- View Details Button -->
                <button
                  @click="viewProduct(item.productId)"
                  class="text-gray-600 hover:text-gray-700 text-sm font-medium transition-colors duration-150"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-if="favoritesStore.error" class="text-center py-12">
        <div class="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Something went wrong</h3>
        <p class="text-gray-500 mb-4">{{ favoritesStore.error }}</p>
        <button
          @click="refreshFavorites"
          class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-150"
        >
          Try Again
        </button>
      </div>
    </div>

    <!-- Individual Enquiry Modal -->
    <ProductEnquiryModal
      :is-open="showIndividualEnquiryModal"
      :product="selectedProduct"
      @close="showIndividualEnquiryModal = false"
      @submitted="handleIndividualEnquirySubmitted"
    />

    <!-- Bulk Enquiry Modal -->
    <div
      v-if="showBulkEnquiryModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="showBulkEnquiryModal = false"
    >
      <div
        class="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <!-- Header -->
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-900">Enquire About Multiple Items</h3>
          <button
            @click="showBulkEnquiryModal = false"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Selected Items Preview -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-3">Selected Items ({{ selectedItems.length }})</h4>
          <div class="space-y-2 max-h-32 overflow-y-auto">
            <div
              v-for="item in selectedFavorites"
              :key="item.id"
              class="flex items-center space-x-3 p-2 bg-white rounded border"
            >
              <img
                :src="item.productImage"
                :alt="item.productName"
                class="w-8 h-8 object-cover rounded"
              />
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">
                  {{ item.productName }}
                </p>
                <p class="text-xs text-gray-500">
                  ₹{{ item.productPrice.toLocaleString() }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bulk Enquiry Form -->
        <form @submit.prevent="submitBulkEnquiry" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              v-model="bulkEnquiryForm.name"
              type="text"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number *
            </label>
            <input
              v-model="bulkEnquiryForm.mobile"
              type="tel"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              v-model="bulkEnquiryForm.email"
              type="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              v-model="bulkEnquiryForm.message"
              rows="4"
              required
              placeholder="Tell us about your enquiry for these items..."
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="flex space-x-3 pt-4">
            <button
              type="button"
              @click="showBulkEnquiryModal = false"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isSubmittingBulkEnquiry"
              class="flex-1 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmittingBulkEnquiry ? 'Sending...' : 'Send Bulk Enquiry' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Clear All Confirmation Modal -->
    <div
      v-if="showClearConfirm"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="showClearConfirm = false"
    >
      <div
        class="bg-white rounded-lg p-6 max-w-md w-full mx-4"
        @click.stop
      >
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900">Clear All Favorites</h3>
        </div>
        
        <p class="text-gray-600 mb-6">
          Are you sure you want to remove all items from your favorites? This action cannot be undone.
        </p>

        <div class="flex space-x-3">
          <button
            @click="showClearConfirm = false"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-150"
          >
            Cancel
          </button>
          <button
            @click="clearAllFavorites"
            :disabled="favoritesStore.loading"
            class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ favoritesStore.loading ? 'Clearing...' : 'Clear All' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useFavoritesStore } from '~/stores/favorites'

// Page meta
definePageMeta({
  middleware: 'auth'
})

const favoritesStore = useFavoritesStore()
const showClearConfirm = ref(false)
const selectionMode = ref(false)
const selectedItems = ref([])
const showBulkEnquiryModal = ref(false)
const showIndividualEnquiryModal = ref(false)
const selectedProduct = ref(null)
const bulkEnquiryForm = ref({
  name: '',
  mobile: '',
  email: '',
  message: ''
})
const isSubmittingBulkEnquiry = ref(false)

// Computed properties
const favoritesCount = computed(() => favoritesStore.favoritesCount)
const selectedFavorites = computed(() => favoritesStore.items.filter(item => selectedItems.value.includes(item.productId)))

// Methods
const removeFromFavorites = async (productId: string) => {
  try {
    await favoritesStore.removeFromFavorites(productId)
  } catch (error: any) {
    alert(error.message || 'Failed to remove from favorites')
  }
}

const clearAllFavorites = async () => {
  try {
    await favoritesStore.clearFavorites()
    showClearConfirm.value = false
  } catch (error: any) {
    alert(error.message || 'Failed to clear favorites')
  }
}

const refreshFavorites = () => {
  favoritesStore.fetchFavorites()
}

const viewProduct = (productId: string) => {
  navigateTo(`/product/${productId}`)
}

const enquireAboutItem = (item: any) => {
  selectedProduct.value = {
    id: item.productId,
    name: item.productName,
    price: item.productPrice,
    image: item.productImage,
    category: item.productCategory
  }
  showIndividualEnquiryModal.value = true
}

const toggleSelectionMode = () => {
  selectionMode.value = !selectionMode.value
  selectedItems.value = []
}

const toggleItemSelection = (productId: string) => {
  if (selectedItems.value.includes(productId)) {
    selectedItems.value = selectedItems.value.filter(id => id !== productId)
  } else {
    selectedItems.value.push(productId)
  }
}

const submitBulkEnquiry = async () => {
  if (selectedItems.value.length === 0) {
    alert('Please select at least one item to enquire about')
    return
  }

  isSubmittingBulkEnquiry.value = true
  try {
    const response = await favoritesStore.submitBulkEnquiry({
      ...bulkEnquiryForm.value,
      productIds: selectedItems.value
    })

    if (response.success) {
      alert('Bulk enquiry submitted successfully! We will contact you soon.')
      showBulkEnquiryModal.value = false
      // Reset form
      bulkEnquiryForm.value = { name: '', mobile: '', email: '', message: '' }
      selectedItems.value = []
      selectionMode.value = false
    } else {
      alert(response.message || 'Failed to submit bulk enquiry')
    }
  } catch (error: any) {
    console.error('Bulk enquiry error:', error)
    alert(error.message || 'Failed to submit bulk enquiry')
  } finally {
    isSubmittingBulkEnquiry.value = false
  }
}

const handleIndividualEnquirySubmitted = () => {
  showIndividualEnquiryModal.value = false
  selectedProduct.value = null
}

// Lifecycle
onMounted(async () => {
  try {
    await favoritesStore.initialize()
  } catch (error) {
    console.error('Initialize favorites error:', error)
  }
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