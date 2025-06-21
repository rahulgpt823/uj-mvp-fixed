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
        error: null as string | null
    }),

    getters: {
        favoritesCount: (state) => state.items.length,
        isFavorite: (state) => (productId: string) => {
            return state.items.some(item => item.productId === productId)
        },
        getFavoriteById: (state) => (productId: string) => {
            return state.items.find(item => item.productId === productId)
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
                } else {
                    throw new Error(response.message || 'Failed to fetch favorites')
                }
            } catch (error: any) {
                console.error('Fetch favorites error:', error)
                this.error = error.message || 'Failed to fetch favorites'
                throw error
            } finally {
                this.loading = false
            }
        },

        async addToFavorites(productData: {
            productId: string
            productName: string
            productImage: string
            productPrice: number
            productCategory: string
        }) {
            try {
                this.loading = true
                this.error = null
                if (this.isFavorite(productData.productId)) {
                    throw new Error('Product is already in favorites')
                }
                const response = await $fetch('/api/favorites', {
                    method: 'POST',
                    body: productData
                })
                if (response.success) {
                    await this.fetchFavorites()
                } else {
                    throw new Error(response.message || 'Failed to add to favorites')
                }
            } catch (error) {
                console.error('Add to favorites error:', error)
                this.error = error.message || 'Failed to add to favorites'
                throw error
            } finally {
                this.loading = false
            }
        },

        async removeFromFavorites(productId: string) {
            try {
                this.loading = true
                this.error = null
                const response = await $fetch(`/api/favorites/${productId}`, {
                    method: 'DELETE'
                })
                if (response.success) {
                    await this.fetchFavorites()
                } else {
                    throw new Error(response.message || 'Failed to remove from favorites')
                }
            } catch (error) {
                console.error('Remove from favorites error:', error)
                this.error = error.message || 'Failed to remove from favorites'
                throw error
            } finally {
                this.loading = false
            }
        },

        async toggleFavorite(productData: {
            productId: string
            productName: string
            productImage: string
            productPrice: number
            productCategory: string
        }) {
            try {
                if (this.isFavorite(productData.productId)) {
                    await this.removeFromFavorites(productData.productId)
                } else {
                    await this.addToFavorites(productData)
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

                const response = await $fetch('/api/favorites/clear', {
                    method: 'DELETE'
                })

                if (response.success) {
                    this.items = []
                } else {
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

        // Initialize favorites on app start
        async initialize() {
            try {
                await this.fetchFavorites()
            } catch (error) {
                console.error('Initialize favorites error:', error)
                // Don't throw here as it might be a network issue
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