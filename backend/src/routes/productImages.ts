import express from 'express';
import { upload } from '../utils/cloudinary';
import {
    uploadProductImages,
    deleteProductImage,
    updateImagePriority,
    setDefaultImage
} from '../controllers/productImageController';
import { authenticateToken, isAdmin } from '../middleware/auth';

const router = express.Router();

// Upload multiple images for a product
router.post(
    '/:productId',
    authenticateToken,
    isAdmin,
    upload.array('images', 10), // Allow up to 10 images
    uploadProductImages
);

// Delete a product image
router.delete(
    '/:imageId',
    authenticateToken,
    isAdmin,
    deleteProductImage
);

// Update image priority
router.patch(
    '/:imageId/priority',
    authenticateToken,
    isAdmin,
    updateImagePriority
);

// Set default image
router.patch(
    '/:imageId/default',
    authenticateToken,
    isAdmin,
    setDefaultImage
);

export default router; 