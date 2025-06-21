import { defineEventHandler, readBody, createError } from 'h3'
import { v2 as cloudinary } from 'cloudinary'
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    // Configure Cloudinary
    cloudinary.config({
        cloud_name: config.cloudinaryCloudName,
        api_key: config.cloudinaryApiKey,
        api_secret: config.cloudinaryApiSecret
    })

    const supabaseUrl = config.public.supabaseUrl || process.env.SUPABASE_URL || ''
    const supabaseKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || ''

    if (!supabaseUrl || !supabaseKey) {
        throw createError({
            statusCode: 500,
            message: 'Missing Supabase configuration'
        })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const method = event.method

    if (method !== 'POST') {
        throw createError({
            statusCode: 405,
            message: `Method ${method} not allowed`
        })
    }

    try {
        const body = await readBody(event)
        const { productId, images, category, subcategory, productName } = body

        if (!productId || !images || !Array.isArray(images)) {
            throw createError({
                statusCode: 400,
                message: 'Product ID and images array are required'
            })
        }

        // Generate folder name: category->subcategory->name format
        const sanitizeName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')
        const categoryFolder = sanitizeName(category || 'uncategorized')
        const subcategoryFolder = sanitizeName(subcategory || 'general')

        // Generate product name with format: jewel-first3letters-number
        const firstThreeLetters = (category || 'cat').substring(0, 3).toLowerCase()
        const timestamp = Date.now()
        const productFolder = `jewel-${firstThreeLetters}-${timestamp}`

        const folderPath = `${categoryFolder}/${subcategoryFolder}/${productFolder}`

        console.log('📁 Uploading images to folder:', folderPath)

        // Upload images to Cloudinary
        const uploadPromises = images.map(async (imageBase64: string, index: number) => {
            try {
                const result = await cloudinary.uploader.upload(imageBase64, {
                    folder: folderPath,
                    public_id: `image-${index + 1}`,
                    resource_type: 'image',
                    transformation: [
                        { width: 1200, height: 1200, crop: 'limit' },
                        { quality: 'auto:good' },
                        { fetch_format: 'auto' }
                    ]
                })

                // Save image metadata to Supabase
                const { data: imageRecord, error: imageError } = await supabase
                    .from('product_images')
                    .insert({
                        product_id: productId,
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
                    console.error('Error saving image metadata:', imageError)
                    // Continue with upload even if metadata save fails
                }

                return {
                    url: result.secure_url,
                    publicId: result.public_id,
                    width: result.width,
                    height: result.height,
                    format: result.format,
                    isDefault: index === 0
                }
            } catch (uploadError) {
                console.error('Error uploading image:', uploadError)
                throw uploadError
            }
        })

        const uploadedImages = await Promise.all(uploadPromises)

        console.log('✅ Successfully uploaded', uploadedImages.length, 'images')

        return {
            success: true,
            images: uploadedImages,
            folderPath
        }

    } catch (error: any) {
        console.error('❌ Image upload error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Failed to upload images'
        })
    }
}) 