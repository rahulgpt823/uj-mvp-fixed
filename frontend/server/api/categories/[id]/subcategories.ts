import { defineEventHandler, readBody, getRouterParam, createError } from 'h3'
import prisma from '~/utils/prisma'

export default defineEventHandler(async (event) => {
    const method = event.method
    const categoryId = getRouterParam(event, 'id')

    if (!categoryId) {
        throw createError({
            statusCode: 400,
            message: 'Category ID is required'
        })
    }

    try {
        switch (method) {
            case 'GET':
                const subcategories = await prisma.subcategory.findMany({
                    where: {
                        categoryId: parseInt(categoryId)
                    }
                })
                return subcategories

            case 'POST':
                const body = await readBody(event)
                const { name, description } = body

                const subcategory = await prisma.subcategory.create({
                    data: {
                        name,
                        description,
                        categoryId: parseInt(categoryId)
                    }
                })

                return subcategory

            default:
                throw new Error(`Method ${method} not allowed`)
        }
    } catch (error) {
        console.error('Error handling subcategory request:', error)
        throw createError({
            statusCode: 500,
            message: 'Internal server error'
        })
    }
}) 