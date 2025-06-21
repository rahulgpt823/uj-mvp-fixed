// Script to publish products via the toggle-publish API
const publishProducts = async () => {
    try {
        console.log('Publishing products via API...')
        
        const fetch = (await import('node-fetch')).default
        
        // Get all products first
        const response = await fetch('http://localhost:3000/api/products/supabase')
        if (!response.ok) {
            throw new Error('Failed to fetch products')
        }
        
        const products = await response.json()
        console.log(`Found ${products.length} products`)
        
        // Toggle each unpublished product
        const unpublishedProducts = products.filter(p => !p.isPublished)
        console.log(`Found ${unpublishedProducts.length} unpublished products`)
        
        for (const product of unpublishedProducts) {
            console.log(`Publishing product: ${product.name} (ID: ${product.id})`)
            
            try {
                const toggleResponse = await fetch(`http://localhost:3000/api/products/${product.id}/toggle-publish`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                
                if (toggleResponse.ok) {
                    console.log(`✅ Published: ${product.name}`)
                } else {
                    const errorText = await toggleResponse.text()
                    console.log(`❌ Failed to publish ${product.name}: ${errorText}`)
                }
            } catch (error) {
                console.log(`❌ Error publishing ${product.name}: ${error.message}`)
            }
        }
        
        // Verify the updates
        console.log('\nVerifying updates...')
        const verifyResponse = await fetch('http://localhost:3000/api/products/supabase')
        if (verifyResponse.ok) {
            const updatedProducts = await verifyResponse.json()
            const publishedCount = updatedProducts.filter(p => p.isPublished).length
            console.log(`✅ Final result: ${publishedCount} out of ${updatedProducts.length} products are now published`)
            
            // Show published products
            const published = updatedProducts.filter(p => p.isPublished)
            if (published.length > 0) {
                console.log('\nPublished products:')
                published.forEach(p => {
                    console.log(`- ${p.name} (₹${p.price}, Stock: ${p.stockQuantity})`)
                })
            }
        }
        
    } catch (error) {
        console.error('Error:', error.message)
    }
}

publishProducts() 