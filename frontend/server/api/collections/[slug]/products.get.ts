// GET /api/collections/[slug]/products - Fetch products for a collection with optimized aggregation
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
)

export default defineEventHandler(async (event) => {
    try {
        const slug = getRouterParam(event, 'slug')
        const query = getQuery(event)
        const {
            limit = '20',
            offset = '0',
            sort_by = 'created_at',
            sort_order = 'desc',
            min_price,
            max_price,
            search
        } = query

        if (!slug) {
            throw new Error('Collection slug is required')
        }

        // First, get the collection details
        const { data: collection, error: collectionError } = await supabase
            .from('collections')
            .select(`
        id,
        name,
        slug,
        description,
        banner_image,
        banner_alt,
        tag_filters,
        tag_match_mode,
        min_price,
        max_price,
        start_date,
        end_date,
        view_count,
        product_count
      `)
            .eq('slug', slug)
            .eq('is_active', true)
            .single()

        if (collectionError || !collection) {
            throw new Error(`Collection '${slug}' not found or inactive`)
        }

        // Check if collection is within date range
        const now = new Date().toISOString()
        if (collection.start_date && collection.start_date > now) {
            throw new Error('Collection is not yet active')
        }
        if (collection.end_date && collection.end_date < now) {
            throw new Error('Collection has expired')
        }

        // Build the optimized product query using aggregation
        // This query joins products with their tags and filters based on collection criteria
        let productQuery = `
      SELECT DISTINCT
        p.id,
        p.name,
        p.sku,
        p.description,
        p.price,
        p.sale_price,
        p.stock_quantity,
        p.karat,
        p.weight,
        p.tags,
        p.is_published,
        p.subcategory_id,
        p.created_at,
        p.updated_at,
        -- Get the first product image
        (
          SELECT json_build_object(
            'id', pi.id,
            'url', pi.url,
            'public_id', pi.public_id
          )
          FROM product_images pi 
          WHERE pi.product_id = p.id 
          ORDER BY pi.created_at ASC 
          LIMIT 1
        ) as primary_image,
        -- Get all product tags as array
        COALESCE(
          ARRAY_AGG(DISTINCT pt.name) FILTER (WHERE pt.name IS NOT NULL),
          ARRAY[]::text[]
        ) as product_tags,
        -- Get subcategory info
        (
          SELECT json_build_object(
            'id', s.id,
            'name', s.name,
            'category_id', s.category_id
          )
          FROM subcategories s 
          WHERE s.id = p.subcategory_id
        ) as subcategory
      FROM products p
      LEFT JOIN product_tag_mappings ptm ON p.id::text = ptm.product_id
      LEFT JOIN product_tags pt ON ptm.tag_id = pt.id AND pt.is_active = true
      WHERE p.is_published = true
    `

        const queryParams: any[] = []
        let paramCount = 0

        // Add tag filtering based on collection criteria
        if (collection.tag_filters && collection.tag_filters.length > 0) {
            paramCount++
            if (collection.tag_match_mode === 'ALL') {
                // ALL mode: Product must have ALL specified tags
                productQuery += ` AND EXISTS (
          SELECT 1 FROM product_tag_mappings ptm2
          JOIN product_tags pt2 ON ptm2.tag_id = pt2.id
          WHERE ptm2.product_id = p.id::text
          AND pt2.name = ANY($${paramCount})
          GROUP BY ptm2.product_id
          HAVING COUNT(DISTINCT pt2.name) >= $${paramCount + 1}
        )`
                queryParams.push(collection.tag_filters, collection.tag_filters.length)
                paramCount++
            } else {
                // ANY mode: Product must have at least one of the specified tags
                productQuery += ` AND EXISTS (
          SELECT 1 FROM product_tag_mappings ptm2
          JOIN product_tags pt2 ON ptm2.tag_id = pt2.id
          WHERE ptm2.product_id = p.id::text
          AND pt2.name = ANY($${paramCount})
        )`
                queryParams.push(collection.tag_filters)
            }
        }

        // Add price filtering (collection-level)
        if (collection.min_price) {
            paramCount++
            productQuery += ` AND p.price >= $${paramCount}`
            queryParams.push(collection.min_price)
        }
        if (collection.max_price) {
            paramCount++
            productQuery += ` AND p.price <= $${paramCount}`
            queryParams.push(collection.max_price)
        }

        // Add additional price filtering (user-level)
        if (min_price) {
            paramCount++
            productQuery += ` AND p.price >= $${paramCount}`
            queryParams.push(parseFloat(min_price as string))
        }
        if (max_price) {
            paramCount++
            productQuery += ` AND p.price <= $${paramCount}`
            queryParams.push(parseFloat(max_price as string))
        }

        // Add search filtering
        if (search) {
            paramCount++
            productQuery += ` AND (
        p.name ILIKE $${paramCount} OR 
        p.description ILIKE $${paramCount} OR
        p.sku ILIKE $${paramCount}
      )`
            queryParams.push(`%${search}%`)
        }

        // Group by and order
        productQuery += `
      GROUP BY p.id, p.name, p.sku, p.description, p.price, p.sale_price, 
               p.stock_quantity, p.karat, p.weight, p.tags, p.is_published, 
               p.subcategory_id, p.created_at, p.updated_at
      ORDER BY p.${sort_by} ${sort_order.toUpperCase()}
    `

        // Add pagination
        paramCount++
        productQuery += ` LIMIT $${paramCount}`
        queryParams.push(parseInt(limit as string))

        paramCount++
        productQuery += ` OFFSET $${paramCount}`
        queryParams.push(parseInt(offset as string))

        // Execute the optimized query
        const { data: products, error: productsError } = await supabase
            .rpc('execute_sql', {
                sql: productQuery,
                params: queryParams
            })

        if (productsError) {
            console.error('Products query error:', productsError)
            // Fallback to simple query if RPC fails
            const { data: fallbackProducts, error: fallbackError } = await supabase
                .from('products')
                .select(`
          *,
          product_images!inner (id, url, public_id),
          subcategories!inner (id, name, category_id)
        `)
                .eq('is_published', true)
                .range(parseInt(offset as string), parseInt(offset as string) + parseInt(limit as string) - 1)
                .order(sort_by as string, { ascending: sort_order === 'asc' })

            if (fallbackError) throw fallbackError

            return {
                success: true,
                data: {
                    collection,
                    products: fallbackProducts || [],
                    total: fallbackProducts?.length || 0,
                    has_more: (fallbackProducts?.length || 0) === parseInt(limit as string),
                    query_type: 'fallback'
                }
            }
        }

        // Update collection view count (async, don't wait)
        supabase
            .from('collections')
            .update({
                view_count: (collection.view_count || 0) + 1,
                updated_at: new Date().toISOString()
            })
            .eq('id', collection.id)
            .then(() => { })
            .catch(err => console.error('Failed to update view count:', err))

        return {
            success: true,
            data: {
                collection,
                products: products || [],
                total: products?.length || 0,
                has_more: (products?.length || 0) === parseInt(limit as string),
                query_type: 'optimized',
                filters: {
                    tag_filters: collection.tag_filters,
                    tag_match_mode: collection.tag_match_mode,
                    min_price: collection.min_price,
                    max_price: collection.max_price,
                    applied_filters: {
                        min_price: min_price ? parseFloat(min_price as string) : null,
                        max_price: max_price ? parseFloat(max_price as string) : null,
                        search: search || null
                    }
                }
            }
        }

    } catch (error: any) {
        console.error('Collection products fetch error:', error)

        return {
            success: false,
            error: {
                message: 'Failed to fetch collection products',
                details: error.message
            }
        }
    }
}) 