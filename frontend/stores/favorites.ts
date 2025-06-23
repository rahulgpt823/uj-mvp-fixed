import { defineStore } from 'pinia'

export interface FavoriteItem {
    id: string
    userId: string
    productId: string
    productName: string
    productImage: string
    productPrice: number
    productCategory: string
    createdAt: string
    updatedAt: string
}

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        items: [] as FavoriteItem[],
        loading: false,
        error: null as string | null,
        isInitialized: false
    }),

    getters: {
        favoritesCount: (state) => state.items.length,
        isFavorite: (state) => (productId: string | number) => {
            // Ensure we compare as strings to handle both types
            const normalizedProductId = String(productId)
            return state.items.some(item => String(item.productId) === normalizedProductId)
        },
        getFavoriteById: (state) => (productId: string | number) => {
            const normalizedProductId = String(productId)
            return state.items.find(item => String(item.productId) === normalizedProductId)
        }
    },

    actions: {
        async fetchFavorites() {
            try {
                this.loading = true
                this.error = null

                const response = await $fetch('/api/favorites', {
                    method: 'GET'
                })

                if (response.success) {
                    this.items = response.data || []
                    this.isInitialized = true
                } else {
                    throw new Error(response.message || 'Failed to fetch favorites')
                }
            } catch (error: any) {
                console.error('Fetch favorites error:', error)
                this.error = error.message || 'Failed to fetch favorites'

                // If user is not authenticated, don't clear existing favorites
                // They might log back in and expect their favorites to still be there
                if (error.statusCode === 401 || error.message?.includes('Unauthorized')) {
                    console.log('User not authenticated - keeping existing favorites in memory')
                    // Don't throw error or clear favorites - just mark as not initialized
                    this.isInitialized = false
                } else {
                    // For other errors (network, server issues), throw the error
                    throw error
                }
            } finally {
                this.loading = false
            }
        },

        async addToFavorites(productData: {
            productId: string | number
            productName: string
            productImage: string
            productPrice: number
            productCategory: string
        }) {
            try {
                this.loading = true
                this.error = null

                const normalizedProductId = String(productData.productId)

                if (this.isFavorite(normalizedProductId)) {
                    throw new Error('Product is already in favorites')
                }

                // Optimistically add to state for immediate UI feedback
                const optimisticItem: FavoriteItem = {
                    id: 'temp-' + Date.now(),
                    userId: 'current-user',
                    productId: normalizedProductId,
                    productName: productData.productName,
                    productImage: productData.productImage,
                    productPrice: productData.productPrice,
                    productCategory: productData.productCategory,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                }

                this.items.push(optimisticItem)

                const response = await $fetch('/api/favorites', {
                    method: 'POST',
                    body: {
                        ...productData,
                        productId: normalizedProductId
                    }
                })

                if (response.success) {
                    // Replace optimistic item with real data
                    const index = this.items.findIndex(item => item.id === optimisticItem.id)
                    if (index >= 0) {
                        this.items[index] = response.data
                    }
                } else {
                    // Revert optimistic update
                    this.items = this.items.filter(item => item.id !== optimisticItem.id)
                    throw new Error(response.message || 'Failed to add to favorites')
                }
            } catch (error: any) {
                console.error('Add to favorites error:', error)
                this.error = error.message || 'Failed to add to favorites'
                throw error
            } finally {
                this.loading = false
            }
        },

        async removeFromFavorites(productId: string | number) {
            try {
                this.loading = true
                this.error = null

                const normalizedProductId = String(productId)

                // Optimistically remove from state for immediate UI feedback
                const originalItems = [...this.items]
                this.items = this.items.filter(item => String(item.productId) !== normalizedProductId)

                const response = await $fetch(`/api/favorites/${normalizedProductId}`, {
                    method: 'DELETE'
                })

                if (!response.success) {
                    // Revert optimistic update
                    this.items = originalItems
                    throw new Error(response.message || 'Failed to remove from favorites')
                }
            } catch (error: any) {
                console.error('Remove from favorites error:', error)
                this.error = error.message || 'Failed to remove from favorites'
                throw error
            } finally {
                this.loading = false
            }
        },

        async toggleFavorite(productData: {
            productId: string | number
            productName: string
            productImage: string
            productPrice: number
            productCategory: string
        }) {
            try {
                const normalizedProductId = String(productData.productId)

                if (this.isFavorite(normalizedProductId)) {
                    await this.removeFromFavorites(normalizedProductId)
                } else {
                    await this.addToFavorites({
                        ...productData,
                        productId: normalizedProductId
                    })
                }
            } catch (error) {
                console.error('Toggle favorite error:', error)
                throw error
            }
        },

        async clearFavorites() {
            try {
                this.loading = true
                this.error = null

                // Optimistically clear state
                const originalItems = [...this.items]
                this.items = []

                const response = await $fetch('/api/favorites/clear', {
                    method: 'DELETE'
                })

                if (!response.success) {
                    // Revert optimistic update
                    this.items = originalItems
                    throw new Error(response.message || 'Failed to clear favorites')
                }
            } catch (error: any) {
                console.error('Clear favorites error:', error)
                this.error = error.message || 'Failed to clear favorites'
                throw error
            } finally {
                this.loading = false
            }
        },

        // Initialize favorites on app start or when user logs in
        async initialize() {
            // Always try to fetch fresh favorites if user might be logged in
            try {
                await this.fetchFavorites()
            } catch (error) {
                console.error('Initialize favorites error:', error)
                // Don't clear existing favorites on initialization failure
                // This allows offline or temporarily disconnected users to keep their favorites
                this.isInitialized = false
            }
        },

        // Reset store only when explicitly needed (user switches accounts, clear auth failure)
        reset() {
            this.items = []
            this.loading = false
            this.error = null
            this.isInitialized = false
        },

        // Sync favorites with server when user logs back in
        async syncWithServer() {
            try {
                this.loading = true
                this.error = null

                const response = await $fetch('/api/favorites', {
                    method: 'GET'
                })

                if (response.success) {
                    // Merge server favorites with any local favorites
                    // In case user added favorites while offline (future feature)
                    const serverFavorites = response.data || []

                    // For now, just use server data as source of truth
                    this.items = serverFavorites
                    this.isInitialized = true

                    console.log(`Synced ${serverFavorites.length} favorites from server`)
                } else {
                    throw new Error(response.message || 'Failed to sync favorites')
                }
            } catch (error: any) {
                console.error('Sync favorites error:', error)
                this.error = error.message || 'Failed to sync favorites'

                // Don't reset on sync failure - keep existing favorites
                if (error.statusCode !== 401 && !error.message?.includes('Unauthorized')) {
                    throw error
                }
            } finally {
                this.loading = false
            }
        },

        async submitBulkEnquiry(enquiryData: {
            name: string
            mobile: string
            email?: string
            message: string
            productIds: (string | number)[]
        }) {
            try {
                const response = await $fetch('/api/enquiries/bulk', {
                    method: 'POST',
                    body: enquiryData
                })

                if (response.success) {
                    return { success: true, message: 'Bulk enquiry submitted successfully' }
                } else {
                    throw new Error(response.message || 'Failed to submit bulk enquiry')
                }
            } catch (error: any) {
                console.error('Submit bulk enquiry error:', error)
                throw new Error(error.message || 'Failed to submit bulk enquiry')
            }
        }
    }
}) 