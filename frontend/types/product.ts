export interface Product {
    id: number
    name: string
    sku: string
    price: number
    stockQuantity: number
    karat?: string
    weight?: number
    description?: string
    tags: string[]
    isPublished: boolean
    createdAt?: string
    updatedAt?: string
    images: { url: string; publicId: string }[]
    subcategory: {
        id: number
        name: string
        category: {
            id: number
            name: string
        }
    }
}

export interface Category {
    id: number
    name: string
    description?: string
    subcategories?: Subcategory[]
}

export interface Subcategory {
    id: number
    name: string
    description?: string
    categoryId: number
    category?: Category
} 