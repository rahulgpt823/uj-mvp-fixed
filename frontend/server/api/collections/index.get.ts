// GET /api/collections - Fetch all active collections
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const {
      featured_only = 'false',
      include_counts = 'true',
      limit = '50',
      offset = '0'
    } = query

    // Build the query
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
      .eq('is_active', true)
      .order('display_order', { ascending: true })
      .order('created_at', { ascending: false })

    // Filter by featured if requested
    if (featured_only === 'true') {
      queryBuilder = queryBuilder.eq('is_featured', true)
    }

    // Apply pagination
    queryBuilder = queryBuilder
      .range(parseInt(offset as string), parseInt(offset as string) + parseInt(limit as string) - 1)

    // Execute query
    const { data: collections, error } = await queryBuilder

    if (error) {
      throw error
    }

    // Filter collections by date range (active collections only)
    const now = new Date().toISOString()
    const activeCollections = collections?.filter(collection => {
      const startOk = !collection.start_date || collection.start_date <= now
      const endOk = !collection.end_date || collection.end_date >= now
      return startOk && endOk
    }) || []

    // Optionally fetch real-time product counts if requested
    if (include_counts === 'true') {
      for (const collection of activeCollections) {
        // This could be optimized with a single query, but for now we'll use the cached count
        // The triggers keep product_count updated automatically
      }
    }

    return {
      success: true,
      data: {
        collections: activeCollections,
        total: activeCollections.length,
        has_more: activeCollections.length === parseInt(limit as string)
      }
    }

  } catch (error: any) {
    console.error('Collections fetch error:', error)
    
    return {
      success: false,
      error: {
        message: 'Failed to fetch collections',
        details: error.message
      }
    }
  }
}) 