import { serverSupabaseClient } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
    try {
        const client = await serverSupabaseClient(event)
        const body = await readBody(event)

        const { name, mobile, email, message, productIds } = body

        // Validate required fields
        if (!name || !mobile || !message || !productIds || !Array.isArray(productIds)) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Missing required fields: name, mobile, message, and productIds array'
            })
        }

        // Get user from session
        const { data: { user }, error: userError } = await client.auth.getUser()

        if (userError || !user) {
            throw createError({
                statusCode: 401,
                statusMessage: 'User not authenticated'
            })
        }

        // Convert productIds to integers if they're strings
        const numericProductIds = productIds.map(id => parseInt(id))

        // Get product details for the enquiry
        const { data: products, error: productsError } = await client
            .from('products')
            .select('id, name, price, category, images')
            .in('id', numericProductIds)

        if (productsError) {
            console.error('Error fetching products:', productsError)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to fetch product details'
            })
        }

        // Create bulk enquiry record
        const { data: enquiry, error: enquiryError } = await client
            .from('enquiries')
            .insert({
                user_id: user.id,
                customer_name: name,
                customer_mobile: mobile,
                customer_email: email,
                message: message,
                enquiry_type: 'bulk',
                status: 'pending',
                created_at: new Date().toISOString()
            })
            .select()
            .single()

        if (enquiryError) {
            console.error('Error creating enquiry:', enquiryError)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to create enquiry'
            })
        }

        // Create enquiry items for each product
        const enquiryItems = products.map(product => ({
            enquiry_id: enquiry.id,
            product_id: product.id,
            product_name: product.name,
            product_price: product.price,
            product_category: product.category,
            product_image: product.images?.[0] || null
        }))

        const { error: itemsError } = await client
            .from('enquiry_items')
            .insert(enquiryItems)

        if (itemsError) {
            console.error('Error creating enquiry items:', itemsError)
            // Try to clean up the enquiry if items creation fails
            await client.from('enquiries').delete().eq('id', enquiry.id)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to create enquiry items'
            })
        }

        // Send notification (you can implement SMS/email here)
        console.log(`📧 Bulk enquiry received from ${name} (${mobile}) for ${productIds.length} items`)
        console.log(`📋 Enquiry ID: ${enquiry.id}`)
        console.log(`📦 Products: ${products.map(p => p.name).join(', ')}`)

        return {
            success: true,
            message: 'Bulk enquiry submitted successfully',
            enquiryId: enquiry.id,
            productCount: productIds.length
        }

    } catch (error: any) {
        console.error('Bulk enquiry error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Failed to submit bulk enquiry'
        })
    }
}) 