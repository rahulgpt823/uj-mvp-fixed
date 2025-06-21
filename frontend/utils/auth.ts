import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js'
import { randomBytes, createHash } from 'crypto'
import type { PhoneValidation } from '~/types/auth'

/**
 * Validate and format phone number
 */
export function validatePhoneNumber(phoneNumber: string, countryCode?: string): PhoneValidation {
    try {
        // Remove any non-digit characters except +
        const cleanNumber = phoneNumber.replace(/[^\d+]/g, '')

        // If no country code provided, try to parse with default country
        const defaultCountry = countryCode?.replace('+', '') || 'IN'

        // For Indian numbers, ensure proper format
        if (defaultCountry === 'IN' && cleanNumber.length === 10) {
            const fullNumber = `+91${cleanNumber}`
            const parsed = parsePhoneNumber(fullNumber)

            if (parsed && isValidPhoneNumber(fullNumber)) {
                return {
                    isValid: true,
                    formattedNumber: parsed.formatInternational(),
                    countryCode: '+91',
                    nationalNumber: cleanNumber,
                    country: 'IN'
                }
            }
        }

        // Try parsing with the provided country code
        const fullNumber = countryCode ? `${countryCode}${cleanNumber}` : cleanNumber
        const parsed = parsePhoneNumber(fullNumber, defaultCountry as any)

        if (!parsed) {
            return {
                isValid: false,
                formattedNumber: phoneNumber,
                countryCode: countryCode || '+91',
                nationalNumber: phoneNumber,
                error: 'Invalid phone number format'
            }
        }

        // Validate the number
        const isValid = isValidPhoneNumber(fullNumber, defaultCountry as any)

        if (!isValid) {
            return {
                isValid: false,
                formattedNumber: phoneNumber,
                countryCode: countryCode || '+91',
                nationalNumber: phoneNumber,
                error: 'Invalid phone number'
            }
        }

        return {
            isValid: true,
            formattedNumber: parsed.formatInternational(),
            countryCode: `+${parsed.countryCallingCode}`,
            nationalNumber: parsed.nationalNumber,
            country: parsed.country
        }
    } catch (error) {
        // Fallback validation for common formats
        const cleanNumber = phoneNumber.replace(/[^\d]/g, '')

        // For Indian numbers, check if it's 10 digits
        if (countryCode === '+91' && cleanNumber.length === 10) {
            return {
                isValid: true,
                formattedNumber: `+91 ${cleanNumber}`,
                countryCode: '+91',
                nationalNumber: cleanNumber,
                country: 'IN'
            }
        }

        return {
            isValid: false,
            formattedNumber: phoneNumber,
            countryCode: countryCode || '+91',
            nationalNumber: phoneNumber,
            error: 'Failed to validate phone number'
        }
    }
}

/**
 * Generate a 6-digit OTP
 */
export function generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString()
}

/**
 * Check if OTP is expired
 */
export function isOTPExpired(expiresAt: string): boolean {
    return new Date() > new Date(expiresAt)
}

/**
 * Get OTP expiry time (5 minutes from now)
 */
export function getOTPExpiryTime(): Date {
    const now = new Date()
    return new Date(now.getTime() + 5 * 60 * 1000) // 5 minutes
}

/**
 * Validate OTP format
 */
export function validateOTPFormat(otp: string): boolean {
    return /^\d{6}$/.test(otp)
}

/**
 * Sanitize mobile number for storage
 */
export function sanitizeMobileNumber(mobileNumber: string): string {
    return mobileNumber.replace(/[^\d]/g, '')
}

/**
 * Format mobile number for display
 */
export function formatMobileNumber(mobileNumber: string, countryCode: string): string {
    try {
        const fullNumber = `${countryCode}${mobileNumber}`
        const parsed = parsePhoneNumber(fullNumber)
        return parsed ? parsed.formatInternational() : `${countryCode} ${mobileNumber}`
    } catch {
        return `${countryCode} ${mobileNumber}`
    }
}

/**
 * Check if user is blocked due to rate limiting
 */
export function isUserBlocked(blockedUntil?: string): boolean {
    if (!blockedUntil) return false
    return new Date() < new Date(blockedUntil)
}

/**
 * Get remaining block time in minutes
 */
export function getRemainingBlockTime(blockedUntil: string): number {
    const now = new Date()
    const blockEnd = new Date(blockedUntil)
    const diffMs = blockEnd.getTime() - now.getTime()
    return Math.ceil(diffMs / (1000 * 60)) // Convert to minutes
}

/**
 * Validate user registration data
 */
export function validateRegistrationData(data: {
    firstName: string
    lastName: string
    mobileNumber: string
    countryCode: string
    email?: string
}): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    // Validate first name
    if (!data.firstName || data.firstName.trim().length < 2) {
        errors.push('First name must be at least 2 characters long')
    }

    // Validate last name
    if (!data.lastName || data.lastName.trim().length < 2) {
        errors.push('Last name must be at least 2 characters long')
    }

    // Validate mobile number
    const phoneValidation = validatePhoneNumber(data.mobileNumber, data.countryCode)
    if (!phoneValidation.isValid) {
        errors.push(phoneValidation.error || 'Invalid mobile number')
    }

    // Validate email if provided
    if (data.email && data.email.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(data.email)) {
            errors.push('Invalid email format')
        }
    }

    return {
        isValid: errors.length === 0,
        errors
    }
}

