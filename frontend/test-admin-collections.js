/**
 * 🧪 Admin Collection Management Test Script
 * 
 * This script tests the complete collection management system
 * Run this in your browser console while logged in as admin
 */

console.log('🚀 Starting Admin Collection Management Tests...');

const API_BASE = window.location.origin;

// Test Collection Data
const testCollection = {
    name: "Test Diwali Collection",
    description: "Test collection for Diwali festival jewelry",
    banner_image: "https://via.placeholder.com/600x300/gold/white?text=Diwali+Collection",
    banner_alt: "Beautiful Diwali jewelry collection",
    tag_filters: ["diwali", "gold", "traditional"],
    tag_match_mode: "ANY",
    min_price: 5000,
    max_price: 50000,
    start_date: "2024-10-15",
    end_date: "2024-11-15",
    is_active: true,
    is_featured: true,
    display_order: 1
};

let createdCollectionId = null;

// Helper function for API calls
async function apiCall(endpoint, method = 'GET', data = null) {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        
        if (data) {
            options.body = JSON.stringify(data);
        }
        
        const response = await fetch(`${API_BASE}${endpoint}`, options);
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.message || `HTTP ${response.status}`);
        }
        
        return result;
    } catch (error) {
        console.error(`❌ API call failed for ${endpoint}:`, error);
        throw error;
    }
}

// Test 1: Fetch Collections
async function testFetchCollections() {
    console.log('\n📋 Test 1: Fetching Collections...');
    
    try {
        const result = await apiCall('/api/admin/collections?include_analytics=true');
        console.log('✅ Collections fetched successfully');
        console.log(`📊 Found ${result.data.collections.length} collections`);
        
        if (result.data.collections.length > 0) {
            console.log('📝 Sample collection:', result.data.collections[0]);
        }
        
        return true;
    } catch (error) {
        console.error('❌ Failed to fetch collections');
        return false;
    }
}

// Test 2: Create Collection
async function testCreateCollection() {
    console.log('\n➕ Test 2: Creating Test Collection...');
    
    try {
        const result = await apiCall('/api/admin/collections', 'POST', testCollection);
        console.log('✅ Collection created successfully');
        console.log('🆔 Collection ID:', result.data.collection.id);
        
        createdCollectionId = result.data.collection.id;
        console.log('📋 Created collection:', result.data.collection);
        
        return true;
    } catch (error) {
        console.error('❌ Failed to create collection');
        return false;
    }
}

// Test 3: Update Collection
async function testUpdateCollection() {
    if (!createdCollectionId) {
        console.log('\n⚠️  Test 3: Skipped (no collection to update)');
        return false;
    }
    
    console.log('\n✏️  Test 3: Updating Collection...');
    
    try {
        const updateData = {
            name: "Updated Test Diwali Collection",
            description: "Updated description for testing",
            is_featured: false
        };
        
        const result = await apiCall(`/api/admin/collections/${createdCollectionId}`, 'PUT', updateData);
        console.log('✅ Collection updated successfully');
        console.log('📋 Updated collection:', result.data.collection);
        
        return true;
    } catch (error) {
        console.error('❌ Failed to update collection');
        return false;
    }
}

// Test 4: Toggle Collection Status
async function testToggleStatus() {
    if (!createdCollectionId) {
        console.log('\n⚠️  Test 4: Skipped (no collection to toggle)');
        return false;
    }
    
    console.log('\n🔄 Test 4: Toggling Collection Status...');
    
    try {
        // First, get current status
        const collections = await apiCall('/api/admin/collections');
        const collection = collections.data.collections.find(c => c.id === createdCollectionId);
        
        if (!collection) {
            throw new Error('Collection not found');
        }
        
        const newStatus = !collection.is_active;
        const result = await apiCall(`/api/admin/collections/${createdCollectionId}`, 'PUT', {
            is_active: newStatus
        });
        
        console.log(`✅ Collection status toggled to: ${newStatus ? 'Active' : 'Inactive'}`);
        
        return true;
    } catch (error) {
        console.error('❌ Failed to toggle collection status');
        return false;
    }
}

