import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-hot-toast';

interface ImageUploadProps {
    productId: number;
    onUploadComplete: (images: any[]) => void;
    maxFiles?: number;
    maxSize?: number; // in bytes
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    productId,
    onUploadComplete,
    maxFiles = 10,
    maxSize = 5 * 1024 * 1024 // 5MB default
}) => {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        // Validate number of files
        if (acceptedFiles.length > maxFiles) {
            toast.error(`Maximum ${maxFiles} files allowed`);
            return;
        }

        // Validate file types and sizes
        const validFiles = acceptedFiles.filter(file => {
            const isValidType = ['image/jpeg', 'image/png', 'image/webp'].includes(file.type);
            const isValidSize = file.size <= maxSize;

            if (!isValidType) {
                toast.error(`${file.name} is not a valid image type`);
            }
            if (!isValidSize) {
                toast.error(`${file.name} is too large (max ${maxSize / 1024 / 1024}MB)`);
            }

            return isValidType && isValidSize;
        });

        if (validFiles.length === 0) return;

        setIsUploading(true);
        setUploadProgress(0);

        try {
            const formData = new FormData();
            validFiles.forEach(file => {
                formData.append('images', file);
            });

            const response = await fetch(`/api/product-images/${productId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const data = await response.json();
            onUploadComplete(data.images);
            toast.success('Images uploaded successfully');
        } catch (error) {
            console.error('Upload error:', error);
            toast.error('Failed to upload images');
        } finally {
            setIsUploading(false);
            setUploadProgress(0);
        }
    }, [productId, maxFiles, maxSize, onUploadComplete]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/webp': []
        },
        maxSize,
        multiple: true
    });

    return (
        <div className="w-full">
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                    ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
            >
                <input {...getInputProps()} />
                {isUploading ? (
                    <div className="space-y-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                                style={{ width: `${uploadProgress}%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-600">Uploading... {uploadProgress}%</p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="text-sm text-gray-600">
                            {isDragActive
                                ? 'Drop the files here...'
                                : 'Drag and drop images here, or click to select files'}
                        </p>
                        <p className="text-xs text-gray-500">
                            Supported formats: JPEG, PNG, WebP (max {maxSize / 1024 / 1024}MB)
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageUpload; 