import { defineEventHandler, readBody, createError } from 'h3'
import { createClient } from '@supabase/supabase-js'
import { validatePhoneNumber, generateOTP, getOTPExpiryTime } from '~/utils/auth'
import type { SendOTPRequest, SendOTPResponse } from '~/types/auth'

export default defineEventHandler(async (event): Promise<SendOTPResponse> => {
    const config = useRuntimeConfig()
    const body = await readBody(event) as SendOTPRequest

    // Get client IP from headers (fallback method)
    const clientIP = getRequestHeader(event, 'x-forwarded-for') ||
        getRequestHeader(event, 'x-real-ip') ||
        getRequestHeader(event, 'cf-connecting-ip') ||
        'unknown'

    // Get Supabase credentials
    const supabaseUrl = config.public.supabaseUrl || process.env.SUPABASE_URL || ''
    const supabaseKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || ''

    if (!supabaseUrl || !supabaseKey) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Missing Supabase configuration'
        })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    try {
        // Validate input
        if (!body.mobileNumber || !body.countryCode) {
            return {
                success: false,
                message: 'Mobile number and country code are required'
            }
        }

        // Validate phone number format
        const phoneValidation = validatePhoneNumber(body.mobileNumber, body.countryCode)
        if (!phoneValidation.isValid) {
            return {
                success: false,
                message: phoneValidation.error || 'Invalid phone number'
            }
        }

        const { nationalNumber, countryCode } = phoneValidation

        // Determine purpose based on provided data (make it optional)
        let purpose = body.purpose
        if (!purpose) {
            // Check if user exists to determine purpose
            const { data: existingUser } = await supabase
                .from('users')
                .select('id')
                .eq('mobile_number', nationalNumber)
                .eq('country_code', countryCode)
                .single()

            if (existingUser) {
                purpose = 'login'
            } else {
                purpose = 'registration'
            }
        }

        console.log('🔍 Send OTP:', {
            mobileNumber: nationalNumber,
            countryCode,
            purpose,
            clientIP
        })

        // Check rate limiting
        const rateLimitIdentifier = `${countryCode}${nationalNumber}`
        const { data: rateLimit } = await supabase
            .from('rate_limits')
            .select('*')
            .eq('identifier', rateLimitIdentifier)
            .eq('action', 'otp_request')
            .single()

        if (rateLimit) {
            const now = new Date()
            const windowStart = new Date(rateLimit.window_start)
            const timeDiff = now.getTime() - windowStart.getTime()
            const windowDuration = 60 * 1000 // 1 minute window

            // Check if user is blocked
            if (rateLimit.blocked_until && new Date(rateLimit.blocked_until) > now) {
                const remainingTime = Math.ceil((new Date(rateLimit.blocked_until).getTime() - now.getTime()) / 1000)
                return {
                    success: false,
                    message: `Too many OTP requests. Please try again in ${remainingTime} seconds.`,
                    blockedUntil: rateLimit.blocked_until
                }
            }

            // Reset window if expired
            if (timeDiff > windowDuration) {
                await supabase
                    .from('rate_limits')
                    .update({
                        attempts: 1,
                        window_start: now.toISOString(),
                        blocked_until: null,
                        updated_at: now.toISOString()
                    })
                    .eq('id', rateLimit.id)
            } else {
                // Increment attempts
                const newAttempts = rateLimit.attempts + 1
                const maxAttempts = 3

                if (newAttempts > maxAttempts) {
                    // Block user for 1 minute
                    const blockedUntil = new Date(now.getTime() + 60 * 1000)
                    await supabase
                        .from('rate_limits')
                        .update({
                            attempts: newAttempts,
                            blocked_until: blockedUntil.toISOString(),
                            updated_at: now.toISOString()
                        })
                        .eq('id', rateLimit.id)

                    return {
                        success: false,
                        message: 'Too many OTP requests. Please try again in 1 minute.',
                        blockedUntil: blockedUntil.toISOString()
                    }
                } else {
                    await supabase
                        .from('rate_limits')
                        .update({
                            attempts: newAttempts,
                            updated_at: now.toISOString()
                        })
                        .eq('id', rateLimit.id)
                }
            }
        } else {
            // Create new rate limit record
            await supabase
                .from('rate_limits')
                .insert({
                    identifier: rateLimitIdentifier,
                    action: 'otp_request',
                    attempts: 1,
                    window_start: new Date().toISOString()
                })
        }

        // Check if user exists (for login) or doesn't exist (for registration)
        const { data: existingUser } = await supabase
            .from('users')
            .select('id, first_name, last_name, is_verified')
            .eq('mobile_number', nationalNumber)
            .eq('country_code', countryCode)
            .single()

        if (purpose === 'login' && !existingUser) {
            return {
                success: false,
                message: 'User not found. Please register first.'
            }
        }

        if (purpose === 'registration' && existingUser) {
            return {
                success: false,
                message: 'User already exists. Please login instead.'
            }
        }

        // Generate OTP
        const otpCode = generateOTP()
        const expiresAt = getOTPExpiryTime()

        // Store OTP in database
        const { error: otpError } = await supabase
            .from('otp_verifications')
            .insert({
                mobile_number: nationalNumber,
                country_code: countryCode,
                otp_code: otpCode,
                expires_at: expiresAt.toISOString()
            })

        if (otpError) {
            console.error('❌ Failed to store OTP:', otpError)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to generate OTP'
            })
        }

        // TODO: Send OTP via SMS using Twilio
        // For now, we'll log it (remove in production)
        console.log(`🔐 OTP for ${countryCode}${nationalNumber}: ${otpCode}`)

        // In development, return OTP in response (remove in production)
        const isDevelopment = process.env.NODE_ENV === 'development'

        console.log(`✅ OTP sent successfully to ${phoneValidation.formattedNumber} (${purpose})`)

        return {
            success: true,
            message: `OTP sent successfully to ${phoneValidation.formattedNumber}`,
            expiresAt: expiresAt.toISOString(),
            purpose: purpose,
            ...(isDevelopment && { otp: otpCode }) // Only in development
        }

    } catch (error: any) {
        console.error('❌ Send OTP error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 