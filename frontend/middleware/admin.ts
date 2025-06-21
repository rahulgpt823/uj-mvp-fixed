import { useAuth } from '~/composables/useAuth'
import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware(async (to) => {
    const { isAuthenticated, isAdmin, initAuth } = useAuth()

    // Initialize auth state
    await initAuth()

    // If not authenticated, redirect to login
    if (!isAuthenticated.value) {
        console.log('Not authenticated, redirecting to login')
        return navigateTo('/login')
    }

    // If authenticated but not admin, redirect to home
    if (!isAdmin.value) {
        console.log('Not admin, redirecting to home')
        return navigateTo('/')
    }

    console.log('Auth check passed, proceeding to admin route')
}) 