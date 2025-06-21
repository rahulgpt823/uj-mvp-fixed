import { defineEventHandler, readBody, getQuery, createError } from 'h3'
import { createClient } from '@supabase/supabase-js'
import { v2 as cloudinary } from 'cloudinary'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    // Debug logging for Cloudinary configuration
    console.log('🔧 Cloudinary Config Check:')
    console.log('- Cloud Name:', config.cloudinaryCloudName ? `"${config.cloudinaryCloudName}"` : 'Missing')
    console.log('- API Key:', config.cloudinaryApiKey ? `"${config.cloudinaryApiKey}"` : 'Missing')
    console.log('- API Secret:', config.cloudinaryApiSecret ? 'Set' : 'Missing')
    console.log('- Environment variables check:')
    console.log('  - CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME ? `"${process.env.CLOUDINARY_CLOUD_NAME}"` : 'Missing')
    console.log('  - CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY ? `"${process.env.CLOUDINARY_API_KEY}"` : 'Missing')
    console.log('  - CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Missing')

    // Configure Cloudinary
    cloudinary.config({
        cloud_name: config.cloudinaryCloudName,
        api_key: config.cloudinaryApiKey,
        api_secret: config.cloudinaryApiSecret
    })

    // Get Supabase credentials from runtime config
    const supabaseUrl = config.public.supabaseUrl || process.env.SUPABASE_URL || ''
    const supabaseKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || ''

    console.log('🔧 Supabase Config Check:')
    console.log('- URL:', supabaseUrl ? 'Set' : 'Missing')
    console.log('- Key:', supabaseKey ? 'Set' : 'Missing')

    if (!supabaseUrl || !supabaseKey) {
        console.log('❌ Missing Supabase configuration')
        throw createError({
            statusCode: 500,
            message: 'Missing Supabase configuration'
        })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const method = event.method

    try {
        switch (method) {
            case 'GET':
                console.log('🔍 Fetching products using Supabase client...')

                try {
                    const { data: products, error } = await supabase
                        .from('products')
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
                        .order('created_at', { ascending: false })

                    if (error) {
                        console.log('❌ Supabase query error:', error)

                        // Check for specific error types
                        if (error.message.includes('relation') && error.message.includes('does not exist')) {
                            throw createError({
                                statusCode: 500,
                                message: `Database table missing: ${error.message}. Please run the database setup scripts.`
                            })
                        }

                        if (error.message.includes('authentication')) {
                            throw createError({
                                statusCode: 401,
                                message: `Database authentication failed: ${error.message}. Please check your Supabase credentials.`
                            })
                        }

                        throw createError({
                            statusCode: 500,
                            message: `Database error: ${error.message}`
                        })
                    }

                    console.log('✅ Successfully fetched', products?.length || 0, 'products')

                    // Transform data to match expected format
                    const transformedProducts = products?.map(product => ({
                        id: product.id,
                        name: product.name,
                        sku: product.sku,
                        price: product.price,
                        stockQuantity: product.stock_quantity,
                        isPublished: product.is_published,
                        karat: product.karat,
                        weight: product.weight,
                        description: product.description,
                        tags: product.tags || [],
                        createdAt: product.created_at,
                        updatedAt: product.updated_at,
                        subcategory: {
                            id: product.subcategories?.id,
                            name: product.subcategories?.name,
                            category: {
                                id: product.subcategories?.categories?.id,
                                name: product.subcategories?.categories?.name
                            }
                        },
                        images: product.product_images?.map((img: any) => ({
                            url: img.url,
                            publicId: img.public_id,
                            isDefault: img.is_default
                        })) || []
                    })) || []

                    return transformedProducts
                } catch (dbError: any) {
                    console.log('❌ Database connection failed:', dbError)

                    // If it's already a createError, re-throw it
                    if (dbError.statusCode) {
                        throw dbError
                    }

                    // Handle specific connection errors
                    if (dbError.message.includes('network') || dbError.message.includes('timeout')) {
                        throw createError({
                            statusCode: 503,
                            message: 'Database connection timeout. Please check your network connection and try again.'
                        })
                    }

                    if (dbError.message.includes('Invalid API key')) {
                        throw createError({
                            statusCode: 401,
                            message: 'Invalid Supabase credentials. Please check your SUPABASE_URL and SUPABASE_ANON_KEY environment variables.'
                        })
                    }

                    // Generic database error
                    throw createError({
                        statusCode: 500,
                        message: `Database connection failed: ${dbError.message}. Please check your environment variables and database setup.`
                    })
                }

            case 'POST':
                console.log('📝 Creating product using Supabase client...')
                const body = await readBody(event)
                const { name, sku, categoryId, subcategoryId, price, stockQuantity, karat, weight, description, tags, images = [] } = body

                console.log('Product creation request:')
                console.log('- Name:', name)
                console.log('- SKU:', sku)
                console.log('- Category:', categoryId)
                console.log('- Subcategory:', subcategoryId)
                console.log('- Karat:', karat)
                console.log('- Images count:', images.length)

                try {
                    // First, find the subcategory ID by name
                    const { data: subcategories, error: subError } = await supabase
                        .from('subcategories')
                        .select('id, name, categories(id, name)')
                        .eq('name', subcategoryId)
                        .single()

                    if (subError || !subcategories) {
                        console.log('❌ Subcategory not found:', subcategoryId)
                        throw createError({
                            statusCode: 400,
                            message: `Subcategory "${subcategoryId}" not found`
                        })
                    }

                    console.log('✅ Found subcategory:', subcategories)

                    // Create the product first
                    const { data: newProduct, error: productError } = await supabase
                        .from('products')
                        .insert({
                            name,
                            sku,
                            price: Number(price),
                            stock_quantity: Number(stockQuantity),
                            karat,
                            weight: Number(weight),
                            description,
                            tags,
                            subcategory_id: subcategories.id,
                            is_published: false
                        })
                        .select(`
                            *,
                            subcategories (
                                id,
                                name,
                                categories (
                                    id,
                                    name
                                )
                            )
                        `)
                        .single()

                    if (productError) {
                        console.log('❌ Product creation error:', productError)
                        throw createError({
                            statusCode: 500,
                            message: `Failed to create product: ${productError.message}`
                        })
                    }

                    console.log('✅ Product created successfully:', newProduct)

                    // Upload images if provided
                    let uploadedImages: any[] = []
                    if (images && images.length > 0) {
                        console.log('📸 Uploading', images.length, 'images...')

                        // Generate folder name: category->subcategory->name format
                        const sanitizeName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')
                        const categoryFolder = sanitizeName(categoryId || 'uncategorized')
                        const subcategoryFolder = sanitizeName(subcategoryId || 'general')

                        // Generate product name with format: jewel-first3letters-number
                        const firstThreeLetters = (categoryId || 'cat').substring(0, 3).toLowerCase()
                        const productFolder = `jewel-${firstThreeLetters}-${newProduct.id}`

                        const folderPath = `${categoryFolder}/${subcategoryFolder}/${productFolder}`

                        console.log('📁 Uploading images to folder:', folderPath)

                        // Upload images to Cloudinary
                        const uploadPromises = images.map(async (imageBase64: string, index: number) => {
                            try {
                                console.log(`📤 Uploading image ${index + 1}/${images.length}...`)

                                const result = await cloudinary.uploader.upload(imageBase64, {
                                    folder: folderPath,
                                    public_id: `image-${index + 1}`,
                                    resource_type: 'image',
                                    timeout: 60000, // 60 seconds timeout
                                    transformation: [
                                        { width: 1200, height: 1200, crop: 'limit' },
                                        { quality: 'auto:good' },
                                        { fetch_format: 'auto' }
                                    ]
                                })

                                console.log(`✅ Image ${index + 1} uploaded successfully:`, result.secure_url)

                                // Save image metadata to Supabase
                                const { data: imageRecord, error: imageError } = await supabase
                                    .from('product_images')
                                    .insert({
                                        product_id: newProduct.id,
                                        url: result.secure_url,
                                        public_id: result.public_id,
                                        width: result.width,
                                        height: result.height,
                                        format: result.format,
                                        is_default: index === 0 // First image is default
                                    })
                                    .select()
                                    .single()

                                if (imageError) {
                                    console.error('❌ Error saving image metadata:', imageError)
                                    // Continue with upload even if metadata save fails
                                }

                                return {
                                    url: result.secure_url,
                                    publicId: result.public_id,
                                    isDefault: index === 0
                                }
                            } catch (uploadError: any) {
                                console.error(`❌ Error uploading image ${index + 1}:`, uploadError)

                                // If it's a timeout, try with a smaller image
                                if (uploadError.name === 'TimeoutError' || uploadError.message?.includes('timeout')) {
                                    console.log(`🔄 Retrying image ${index + 1} with reduced quality...`)
                                    try {
                                        const retryResult = await cloudinary.uploader.upload(imageBase64, {
                                            folder: folderPath,
                                            public_id: `image-${index + 1}`,
                                            resource_type: 'image',
                                            timeout: 120000, // 2 minutes timeout for retry
                                            transformation: [
                                                { width: 800, height: 800, crop: 'limit' },
                                                { quality: '80' },
                                                { fetch_format: 'auto' }
                                            ]
                                        })

                                        console.log(`✅ Image ${index + 1} uploaded on retry:`, retryResult.secure_url)

                                        // Save retry result metadata
                                        const { data: imageRecord, error: imageError } = await supabase
                                            .from('product_images')
                                            .insert({
                                                product_id: newProduct.id,
                                                url: retryResult.secure_url,
                                                public_id: retryResult.public_id,
                                                width: retryResult.width,
                                                height: retryResult.height,
                                                format: retryResult.format,
                                                is_default: index === 0
                                            })
                                            .select()
                                            .single()

                                        if (imageError) {
                                            console.error('❌ Error saving retry image metadata:', imageError)
                                        }

                                        return {
                                            url: retryResult.secure_url,
                                            publicId: retryResult.public_id,
                                            isDefault: index === 0
                                        }
                                    } catch (retryError) {
                                        console.error(`❌ Retry failed for image ${index + 1}:`, retryError)
                                        return null
                                    }
                                }

                                return null
                            }
                        })

                        uploadedImages = (await Promise.all(uploadPromises)).filter(img => img !== null)
                        console.log('✅ Successfully uploaded', uploadedImages.length, 'images')
                    }

                    // Transform response to match expected format
                    const transformedProduct = {
                        id: newProduct.id,
                        name: newProduct.name,
                        sku: newProduct.sku,
                        price: newProduct.price,
                        stockQuantity: newProduct.stock_quantity,
                        isPublished: newProduct.is_published,
                        karat: newProduct.karat,
                        weight: newProduct.weight,
                        description: newProduct.description,
                        tags: newProduct.tags || [],
                        subcategory: {
                            id: newProduct.subcategories?.id,
                            name: newProduct.subcategories?.name,
                            category: {
                                id: newProduct.subcategories?.categories?.id,
                                name: newProduct.subcategories?.categories?.name
                            }
                        },
                        images: uploadedImages
                    }

                    return transformedProduct
                } catch (dbError: any) {
                    console.log('❌ Database connection failed during product creation:', dbError)

                    // If it's already a createError, re-throw it
                    if (dbError.statusCode) {
                        throw dbError
                    }

                    // Handle specific connection errors for product creation
                    if (dbError.message.includes('network') || dbError.message.includes('timeout')) {
                        throw createError({
                            statusCode: 503,
                            message: 'Database connection timeout during product creation. Please check your network connection and try again.'
                        })
                    }

                    if (dbError.message.includes('Invalid API key')) {
                        throw createError({
                            statusCode: 401,
                            message: 'Invalid Supabase credentials. Please check your SUPABASE_URL and SUPABASE_ANON_KEY environment variables.'
                        })
                    }

                    if (dbError.message.includes('relation') && dbError.message.includes('does not exist')) {
                        throw createError({
                            statusCode: 500,
                            message: `Database table missing: ${dbError.message}. Please run the database setup scripts.`
                        })
                    }

                    // Generic database error for product creation
                    throw createError({
                        statusCode: 500,
                        message: `Failed to create product due to database error: ${dbError.message}. Please check your environment variables and database setup.`
                    })
                }

            default:
                throw createError({
                    statusCode: 405,
                    message: `Method ${method} not allowed`
                })
        }
    } catch (error: any) {
        console.error('❌ API Error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Internal server error'
        })
    }
}) 