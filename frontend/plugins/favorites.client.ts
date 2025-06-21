export default defineNuxtPlugin(async () => {
    const { $auth } = useNuxtApp()
    const favoritesStore = useFavoritesStore()

    // Watch for authentication changes
    watch(() => $auth?.isLoggedIn, async (isLoggedIn) => {
        if (isLoggedIn) {
            try {
                // Initialize favorites when user logs in
                await favoritesStore.initialize()
            } catch (error) {
                console.error('Failed to initialize favorites:', error)
            }
        } else {
            // Clear favorites when user logs out
            favoritesStore.$reset()
        }
    }, { immediate: true })

    // Also initialize on app start if user is already logged in
    if ($auth?.isLoggedIn) {
        try {
            await favoritesStore.initialize()
        } catch (error) {
            console.error('Failed to initialize favorites on app start:', error)
        }
    }
}) 