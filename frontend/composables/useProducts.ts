import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Product } from '~/types/product'

interface Category {
    id: number
    name: string
    description?: string
    subcategories: Subcategory[]
}

interface Subcategory {
    id: number
    name: string
    description?: string
    categoryId: number
}

export const useProducts = () => {
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBase

    const products: Ref<Product[]> = ref([])
    const categories: Ref<Category[]> = ref([])
    const subcategories: Ref<Subcategory[]> = ref([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    const fetchProducts = async () => {
        loading.value = true
        error.value = null

        try {
            console.log('🔍 Fetching products from Supabase API...')
            const response = await $fetch<Product[]>('/api/products/supabase', {
                method: 'GET'
            })

            products.value = response
            console.log('✅ Products fetched successfully:', response.length)
        } catch (err: any) {
            console.error('❌ Error fetching products:', err)

            // Handle specific error types
            if (err.statusCode === 401) {
                error.value = 'Database authentication failed. Please check your Supabase credentials.'
            } else if (err.statusCode === 503) {
                error.value = 'Database connection timeout. Please check your network connection.'
            } else if (err.statusCode === 500 && err.data?.message?.includes('table missing')) {
                error.value = 'Database tables are missing. Please run the database setup scripts.'
            } else if (err.data?.message) {
                error.value = err.data.message
            } else {
                error.value = err.message || 'Failed to fetch products'
            }

            // Keep existing products if any, don't clear them
            console.log('Current products count:', products.value.length)
        } finally {
            loading.value = false
        }
    }

    const fetchCategories = async () => {
        try {
            loading.value = true
            error.value = null
            const response = await fetch(`${apiBase}/categories`)
            if (!response.ok) throw new Error('Failed to fetch categories')
            categories.value = await response.json()
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'An error occurred'
            console.error('Error fetching categories:', e)
        } finally {
            loading.value = false
        }
    }

    const fetchSubcategories = async (categoryId: string) => {
        try {
            loading.value = true
            error.value = null
            const response = await fetch(`${apiBase}/categories/${categoryId}/subcategories`)
            if (!response.ok) throw new Error('Failed to fetch subcategories')
            subcategories.value = await response.json()
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'An error occurred'
            console.error('Error fetching subcategories:', e)
        } finally {
            loading.value = false
        }
    }

    const createProduct = async (productData: any) => {
        loading.value = true
        error.value = null

        try {
            console.log('📝 Creating product via Supabase API...')
            console.log('🌐 API endpoint: /api/products/supabase')
            console.log('📦 Product data:', productData)

            console.log('🔄 Making $fetch request...')
            const response = await $fetch<Product>('/api/products/supabase', {
                method: 'POST',
                body: productData
            })

            console.log('✅ Product created successfully:', response)

            // Add the new product to the local array
            products.value.unshift(response)

            return response
        } catch (err: any) {
            console.error('❌ Error creating product:', err)
            console.error('❌ Error type:', typeof err)
            console.error('❌ Error constructor:', err.constructor.name)
            console.error('❌ Error status:', err.status || err.statusCode)
            console.error('❌ Error data:', err.data)
            console.error('❌ Full error object:', JSON.stringify(err, null, 2))

            // Handle specific error types for product creation
            if (err.statusCode === 401) {
                error.value = 'Database authentication failed. Please check your Supabase credentials.'
            } else if (err.statusCode === 503) {
                error.value = 'Database connection timeout during product creation. Please check your network connection.'
            } else if (err.statusCode === 500 && err.data?.message?.includes('table missing')) {
                error.value = 'Database tables are missing. Please run the database setup scripts.'
            } else if (err.statusCode === 400 && err.data?.message?.includes('Subcategory') && err.data?.message?.includes('not found')) {
                error.value = `Subcategory not found. Please ensure your categories and subcategories are properly set up in the database.`
            } else if (err.data?.message) {
                error.value = err.data.message
            } else {
                error.value = err.message || 'Failed to create product'
            }

            throw err
        } finally {
            loading.value = false
        }
    }

    const updateProduct = async (id: number, productData: any) => {
        loading.value = true
        error.value = null

        try {
            const response = await $fetch<Product>(`/api/products/${id}`, {
                method: 'PUT',
                body: productData
            })

            // Update the product in the local array
            const index = products.value.findIndex(p => p.id === id)
            if (index !== -1) {
                products.value[index] = response
            }

            return response
        } catch (err: any) {
            console.error('Error updating product:', err)
            error.value = err.message || 'Failed to update product'
            throw err
        } finally {
            loading.value = false
        }
    }

    const deleteProduct = async (id: number) => {
        loading.value = true
        error.value = null

        try {
            await $fetch(`/api/products/${id}`, {
                method: 'DELETE'
            })

            // Remove the product from the local array
            products.value = products.value.filter(p => p.id !== id)
        } catch (err: any) {
            console.error('Error deleting product:', err)
            error.value = err.message || 'Failed to delete product'
            throw err
        } finally {
            loading.value = false
        }
    }

    const togglePublish = async (id: number) => {
        loading.value = true
        error.value = null

        try {
            const response = await $fetch<Product>(`/api/products/${id}/toggle-publish`, {
                method: 'POST'
            })

            // Update the product in the local array
            const index = products.value.findIndex(p => p.id === id)
            if (index !== -1) {
                products.value[index] = response
            }

            return response
        } catch (err: any) {
            console.error('Error toggling product status:', err)
            error.value = err.message || 'Failed to toggle product status'
            throw err
        } finally {
            loading.value = false
        }
    }

    return {
        products: readonly(products),
        categories,
        subcategories,
        loading: readonly(loading),
        error: readonly(error),
        fetchProducts,
        fetchCategories,
        fetchSubcategories,
        createProduct,
        updateProduct,
        deleteProduct,
        togglePublish
    }
} 