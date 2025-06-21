import { defineEventHandler, readBody, getRouterParam, createError } from 'h3'
import { v2 as cloudinary } from 'cloudinary'
import prisma from '~/utils/prisma'

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export default defineEventHandler(async (event) => {
    const method = event.method
    const id = getRouterParam(event, 'id')

    if (!id) {
        throw createError({
            statusCode: 400,
            message: 'Product ID is required'
        })
    }

    try {
        switch (method) {
            case 'GET':
                const product = await prisma.product.findUnique({
                    where: { id: parseInt(id) },
                    include: {
                        images: true,
                        subcategory: {
                            include: {
                                category: true
                            }
                        }
                    }
                })

                if (!product) {
                    throw createError({
                        statusCode: 404,
                        message: 'Product not found'
                    })
                }

                return product

            case 'PUT':
                const body = await readBody(event)
                const { name, sku, categoryId, subcategoryId, price, stockQuantity, karat, weight, description, tags, images, deletedImages } = body

                // Delete removed images from Cloudinary
                if (deletedImages?.length) {
                    await Promise.all(
                        deletedImages.map(async (publicId: string) => {
                            await cloudinary.uploader.destroy(publicId)
                        })
                    )
                }

                // Upload new images to Cloudinary
                const uploadedImages = await Promise.all(
                    (images || []).map(async (image: string) => {
                        const result = await cloudinary.uploader.upload(image, {
                            folder: 'products'
                        })
                        return {
                            url: result.secure_url,
                            publicId: result.public_id
                        }
                    })
                )

                // Update product in database
                const updatedProduct = await prisma.product.update({
                    where: { id: parseInt(id) },
                    data: {
                        name,
                        sku,
                        price,
                        stockQuantity,
                        karat,
                        weight,
                        description,
                        tags,
                        subcategoryId,
                        images: {
                            deleteMany: {
                                publicId: {
                                    in: deletedImages || []
                                }
                            },
                            create: uploadedImages
                        }
                    },
                    include: {
                        images: true,
                        subcategory: {
                            include: {
                                category: true
                            }
                        }
                    }
                })

                return updatedProduct

            case 'DELETE':
                // Get product images before deletion
                const productToDelete = await prisma.product.findUnique({
                    where: { id: parseInt(id) },
                    include: { images: true }
                })

                if (!productToDelete) {
                    throw createError({
                        statusCode: 404,
                        message: 'Product not found'
                    })
                }

                // Delete images from Cloudinary
                await Promise.all(
                    productToDelete.images.map(async (image) => {
                        await cloudinary.uploader.destroy(image.publicId)
                    })
                )

                // Delete product from database
                await prisma.product.delete({
                    where: { id: parseInt(id) }
                })

                return { message: 'Product deleted successfully' }

            default:
                throw new Error(`Method ${method} not allowed`)
        }
    } catch (error) {
        console.error('Error handling product request:', error)
        throw createError({
            statusCode: 500,
            message: 'Internal server error'
        })
    }
}) 