import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'
import { isAdmin } from '../middleware/auth.middleware'

const router = Router()
const prisma = new PrismaClient()

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Configure multer for memory storage
const upload = multer({ storage: multer.memoryStorage() })

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                images: true,
                subcategory: {
                    include: {
                        category: true
                    }
                }
            }
        })
        res.json(products)
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({ error: 'Failed to fetch products' })
    }
})

// Create new product
router.post('/', isAdmin, upload.array('images', 5), async (req, res) => {
    try {
        const {
            name,
            sku,
            categoryId,
            subcategoryId,
            price,
            salePrice,
            stockQuantity,
            karat,
            weight,
            description,
            tags
        } = req.body

        // Upload images to Cloudinary
        const imageUploadPromises = (req.files as Express.Multer.File[]).map(file => {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {
                        folder: 'jewellery_products',
                        resource_type: 'auto'
                    },
                    (error, result) => {
                        if (error) reject(error)
                        else resolve(result)
                    }
                )

                uploadStream.end(file.buffer)
            })
        })

        const uploadedImages = await Promise.all(imageUploadPromises)

        // Create product in database
        const product = await prisma.product.create({
            data: {
                name,
                sku,
                price: parseFloat(price),
                salePrice: salePrice ? parseFloat(salePrice) : null,
                stockQuantity: parseInt(stockQuantity),
                karat,
                weight: parseFloat(weight),
                description,
                tags: tags ? JSON.parse(tags) : [],
                subcategoryId: parseInt(subcategoryId),
                images: {
                    create: uploadedImages.map((image: any) => ({
                        url: image.secure_url,
                        publicId: image.public_id
                    }))
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

        res.status(201).json(product)
    } catch (error) {
        console.error('Error creating product:', error)
        res.status(500).json({ error: 'Failed to create product' })
    }
})

// Update product
router.put('/:id', isAdmin, upload.array('images', 5), async (req, res) => {
    try {
        const { id } = req.params
        const {
            name,
            sku,
            categoryId,
            subcategoryId,
            price,
            salePrice,
            stockQuantity,
            karat,
            weight,
            description,
            tags,
            deleteImageIds
        } = req.body

        // Delete removed images from Cloudinary
        if (deleteImageIds) {
            const imageIds = JSON.parse(deleteImageIds)
            await Promise.all(
                imageIds.map(async (imageId: string) => {
                    const image = await prisma.productImage.findUnique({
                        where: { id: parseInt(imageId) }
                    })
                    if (image?.publicId) {
                        await cloudinary.uploader.destroy(image.publicId)
                    }
                    await prisma.productImage.delete({
                        where: { id: parseInt(imageId) }
                    })
                })
            )
        }

        // Upload new images to Cloudinary
        const imageUploadPromises = (req.files as Express.Multer.File[]).map(file => {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {
                        folder: 'jewellery_products',
                        resource_type: 'auto'
                    },
                    (error, result) => {
                        if (error) reject(error)
                        else resolve(result)
                    }
                )

                uploadStream.end(file.buffer)
            })
        })

        const uploadedImages = await Promise.all(imageUploadPromises)

        // Update product in database
        const product = await prisma.product.update({
            where: { id: parseInt(id) },
            data: {
                name,
                sku,
                price: parseFloat(price),
                salePrice: salePrice ? parseFloat(salePrice) : null,
                stockQuantity: parseInt(stockQuantity),
                karat,
                weight: parseFloat(weight),
                description,
                tags: tags ? JSON.parse(tags) : [],
                subcategoryId: parseInt(subcategoryId),
                images: {
                    create: uploadedImages.map((image: any) => ({
                        url: image.secure_url,
                        publicId: image.public_id
                    }))
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

        res.json(product)
    } catch (error) {
        console.error('Error updating product:', error)
        res.status(500).json({ error: 'Failed to update product' })
    }
})

// Delete product
router.delete('/:id', isAdmin, async (req, res) => {
    try {
        const { id } = req.params

        // Get product images
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) },
            include: { images: true }
        })

        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }

        // Delete images from Cloudinary
        await Promise.all(
            product.images.map(async (image) => {
                if (image.publicId) {
                    await cloudinary.uploader.destroy(image.publicId)
                }
            })
        )

        // Delete product from database
        await prisma.product.delete({
            where: { id: parseInt(id) }
        })

        res.status(204).send()
    } catch (error) {
        console.error('Error deleting product:', error)
        res.status(500).json({ error: 'Failed to delete product' })
    }
})

// Toggle product publish status
router.post('/:id/toggle-publish', isAdmin, async (req, res) => {
    try {
        const { id } = req.params

        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) }
        })

        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }

        const updatedProduct = await prisma.product.update({
            where: { id: parseInt(id) },
            data: {
                isPublished: !product.isPublished
            }
        })

        res.json(updatedProduct)
    } catch (error) {
        console.error('Error toggling product publish status:', error)
        res.status(500).json({ error: 'Failed to toggle product publish status' })
    }
})

export default router 