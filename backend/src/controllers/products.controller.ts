import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { supabase } from '../services/supabase';

const prisma = new PrismaClient();

export class ProductsController {
  // Get all products with pagination and filters
  async getProducts(req: Request, res: Response) {
    try {
      const {
        page = 1,
        limit = 10,
        search = '',
        category,
        isPublished,
        sortBy = 'createdAt',
        sortOrder = 'desc'
      } = req.query;

      const skip = (Number(page) - 1) * Number(limit);
      const take = Number(limit);

      const where: any = {
        ...(search && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { sku: { contains: search, mode: 'insensitive' } },
            { huid: { contains: search, mode: 'insensitive' } }
          ]
        }),
        ...(category && { subcategoryId: Number(category) }),
        ...(isPublished !== undefined && { isPublished: isPublished === 'true' })
      };

      const [products, total] = await Promise.all([
        prisma.product.findMany({
          where,
          include: {
            subcategory: true,
            images: true,
            tags: {
              include: {
                tag: true
              }
            }
          },
          skip,
          take,
          orderBy: {
            [sortBy as string]: sortOrder
          }
        }),
        prisma.product.count({ where })
      ]);

      res.json({
        data: products,
        meta: {
          total,
          page: Number(page),
          limit: Number(limit),
          totalPages: Math.ceil(total / Number(limit))
        }
      });
    } catch (error) {
      console.error('Error getting products:', error);
      res.status(500).json({ error: 'Failed to get products' });
    }
  }

  // Get single product by ID
  async getProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await prisma.product.findUnique({
        where: { id: Number(id) },
        include: {
          subcategory: true,
          images: true,
          tags: {
            include: {
              tag: true
            }
          },
          variants: true,
          materials: {
            include: {
              material: true
            }
          }
        }
      });

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json(product);
    } catch (error) {
      console.error('Error getting product:', error);
      res.status(500).json({ error: 'Failed to get product' });
    }
  }

  // Create new product
  async createProduct(req: Request, res: Response) {
    try {
      const productData = req.body;

      // Handle image uploads if present
      if (productData.images) {
        const imagePromises = productData.images.map(async (image: any) => {
          if (image.base64) {
            const { data, error } = await supabase.storage
              .from('products')
              .upload(`${Date.now()}-${image.name}`, image.base64);

            if (error) throw error;
            return { url: data.path };
          }
          return image;
        });

        productData.images = await Promise.all(imagePromises);
      }

      const product = await prisma.product.create({
        data: {
          ...productData,
          images: {
            create: productData.images
          },
          tags: {
            create: productData.tags?.map((tagId: number) => ({
              tagId
            }))
          },
          materials: {
            create: productData.materials?.map((material: any) => ({
              materialId: material.id,
              percentage: material.percentage
            }))
          }
        },
        include: {
          subcategory: true,
          images: true,
          tags: {
            include: {
              tag: true
            }
          }
        }
      });

      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Failed to create product' });
    }
  }

  // Update product
  async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const productData = req.body;

      // Handle image uploads if present
      if (productData.images) {
        const imagePromises = productData.images.map(async (image: any) => {
          if (image.base64) {
            const { data, error } = await supabase.storage
              .from('products')
              .upload(`${Date.now()}-${image.name}`, image.base64);

            if (error) throw error;
            return { url: data.path };
          }
          return image;
        });

        productData.images = await Promise.all(imagePromises);
      }

      // Update product with relations
      const product = await prisma.product.update({
        where: { id: Number(id) },
        data: {
          ...productData,
          images: {
            deleteMany: {},
            create: productData.images
          },
          tags: {
            deleteMany: {},
            create: productData.tags?.map((tagId: number) => ({
              tagId
            }))
          },
          materials: {
            deleteMany: {},
            create: productData.materials?.map((material: any) => ({
              materialId: material.id,
              percentage: material.percentage
            }))
          }
        },
        include: {
          subcategory: true,
          images: true,
          tags: {
            include: {
              tag: true
            }
          }
        }
      });

      res.json(product);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Failed to update product' });
    }
  }

  // Delete product
  async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;

      // Get product images to delete from storage
      const product = await prisma.product.findUnique({
        where: { id: Number(id) },
        include: { images: true }
      });

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      // Delete images from Supabase storage
      for (const image of product.images) {
        await supabase.storage
          .from('products')
          .remove([image.url]);
      }

      // Delete product and all related data
      await prisma.product.delete({
        where: { id: Number(id) }
      });

      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Failed to delete product' });
    }
  }

  // Toggle product publish status
  async togglePublish(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await prisma.product.findUnique({
        where: { id: Number(id) }
      });

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      const updatedProduct = await prisma.product.update({
        where: { id: Number(id) },
        data: {
          isPublished: !product.isPublished,
          publishedAt: !product.isPublished ? new Date() : null
        }
      });

      res.json(updatedProduct);
    } catch (error) {
      console.error('Error toggling product publish status:', error);
      res.status(500).json({ error: 'Failed to toggle product publish status' });
    }
  }
} 