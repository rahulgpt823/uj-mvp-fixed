import { serverSupabaseClient } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
    try {
        const client = await serverSupabaseClient(event)
        const body = await readBody(event)

        const { productId, productName, productImage, productPrice, productCategory } = body

        // Get user from session
        const { data: { user }, error: userError } = await client.auth.getUser()

        if (userError || !user) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized'
            })
        }

        // Validate required fields
        if (!productId || !productName || !productImage || !productPrice || !productCategory) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Missing required fields'
            })
        }

        // Check if already in favorites
        const { data: existingFavorite, error: checkError } = await client
            .from('user_favorites')
            .select('id')
            .eq('user_id', user.id)
            .eq('product_id', productId)
            .single()

        if (checkError && checkError.code !== 'PGRST116') { // pgrst116 is "exact one row not found"
            console.error('Check existing favorite error:', checkError)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to check existing favorite'
            })
        }

        if (existingFavorite) {
            return {
                success: true,
                data: existingFavorite,
                message: 'Product is already in favorites'
            }
        }

        // Add to favorites
        const { data: newFavorite, error: insertError } = await client
            .from('user_favorites')
            .insert({
                user_id: user.id,
                product_id: productId,
                product_name: productName,
                product_image: productImage,
                product_price: productPrice,
                product_category: productCategory
            })
            .select()
            .single()

        if (insertError) {
            console.error('Insert favorite error:', insertError)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to add to favorites'
            })
        }

        // Transform response
        const transformedFavorite = {
            id: newFavorite.id,
            userId: newFavorite.user_id,
            productId: newFavorite.product_id,
            productName: newFavorite.product_name,
            productImage: newFavorite.product_image,
            productPrice: newFavorite.product_price,
            productCategory: newFavorite.product_category,
            createdAt: newFavorite.created_at,
            updatedAt: newFavorite.updated_at
        }

        return {
            success: true,
            data: transformedFavorite,
            message: 'Added to favorites successfully'
        }
    } catch (error: any) {
        console.error('Add to favorites error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
}) 