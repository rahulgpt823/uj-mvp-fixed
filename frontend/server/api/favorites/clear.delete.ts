import { createClient } from '@supabase/supabase-js'
import { requireAuth } from '~/server/utils/validateSession'

export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()
        const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey)

        // Validate authentication using standardized helper
        const { userId } = await requireAuth(event)

        // Clear all favorites for the user
        const { error } = await supabase
            .from('user_favorites')
            .delete()
            .eq('user_id', userId)

        if (error) {
            console.error('Database error:', error)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to clear favorites'
            })
        }

        return {
            success: true,
            message: 'All favorites cleared successfully'
        }
    } catch (error: any) {
        console.error('Clear favorites error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 