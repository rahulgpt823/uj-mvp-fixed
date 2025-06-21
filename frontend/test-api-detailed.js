// Test script to check all products and their details
const testAPI = async () => {
    try {
        console.log('Fetching all products...')
        
        const fetch = (await import('node-fetch')).default
        const response = await fetch('http://localhost:3000/api/products/supabase')
        
        if (!response.ok) {
            const errorText = await response.text()
            console.error('Error response:', errorText)
            return
        }
        
        const data = await response.json()
        console.log(`Found ${data.length} products:`)
        console.log('==============================')
        
        data.forEach((product, index) => {
            console.log(`${index + 1}. ${product.name}`)
            console.log(`   ID: ${product.id}`)
            console.log(`   SKU: ${product.sku}`)
            console.log(`   Price: ₹${product.price}`)
            console.log(`   Stock: ${product.stockQuantity}`)
            console.log(`   Published: ${product.isPublished}`)
            console.log(`   Category: ${product.subcategory?.category?.name || 'N/A'}`)
            console.log(`   Subcategory: ${product.subcategory?.name || 'N/A'}`)
            console.log(`   Images: ${product.images?.length || 0}`)
            console.log('   ---')
        })
        
        const publishedCount = data.filter(p => p.isPublished).length
        console.log(`\nSummary: ${publishedCount} out of ${data.length} products are published`)
        
    } catch (error) {
        console.error('Error:', error.message)
    }
}

testAPI() 