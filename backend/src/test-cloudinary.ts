import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Test function
async function testCloudinaryConnection() {
    try {
        console.log('Cloudinary Config:', {
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY?.substring(0, 5) + '...', // Show only first 5 chars
        });

        // Try to upload a test image
        const result = await cloudinary.uploader.upload(
            'https://res.cloudinary.com/demo/image/upload/sample.jpg',
            {
                folder: 'test',
            }
        );

        console.log('Test upload successful!');
        console.log('Uploaded image URL:', result.secure_url);

        // Clean up - delete the test image
        await cloudinary.uploader.destroy(result.public_id);
        console.log('Test image cleaned up successfully!');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the test
testCloudinaryConnection(); 