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

        // First, check if collection exists
        const { data: existingCollection, error: fetchError } = await supabase
            .from('collections')
            .select('id, name')
            .eq('id', collectionId)
            .single()

        if (fetchError || !existingCollection) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Collection not found'
            })
        }

        // Delete associated analytics first (cascade should handle this, but being explicit)
        const { error: analyticsError } = await supabase
            .from('collection_analytics')
            .delete()
            .eq('collection_id', collectionId)

        if (analyticsError) {
            console.warn('Failed to delete collection analytics:', analyticsError)
            // Don't fail the request for analytics cleanup
        }

        // Delete the collection
        const { error: deleteError } = await supabase
            .from('collections')
            .delete()
            .eq('id', collectionId)

        if (deleteError) {
            console.error('Database delete error:', deleteError)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to delete collection'
            })
        }

        return {
            success: true,
            message: `Collection "${existingCollection.name}" deleted successfully`
        }

    } catch (error: any) {
        console.error('Delete collection error:', error)

        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Failed to delete collection'
        })
    }
}) 