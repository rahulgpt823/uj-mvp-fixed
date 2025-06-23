import { defineEventHandler } from 'h3'
import { validateSession } from '~/server/utils/validateSession'

export default defineEventHandler(async (event) => {
    try {
        const validation = await validateSession(event)

        if (!validation.success || !validation.user) {
            return {
                success: false,
                user: null,
                sessionToken: null
            }
        }

        const user = validation.user
        const sessionToken = getCookie(event, 'session_token')

        return {
            success: true,
            user: {
                id: user.id,
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                mobileNumber: user.mobile_number,
                role: user.role,
                isActive: user.is_active
            },
            sessionToken: sessionToken
        }
    } catch (error: any) {
        console.error('Get session error:', error)
        return {
            success: false,
            user: null,
            sessionToken: null
        }
    }
}) 