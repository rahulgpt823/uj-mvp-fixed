import { createClient } from '@supabase/supabase-js'
import { verifyAuthToken } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const { productIds, message } = await readBody(event)

    if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
        throw createError({ statusCode: 400, message: 'Product IDs are required.' })
    }

    const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey)
    const { userId } = verifyAuthToken(event)

    // Create enquiry
    const { data: enquiry, error: enquiryError } = await supabase
        .from('enquiries')
        .insert({ user_id: userId, message: message || '' })
        .select('id')
        .single()

    if (enquiryError) {
        console.error('Error creating enquiry:', enquiryError)
        throw createError({ statusCode: 500, message: 'Could not create enquiry.' })
    }

    // Add enquiry items
    const enquiryItems = productIds.map(productId => ({
        enquiry_id: enquiry.id,
        product_id: productId,
    }))

    const { error: itemsError } = await supabase
        .from('enquiry_items')
        .insert(enquiryItems)

    if (itemsError) {
        console.error('Error adding enquiry items:', itemsError)
        throw createError({ statusCode: 500, message: 'Could not add items to enquiry.' })
    }

    return { success: true, enquiryId: enquiry.id }
}) 