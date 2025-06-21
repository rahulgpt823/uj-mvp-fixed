import { serverSupabaseClient } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
    try {
        const client = await serverSupabaseClient(event)

        // Get user from session
        const { data: { user }, error: userError } = await client.auth.getUser()

        if (userError || !user) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized'
            })
        }

        // Clear all favorites for the user
        const { error } = await client
            .from('user_favorites')
            .delete()
            .eq('user_id', user.id)

        if (error) {
            console.error('Database error:', error)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to clear favorites'
            })
        }

        return {
            success: true,
            message: 'All favorites cleared'
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