import { defineEventHandler } from 'h3'
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()

        // Get session token from cookie
        const sessionToken = getCookie(event, 'session_token')

        if (sessionToken) {
            // Get Supabase credentials
            const supabaseUrl = config.public.supabaseUrl || process.env.SUPABASE_URL || ''
            const supabaseKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || ''

            if (supabaseUrl && supabaseKey) {
                const supabase = createClient(supabaseUrl, supabaseKey)

                // Deactivate the session
                await supabase
                    .from('user_sessions')
                    .update({ is_active: false })
                    .eq('session_token', sessionToken)
            }
        }

        // Clear session cookie
        setCookie(event, 'session_token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 0,
            path: '/'
        })

        return {
            success: true,
            message: 'Logged out successfully'
        }

    } catch (error: any) {
        console.error('Logout error:', error)

        // Still clear the cookie even if there's an error
        setCookie(event, 'session_token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 0,
            path: '/'
        })

        return {
            success: true,
            message: 'Logged out successfully'
        }
    }
}) 