// server/api/products/[id]/images/index.ts
import { defineEventHandler, createError } from 'h3'
import { readBody } from 'h3'
import { PrismaClient } from '../../../../../src/generated/prisma'
import { uploadProductImage, deleteImage } from '../../../services/cloudinary'
import type { H3Event } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event: H3Event) => {
  const method = event.node.req.method
  const productId = parseInt(event.context.params?.id as string)

  // Validate product exists
  const product = await prisma.product.findUnique({
    where: { id: productId }
  })

  if (!product) {
    throw createError({
      statusCode: 404,
      message: 'Product not found'
    })
  }

  // Handle GET request - list all images for a product
  if (method === 'GET') {
    const images = await prisma.productImage.findMany({
      where: { productId },
      orderBy: { priority: 'asc' }
    })

    return images
  }

  // Handle POST request - upload a new image
  if (method === 'POST') {
    const body = await readBody(event)
    const { imageBase64, alt, priority, isDefault } = body

    if (!imageBase64) {
      throw createError({
        statusCode: 400,
        message: 'Image data is required'
      })
    }

    try {
      // Upload to cloudinary
      const uploadResult = await uploadProductImage(
        imageBase64,
        productId,
        { alt, isDefault: !!isDefault }
      )

      // Update database with image info
      const newImage = await prisma.productImage.create({
        data: {
          productId,
          imageUrl: uploadResult.secure_url,
          cloudId: uploadResult.public_id,
          alt: alt || null,
          priority: priority || 99,
          width: uploadResult.width,
          height: uploadResult.height,
          isDefault: !!isDefault
        }
      })

      // If this is the default image, update any previous defaults
      if (isDefault) {
        await prisma.productImage.updateMany({
          where: {
            productId,
            id: { not: newImage.id },
            isDefault: true
          },
          data: { isDefault: false }
        })
      }

      return newImage
    } catch (error) {
      console.error('Error uploading image:', error)
      throw createError({
        statusCode: 500,
        message: 'Failed to upload image'
      })
    }
  }

  // Handle any other methods
  throw createError({
    statusCode: 405,
    message: 'Method not allowed'
  })
})