import { createClient } from '@supabase/supabase-js'
import { requireAuth } from '~/server/utils/validateSession'

export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()
        const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey)

        // Validate authentication using standardized helper
        const { userId } = await requireAuth(event)

        // Fetch favorites for the user
        const { data: favorites, error } = await supabase
            .from('user_favorites')
            .select(`
                id,
                user_id,
                product_id,
                product_name,
                product_image,
                product_price,
                product_category,
                created_at,
                updated_at
            `)
            .eq('user_id', userId)
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Database error:', error)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to fetch favorites'
            })
        }

        // Transform data to match frontend interface
        const transformedFavorites = favorites?.map(fav => ({
            id: fav.id,
            userId: fav.user_id,
            productId: fav.product_id,
            productName: fav.product_name,
            productImage: fav.product_image,
            productPrice: fav.product_price,
            productCategory: fav.product_category,
            createdAt: fav.created_at,
            updatedAt: fav.updated_at
        })) || []

        return {
            success: true,
            data: transformedFavorites
        }
    } catch (error: any) {
        console.error('Get favorites error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 