/**
 * 🎯 Collection Management Testing Script
 * 
 * This script demonstrates how to:
 * 1. Create new collections
 * 2. Test different tag matching modes
 * 3. Enable/disable collections
 * 4. Create seasonal collections
 * 
 * Run this in your browser console while logged in as admin
 */

// Base API URL (adjust if needed)
const API_BASE = window.location.origin;

// Helper function to make API calls
async function apiCall(endpoint, method = 'GET', data = null) {
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
    
    console.log(`${method} ${endpoint}:`, result);
    return result;
}

// 🆕 CREATE NEW COLLECTIONS

// Example 1: Create Diwali Collection (Seasonal)
async function createDiwaliCollection() {
    console.log('🎆 Creating Diwali Collection...');
    
    const diwaliCollection = {
        name: "Diwali Special 2024",
        description: "Celebrate the festival of lights with our stunning traditional jewelry",
        banner_image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        banner_alt: "Beautiful Diwali jewelry collection",
        tag_filters: ["diwali", "festival", "gold", "traditional"],
        tag_match_mode: "ANY",
        is_active: true,
        is_featured: true,
        display_order: 1,
        min_price: 5000,
        max_price: 500000,
        start_date: "2024-10-15",
        end_date: "2024-11-15"
    };
    
    return await apiCall('/api/admin/collections', 'POST', diwaliCollection);
}

// Example 2: Create Valentine's Collection
async function createValentineCollection() {
    console.log('💝 Creating Valentine\'s Collection...');
    
    const valentineCollection = {
        name: "Valentine's Special 2024",
        description: "Romantic jewelry for your special someone",
        banner_image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
        banner_alt: "Romantic Valentine's Day jewelry",
        tag_filters: ["valentine", "romantic", "love", "couple"],
        tag_match_mode: "ANY",
        is_active: true,
        is_featured: true,
        display_order: 2,
        start_date: "2024-02-01",
        end_date: "2024-02-20"
    };
    
    return await apiCall('/api/admin/collections', 'POST', valentineCollection);
}

// Example 3: Create Premium Diamond Collection (ALL mode)
async function createPremiumDiamondCollection() {
    console.log('💎 Creating Premium Diamond Collection...');
    
    const diamondCollection = {
        name: "Premium Diamond Collection",
        description: "Exquisite diamonds for the most special occasions",
        banner_image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
        banner_alt: "Premium diamond jewelry collection",
        tag_filters: ["diamond", "premium"],
        tag_match_mode: "ALL", // Product must have BOTH tags
        is_active: true,
        is_featured: true,
        display_order: 3,
        min_price: 50000,
        max_price: 1000000
    };
    
    return await apiCall('/api/admin/collections', 'POST', diamondCollection);
}

// Example 4: Create Simple Bridal Collection
async function createBridalCollection() {
    console.log('👰 Creating Bridal Collection...');
    
    const bridalCollection = {
        name: "Bridal Collection",
        description: "Timeless pieces for your special day",
        banner_image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
        banner_alt: "Beautiful bridal jewelry collection",
        tag_filters: ["bridal", "wedding", "traditional", "kundan"],
        tag_match_mode: "ANY",
        is_active: true,
        is_featured: true,
        display_order: 4
    };
    
    return await apiCall('/api/admin/collections', 'POST', bridalCollection);
}

// 📋 LIST ALL COLLECTIONS
async function listAllCollections() {
    console.log('📋 Listing all collections...');
    return await apiCall('/api/admin/collections?include_inactive=true&include_analytics=true');
}

// 🔄 TOGGLE COLLECTION STATUS
async function toggleCollection(collectionId, isActive) {
    console.log(`🔄 ${isActive ? 'Enabling' : 'Disabling'} collection ${collectionId}...`);
    
    return await apiCall(`/api/admin/collections/${collectionId}`, 'PUT', {
        is_active: isActive,
        is_featured: isActive
    });
}

// 🧪 TEST COLLECTION SYSTEM
async function testCollectionSystem() {
    console.log('🧪 Testing Collection Management System...\n');
    
    try {
        // Step 1: Create sample collections
        console.log('=== STEP 1: Creating Sample Collections ===');
        await createDiwaliCollection();
        await createValentineCollection();
        await createPremiumDiamondCollection();
        await createBridalCollection();
        
        // Step 2: List all collections
        console.log('\n=== STEP 2: Listing All Collections ===');
        const collections = await listAllCollections();
        
        // Step 3: Test public API
        console.log('\n=== STEP 3: Testing Public API ===');
        await apiCall('/api/collections?featured_only=true');
        
        console.log('\n✅ Collection system test completed!');
        console.log('Visit /collections to see your new collections');
        
    } catch (error) {
        console.error('❌ Error testing collection system:', error);
    }
}

// 🎯 QUICK EXAMPLES FOR DIFFERENT SCENARIOS

// Scenario 1: Flash Sale Collection
function createFlashSaleCollection() {
    const flashSale = {
        name: "Flash Sale - 50% Off",
        description: "Limited time offer on selected jewelry",
        banner_image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        tag_filters: ["sale", "discount", "flash"],
        tag_match_mode: "ANY",
        is_active: true,
        is_featured: true,
        display_order: 0, // Show first
        start_date: "2024-01-15",
        end_date: "2024-01-20"
    };
    
    return apiCall('/api/admin/collections', 'POST', flashSale);
}

// Scenario 2: Seasonal Collection (Summer)
function createSummerCollection() {
    const summer = {
        name: "Summer Collection 2024",
        description: "Light and breezy jewelry for summer",
        banner_image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
        tag_filters: ["summer", "light", "casual", "daily-wear"],
        tag_match_mode: "ANY",
        is_active: true,
        is_featured: false,
        display_order: 5,
        start_date: "2024-04-01",
        end_date: "2024-09-30"
    };
    
    return apiCall('/api/admin/collections', 'POST', summer);
}

// Scenario 3: Exclusive Collection (ALL mode)
function createExclusiveCollection() {
    const exclusive = {
        name: "Exclusive Designer Collection",
        description: "Limited edition pieces by renowned designers",
        banner_image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
        tag_filters: ["exclusive", "designer", "limited-edition"],
        tag_match_mode: "ALL", // Must have ALL three tags
        is_active: true,
        is_featured: true,
        display_order: 1,
        min_price: 100000
    };
    
    return apiCall('/api/admin/collections', 'POST', exclusive);
}

// 🚀 READY-TO-USE FUNCTIONS
console.log(`
🎯 Collection Management Commands Ready!

Quick Commands:
1. testCollectionSystem()          - Run complete test
2. createDiwaliCollection()        - Create Diwali collection
3. createValentineCollection()     - Create Valentine collection
4. createBridalCollection()        - Create Bridal collection
5. listAllCollections()            - List all collections
6. createFlashSaleCollection()     - Create flash sale
7. createSummerCollection()        - Create summer collection
8. createExclusiveCollection()     - Create exclusive collection

Example Usage:
await testCollectionSystem();
await createDiwaliCollection();
await listAllCollections();

Visit /collections to see results!
`);

// Export functions for use
window.collectionManager = {
    testCollectionSystem,
    createDiwaliCollection,
    createValentineCollection,
    createPremiumDiamondCollection,
    createBridalCollection,
    createFlashSaleCollection,
    createSummerCollection,
    createExclusiveCollection,
    listAllCollections,
    toggleCollection
}; 