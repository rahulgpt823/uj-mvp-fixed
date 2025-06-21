import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const {
            page = 1,
            limit = 10,
            search = '',
            category = '',
            isPublished
        } = req.query;

        const skip = (Number(page) - 1) * Number(limit);

        const where = {
            AND: [
                search ? {
                    OR: [
                        { name: { contains: String(search), mode: 'insensitive' } },
                        { description: { contains: String(search), mode: 'insensitive' } }
                    ]
                } : {},
                category ? { subcategory: { category: { name: String(category) } } } : {},
                isPublished !== undefined ? { isPublished: isPublished === 'true' } : {}
            ]
        };

        const [products, total] = await Promise.all([
            prisma.product.findMany({
                where,
                skip,
                take: Number(limit),
                include: {
                    subcategory: {
                        include: {
                            category: true
                        }
                    },
                    images: true
                }
            }),
            prisma.product.count({ where })
        ]);

        res.json({
            products,
            total,
            page: Number(page),
            totalPages: Math.ceil(total / Number(limit))
        });
    } catch (error) {
        console.error('Error getting products:', error);
        res.status(500).json({ message: 'Error getting products' });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findUnique({
            where: { id: Number(id) },
            include: {
                subcategory: {
                    include: {
                        category: true
                    }
                },
                images: true
            }
        });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error('Error getting product:', error);
        res.status(500).json({ message: 'Error getting product' });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const {
            name,
            slug,
            description,
            gender,
            netWeight,
            grossWeight,
            huid,
            sku,
            karat,
            price,
            stockQuantity,
            subcategoryId,
            isPublished
        } = req.body;

        const product = await prisma.product.create({
            data: {
                name,
                slug,
                description,
                gender,
                netWeight,
                grossWeight,
                huid,
                sku,
                karat,
                price,
                stockQuantity,
                subcategoryId,
                isPublished
            },
            include: {
                subcategory: {
                    include: {
                        category: true
                    }
                }
            }
        });

        res.status(201).json(product);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Error creating product' });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.update({
            where: { id: Number(id) },
            data: req.body,
            include: {
                subcategory: {
                    include: {
                        category: true
                    }
                },
                images: true
            }
        });

        res.json(product);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Error updating product' });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.product.delete({
            where: { id: Number(id) }
        });

        res.status(204).send();
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Error deleting product' });
    }
};

export const togglePublishStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findUnique({
            where: { id: Number(id) }
        });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const updatedProduct = await prisma.product.update({
            where: { id: Number(id) },
            data: { isPublished: !product.isPublished }
        });

        res.json(updatedProduct);
    } catch (error) {
        console.error('Error toggling publish status:', error);
        res.status(500).json({ message: 'Error toggling publish status' });
    }
}; 