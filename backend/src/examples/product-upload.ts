import { uploadProductImage } from '../server/services/cloudinary';

// Example function to handle product image upload
async function handleProductImageUpload(
    imageFile: string, // base64 image or file path
    productId: number,
    isDefault: boolean = false
) {
    try {
        // Upload the image
        const result = await uploadProductImage(
            imageFile,
            productId,
            {
                isDefault,
                alt: 'Beautiful jewelry product image'
            }
        );

        console.log('Upload successful!');
        console.log('Image URL:', result.secure_url);
        console.log('Image ID:', result.public_id);

        return result;
    } catch (error) {
        console.error('Upload failed:', error);
        throw error;
    }
}

// Example usage:
const testUpload = async () => {
    // Example: Upload a product image
    // In real application, this would come from your form data
    const sampleBase64Image = 'data:image/jpeg;base64,/9j/4AAQSkZJRg...'; // Your image data
    const productId = 123; // Your product ID

    try {
        const result = await handleProductImageUpload(
            sampleBase64Image,
            productId,
            true // set as default image
        );

        console.log('Upload complete:', result);
    } catch (error) {
        console.error('Error in test upload:', error);
    }
};

// Uncomment to test:
// testUpload(); 