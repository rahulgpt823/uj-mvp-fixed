// GET /api/admin/collections - Admin collection management
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

        const query = getQuery(event)
        const {
            include_inactive = 'false',
            include_analytics = 'false',
            limit = '50',
            offset = '0'
        } = query

        // Build query for admin (can see all collections)
        let queryBuilder = supabase
            .from('collections')
            .select(`
        id,
        name,
        slug,
        description,
        banner_image,
        banner_alt,
        meta_title,
        meta_description,
        is_active,
        is_featured,
        display_order,
        tag_filters,
        tag_match_mode,
        min_price,
        max_price,
        start_date,
        end_date,
        view_count,
        product_count,
        created_at,
        updated_at
      `)

        // Filter active/inactive collections
        if (include_inactive === 'false') {
            queryBuilder = queryBuilder.eq('is_active', true)
        }

        // Order by display order then creation date
        queryBuilder = queryBuilder
            .order('display_order', { ascending: true })
            .order('created_at', { ascending: false })
            .range(parseInt(offset as string), parseInt(offset as string) + parseInt(limit as string) - 1)

        const { data: collections, error } = await queryBuilder

        if (error) {
            throw error
        }

        // Get analytics data if requested
        let analytics = null
        if (include_analytics === 'true' && collections) {
            const collectionIds = collections.map(c => c.id)

            if (collectionIds.length > 0) {
                const { data: analyticsData, error: analyticsError } = await supabase
                    .from('collection_analytics')
                    .select(`
            collection_id,
            date,
            views,
            unique_views,
            product_clicks,
            favorites_added
          `)
                    .in('collection_id', collectionIds)
                    .gte('date', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]) // Last 30 days
                    .order('date', { ascending: false })

                if (!analyticsError) {
                    analytics = analyticsData
                }
            }
        }

        // Get total count for pagination
        const { count: totalCount, error: countError } = await supabase
            .from('collections')
            .select('*', { count: 'exact', head: true })

        if (countError) {
            console.error('Count error:', countError)
        }

        return {
            success: true,
            data: {
                collections: collections || [],
                analytics: analytics,
                pagination: {
                    total: totalCount || 0,
                    limit: parseInt(limit as string),
                    offset: parseInt(offset as string),
                    has_more: (collections?.length || 0) === parseInt(limit as string)
                }
            }
        }

    } catch (error: any) {
        console.error('Admin collections fetch error:', error)

        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Failed to fetch collections'
        })
    }
}) 