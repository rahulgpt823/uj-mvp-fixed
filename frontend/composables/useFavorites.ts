import { useFavoritesStore } from '~/stores/favorites'
import { useAuthStore } from '~/stores/auth'

export const useFavorites = () => {
    const favoritesStore = useFavoritesStore()
    const authStore = useAuthStore()

    // Ensure favorites are synced when user is logged in
    const ensureInitialized = async () => {
        if (authStore.isLoggedIn && !favoritesStore.isInitialized) {
            await favoritesStore.syncWithServer()
        }
    }

    const toggleFavorite = async (productData: {
        productId: string | number
        productName: string
        productImage: string
        productPrice: number
        productCategory: string
    }) => {
        if (!authStore.isLoggedIn) {
            // Redirect to login but preserve the current page for return
            const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
            await navigateTo(`/login?returnTo=${encodeURIComponent(currentPath)}`)
            throw new Error('Please login to manage favorites')
        }

        await ensureInitialized()
        return await favoritesStore.toggleFavorite(productData)
    }

    const addToFavorites = async (productData: {
        productId: string | number
        productName: string
        productImage: string
        productPrice: number
        productCategory: string
    }) => {
        if (!authStore.isLoggedIn) {
            // Redirect to login but preserve the current page for return
            const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
            await navigateTo(`/login?returnTo=${encodeURIComponent(currentPath)}`)
            throw new Error('Please login to add favorites')
        }

        await ensureInitialized()
        return await favoritesStore.addToFavorites(productData)
    }

    const removeFromFavorites = async (productId: string | number) => {
        if (!authStore.isLoggedIn) {
            throw new Error('Please login to remove favorites')
        }

        await ensureInitialized()
        return await favoritesStore.removeFromFavorites(productId)
    }

    const isFavorite = (productId: string | number) => {
        // Always check local state first - this allows showing cached favorites
        // even when user is temporarily not authenticated
        return favoritesStore.isFavorite(productId)
    }

    return {
        // Store properties
        items: computed(() => favoritesStore.items),
        loading: computed(() => favoritesStore.loading),
        error: computed(() => favoritesStore.error),
        favoritesCount: computed(() => favoritesStore.favoritesCount),

        // Methods
        toggleFavorite,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        ensureInitialized,

        // Store methods
        clearFavorites: favoritesStore.clearFavorites,
        fetchFavorites: favoritesStore.fetchFavorites,
        syncWithServer: favoritesStore.syncWithServer,
        submitBulkEnquiry: favoritesStore.submitBulkEnquiry
    }
} 