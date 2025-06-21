import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ImageUpload from './ImageUpload';

interface ProductImage {
    id: string;
    url: string;
    publicId: string;
    isDefault?: boolean;
}

interface ProductImageGalleryProps {
    productId: number;
    initialImages?: ProductImage[];
    onImageSelect: (image: ProductImage) => void;
    onImageDelete: (imageId: string) => void;
    onSetDefault: (imageId: string) => void;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
    productId,
    initialImages = [],
    onImageSelect,
    onImageDelete,
    onSetDefault
}) => {
    const [images, setImages] = useState<ProductImage[]>(initialImages);
    const [isDeleting, setIsDeleting] = useState<string | null>(null);

    const handleUploadComplete = (newImages: ProductImage[]) => {
        setImages(prev => [...prev, ...newImages]);
    };

    const handleDelete = async (imageId: string) => {
        if (isDeleting) return;
        setIsDeleting(imageId);

        try {
            const response = await fetch(`/api/product-images/${imageId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete image');
            }

            setImages(prev => prev.filter(img => img.id !== imageId));
            toast.success('Image deleted successfully');
        } catch (error) {
            console.error('Delete error:', error);
            toast.error('Failed to delete image');
        } finally {
            setIsDeleting(null);
        }
    };

    const handleSetDefault = async (imageId: string) => {
        try {
            const response = await fetch(`/api/product-images/${imageId}/default`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productId })
            });

            if (!response.ok) {
                throw new Error('Failed to set default image');
            }

            setImages(prev =>
                prev.map(img => ({
                    ...img,
                    isDefault: img.id === imageId
                }))
            );
            toast.success('Default image updated');
        } catch (error) {
            console.error('Set default error:', error);
            toast.error('Failed to set default image');
        }
    };

    const handleUpdatePriority = async (imageId: string, newPriority: number) => {
        try {
            const response = await fetch(`/api/product-images/${imageId}/priority`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ priority: newPriority })
            });

            if (!response.ok) {
                throw new Error('Failed to update priority');
            }

            setImages(prev =>
                prev.map(img =>
                    img.id === imageId ? { ...img, priority: newPriority } : img
                )
            );
            toast.success('Image priority updated');
        } catch (error) {
            console.error('Update priority error:', error);
            toast.error('Failed to update image priority');
        }
    };

    const handleImageSelect = (image: ProductImage) => {
        onImageSelect(image);
    };

    return (
        <div className="space-y-6">
            <ImageUpload
                productId={productId}
                onUploadComplete={handleUploadComplete}
                maxFiles={10}
                maxSize={5 * 1024 * 1024}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images
                    .sort((a, b) => a.priority - b.priority)
                    .map(image => (
                        <div
                            key={image.id}
                            className="relative group cursor-pointer"
                            onClick={() => handleImageSelect(image)}
                        >
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                                <img
                                    src={image.url}
                                    alt="Product image"
                                    className="h-full w-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
                            </div>
                            {image.isDefault && (
                                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                                    Default
                                </div>
                            )}
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(image.id);
                                    }}
                                    className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                            {!image.isDefault && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSetDefault(image.id);
                                    }}
                                    className="absolute bottom-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    Set as Default
                                </button>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProductImageGallery; 