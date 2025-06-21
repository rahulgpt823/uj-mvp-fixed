<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click="closeModal"
  >
    <div
      class="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900">Enquire About Product</h3>
        <button
          @click="closeModal"
          class="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Product Info -->
      <div v-if="product" class="mb-6 p-4 bg-gray-50 rounded-lg">
        <div class="flex items-center space-x-4">
          <img
            :src="product.images?.[0]?.url || ''"
            :alt="product.name"
            class="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h4 class="font-medium text-gray-900">{{ product.name }}</h4>
            <p class="text-sm text-gray-600">₹{{ (product.price || 0).toLocaleString() }}</p>
          </div>
        </div>
      </div>

      <!-- Enquiry Form -->
      <form @submit.prevent="submitEnquiry" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            v-model="form.name"
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
            v-model="form.mobile"
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
            v-model="form.email"
            type="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            v-model="form.message"
            rows="4"
            required
            placeholder="Tell us about your enquiry..."
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex space-x-3 pt-4">
          <button
            type="button"
            @click="closeModal"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-150"
          >
            Cancel
          </button>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="flex-1 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Enquiry' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Product } from '~/types/product'

interface Props {
  isOpen: boolean
  product?: Product | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  submitted: [enquiry: any]
}>()

const isSubmitting = ref(false)

const form = reactive({
  name: '',
  mobile: '',
  email: '',
  message: ''
})

const closeModal = () => {
  emit('close')
  // Reset form
  form.name = ''
  form.mobile = ''
  form.email = ''
  form.message = ''
}

const submitEnquiry = async () => {
  try {
    isSubmitting.value = true

    // For now, just show success message
    // In real implementation, you'd send this to your backend
    alert('Thank you for your enquiry! We will contact you soon.')
    
    emit('submitted', {
      product: props.product,
      enquiry: { ...form }
    })
    
    closeModal()
  } catch (error) {
    console.error('Submit enquiry error:', error)
    alert('Failed to send enquiry. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script> 