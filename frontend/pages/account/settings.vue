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
            <h1 class="text-2xl font-bold text-gray-900">Account Settings</h1>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <nav class="space-y-1">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150',
                activeTab === tab.id
                  ? 'bg-amber-100 text-amber-900 border border-amber-200'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              ]"
            >
              <component :is="tab.icon" class="w-5 h-5 mr-3" />
              {{ tab.name }}
            </button>
          </nav>
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Profile Settings -->
          <div v-if="activeTab === 'profile'" class="bg-white rounded-lg shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-semibold text-gray-900">Profile Information</h2>
              <p class="text-sm text-gray-600 mt-1">Update your personal information</p>
            </div>
            
            <div class="p-6">
              <form @submit.prevent="updateProfile" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      v-model="profileForm.firstName"
                      type="text"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      v-model="profileForm.lastName"
                      type="text"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    v-model="profileForm.email"
                    type="email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    disabled
                  />
                  <p class="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      v-model="profileForm.mobileNumber"
                      type="tel"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      disabled
                    />
                    <p class="text-xs text-gray-500 mt-1">Mobile number cannot be changed</p>
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      v-model="profileForm.dateOfBirth"
                      type="date"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div class="flex justify-end">
                  <button
                    type="submit"
                    :disabled="isUpdating"
                    class="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {{ isUpdating ? 'Updating...' : 'Update Profile' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'

// Page meta
definePageMeta({
  middleware: 'auth'
})

const authStore = useAuthStore()

// Reactive state
const activeTab = ref('profile')
const isUpdating = ref(false)

// Form data
const profileForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  mobileNumber: '',
  dateOfBirth: ''
})

// Tab configuration
const tabs = [
  {
    id: 'profile',
    name: 'Profile',
    icon: 'UserIcon'
  }
]

// Methods
const updateProfile = async () => {
  try {
    isUpdating.value = true
    
    // Call API to update profile
    const response = await $fetch('/api/auth/update-profile', {
      method: 'PUT',
      body: {
        firstName: profileForm.firstName,
        lastName: profileForm.lastName,
        dateOfBirth: profileForm.dateOfBirth
      }
    })

    if (response.success) {
      // Update local store
      await authStore.updateUser(response.data)
      alert('Profile updated successfully')
    } else {
      throw new Error(response.message || 'Failed to update profile')
    }
  } catch (error: any) {
    console.error('Update profile error:', error)
    alert(error.message || 'Failed to update profile')
  } finally {
    isUpdating.value = false
  }
}

// Initialize form data
const initializeForm = () => {
  if (authStore.user) {
    profileForm.firstName = authStore.user.firstName || ''
    profileForm.lastName = authStore.user.lastName || ''
    profileForm.email = authStore.user.email || ''
    profileForm.mobileNumber = authStore.user.mobileNumber || ''
    profileForm.dateOfBirth = authStore.user.dateOfBirth || ''
  }
}

// Lifecycle
onMounted(() => {
  initializeForm()
})
</script> 