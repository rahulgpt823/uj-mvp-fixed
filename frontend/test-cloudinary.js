// Test script to verify Cloudinary configuration
import { v2 as cloudinary } from 'cloudinary'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

console.log('🔧 Testing Cloudinary Configuration...')
console.log('')

// Check environment variables
console.log('Environment Variables:')
console.log('- CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME ? `"${process.env.CLOUDINARY_CLOUD_NAME}"` : '❌ Missing')
console.log('- CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY ? `"${process.env.CLOUDINARY_API_KEY}"` : '❌ Missing')
console.log('- CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET ? '✅ Set' : '❌ Missing')
console.log('')

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Test the configuration
async function testCloudinary() {
    try {
        console.log('🧪 Testing Cloudinary connection...')
        
        // Try to get account info to verify credentials
        const result = await cloudinary.api.ping()
        console.log('✅ Cloudinary connection successful!')
        console.log('Response:', result)
        
        // Try to upload a small test image
        console.log('')
        console.log('📤 Testing image upload...')
        
        const uploadResult = await cloudinary.uploader.upload(
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VGVzdDwvdGV4dD48L3N2Zz4=',
            {
                folder: 'test',
                public_id: 'test-image-' + Date.now(),
                resource_type: 'image'
            }
        )
        
        console.log('✅ Test image uploaded successfully!')
        console.log('Image URL:', uploadResult.secure_url)
        console.log('Public ID:', uploadResult.public_id)
        
        // Clean up - delete the test image
        await cloudinary.uploader.destroy(uploadResult.public_id)
        console.log('✅ Test image cleaned up successfully!')
        
    } catch (error) {
        console.error('❌ Cloudinary test failed:')
        console.error('Error:', error.message)
        
        if (error.message.includes('cloud_name is disabled')) {
            console.error('')
            console.error('🔍 Troubleshooting:')
            console.error('1. Check if your cloud name is correct')
            console.error('2. Verify your Cloudinary account is active')
            console.error('3. Make sure your cloud is not disabled')
            console.error('4. Check if you have the correct API credentials')
        }
        
        if (error.message.includes('Invalid API key')) {
            console.error('')
            console.error('🔍 Troubleshooting:')
            console.error('1. Check if your API key is correct')
            console.error('2. Verify your API secret is correct')
            console.error('3. Make sure you have the right permissions')
        }
    }
}

testCloudinary() 