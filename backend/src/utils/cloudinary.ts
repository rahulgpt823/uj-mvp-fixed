import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'urvashi-jewellers',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        transformation: [{ width: 1000, height: 1000, crop: 'limit' }]
    } as any
});

// Create multer upload instance
export const upload = multer({ storage: storage });

// Function to delete image from Cloudinary
export const deleteImage = async (cloudId: string) => {
    try {
        await cloudinary.uploader.destroy(cloudId);
        return true;
    } catch (error) {
        console.error('Error deleting image from Cloudinary:', error);
        return false;
    }
};

// Function to get image URL with transformations
export const getImageUrl = (cloudId: string, options = {}) => {
    return cloudinary.url(cloudId, {
        secure: true,
        ...options
    });
}; 