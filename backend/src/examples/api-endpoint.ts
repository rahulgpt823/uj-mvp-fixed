import { defineEventHandler, useBody } from 'h3';
import { uploadProductImage } from '../server/services/cloudinary';

export default defineEventHandler(async (event) => {
    try {
        // Get data from request body
        const body = await useBody(event);
        const { imageBase64, productId, isDefault } = body;

        if (!imageBase64 || !productId) {
            return {
                statusCode: 400,
                body: { error: 'Image and product ID are required' }
            };
        }

        // Upload to Cloudinary
        const result = await uploadProductImage(
            imageBase64,
            productId,
            { isDefault }
        );

        // Return the result
        return {
            statusCode: 200,
            body: {
                imageUrl: result.secure_url,
                imageId: result.public_id,
                width: result.width,
                height: result.height
            }
        };

    } catch (error) {
        console.error('Upload error:', error);
        return {
            statusCode: 500,
            body: { error: 'Failed to upload image' }
        };
    }
}); 