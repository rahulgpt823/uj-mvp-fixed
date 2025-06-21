import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore()
    // Ensure session is initialized
    if (!authStore.user) {
        await authStore.initAuth()
    }
    if (!authStore.user) {
        return navigateTo({
            path: '/login',
            query: {
                returnTo: to.fullPath
            }
        })
    }
}) 