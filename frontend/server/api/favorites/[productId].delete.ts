import { createClient } from '@supabase/supabase-js'
import { requireAuth } from '~/server/utils/validateSession'

export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()
        const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey)
        const productId = getRouterParam(event, 'productId')

        if (!productId) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Product ID is required'
            })
        }

        // Validate authentication using standardized helper
        const { userId } = await requireAuth(event)

        // Delete the favorite item
        const { error } = await supabase
            .from('user_favorites')
            .delete()
            .eq('user_id', userId)
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