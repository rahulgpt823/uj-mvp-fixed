// POST /api/admin/collections - Create new collection
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

// Generate slug from name
function generateSlug(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export default defineEventHandler(async (event) => {
    try {
        // Verify admin authentication
        await verifyAdminAuth(event)

        const body = await readBody(event)
        const {
            name,
            description,
            banner_image,
            banner_alt,
            meta_title,
            meta_description,
            is_active = true,
            is_featured = false,
            display_order = 0,
            tag_filters = [],
            tag_match_mode = 'ANY',
            min_price,
            max_price,
            start_date,
            end_date
        } = body

        // Validation
        if (!name || !name.trim()) {
            throw new Error('Collection name is required')
        }

        if (!banner_image || !banner_image.trim()) {
            throw new Error('Banner image is required')
        }

        if (!Array.isArray(tag_filters) || tag_filters.length === 0) {
            throw new Error('At least one tag filter is required')
        }

        if (!['ANY', 'ALL'].includes(tag_match_mode)) {
            throw new Error('Tag match mode must be either ANY or ALL')
        }

        if (min_price && max_price && parseFloat(min_price) > parseFloat(max_price)) {
            throw new Error('Minimum price cannot be greater than maximum price')
        }

        if (start_date && end_date && new Date(start_date) > new Date(end_date)) {
            throw new Error('Start date cannot be after end date')
        }

        // Generate unique slug
        let slug = generateSlug(name)
        let slugCounter = 0
        let finalSlug = slug

        while (true) {
            const { data: existingCollection } = await supabase
                .from('collections')
                .select('id')
                .eq('slug', finalSlug)
                .single()

            if (!existingCollection) break

            slugCounter++
            finalSlug = `${slug}-${slugCounter}`
        }

        // Verify that all tag filters exist
        const { data: existingTags, error: tagsError } = await supabase
            .from('product_tags')
            .select('name')
            .in('name', tag_filters)
            .eq('is_active', true)

        if (tagsError) {
            throw new Error('Failed to verify tag filters')
        }

        const existingTagNames = existingTags?.map(t => t.name) || []
        const missingTags = tag_filters.filter(tag => !existingTagNames.includes(tag))

        if (missingTags.length > 0) {
            throw new Error(`The following tags do not exist or are inactive: ${missingTags.join(', ')}`)
        }

        // Create the collection
        const collectionData = {
            name: name.trim(),
            slug: finalSlug,
            description: description?.trim() || null,
            banner_image: banner_image.trim(),
            banner_alt: banner_alt?.trim() || null,
            meta_title: meta_title?.trim() || null,
            meta_description: meta_description?.trim() || null,
            is_active,
            is_featured,
            display_order: parseInt(display_order) || 0,
            tag_filters,
            tag_match_mode,
            min_price: min_price ? parseFloat(min_price) : null,
            max_price: max_price ? parseFloat(max_price) : null,
            start_date: start_date ? new Date(start_date).toISOString() : null,
            end_date: end_date ? new Date(end_date).toISOString() : null,
            view_count: 0,
            product_count: 0
        }

        const { data: collection, error } = await supabase
            .from('collections')
            .insert(collectionData)
            .select()
            .single()

        if (error) {
            throw error
        }

        // Calculate initial product count
        try {
            const { data: productCount } = await supabase
                .rpc('get_collection_product_count', { collection_id: collection.id })

            if (productCount !== null) {
                await supabase
                    .from('collections')
                    .update({ product_count: productCount })
                    .eq('id', collection.id)

                collection.product_count = productCount
            }
        } catch (countError) {
            console.error('Failed to calculate initial product count:', countError)
        }

        return {
            success: true,
            data: {
                collection,
                message: 'Collection created successfully'
            }
        }

    } catch (error: any) {
        console.error('Create collection error:', error)

        throw createError({
            statusCode: error.message.includes('Authentication') || error.message.includes('Admin') ? 401 : 400,
            statusMessage: error.message || 'Failed to create collection'
        })
    }
}) 