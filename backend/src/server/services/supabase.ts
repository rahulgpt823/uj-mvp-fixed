import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

// Create and export the Supabase client
export const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
);

export interface ImageMetadata {
    id?: number;
    product_id: number;
    cloudinary_id: string;
    secure_url: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    is_default: boolean;
    alt_text?: string;
    created_at?: Date;
}

export async function saveImageMetadata(metadata: ImageMetadata) {
    const { data, error } = await supabase
        .from('product_images')
        .insert([metadata])
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function updateImageMetadata(id: number, metadata: Partial<ImageMetadata>) {
    const { data, error } = await supabase
        .from('product_images')
        .update(metadata)
        .eq('id', id)
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function deleteImageMetadata(id: number) {
    const { error } = await supabase
        .from('product_images')
        .delete()
        .eq('id', id);

    if (error) throw error;
    return true;
} 