export interface User {
    id: string
    firstName: string
    lastName: string
    mobileNumber: string
    countryCode: string
    email?: string
    isVerified: boolean
    isActive: boolean
    role: string
    createdAt: string
    updatedAt: string
}

export interface OTPVerification {
    id: string
    mobileNumber: string
    countryCode: string
    otpCode: string
    attempts: number
    maxAttempts: number
    expiresAt: string
    isVerified: boolean
    isUsed: boolean
    purpose: 'login' | 'registration' | 'password_reset'
    createdAt: string
}

export interface UserSession {
    id: string
    userId: string
    sessionToken: string
    deviceInfo?: any
    ipAddress?: string
    expiresAt: string
    isActive: boolean
    createdAt: string
    lastAccessedAt: string
}

export interface CartItem {
    id: string
    userId: string
    productId: number
    quantity: number
    addedAt: string
    updatedAt: string
    product?: any // Will be populated with product details
}

export interface FavoriteItem {
    id: string
    userId: string
    productId: number
    addedAt: string
    product?: any // Will be populated with product details
}

export interface QuotationRequest {
    id: string
    userId: string
    products: Array<{
        productId: number
        quantity: number
        notes?: string
    }>
    message?: string
    status: 'pending' | 'processing' | 'quoted' | 'accepted' | 'rejected'
    adminNotes?: string
    quotedAmount?: number
    quotedAt?: string
    expiresAt?: string
    createdAt: string
    updatedAt: string
}

export interface RateLimit {
    id: string
    identifier: string
    action: 'otp_request' | 'login_attempt'
    attempts: number
    windowStart: string
    blockedUntil?: string
    createdAt: string
    updatedAt: string
}

// Request/Response types
export interface SendOTPRequest {
    mobileNumber: string
    countryCode: string
    purpose?: 'login' | 'registration'
}

export interface SendOTPResponse {
    success: boolean
    message: string
    expiresAt?: string
    attemptsLeft?: number
    blockedUntil?: string
    purpose?: 'login' | 'registration'
    otp?: string // Only in development
}

export interface VerifyOTPRequest {
    mobileNumber: string
    countryCode: string
    otpCode: string
    purpose?: 'login' | 'registration'
    // For registration
    firstName?: string
    lastName?: string
    email?: string
}

export interface VerifyOTPResponse {
    success: boolean
    message: string
    user?: User
    token?: string
    isNewUser?: boolean
    attemptsLeft?: number
}

export interface RegisterUserRequest {
    firstName: string
    lastName: string
    mobileNumber: string
    countryCode: string
    email?: string
    otpCode: string
}

export interface LoginRequest {
    mobileNumber: string
    countryCode: string
    otpCode: string
}

export interface AuthResponse {
    success: boolean
    message: string
    user?: User
    token?: string
}

// Validation types
export interface PhoneValidation {
    isValid: boolean
    formattedNumber: string
    countryCode: string
    nationalNumber: string
    country?: string
    error?: string
}

// Store types
export interface AuthState {
    user: User | null
    token: string | null
    isAuthenticated: boolean
    isLoading: boolean
    error: string | null
}

export interface CartState {
    items: CartItem[]
    isLoading: boolean
    error: string | null
}

export interface FavoritesState {
    items: FavoriteItem[]
    isLoading: boolean
    error: string | null
} 