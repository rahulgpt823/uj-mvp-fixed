/**
 * 🔍 Collection System Setup Verification
 * 
 * Run this script to verify your collections system is set up correctly
 * Usage: node verify-collections-setup.js
 */

const { createClient } = require('@supabase/supabase-js');

// You'll need to add your Supabase credentials here
const SUPABASE_URL = process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'YOUR_SERVICE_KEY';

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY || SUPABASE_URL.includes('YOUR_')) {
    console.log(`
❌ Missing Environment Variables!

Please set up your environment variables:
1. Create a .env file in your frontend directory
2. Add these lines:

SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
JWT_SECRET=your_jwt_secret

Get these from: https://supabase.com/dashboard → Your Project → Settings → API
    `);
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function verifySetup() {
    console.log('🔍 Verifying Collections System Setup...\n');

    try {
        // 1. Check if collections table exists
        console.log('1️⃣ Checking collections table...');
        const { data: collections, error: collectionsError } = await supabase
            .from('collections')
            .select('count(*)')
            .limit(1);

        if (collectionsError) {
            console.log('❌ Collections table not found!');
            console.log('   Please run the database migration first.');
            console.log('   Copy frontend/database/collections-schema.sql to Supabase SQL Editor');
            return false;
        }
        console.log('✅ Collections table exists');

        // 2. Check if product_tags table exists
        console.log('\n2️⃣ Checking product_tags table...');
        const { data: tags, error: tagsError } = await supabase
            .from('product_tags')
            .select('count(*)')
            .limit(1);

        if (tagsError) {
            console.log('❌ Product tags table not found!');
            return false;
        }
        console.log('✅ Product tags table exists');

        // 3. Check if sample data was inserted
        console.log('\n3️⃣ Checking sample collections...');
        const { data: sampleCollections, error: sampleError } = await supabase
            .from('collections')
            .select('name')
            .limit(5);

        if (sampleError || !sampleCollections || sampleCollections.length === 0) {
            console.log('⚠️  No sample collections found');
            console.log('   This is normal - you can create collections manually');
        } else {
            console.log('✅ Sample collections found:');
            sampleCollections.forEach(c => console.log(`   - ${c.name}`));
        }

        // 4. Check if functions exist
        console.log('\n4️⃣ Checking database functions...');
        const { data: functions, error: functionsError } = await supabase
            .rpc('get_collection_products', { 
                p_collection_id: '00000000-0000-0000-0000-000000000000',
                p_limit: 1 
            });

        if (functionsError && !functionsError.message.includes('does not exist')) {
            console.log('⚠️  Collection functions may not be installed correctly');
            console.log('   Error:', functionsError.message);
        } else {
            console.log('✅ Database functions are working');
        }

        console.log('\n🎉 Collections system verification complete!');
        console.log('\n📝 Next Steps:');
        console.log('1. Start your development server: npm run dev');
        console.log('2. Visit: http://localhost:3000/collections');
        console.log('3. Use the test script to create collections');
        console.log('4. Load test-collection-management.js in browser console');

        return true;

    } catch (error) {
        console.error('❌ Verification failed:', error.message);
        return false;
    }
}

async function createTestCollection() {
    console.log('\n🧪 Creating a test collection...');

    const testCollection = {
        name: 'Test Collection - Setup Verification',
        slug: 'test-collection-verification',
        description: 'This is a test collection created during setup verification',
        banner_image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
        banner_alt: 'Test collection banner',
        tag_filters: ['test', 'verification'],
        tag_match_mode: 'ANY',
        is_active: true,
        is_featured: false,
        display_order: 999
    };

    try {
        const { data, error } = await supabase
            .from('collections')
            .insert(testCollection)
            .select()
            .single();

        if (error) {
            console.log('❌ Failed to create test collection:', error.message);
            return false;
        }

        console.log('✅ Test collection created successfully!');
        console.log(`   ID: ${data.id}`);
        console.log(`   Name: ${data.name}`);
        console.log(`   Slug: ${data.slug}`);

        return true;
    } catch (error) {
        console.log('❌ Error creating test collection:', error.message);
        return false;
    }
}

// Run verification
async function main() {
    const isSetupValid = await verifySetup();
    
    if (isSetupValid) {
        console.log('\n🎯 Would you like to create a test collection? (y/n)');
        // For automation, we'll skip the prompt and create it
        await createTestCollection();
    }
}

main().catch(console.error); 