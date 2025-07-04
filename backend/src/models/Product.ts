import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    inStock: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        inStock: { type: Boolean, default: true }
    },
    { timestamps: true }
);

export default mongoose.model<IProduct>('Product', ProductSchema); 