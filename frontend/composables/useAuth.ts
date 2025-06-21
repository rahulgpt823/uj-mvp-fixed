import type { AuthUser } from '@supabase/supabase-js'
import { ref, computed } from 'vue'
import { useSupabase } from './useSupabase'

export const useAuth = () => {
    const supabase = useSupabase()
    const user = ref<AuthUser | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    const isAuthenticated = computed(() => !!user.value)
    const isAdmin = computed(() => user.value?.user_metadata?.role === 'ADMIN')

    // Login with email and password
    const login = async (email: string, password: string) => {
        try {
            loading.value = true
            error.value = null
            console.log('Attempting login with:', { email })

            const { data, error: authError } = await supabase.auth.signInWithPassword({
                email,
                password
            })

            if (authError) {
                console.error('Login error:', authError)
                throw authError
            }

            console.log('Login successful:', data)
            user.value = data.user
            return data
        } catch (e: any) {
            console.error('Login error caught:', e)
            error.value = e.message || 'An error occurred during login'
            throw e
        } finally {
            loading.value = false
        }
    }

    // Sign up new user
    const signup = async (email: string, password: string) => {
        try {
            loading.value = true
            error.value = null
            const { data, error: authError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        role: 'CUSTOMER' // Default role for new users
                    }
                }
            })
            if (authError) throw authError
            return data
        } catch (e: any) {
            error.value = e.message
            throw e
        } finally {
            loading.value = false
        }
    }

    // Logout user
    const logout = async () => {
        try {
            loading.value = true
            error.value = null
            const { error: authError } = await supabase.auth.signOut()
            if (authError) throw authError
            user.value = null
        } catch (e: any) {
            error.value = e.message
            throw e
        } finally {
            loading.value = false
        }
    }

    // Initialize auth state
    const initAuth = async () => {
        try {
            console.log('Initializing auth state...')
            const { data: { session } } = await supabase.auth.getSession()
            console.log('Current session:', session)
            user.value = session?.user || null

            // Set up auth state change listener
            const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
                console.log('Auth state changed:', { event: _event, session })
                user.value = session?.user || null
            })

            return () => {
                subscription.unsubscribe()
            }
        } catch (e) {
            console.error('Auth initialization error:', e)
            error.value = 'Failed to initialize authentication'
            throw e
        }
    }

    // Reset password
    const resetPassword = async (email: string) => {
        try {
            loading.value = true
            error.value = null
            const { error: authError } = await supabase.auth.resetPasswordForEmail(email)
            if (authError) throw authError
        } catch (e: any) {
            error.value = e.message
            throw e
        } finally {
            loading.value = false
        }
    }

    return {
        user,
        loading,
        error,
        isAuthenticated,
        isAdmin,
        login,
        signup,
        logout,
        initAuth,
        resetPassword
    }
} 