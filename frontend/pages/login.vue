<template>
  <div class="login-page">
    <div class="login-container">
      <!-- Header -->
      <div class="login-header">
        <NuxtLink to="/" class="logo-link">
          <img src="/images/uj-logo.png" alt="Urvashi Jewellers" class="logo" />
        </NuxtLink>
        <h1>{{ isSignup ? 'Create Account' : 'Welcome Back' }}</h1>
        <p>{{ isSignup ? 'Join Urvashi Jewellers to explore our exclusive collection' : 'Sign in to your account to continue' }}</p>
      </div>

      <!-- Auth Type Toggle -->
      <div class="auth-type-toggle">
        <button 
          @click="authType = 'user'" 
          :class="['toggle-btn', { active: authType === 'user' }]"
        >
          <span class="material-icons">person</span>
          Customer
        </button>
        <button 
          @click="authType = 'admin'" 
          :class="['toggle-btn', { active: authType === 'admin' }]"
        >
          <span class="material-icons">admin_panel_settings</span>
          Admin
        </button>
      </div>

      <!-- Admin Login Form -->
      <form v-if="authType === 'admin'" @submit.prevent="handleAdminLogin" class="auth-form">
        <div class="form-group">
          <label for="adminEmail">Email Address</label>
          <input
            id="adminEmail"
            v-model="adminEmail"
            type="email"
            required
            placeholder="Enter your email"
            :disabled="isLoggingIn"
          />
        </div>

        <div class="form-group">
          <label for="adminPassword">Password</label>
          <input
            id="adminPassword"
            v-model="adminPassword"
            type="password"
            required
            placeholder="Enter your password"
            :disabled="isLoggingIn"
          />
        </div>

        <div class="form-actions">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe" :disabled="isLoggingIn" />
            <span>Remember me</span>
          </label>
          <button type="button" @click="handleForgotPassword" class="forgot-password" :disabled="isLoggingIn">
            Forgot Password?
          </button>
        </div>

        <button type="submit" class="submit-btn" :disabled="isLoggingIn">
          <span v-if="isLoggingIn" class="material-icons loading">sync</span>
          <span v-else>Sign In</span>
        </button>

        <p v-if="localError || error" class="error-message">
          {{ localError || error }}
        </p>
      </form>

      <!-- User OTP Authentication -->
      <div v-else class="user-auth">
        <!-- Step 1: Phone Number Input -->
        <form v-if="otpStep === 'phone'" @submit.prevent="handleSendOTP" class="auth-form">
          <div class="form-group">
            <label for="phone">Mobile Number</label>
            <div class="phone-input-group">
              <select v-model="selectedCountryCode" class="country-code-select">
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
              </select>
              <input
                id="phone"
                v-model="phoneNumber"
                type="tel"
                required
                placeholder="Enter your mobile number"
                :disabled="isSendingOTP"
                class="phone-input"
              />
            </div>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSendingOTP">
            <span v-if="isSendingOTP" class="material-icons loading">sync</span>
            <span v-else>{{ isSignup ? 'Create Account' : 'Sign In' }}</span>
          </button>

          <p v-if="otpError" class="error-message">
            {{ otpError }}
          </p>
        </form>

        <!-- Step 2: OTP Verification -->
        <form v-else @submit.prevent="handleVerifyOTP" class="auth-form">
          <div class="otp-header">
            <h3>Verify Your Number</h3>
            <p>We've sent a 6-digit code to <strong>{{ selectedCountryCode }}{{ phoneNumber }}</strong></p>
          </div>

          <div class="form-group">
            <label for="otp">Enter OTP</label>
            <input
              id="otp"
              v-model="otpCode"
              type="text"
              required
              placeholder="Enter 6-digit code"
              :disabled="isVerifyingOTP"
              maxlength="6"
              pattern="[0-9]{6}"
              class="otp-input"
            />
          </div>

          <!-- Registration fields (only show for signup) -->
          <template v-if="isSignup">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input
                id="firstName"
                v-model="firstName"
                type="text"
                required
                placeholder="Enter your first name"
                :disabled="isVerifyingOTP"
              />
            </div>

            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input
                id="lastName"
                v-model="lastName"
                type="text"
                required
                placeholder="Enter your last name"
                :disabled="isVerifyingOTP"
              />
            </div>

            <div class="form-group">
              <label for="userEmail">Email Address (Optional)</label>
              <input
                id="userEmail"
                v-model="userEmail"
                type="email"
                placeholder="Enter your email address"
                :disabled="isVerifyingOTP"
              />
            </div>
          </template>

          <div class="otp-actions">
            <button type="button" @click="resendOTP" class="resend-btn" :disabled="isResendingOTP || resendCooldown > 0">
              <span v-if="isResendingOTP" class="material-icons loading">sync</span>
              <span v-else>
                {{ resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend Code' }}
              </span>
            </button>
            <button type="button" @click="backToPhone" class="back-btn">
              Change Number
            </button>
          </div>

          <button type="submit" class="submit-btn" :disabled="isVerifyingOTP">
            <span v-if="isVerifyingOTP" class="material-icons loading">sync</span>
            <span v-else>{{ isSignup ? 'Create Account' : 'Verify & Sign In' }}</span>
          </button>

          <p v-if="otpError" class="error-message">
            {{ otpError }}
          </p>
        </form>
      </div>

      <!-- Auth Mode Toggle -->
      <div class="auth-mode-toggle">
        <p>{{ isSignup ? 'Already have an account?' : "Don't have an account?" }}</p>
        <button @click="toggleAuthMode" class="mode-btn">
          {{ isSignup ? 'Sign In' : 'Create Account' }}
        </button>
      </div>

      <!-- Terms and Privacy -->
      <div class="terms-privacy">
        <p>By continuing, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useAuthStore } from '~/stores/auth'
import { useRoute, useRouter } from '#app'

const route = useRoute()
const router = useRouter()
const { login, loading, error, initAuth, isAuthenticated, isAdmin } = useAuth()
const authStore = useAuthStore()

// Auth mode (signup vs login)
const isSignup = ref(false)

// Auth type (admin vs user)
const authType = ref<'admin' | 'user'>('user')

// Admin login
const adminEmail = ref('')
const adminPassword = ref('')
const rememberMe = ref(false)
const isLoggingIn = ref(false)
const localError = ref<string | null>(null)

// User OTP authentication
const otpStep = ref<'phone' | 'otp'>('phone')
const selectedCountryCode = ref('+91')
const phoneNumber = ref('')
const otpCode = ref('')
const firstName = ref('')
const lastName = ref('')
const userEmail = ref('')
const isSendingOTP = ref(false)
const isVerifyingOTP = ref(false)
const isResendingOTP = ref(false)
const otpError = ref<string | null>(null)
const resendCooldown = ref(0)

onMounted(async () => {
  console.log('Login page mounted')
  try {
    await initAuth()
    // If user is already authenticated, redirect based on role
    if (isAuthenticated.value) {
      console.log('User is already authenticated:', { isAdmin: isAdmin.value })
      if (isAdmin.value) {
        await router.push('/admin/dashboard')
      } else {
        await router.push('/')
      }
    }
  } catch (err) {
    console.error('Error during auth initialization:', err)
    localError.value = 'Failed to initialize authentication'
  }
})

// Toggle between signup and login
const toggleAuthMode = () => {
  isSignup.value = !isSignup.value
  // Reset form state
  otpStep.value = 'phone'
  otpCode.value = ''
  otpError.value = null
  firstName.value = ''
  lastName.value = ''
  userEmail.value = ''
}

// Admin login handler
const handleAdminLogin = async () => {
  if (isLoggingIn.value) return
  
  try {
    console.log('Starting admin login process')
    isLoggingIn.value = true
    localError.value = null
    
    const result = await login(adminEmail.value, adminPassword.value)
    console.log('Admin login successful:', result)
    
    // Wait for auth state to be updated
    await initAuth()
    
    // Check role and redirect
    if (isAdmin.value) {
      console.log('User is admin, redirecting to admin dashboard')
      await router.push('/admin/dashboard')
    } else {
      console.log('User is not admin, redirecting to home')
      await router.push('/')
    }
  } catch (err: any) {
    console.error('Admin login error:', err)
    localError.value = err.message || 'Failed to login. Please try again.'
  } finally {
    isLoggingIn.value = false
  }
}

// User OTP handlers
const handleSendOTP = async () => {
  if (isSendingOTP.value) return
  
  try {
    isSendingOTP.value = true
    otpError.value = null
    
    const response = await authStore.sendOTP(
      phoneNumber.value,
      selectedCountryCode.value
    )
    
    if (response.success) {
      console.log('OTP sent successfully')
      otpStep.value = 'otp'
      startResendCooldown()
    } else {
      otpError.value = response.message
    }
  } catch (err: any) {
    console.error('Send OTP error:', err)
    otpError.value = err.message || 'Failed to send OTP. Please try again.'
  } finally {
    isSendingOTP.value = false
  }
}

const handleVerifyOTP = async () => {
  if (isVerifyingOTP.value) return
  
  try {
    isVerifyingOTP.value = true
    otpError.value = null
    
    const response = await authStore.verifyOTP(
      phoneNumber.value,
      selectedCountryCode.value,
      otpCode.value,
      isSignup.value ? firstName.value : undefined,
      isSignup.value ? lastName.value : undefined,
      isSignup.value ? userEmail.value : undefined
    )
    
    if (response.success) {
      console.log('OTP verification successful, redirecting...')
      const returnTo = route.query.returnTo?.toString()
      // Basic validation to prevent open redirects
      if (returnTo && returnTo.startsWith('/')) {
        await router.push(returnTo)
      } else {
        await router.push('/')
      }
    } else {
      otpError.value = response.message
    }
  } catch (err: any) {
    console.error('Verify OTP error:', err)
    otpError.value = err.message || 'Failed to verify OTP. Please try again.'
  } finally {
    isVerifyingOTP.value = false
  }
}

const resendOTP = async () => {
  if (isResendingOTP.value || resendCooldown.value > 0) return
  
  try {
    isResendingOTP.value = true
    otpError.value = null
    
    const response = await authStore.sendOTP(
      phoneNumber.value,
      selectedCountryCode.value
    )
    
    if (response.success) {
      console.log('OTP resent successfully')
      startResendCooldown()
    } else {
      otpError.value = response.message
    }
  } catch (err: any) {
    console.error('Resend OTP error:', err)
    otpError.value = err.message || 'Failed to resend OTP. Please try again.'
  } finally {
    isResendingOTP.value = false
  }
}

const backToPhone = () => {
  otpStep.value = 'phone'
  otpCode.value = ''
  otpError.value = null
}

const startResendCooldown = () => {
  resendCooldown.value = 60 // 60 seconds
  const interval = setInterval(() => {
    resendCooldown.value--
    if (resendCooldown.value <= 0) {
      clearInterval(interval)
    }
  }, 1000)
}

const handleForgotPassword = () => {
  router.push('/forgot-password')
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
}

.login-container {
  background-color: white;
  border-radius: 1.5rem;
  padding: 3rem;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Header */
.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo-link {
  display: inline-block;
  margin-bottom: 1.5rem;
}

.logo {
  height: 60px;
  width: auto;
}

.login-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.login-header p {
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5;
}

/* Auth Type Toggle */
.auth-type-toggle {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background-color: #f3f4f6;
  padding: 0.5rem;
  border-radius: 0.75rem;
}

.toggle-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: none;
  color: #6b7280;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.toggle-btn.active {
  background-color: var(--primary);
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.toggle-btn:hover:not(.active) {
  background-color: #e5e7eb;
}

/* Form Styles */
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}

.form-group input, .form-group select {
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.2s;
  background-color: white;
}

.form-group input:focus, .form-group select:focus {
  border-color: var(--primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
}

.form-group input:disabled, .form-group select:disabled {
  background-color: #f9fafb;
  color: #9ca3af;
  cursor: not-allowed;
}

/* Phone Input Group */
.phone-input-group {
  display: flex;
  gap: 0.5rem;
}

.country-code-select {
  width: 100px;
  flex-shrink: 0;
}

.phone-input {
  flex: 1;
}

/* OTP Input */
.otp-input {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.25rem;
}

/* OTP Header */
.otp-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background-color: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.otp-header h3 {
  color: var(--primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.otp-header p {
  color: #64748b;
  font-size: 0.875rem;
  margin: 0;
}

/* Form Actions */
.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.forgot-password {
  background: none;
  border: none;
  color: var(--primary);
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
}

.forgot-password:hover {
  color: var(--primary-dark);
}

/* Submit Button */
.submit-btn {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* OTP Actions */
.otp-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.resend-btn, .back-btn {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: none;
  color: var(--primary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.resend-btn:hover:not(:disabled), .back-btn:hover {
  background-color: rgba(var(--primary-rgb), 0.05);
  border-color: var(--primary);
}

.resend-btn:disabled {
  color: #9ca3af;
  cursor: not-allowed;
  border-color: #e5e7eb;
}

/* Auth Mode Toggle */
.auth-mode-toggle {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.auth-mode-toggle p {
  color: #6b7280;
  margin-bottom: 0.75rem;
}

.mode-btn {
  background: none;
  border: none;
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  font-size: 1rem;
}

.mode-btn:hover {
  color: var(--primary-dark);
}

/* Terms and Privacy */
.terms-privacy {
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.terms-privacy p {
  color: #9ca3af;
  font-size: 0.75rem;
  line-height: 1.4;
}

.terms-privacy a {
  color: var(--primary);
  text-decoration: none;
}

.terms-privacy a:hover {
  text-decoration: underline;
}

/* Loading Animation */
.loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Error Message */
.error-message {
  color: #dc2626;
  font-size: 0.875rem;
  text-align: center;
  padding: 0.75rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

/* Responsive Design */
@media (max-width: 640px) {
  .login-container {
    padding: 2rem;
    margin: 1rem;
  }
  
  .auth-type-toggle {
    flex-direction: column;
  }
  
  .otp-actions {
    flex-direction: column;
  }
  
  .form-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style> 