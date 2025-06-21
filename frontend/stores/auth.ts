import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
    User,
    AuthState,
    SendOTPRequest,
    SendOTPResponse,
    VerifyOTPRequest,
    VerifyOTPResponse,
    RegisterUserRequest,
    LoginRequest,
    AuthResponse
} from '~/types/auth'

export const useAuthStore = defineStore('auth', () => {
    // State
    const user = ref<User | null>(null)
    const isLoading = ref(false)
    const sessionToken = ref<string | null>(null)

    // Computed
    const isAuthenticated = computed(() => !!user.value && !!sessionToken.value)
    const isAdmin = computed(() => user.value?.role === 'admin')
    const isUser = computed(() => user.value?.role === 'user')
    const isLoggedIn = computed(() => !!sessionToken.value)
    const userFullName = computed(() => `${user.value?.firstName} ${user.value?.lastName}`)

    // Actions
    const sendOTP = async (mobileNumber: string, countryCode: string = '+91') => {
        try {
            isLoading.value = true

            const response = await $fetch('/api/auth/send-otp', {
                method: 'POST',
                body: {
                    mobileNumber,
                    countryCode
                }
            })

            if (response.success) {
                return { success: true, message: response.message }
            } else {
                return { success: false, message: response.message }
            }
        } catch (error: any) {
            console.error('Send OTP error:', error)
            return {
                success: false,
                message: error.message || 'Failed to send OTP'
            }
        } finally {
            isLoading.value = false
        }
    }

    const verifyOTP = async (
        mobileNumber: string,
        countryCode: string,
        otpCode: string,
        firstName?: string,
        lastName?: string,
        email?: string
    ) => {
        try {
            isLoading.value = true

            const response = await $fetch('/api/auth/verify-otp', {
                method: 'POST',
                body: {
                    mobileNumber,
                    countryCode,
                    otpCode,
                    ...(firstName && { firstName }),
                    ...(lastName && { lastName }),
                    ...(email && { email })
                }
            })

            if (response.success) {
                // Set user data
                user.value = response.user
                sessionToken.value = response.token || 'authenticated' // Use actual token from response

                return {
                    success: true,
                    message: response.message,
                    isNewUser: response.isNewUser
                }
            } else {
                return { success: false, message: response.message }
            }
        } catch (error: any) {
            console.error('Verify OTP error:', error)
            return {
                success: false,
                message: error.message || 'Failed to verify OTP'
            }
        } finally {
            isLoading.value = false
        }
    }

    const login = async (email: string, password: string) => {
        try {
            isLoading.value = true

            // This would integrate with your existing admin login system
            const response = await $fetch('/api/auth/admin-login', {
                method: 'POST',
                body: { email, password }
            })

            if (response.success) {
                user.value = response.user
                sessionToken.value = response.sessionToken
                return { success: true, message: 'Login successful' }
            } else {
                return { success: false, message: response.message }
            }
        } catch (error: any) {
            console.error('Login error:', error)
            return {
                success: false,
                message: error.message || 'Login failed'
            }
        } finally {
            isLoading.value = false
        }
    }

    const logout = async () => {
        try {
            // Clear session on server
            if (sessionToken.value) {
                await $fetch('/api/auth/logout', { method: 'POST' })
            }
        } catch (error) {
            console.error('Logout error:', error)
        } finally {
            // Clear local state
            user.value = null
            sessionToken.value = null
        }
    }

    const updateProfile = async (updates: Partial<User>) => {
        try {
            isLoading.value = true

            const response = await $fetch('/api/auth/profile', {
                method: 'PUT',
                body: updates
            })

            if (response.success) {
                user.value = { ...user.value, ...response.user }
                return { success: true, message: 'Profile updated successfully' }
            } else {
                return { success: false, message: response.message }
            }
        } catch (error: any) {
            console.error('Update profile error:', error)
            return {
                success: false,
                message: error.message || 'Failed to update profile'
            }
        } finally {
            isLoading.value = false
        }
    }

    const initAuth = async () => {
        try {
            isLoading.value = true

            // Check for existing session
            const response = await $fetch('/api/auth/session', { method: 'GET' })

            if (response.success && response.user) {
                user.value = response.user
                sessionToken.value = response.sessionToken
            }
        } catch (error) {
            console.error('Init auth error:', error)
            // Clear any invalid state
            user.value = null
            sessionToken.value = null
        } finally {
            isLoading.value = false
        }
    }

    const updateUser = async (userData: User) => {
        user.value = userData
    }

    return {
        // State
        user: readonly(user),
        isLoading: readonly(isLoading),
        sessionToken: readonly(sessionToken),

        // Computed
        isAuthenticated,
        isLoggedIn,
        isAdmin,
        isUser,
        userFullName,

        // Actions
        sendOTP,
        verifyOTP,
        login,
        logout,
        updateProfile,
        updateUser,
        initAuth
    }
}) 