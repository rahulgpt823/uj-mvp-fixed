import { serverSupabaseClient } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
    try {
        const client = await serverSupabaseClient(event)
        const productId = getRouterParam(event, 'productId')

        if (!productId) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Product ID is required'
            })
        }

        // Get user from session
        const { data: { user }, error: userError } = await client.auth.getUser()

        if (userError || !user) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized'
            })
        }

        // Delete the favorite item
        const { error } = await client
            .from('user_favorites')
            .delete()
            .eq('user_id', user.id)
            .eq('product_id', productId)

        if (error) {
            console.error('Database error:', error)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to remove from favorites'
            })
        }

        return {
            success: true,
            message: 'Removed from favorites'
        }
    } catch (error: any) {
        console.error('Remove favorite error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 