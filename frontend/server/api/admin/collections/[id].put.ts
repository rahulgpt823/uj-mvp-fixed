import { createClient } from '@supabase/supabase-js'
import { validateSession } from '~/server/utils/validateSession'

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// Verify admin authentication using session validation
async function verifyAdminAuth(event: any) {
    const validation = await validateSession(event)

    if (!validation.success || !validation.user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Authentication required'
        })
    }

    // Check if user has admin role
    if (validation.user.role !== 'admin') {
        throw createError({
            statusCode: 403,
            statusMessage: 'Admin access required'
        })
    }

    return validation.user
}

export default defineEventHandler(async (event) => {
    try {
        // Verify admin authentication
        await verifyAdminAuth(event)

        // Get collection ID from params
        const collectionId = getRouterParam(event, 'id')

        if (!collectionId) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Collection ID is required'
            })
        }

        // Get request body
        const body = await readBody(event)

        // Validate required fields
        if (!body.name && body.name !== '') {
            throw createError({
                statusCode: 400,
                statusMessage: 'Collection name is required'
            })
        }

        // Prepare update data
        const updateData: any = {
            updated_at: new Date().toISOString()
        }

        // Only update provided fields
        if (body.name !== undefined) updateData.name = body.name
        if (body.description !== undefined) updateData.description = body.description
        if (body.banner_image !== undefined) updateData.banner_image = body.banner_image
        if (body.banner_alt !== undefined) updateData.banner_alt = body.banner_alt
        if (body.tag_filters !== undefined) updateData.tag_filters = body.tag_filters
        if (body.tag_match_mode !== undefined) updateData.tag_match_mode = body.tag_match_mode
        if (body.min_price !== undefined) updateData.min_price = body.min_price
        if (body.max_price !== undefined) updateData.max_price = body.max_price
        if (body.start_date !== undefined) updateData.start_date = body.start_date || null
        if (body.end_date !== undefined) updateData.end_date = body.end_date || null
        if (body.is_active !== undefined) updateData.is_active = body.is_active
        if (body.is_featured !== undefined) updateData.is_featured = body.is_featured
        if (body.display_order !== undefined) updateData.display_order = body.display_order

        // Generate slug if name is being updated
        if (body.name) {
            updateData.slug = body.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
        }

        // Update collection in database
        const { data: collection, error: updateError } = await supabase
            .from('collections')
            .update(updateData)
            .eq('id', collectionId)
            .select('*')
            .single()

        if (updateError) {
            console.error('Database update error:', updateError)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to update collection'
            })
        }

        // Update product count if tag filters changed
        if (body.tag_filters !== undefined || body.tag_match_mode !== undefined ||
            body.min_price !== undefined || body.max_price !== undefined) {

            try {
                // Call the update function
                const { error: functionError } = await supabase
                    .rpc('update_collection_product_count', {
                        collection_id: collectionId
                    })

                if (functionError) {
                    console.warn('Failed to update product count:', functionError)
                    // Don't fail the request, just log the warning
                }
            } catch (err) {
                console.warn('Product count update failed:', err)
            }
        }

        return {
            success: true,
            data: {
                collection
            },
            message: 'Collection updated successfully'
        }

    } catch (error: any) {
        console.error('Update collection error:', error)

        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Failed to update collection'
        })
    }
}) 