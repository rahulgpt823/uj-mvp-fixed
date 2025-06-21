import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
import { PrismaClient, Prisma } from '@prisma/client';
import { saveImageMetadata, deleteImageMetadata, ImageMetadata, supabase } from './supabase';

// Initialize Prisma
const prisma = new PrismaClient();

// Load environment variables
dotenv.config();

// Initialize cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Define folder structure for better organization
const FOLDERS = {
  PRODUCTS: 'jewelry/products',
  CATEGORIES: 'jewelry/categories',
};

// Upload options for jewelry specific optimizations
const UPLOAD_PRESETS = {
  PRODUCT: {
    folder: FOLDERS.PRODUCTS,
    transformation: [
      { width: 1200, height: 1200, crop: 'limit' },
      { quality: 'auto:good' },
      { fetch_format: 'auto' },
    ],
    resource_type: 'image' as const,
  },
  PRODUCT_THUMBNAIL: {
    folder: FOLDERS.PRODUCTS,
    transformation: [
      { width: 400, height: 400, crop: 'fill' },
      { quality: 'auto:good' },
      { fetch_format: 'auto' },
    ],
    resource_type: 'image' as const,
  },
  CATEGORY: {
    folder: FOLDERS.CATEGORIES,
    transformation: [
      { width: 800, height: 600, crop: 'fill' },
      { quality: 'auto:good' },
      { fetch_format: 'auto' },
    ],
    resource_type: 'image' as const,
  },
};

export interface UploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
}

/**
 * Upload a product image to Cloudinary
 * @param file The file buffer or stream
 * @param productId The product ID for folder organization
 * @param options Additional options
 */
export async function uploadProductImage(
  file: Buffer | string,
  productId: number,
  options: { isDefault?: boolean; alt?: string } = {}
): Promise<UploadResult> {
  const fileStr = Buffer.isBuffer(file) ? file.toString('base64') : file;
  const result = await cloudinary.uploader.upload(
    Buffer.isBuffer(file) ? `data:image/jpeg;base64,${fileStr}` : fileStr,
    {
      ...UPLOAD_PRESETS.PRODUCT,
      public_id: `${productId}/${Date.now()}`,
      context: `alt=${options.alt || ''}|product_id=${productId}|is_default=${options.isDefault ? 'true' : 'false'}`,
    });

  // Save metadata to Supabase
  const metadata: ImageMetadata = {
    product_id: productId,
    cloudinary_id: result.public_id,
    secure_url: result.secure_url,
    width: result.width,
    height: result.height,
    format: result.format,
    resource_type: result.resource_type,
    is_default: options.isDefault || false,
    alt_text: options.alt
  };

  await saveImageMetadata(metadata);

  return {
    public_id: result.public_id,
    secure_url: result.secure_url,
    width: result.width,
    height: result.height,
    format: result.format,
    resource_type: result.resource_type,
  };
}

/**
 * Delete an image from Cloudinary
 * @param publicId The public ID of the image to delete
 */
export async function deleteImage(publicId: string): Promise<boolean> {
  try {
    // Delete from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === 'ok') {
      // If successful, delete metadata from Supabase
      const { data } = await supabase
        .from('product_images')
        .delete()
        .eq('cloudinary_id', publicId);

      return true;
    }
    return false;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
}

/**
 * Generate a signed URL for uploading directly from the client
 * This is useful for large files to avoid server load
 */
export function generateSignedUploadUrl(
  preset: keyof typeof UPLOAD_PRESETS,
  productId?: number
): { signature: string; timestamp: number; params: Record<string, any> } {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const folder = productId
    ? `${UPLOAD_PRESETS[preset].folder}/${productId}`
    : UPLOAD_PRESETS[preset].folder;

  const params = {
    timestamp,
    ...UPLOAD_PRESETS[preset],
    folder
  };

  const signature = cloudinary.utils.api_sign_request(params, process.env.CLOUDINARY_API_SECRET!);

  return {
    signature,
    timestamp,
    params: {
      api_key: process.env.CLOUDINARY_API_KEY,
      ...params
    }
  };
}

/**
 * Generate optimized URLs for different use cases
 */
export function getOptimizedUrl(publicId: string, options: {
  width?: number;
  height?: number;
  quality?: string;
  format?: string;
  isZoomable?: boolean;
} = {}): string {
  // Build transformation string
  const transformations = [];

  if (options.width || options.height) {
    const cropMethod = options.isZoomable ? 'limit' : 'fill';
    transformations.push(`c_${cropMethod}`);

    if (options.width) transformations.push(`w_${options.width}`);
    if (options.height) transformations.push(`h_${options.height}`);
  }

  transformations.push(`q_${options.quality || 'auto'}`);
  transformations.push(`f_${options.format || 'auto'}`);

  // For jewelry products, we often want to enable zoom for details
  if (options.isZoomable) {
    transformations.push('fl_progressive');
  }

  return cloudinary.url(publicId, {
    transformation: transformations.join(','),
    secure: true
  });
}

function validateImage(file: Buffer | string): boolean {
  // Add size limits
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  if (Buffer.isBuffer(file) && file.length > MAX_SIZE) {
    return false;
  }
  // Add format validation
  // Add dimension validation
  return true;
}

async function optimizeImage(file: Buffer): Promise<Buffer> {
  // Add image compression
  // Add format conversion if needed
  return file;
}

async function updateProductImages(
  productId: number,
  newImageData: { imageBase64: string; isDefault: boolean; }
) {
  // Start a transaction
  const result = await prisma.$transaction(async (prismaTransaction: Prisma.TransactionClient) => {
    // Upload to Cloudinary
    const uploadResult = await uploadProductImage(
      newImageData.imageBase64,
      productId,
      { isDefault: newImageData.isDefault }
    );

    // Create image record
    const image = await prismaTransaction.productImage.create({
      data: {
        productId,
        imageUrl: uploadResult.secure_url,
        cloudId: uploadResult.public_id,
        width: uploadResult.width,
        height: uploadResult.height,
        isDefault: newImageData.isDefault
      }
    });

    // If this is default, update other images
    if (newImageData.isDefault) {
      await prismaTransaction.productImage.updateMany({
        where: {
          productId,
          id: { not: image.id },
          isDefault: true
        },
        data: { isDefault: false }
      });
    }

    return image;
  });

  return result;
}

async function cleanupOrphanedImages() {
  // Find images without associated products
  const orphanedImages = await prisma.productImage.findMany({
    where: {
      product: null
    }
  });

  // Delete from Cloudinary and database
  for (const image of orphanedImages) {
    await deleteImage(image.cloudId);
    await prisma.productImage.delete({
      where: { id: image.id }
    });
  }
}