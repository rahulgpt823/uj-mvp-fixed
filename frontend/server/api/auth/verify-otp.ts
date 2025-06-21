import { defineEventHandler, readBody, createError } from 'h3'
import { createClient } from '@supabase/supabase-js'
import { validatePhoneNumber, validateOTPFormat, isOTPExpired, generateSessionToken, getSessionExpiryTime } from '~/utils/auth'
import type { VerifyOTPRequest, VerifyOTPResponse } from '~/types/auth'

export default defineEventHandler(async (event): Promise<VerifyOTPResponse> => {
    const config = useRuntimeConfig()
    const body = await readBody(event) as VerifyOTPRequest

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
        if (!body.mobileNumber || !body.countryCode || !body.otpCode) {
            return {
                success: false,
                message: 'Mobile number, country code, and OTP code are required'
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

        // Validate OTP format
        if (!validateOTPFormat(body.otpCode)) {
            return {
                success: false,
                message: 'Invalid OTP format. Please enter a 6-digit code.'
            }
        }

        const { nationalNumber, countryCode } = phoneValidation

        // Determine purpose based on provided data
        let purpose = body.purpose
        if (!purpose) {
            // If firstName and lastName are provided, it's registration
            if (body.firstName && body.lastName) {
                purpose = 'registration'
            } else {
                purpose = 'login'
            }
        }

        console.log('🔍 OTP Verification:', {
            mobileNumber: nationalNumber,
            countryCode,
            purpose,
            hasFirstName: !!body.firstName,
            hasLastName: !!body.lastName
        })

        // Find the OTP record
        const { data: otpRecord, error: otpError } = await supabase
            .from('otp_verifications')
            .select('*')
            .eq('mobile_number', nationalNumber)
            .eq('country_code', countryCode)
            .eq('otp_code', body.otpCode)
            .eq('is_used', false)
            .order('created_at', { ascending: false })
            .limit(1)
            .single()

        if (otpError || !otpRecord) {
            console.error('❌ OTP not found:', otpError)
            return {
                success: false,
                message: 'Invalid OTP code. Please check and try again.'
            }
        }

        // Check if OTP is expired
        if (isOTPExpired(otpRecord.expires_at)) {
            return {
                success: false,
                message: 'OTP has expired. Please request a new one.'
            }
        }

        // Mark OTP as used
        await supabase
            .from('otp_verifications')
            .update({ is_used: true, used_at: new Date().toISOString() })
            .eq('id', otpRecord.id)

        if (purpose === 'registration') {
            // Validate registration data
            if (!body.firstName || !body.lastName) {
                return {
                    success: false,
                    message: 'First name and last name are required for registration'
                }
            }

            // Check if user already exists
            const { data: existingUser } = await supabase
                .from('users')
                .select('id')
                .eq('mobile_number', nationalNumber)
                .eq('country_code', countryCode)
                .single()

            if (existingUser) {
                return {
                    success: false,
                    message: 'User already exists. Please login instead.'
                }
            }

            // Create new user
            const { data: newUser, error: userError } = await supabase
                .from('users')
                .insert({
                    mobile_number: nationalNumber,
                    country_code: countryCode,
                    first_name: body.firstName,
                    last_name: body.lastName,
                    email: body.email || null,
                    is_verified: true,
                    is_active: true,
                    role: 'user'
                })
                .select()
                .single()

            if (userError) {
                console.error('❌ Failed to create user:', userError)
                return {
                    success: false,
                    message: 'Failed to create user account'
                }
            }

            // Create session
            const sessionToken = generateSessionToken()
            const sessionExpiresAt = getSessionExpiryTime()

            const { error: sessionError } = await supabase
                .from('user_sessions')
                .insert({
                    user_id: newUser.id,
                    session_token: sessionToken,
                    expires_at: sessionExpiresAt.toISOString(),
                    device_info: JSON.stringify({
                        userAgent: getRequestHeader(event, 'user-agent') || 'unknown',
                        ip: getRequestHeader(event, 'x-forwarded-for') || 'unknown'
                    })
                })

            if (sessionError) {
                console.error('❌ Failed to create session:', sessionError)
                return {
                    success: false,
                    message: 'Failed to create user session'
                }
            }

            // Set session cookie
            setCookie(event, 'session_token', sessionToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 30 * 24 * 60 * 60, // 30 days
                path: '/'
            })

            console.log('✅ Registration successful for user:', newUser.id)

            return {
                success: true,
                message: 'Registration successful!',
                user: {
                    id: newUser.id,
                    firstName: newUser.first_name,
                    lastName: newUser.last_name,
                    mobileNumber: newUser.mobile_number,
                    countryCode: newUser.country_code,
                    email: newUser.email,
                    isVerified: newUser.is_verified,
                    role: newUser.role
                },
                token: sessionToken,
                expiresAt: sessionExpiresAt.toISOString(),
                isNewUser: true
            }

        } else if (purpose === 'login') {
            // Find existing user
            const { data: existingUser, error: userError } = await supabase
                .from('users')
                .select('*')
                .eq('mobile_number', nationalNumber)
                .eq('country_code', countryCode)
                .single()

            if (userError || !existingUser) {
                return {
                    success: false,
                    message: 'User not found. Please register first.'
                }
            }

            // Create new session
            const sessionToken = generateSessionToken()
            const sessionExpiresAt = getSessionExpiryTime()

            const { error: sessionError } = await supabase
                .from('user_sessions')
                .insert({
                    user_id: existingUser.id,
                    session_token: sessionToken,
                    expires_at: sessionExpiresAt.toISOString(),
                    device_info: JSON.stringify({
                        userAgent: getRequestHeader(event, 'user-agent') || 'unknown',
                        ip: getRequestHeader(event, 'x-forwarded-for') || 'unknown'
                    })
                })

            if (sessionError) {
                console.error('❌ Failed to create session:', sessionError)
                return {
                    success: false,
                    message: 'Failed to create user session'
                }
            }

            // Set session cookie
            setCookie(event, 'session_token', sessionToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 30 * 24 * 60 * 60, // 30 days
                path: '/'
            })

            console.log('✅ Login successful for user:', existingUser.id)

            return {
                success: true,
                message: 'Login successful!',
                user: {
                    id: existingUser.id,
                    firstName: existingUser.first_name,
                    lastName: existingUser.last_name,
                    mobileNumber: existingUser.mobile_number,
                    countryCode: existingUser.country_code,
                    email: existingUser.email,
                    isVerified: existingUser.is_verified,
                    role: existingUser.role
                },
                token: sessionToken,
                expiresAt: sessionExpiresAt.toISOString(),
                isNewUser: false
            }
        }

        return {
            success: false,
            message: 'Invalid purpose specified'
        }

    } catch (error: any) {
        console.error('❌ Verify OTP error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 