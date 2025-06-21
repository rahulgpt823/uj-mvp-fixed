import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { deleteImage } from '../utils/cloudinary';

const prisma = new PrismaClient();

export const uploadProductImages = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const files = req.files as Express.Multer.File[];

        if (!files || files.length === 0) {
            return res.status(400).json({ message: 'No images uploaded' });
        }

        // Create image records in database
        const imagePromises = files.map(async (file: any) => {
            return prisma.productImage.create({
                data: {
                    productId: Number(productId),
                    imageUrl: file.path,
                    cloudId: file.filename,
                    alt: req.body.alt || '',
                    priority: Number(req.body.priority) || 99,
                    width: file.width,
                    height: file.height,
                    isDefault: req.body.isDefault === 'true'
                }
            });
        });

        const images = await Promise.all(imagePromises);

        res.status(201).json({
            message: 'Images uploaded successfully',
            images
        });
    } catch (error) {
        console.error('Error uploading images:', error);
        res.status(500).json({ message: 'Error uploading images' });
    }
};

export const deleteProductImage = async (req: Request, res: Response) => {
    try {
        const { imageId } = req.params;

        // Get image details before deletion
        const image = await prisma.productImage.findUnique({
            where: { id: Number(imageId) }
        });

        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        // Delete from Cloudinary
        if (image.cloudId) {
            await deleteImage(image.cloudId);
        }

        // Delete from database
        await prisma.productImage.delete({
            where: { id: Number(imageId) }
        });

        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).json({ message: 'Error deleting image' });
    }
};

export const updateImagePriority = async (req: Request, res: Response) => {
    try {
        const { imageId } = req.params;
        const { priority } = req.body;

        const image = await prisma.productImage.update({
            where: { id: Number(imageId) },
            data: { priority: Number(priority) }
        });

        res.json(image);
    } catch (error) {
        console.error('Error updating image priority:', error);
        res.status(500).json({ message: 'Error updating image priority' });
    }
};

export const setDefaultImage = async (req: Request, res: Response) => {
    try {
        const { imageId } = req.params;
        const { productId } = req.body;

        // First, set all images of the product to non-default
        await prisma.productImage.updateMany({
            where: { productId: Number(productId) },
            data: { isDefault: false }
        });

        // Then set the selected image as default
        const image = await prisma.productImage.update({
            where: { id: Number(imageId) },
            data: { isDefault: true }
        });

        res.json(image);
    } catch (error) {
        console.error('Error setting default image:', error);
        res.status(500).json({ message: 'Error setting default image' });
    }
}; 