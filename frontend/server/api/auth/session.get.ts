import { defineEventHandler } from 'h3'
import { serverSupabaseClient } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
    try {
        const client = await serverSupabaseClient(event)

        const { data: { user }, error } = await client.auth.getUser()

        if (error || !user) {
            return { success: false, user: null, sessionToken: null }
        }

        // Fetch user profile
        const { data: profile, error: profileError } = await client
            .from('users')
            .select('id, first_name, last_name, email, mobile_number, role, is_active')
            .eq('id', user.id)
            .single()

        if (profileError || !profile) {
            console.error('Get session profile error:', profileError)
            // Still return the user, but note the profile issue
            return {
                success: true,
                user: { id: user.id, email: user.email, role: user.role },
                sessionToken: 'valid'
            }
        }

        return {
            success: true,
            user: {
                id: profile.id,
                firstName: profile.first_name,
                lastName: profile.last_name,
                email: profile.email,
                mobileNumber: profile.mobile_number,
                role: profile.role,
                isActive: profile.is_active
            },
            sessionToken: 'valid' // Indicate an active session
        }
    } catch (error: any) {
        console.error('Get session error:', error)
        return { success: false, user: null, sessionToken: null }
    }
}) 