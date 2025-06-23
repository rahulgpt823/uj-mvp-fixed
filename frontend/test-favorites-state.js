// Test script to verify favorites state management
// Run this in the browser console after logging in

console.log('🧪 Testing Favorites State Management...\n')

async function testFavoritesState() {
    try {
        // Test 1: Check if stores are available
        console.log('1️⃣ Testing store availability...')
        const { useFavoritesStore } = await import('./stores/favorites.js')
        const { useAuthStore } = await import('./stores/auth.js')
        
        const favoritesStore = useFavoritesStore()
        const authStore = useAuthStore()
        
        console.log('✅ Stores loaded successfully')
        console.log('   - User logged in:', authStore.isLoggedIn)
        console.log('   - Favorites initialized:', favoritesStore.isInitialized)
        console.log('   - Current favorites count:', favoritesStore.favoritesCount)
        
        if (!authStore.isLoggedIn) {
            console.log('❌ User not logged in. Please login first.')
            return
        }
        
        // Test 2: Check current favorites
        console.log('\n2️⃣ Testing current favorites state...')
        await favoritesStore.fetchFavorites()
        console.log('✅ Favorites fetched from server')
        console.log('   - Total favorites:', favoritesStore.items.length)
        favoritesStore.items.forEach((item, index) => {
            console.log(`   - ${index + 1}. ${item.productName} (ID: ${item.productId})`)
        })
        
        // Test 3: Test isFavorite function
        console.log('\n3️⃣ Testing isFavorite function...')
        const testProductIds = ['1', '2', '3', 'test-product']
        testProductIds.forEach(id => {
            const isFav = favoritesStore.isFavorite(id)
            console.log(`   - Product ${id}: ${isFav ? '❤️ Favorite' : '🤍 Not favorite'}`)
        })
        
        // Test 4: Test adding a favorite (simulation)
        console.log('\n4️⃣ Testing add to favorites (simulation)...')
        const testProduct = {
            productId: 'test-' + Date.now(),
            productName: 'Test Product',
            productImage: 'https://example.com/test.jpg',
            productPrice: 1000,
            productCategory: 'Test Category'
        }
        
        console.log('   - Before adding:', favoritesStore.isFavorite(testProduct.productId))
        
        try {
            await favoritesStore.addToFavorites(testProduct)
            console.log('✅ Successfully added test product to favorites')
            console.log('   - After adding:', favoritesStore.isFavorite(testProduct.productId))
            console.log('   - New favorites count:', favoritesStore.favoritesCount)
            
            // Test 5: Test removing the favorite
            console.log('\n5️⃣ Testing remove from favorites...')
            await favoritesStore.removeFromFavorites(testProduct.productId)
            console.log('✅ Successfully removed test product from favorites')
            console.log('   - After removing:', favoritesStore.isFavorite(testProduct.productId))
            console.log('   - Final favorites count:', favoritesStore.favoritesCount)
            
        } catch (error) {
            console.log('❌ Error during favorites operations:', error.message)
        }
        
        console.log('\n🎉 Favorites state management test completed!')
        
    } catch (error) {
        console.error('❌ Test failed:', error)
    }
}

// Auto-run the test
testFavoritesState()

// Export for manual testing
window.testFavoritesState = testFavoritesState

console.log('💡 You can also run: window.testFavoritesState() anytime') 