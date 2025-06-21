<template>
  <div class="relative">
    <!-- Profile Button -->
    <button
      @click="toggleMenu"
      class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
    >
      <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <span class="text-sm font-semibold">
          {{ userInitials }}
        </span>
      </div>
      <span class="font-medium">{{ user?.firstName }}</span>
      <svg
        :class="['w-4 h-4 transition-transform duration-200', { 'rotate-180': isOpen }]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
    >
      <!-- User Info Header -->
      <div class="p-4 border-b border-gray-100">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
            <span class="text-white font-semibold text-lg">
              {{ userInitials }}
            </span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-900 truncate">
              {{ user?.firstName }} {{ user?.lastName }}
            </p>
            <p class="text-xs text-gray-500 truncate">
              {{ user?.email || `${user?.countryCode} ${user?.mobileNumber}` }}
            </p>
          </div>
        </div>
      </div>

      <!-- Menu Items -->
      <div class="py-2">
        <!-- Account Settings -->
        <button
          @click="navigateToSettings"
          class="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-3"
        >
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="text-gray-700">Account Settings</span>
        </button>

        <!-- Favorites -->
        <button
          @click="navigateToFavorites"
          class="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-3"
        >
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span class="text-gray-700">Favorites</span>
          <span v-if="favoritesCount > 0" class="ml-auto bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
            {{ favoritesCount }}
          </span>
        </button>

        <!-- Divider -->
        <div class="border-t border-gray-100 my-2"></div>

        <!-- Logout -->
        <button
          @click="handleLogout"
          class="w-full px-4 py-3 text-left hover:bg-red-50 transition-colors duration-150 flex items-center space-x-3 text-red-600"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Logout</span>
        </button>

        <!-- Delete Account -->
        <button
          @click="showDeleteConfirm = true"
          class="w-full px-4 py-3 text-left hover:bg-red-50 transition-colors duration-150 flex items-center space-x-3 text-red-600"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span>Delete Account</span>
        </button>
      </div>
    </div>

    <!-- Delete Account Confirmation Modal -->
    <div
      v-if="showDeleteConfirm"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="showDeleteConfirm = false"
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
          <h3 class="text-lg font-semibold text-gray-900">Delete Account</h3>
        </div>
        
        <p class="text-gray-600 mb-6">
          Are you sure you want to delete your account? This action cannot be undone and will permanently remove all your data including favorites, order history, and personal information.
        </p>

        <div class="flex space-x-3">
          <button
            @click="showDeleteConfirm = false"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-150"
          >
            Cancel
          </button>
          <button
            @click="handleDeleteAccount"
            :disabled="isDeleting"
            class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isDeleting ? 'Deleting...' : 'Delete Account' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useFavoritesStore } from '~/stores/favorites'

const authStore = useAuthStore()
const favoritesStore = useFavoritesStore()

const isOpen = ref(false)
const showDeleteConfirm = ref(false)
const isDeleting = ref(false)

// Computed properties
const user = computed(() => authStore.user)
const userInitials = computed(() => {
  if (!user.value) return 'U'
  return `${user.value.firstName.charAt(0)}${user.value.lastName.charAt(0)}`.toUpperCase()
})

const favoritesCount = computed(() => favoritesStore.items.length)

// Methods
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const navigateToSettings = () => {
  closeMenu()
  navigateTo('/account/settings')
}

const navigateToFavorites = () => {
  closeMenu()
  navigateTo('/account/favorites')
}

const handleLogout = async () => {
  try {
    await authStore.logout()
    closeMenu()
    navigateTo('/')
  } catch (error) {
    console.error('Logout error:', error)
  }
}

const handleDeleteAccount = async () => {
  try {
    isDeleting.value = true
    
    // Call the delete account API
    const response = await $fetch('/api/auth/delete-account', {
      method: 'DELETE'
    })

    if (response.success) {
      // Clear local state
      await authStore.logout()
      showDeleteConfirm.value = false
      
      // Show success message
      alert('Account deleted successfully')
      
      // Redirect to home
      navigateTo('/')
    } else {
      throw new Error(response.message || 'Failed to delete account')
    }
  } catch (error: any) {
    console.error('Delete account error:', error)
    alert(error.message || 'Failed to delete account. Please try again.')
  } finally {
    isDeleting.value = false
  }
}

// Close menu when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    closeMenu()
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script> 