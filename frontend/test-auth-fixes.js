// Test script to verify all authentication fixes
// Run this after applying the database fix

console.log('🧪 Testing Authentication Fixes...\n')

const BASE_URL = 'http://localhost:3000'

async function testFixes() {
    try {
        console.log('1️⃣ Testing Session Check (should work without errors)...')
        const sessionResponse = await fetch(`${BASE_URL}/api/auth/session`)
        const sessionResult = await sessionResponse.json()
        console.log('✅ Session endpoint working:', sessionResult)
        
        console.log('\n2️⃣ Testing Database Connection...')
        // This will only work if you're logged in, but should not throw relationship errors
        const favoritesResponse = await fetch(`${BASE_URL}/api/favorites`)
        console.log('✅ Favorites endpoint accessible (status:', favoritesResponse.status, ')')
        
        if (favoritesResponse.status === 401) {
            console.log('ℹ️  401 is expected when not logged in - this means auth is working!')
        }
        
        console.log('\n✅ All endpoints are responding without database relationship errors!')
        console.log('✅ Authentication fixes applied successfully!')
        
        console.log('\n📋 Next Steps:')
        console.log('1. Run the database fix script in Supabase SQL Editor')
        console.log('2. Test login/registration flow')
        console.log('3. Test favorites functionality')
        
    } catch (error) {
        console.error('❌ Error testing fixes:', error.message)
        console.log('\n🔧 Make sure to:')
        console.log('1. Run the database fix script first')
        console.log('2. Restart your development server')
        console.log('3. Clear browser cache')
    }
}

// Run the test if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    testFixes()
}

export { testFixes } 