/**
 * Get device info for session tracking
 */
export function getDeviceInfo(): any {
    if (process.client) {
        return {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            screen: {
                width: screen.width,
                height: screen.height
            },
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
    }
    return null
}

/**
 * Generate session token
 */
export function generateSessionToken(): string {
    return randomBytes(32).toString('hex')
}

/**
 * Check if session is expired
 */
export function isSessionExpired(expiresAt: string): boolean {
    return new Date() > new Date(expiresAt)
}

/**
 * Get session expiry time (30 days from now)
 */
export function getSessionExpiryTime(): Date {
    const now = new Date()
    return new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000) // 30 days
}

/**
 * Hash a string (for passwords, etc.)
 */
export function hashString(input: string): string {
    return createHash('sha256').update(input).digest('hex')
}

/**
 * Check rate limiting for an action
 */
export async function checkRateLimit(
    client: any,
    identifier: string,
    action: string,
    maxAttempts: number = 5,
    windowMinutes: number = 15
): Promise<{ allowed: boolean; message?: string }> {
    try {
        const windowStart = new Date(Date.now() - windowMinutes * 60 * 1000)

        // Get existing rate limit record
        const { data: existingLimit } = await client
            .from('rate_limits')
            .select('*')
            .eq('identifier', identifier)
            .eq('action', action)
            .single()

        if (existingLimit) {
            // Check if blocked
            if (existingLimit.blocked_until && new Date(existingLimit.blocked_until) > new Date()) {
                const blockedUntil = new Date(existingLimit.blocked_until)
                const minutesLeft = Math.ceil((blockedUntil.getTime() - Date.now()) / (1000 * 60))
                return {
                    allowed: false,
                    message: `Too many attempts. Please try again in ${minutesLeft} minutes.`
                }
            }

            // Check if within window and exceeded attempts
            if (new Date(existingLimit.window_start) > windowStart) {
                if (existingLimit.attempts >= maxAttempts) {
                    // Block for 1 hour
                    const blockedUntil = new Date(Date.now() + 60 * 60 * 1000)
                    await client
                        .from('rate_limits')
                        .update({
                            blocked_until: blockedUntil.toISOString(),
                            updated_at: new Date().toISOString()
                        })
                        .eq('id', existingLimit.id)

                    return {
                        allowed: false,
                        message: 'Too many attempts. Please try again in 1 hour.'
                    }
                }
            } else {
                // Reset window
                await client
                    .from('rate_limits')
                    .update({
                        attempts: 1,
                        window_start: new Date().toISOString(),
                        blocked_until: null,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', existingLimit.id)
            }
        }

        return { allowed: true }
    } catch (error) {
        console.error('Rate limit check error:', error)
        return { allowed: true } // Allow if rate limiting fails
    }
}

/**
 * Update rate limit attempts
 */
export async function updateRateLimit(
    client: any,
    identifier: string,
    action: string
): Promise<void> {
    try {
        const { data: existingLimit } = await client
            .from('rate_limits')
            .select('*')
            .eq('identifier', identifier)
            .eq('action', action)
            .single()

        if (existingLimit) {
            // Increment attempts
            await client
                .from('rate_limits')
                .update({
                    attempts: existingLimit.attempts + 1,
                    updated_at: new Date().toISOString()
                })
                .eq('id', existingLimit.id)
        } else {
            // Create new rate limit record
            await client
                .from('rate_limits')
                .insert({
                    identifier,
                    action,
                    attempts: 1,
                    window_start: new Date().toISOString()
                })
        }
    } catch (error) {
        console.error('Update rate limit error:', error)
    }
}

/**
 * Clean up expired OTPs
 */
export async function cleanupExpiredOTPs(client: any): Promise<void> {
    try {
        await client
            .from('otp_verifications')
            .delete()
            .lt('expires_at', new Date().toISOString())
    } catch (error) {
        console.error('Cleanup expired OTPs error:', error)
    }
}

/**
 * Clean up expired sessions
 */
export async function cleanupExpiredSessions(client: any): Promise<void> {
    try {
        await client
            .from('user_sessions')
            .delete()
            .lt('expires_at', new Date().toISOString())
    } catch (error) {
        console.error('Cleanup expired sessions error:', error)
    }
}

/**
 * Clean up expired rate limits
 */
export async function cleanupExpiredRateLimits(client: any): Promise<void> {
    try {
        const cutoffTime = new Date(Date.now() - 24 * 60 * 60 * 1000) // 24 hours ago

        await client
            .from('rate_limits')
            .delete()
            .lt('created_at', cutoffTime.toISOString())
    } catch (error) {
        console.error('Cleanup expired rate limits error:', error)
    }
}

/**
 * Get client IP address
 */
export function getClientIP(event: any): string {
    const forwarded = getHeader(event, 'x-forwarded-for')
    const realIP = getHeader(event, 'x-real-ip')
    const connectionIP = event.node?.req?.connection?.remoteAddress

    return forwarded?.split(',')[0] || realIP || connectionIP || 'unknown'
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string): string {
    return input.trim().replace(/[<>]/g, '')
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(mobileNumber: string, countryCode: string): string {
    try {
        const fullNumber = `${countryCode}${mobileNumber}`
        const phoneNumber = parsePhoneNumber(fullNumber)
        return phoneNumber.formatInternational()
    } catch {
        return `${countryCode}${mobileNumber}`
    }
} 