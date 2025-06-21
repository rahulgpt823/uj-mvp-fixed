# Image Upload Setup for Urvashi Jewellers

## Overview
This document describes the image upload functionality implemented for the Urvashi Jewellers product management system.

## Features Implemented

### 1. Multiple Image Upload
- Support for uploading single or multiple images per product
- Drag and drop functionality
- File validation (type, size, count)
- Real-time preview of selected images

### 2. Cloudinary Integration
- Images are uploaded to Cloudinary cloud storage
- Automatic image optimization and transformation
- Organized folder structure based on product categories

### 3. Folder Naming Structure
Images are organized in Cloudinary with the following folder structure:
```
{category}/{subcategory}/jewel-{first3letters}-{productId}/
```

**Example:**
- Category: "GOLD ORNAMENTS"
- Subcategory: "RINGS FOR WOMEN" 
- Product ID: 123
- Folder: `gold-ornaments/rings-for-women/jewel-gol-123/`

### 4. Dashboard Display
- Product list shows thumbnail images
- Default image (first uploaded) is displayed
- Placeholder shown when no images are available
- Responsive image grid layout

## Environment Variables Required

Add these to your `.env` file:

```env
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## API Endpoints

### Upload Images
- **Endpoint:** `POST /api/products/images`
- **Purpose:** Upload images for a specific product
- **Payload:**
```json
{
  "productId": 123,
  "images": ["base64_image_1", "base64_image_2"],
  "category": "GOLD ORNAMENTS",
  "subcategory": "RINGS FOR WOMEN",
  "productName": "Beautiful Gold Ring"
}
```

### Product Creation with Images
- **Endpoint:** `POST /api/products/supabase`
- **Purpose:** Create product and upload images in one request
- **Payload:** Includes `images` array with base64 encoded images

## Database Schema

### product_images Table
```sql
CREATE TABLE product_images (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  url TEXT NOT NULL,
  public_id TEXT NOT NULL,
  width INTEGER,
  height INTEGER,
  format TEXT,
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Components

### ImageUploadField.vue
Reusable component for image uploads with features:
- Multiple file selection
- Drag and drop support
- File validation
- Preview thumbnails
- Remove functionality
- Default image indicator

**Usage:**
```vue
<ImageUploadField
  v-model="images"
  label="Product Images"
  :max-files="6"
  :max-size="5"
  help-text="Upload up to 6 images. First image will be the default."
/>
```

## Image Processing

### Cloudinary Transformations
- **Size:** Limited to 1200x1200 pixels
- **Quality:** Auto-optimized
- **Format:** Auto-converted to best format
- **Compression:** Automatic

### File Validation
- **Supported formats:** JPG, PNG, WebP
- **Maximum size:** 5MB per file
- **Maximum count:** 6 images per product

## Usage Instructions

### For Administrators

1. **Adding Images to New Products:**
   - Navigate to Admin > Products
   - Click "Add New Product"
   - Fill in product details
   - Use the image upload section to add images
   - First image uploaded becomes the default
   - Submit the form

2. **Managing Existing Product Images:**
   - Edit an existing product
   - Add new images using the upload field
   - Remove unwanted images by clicking the X button
   - Save changes

### For Developers

1. **Adding Image Upload to Forms:**
```vue
<template>
  <ImageUploadField
    v-model="productImages"
    label="Product Images"
    :max-files="6"
    :max-size="5"
  />
</template>

<script setup>
import ImageUploadField from '~/components/ImageUploadField.vue'

const productImages = ref([])
</script>
```

2. **Processing Images for API:**
```javascript
// Convert File objects to base64
const base64Images = await Promise.all(
  images.map(imageObj => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(imageObj.file)
    })
  })
)
```

## Troubleshooting

### Common Issues

1. **Images not uploading:**
   - Check Cloudinary credentials in environment variables
   - Verify file size is under 5MB
   - Ensure file format is supported

2. **Images not displaying:**
   - Check if image URLs are properly saved in database
   - Verify Cloudinary URLs are accessible
   - Check browser console for errors

3. **Folder structure issues:**
   - Verify category and subcategory names are properly sanitized
   - Check if special characters are being handled correctly

### Debug Mode
Enable debug logging by checking browser console for:
- `📁 Uploading images to folder:` - Shows folder path
- `✅ Successfully uploaded X images` - Confirms upload success
- `❌ Image upload error:` - Shows upload errors

## Performance Considerations

1. **Image Optimization:**
   - Images are automatically optimized by Cloudinary
   - Thumbnails are generated for dashboard display
   - Progressive loading for better user experience

2. **Upload Limits:**
   - Maximum 6 images per product to prevent abuse
   - 5MB size limit per image
   - Concurrent upload processing

3. **Caching:**
   - Cloudinary provides global CDN
   - Images are cached for fast loading
   - Automatic format optimization based on browser support

## Security

1. **File Validation:**
   - Server-side file type validation
   - Size limits enforced
   - Malicious file detection

2. **Access Control:**
   - Only authenticated admin users can upload images
   - Cloudinary URLs are public but organized in folders
   - Database stores metadata for access control

## Future Enhancements

1. **Image Editing:**
   - Crop and resize functionality
   - Filters and effects
   - Watermark addition

2. **Bulk Operations:**
   - Bulk image upload
   - Batch processing
   - CSV import with images

3. **Advanced Features:**
   - Image tagging and search
   - AI-powered image analysis
   - Automatic alt text generation 