// Test 5: Test Public Collection API
async function testPublicAPI() {
    console.log('\n🌐 Test 5: Testing Public Collection API...');
    
    try {
        // Test public collections endpoint
        const publicResult = await apiCall('/api/collections');
        console.log('✅ Public collections API working');
        console.log(`📊 Public collections count: ${publicResult.data.collections.length}`);
        
        if (publicResult.data.collections.length > 0) {
            const firstCollection = publicResult.data.collections[0];
            console.log(`🔍 Testing collection products for: ${firstCollection.name}`);
            
            // Test collection products endpoint
            const productsResult = await apiCall(`/api/collections/${firstCollection.slug}/products`);
            console.log('✅ Collection products API working');
            console.log(`📦 Products in collection: ${productsResult.data.products.length}`);
        }
        
        return true;
    } catch (error) {
        console.error('❌ Failed to test public API');
        return false;
    }
}

// Test 6: Delete Collection
async function testDeleteCollection() {
    if (!createdCollectionId) {
        console.log('\n⚠️  Test 6: Skipped (no collection to delete)');
        return false;
    }
    
    console.log('\n🗑️  Test 6: Deleting Test Collection...');
    
    try {
        const result = await apiCall(`/api/admin/collections/${createdCollectionId}`, 'DELETE');
        console.log('✅ Collection deleted successfully');
        console.log('📋 Delete result:', result);
        
        createdCollectionId = null;
        return true;
    } catch (error) {
        console.error('❌ Failed to delete collection');
        return false;
    }
}

// Test 7: Frontend Integration
async function testFrontendIntegration() {
    console.log('\n🖥️  Test 7: Testing Frontend Integration...');
    
    try {
        // Check if admin collections page is accessible
        const currentPath = window.location.pathname;
        
        if (currentPath.includes('/admin/collections')) {
            console.log('✅ Already on admin collections page');
        } else {
            console.log('📍 Navigate to /admin/collections to test the UI');
        }
        
        // Check if main collections page works
        console.log('🔗 Testing main collections page...');
        const testWindow = window.open('/collections', '_blank');
        
        setTimeout(() => {
            if (testWindow && !testWindow.closed) {
                console.log('✅ Main collections page opened successfully');
                testWindow.close();
            } else {
                console.log('⚠️  Collections page may have issues');
            }
        }, 2000);
        
        return true;
    } catch (error) {
        console.error('❌ Frontend integration test failed');
        return false;
    }
}

// Main Test Runner
async function runAllTests() {
    console.log('🧪 Running Complete Collection Management Tests...\n');
    
    const tests = [
        { name: 'Fetch Collections', fn: testFetchCollections },
        { name: 'Create Collection', fn: testCreateCollection },
        { name: 'Update Collection', fn: testUpdateCollection },
        { name: 'Toggle Status', fn: testToggleStatus },
        { name: 'Public API', fn: testPublicAPI },
        { name: 'Delete Collection', fn: testDeleteCollection },
        { name: 'Frontend Integration', fn: testFrontendIntegration }
    ];
    
    let passed = 0;
    let failed = 0;
    
    for (const test of tests) {
        try {
            const result = await test.fn();
            if (result) {
                passed++;
            } else {
                failed++;
            }
        } catch (error) {
            console.error(`❌ Test "${test.name}" threw an error:`, error);
            failed++;
        }
        
        // Small delay between tests
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log('\n📊 Test Results Summary:');
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📈 Success Rate: ${Math.round((passed / (passed + failed)) * 100)}%`);
    
    if (failed === 0) {
        console.log('\n🎉 ALL TESTS PASSED! Collection management system is working perfectly!');
    } else {
        console.log('\n⚠️  Some tests failed. Check the errors above for details.');
    }
}

// Manual Test Functions (can be called individually)
window.testCollections = {
    runAll: runAllTests,
    fetchCollections: testFetchCollections,
    createCollection: testCreateCollection,
    updateCollection: testUpdateCollection,
    toggleStatus: testToggleStatus,
    testPublicAPI: testPublicAPI,
    deleteCollection: testDeleteCollection,
    frontendTest: testFrontendIntegration
};

// Instructions
console.log(`
🎯 Admin Collection Management Test Suite

To run tests:
1. Ensure you're logged in as admin
2. Run: testCollections.runAll()

Or run individual tests:
- testCollections.fetchCollections()
- testCollections.createCollection()
- testCollections.updateCollection()
- testCollections.toggleStatus()
- testCollections.testPublicAPI()
- testCollections.deleteCollection()
- testCollections.frontendTest()

Example:
> testCollections.runAll()
`);

// Auto-run if in admin collections page
if (window.location.pathname.includes('/admin/collections')) {
    console.log('🚀 Auto-running tests since you\'re on the admin collections page...');
    setTimeout(() => runAllTests(), 1000);
} 