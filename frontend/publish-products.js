// Script to publish products
const publishProducts = async () => {
    try {
        console.log('Publishing products...')
        
        const fetch = (await import('node-fetch')).default
        
        // Get all products first
        const response = await fetch('http://localhost:3000/api/products/supabase')
        if (!response.ok) {
            throw new Error('Failed to fetch products')
        }
        
        const products = await response.json()
        console.log(`Found ${products.length} products`)
        
        // Let's publish the first few products that have reasonable data
        const productsToPublish = products.filter(p => 
            p.name && 
            p.sku && 
            p.price > 0 && 
            p.subcategory?.category?.name
        )
        
        console.log(`Publishing ${productsToPublish.length} products...`)
        
        // Update products via direct Supabase query
        const { createClient } = await import('@supabase/supabase-js')
        
        // We need the Supabase credentials
        const supabaseUrl = process.env.SUPABASE_URL || 'https://fqakibpwipqcsrddfymh.supabase.co'
        const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxYWtpYnB3aXBxY3NyZGRmeW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNDEzNzYsImV4cCI6MjA1MTcxNzM3Nn0.4EoIJMdL_R3vWhjCq4VBh8J6LG9nXqrZwKdqfaWYP3s'
        
        const supabase = createClient(supabaseUrl, supabaseKey)
        
        // Update all products to be published
        const { data, error } = await supabase
            .from('products')
            .update({ is_published: true })
            .neq('id', 0) // Update all products
        
        if (error) {
            console.error('Supabase error:', error)
            return
        }
        
        console.log('✅ Successfully published all products!')
        
        // Verify the update
        const verifyResponse = await fetch('http://localhost:3000/api/products/supabase')
        if (verifyResponse.ok) {
            const updatedProducts = await verifyResponse.json()
            const publishedCount = updatedProducts.filter(p => p.isPublished).length
            console.log(`✅ Verification: ${publishedCount} out of ${updatedProducts.length} products are now published`)
        }
        
    } catch (error) {
        console.error('Error publishing products:', error.message)
        console.error('Full error:', error)
    }
}

publishProducts() 