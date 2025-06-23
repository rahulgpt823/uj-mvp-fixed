import { createError } from 'h3'
import { createClient } from '@supabase/supabase-js'

interface SessionValidationResult {
    success: boolean
    userId?: string
    user?: {
        id: string
        first_name: string
        last_name: string
        mobile_number: string
        email: string
        is_active: boolean
        role: string
    }
}

/**
 * Validate session token and return user data
 * This is a centralized function to ensure consistent authentication across all API endpoints
 */
export async function validateSession(event: any): Promise<SessionValidationResult> {
    try {
        const config = useRuntimeConfig()
        const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey)

        // Get session token from cookie
        const sessionToken = getCookie(event, 'session_token')

        if (!sessionToken) {
            return { success: false }
        }

        // Validate session (simple query without JOIN)
        const { data: session, error: sessionError } = await supabase
            .from('user_sessions')
            .select('user_id, expires_at, is_active')
            .eq('session_token', sessionToken)
            .eq('is_active', true)
            .single()

        if (sessionError || !session) {
            console.log('❌ Session validation failed:', {
                sessionError: sessionError?.message,
                hasSession: !!session
            })
            return { success: false }
        }

        // Check if session is expired
        const now = new Date()
        const expiresAt = new Date(session.expires_at)
        
        if (expiresAt < now) {
            console.log('❌ Session expired:', {
                now: now.toISOString(),
                expiresAt: expiresAt.toISOString()
            })
            return { success: false }
        }

        // Get user details separately (no JOIN)
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('id, first_name, last_name, mobile_number, email, is_active, role')
            .eq('id', session.user_id)
            .single()

        if (userError || !user) {
            console.log('❌ User lookup failed:', userError?.message)
            return { success: false }
        }

        if (!user.is_active) {
            console.log('❌ User account is inactive')
            return { success: false }
        }

        return {
            success: true,
            userId: user.id,
            user
        }

    } catch (error: any) {
        console.error('❌ Session validation error:', error)
        return { success: false }
    }
}

/**
 * Require authentication for API endpoints
 * Throws error if not authenticated, returns user data if authenticated
 */
export async function requireAuth(event: any) {
    const validation = await validateSession(event)
    
    if (!validation.success || !validation.userId || !validation.user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized - Authentication required'
        })
    }

    return {
        userId: validation.userId,
        user: validation.user
    }
} 