import { defineEventHandler, getRouterParam, createError } from 'h3'
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const id = getRouterParam(event, 'id')

    if (!id) {
        throw createError({
            statusCode: 400,
            message: 'Product ID is required'
        })
    }

    // Get Supabase credentials from runtime config
    const supabaseUrl = config.public.supabaseUrl || process.env.SUPABASE_URL || ''
    const supabaseKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || ''

    if (!supabaseUrl || !supabaseKey) {
        throw createError({
            statusCode: 500,
            message: 'Missing Supabase configuration'
        })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    try {
        // Get current product status
        const { data: product, error: fetchError } = await supabase
            .from('products')
            .select('id, is_published')
            .eq('id', parseInt(id))
            .single()

        if (fetchError || !product) {
            console.error('Error fetching product:', fetchError)
            throw createError({
                statusCode: 404,
                message: 'Product not found'
            })
        }

        // Toggle publish status
        const { data: updatedProduct, error: updateError } = await supabase
            .from('products')
            .update({ is_published: !product.is_published })
            .eq('id', parseInt(id))
            .select(`
                *,
                subcategories (
                    id,
                    name,
                    categories (
                        id,
                        name
                    )
                ),
                product_images (
                    id,
                    url,
                    public_id,
                    is_default
                )
            `)
            .single()

        if (updateError) {
            console.error('Error updating product:', updateError)
            throw createError({
                statusCode: 500,
                message: 'Failed to update product status'
            })
        }

        // Transform data to match expected format
        const transformedProduct = {
            id: updatedProduct.id,
            name: updatedProduct.name,
            sku: updatedProduct.sku,
            price: updatedProduct.price,
            stockQuantity: updatedProduct.stock_quantity,
            isPublished: updatedProduct.is_published,
            karat: updatedProduct.karat,
            weight: updatedProduct.weight,
            description: updatedProduct.description,
            tags: updatedProduct.tags || [],
            createdAt: updatedProduct.created_at,
            updatedAt: updatedProduct.updated_at,
            subcategory: {
                id: updatedProduct.subcategories?.id,
                name: updatedProduct.subcategories?.name,
                category: {
                    id: updatedProduct.subcategories?.categories?.id,
                    name: updatedProduct.subcategories?.categories?.name
                }
            },
            images: updatedProduct.product_images?.map((img: any) => ({
                url: img.url,
                publicId: img.public_id,
                isDefault: img.is_default
            })) || []
        }

        return transformedProduct
    } catch (error: any) {
        console.error('Error toggling product publish status:', error)

        // If it's already a createError, re-throw it
        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            message: 'Internal server error'
        })
    }
}) 