import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

async function testConnectionStatus() {
    console.log('🔍 Testing Database Connection Status')
    console.log('===================================')
    
    console.log('\n1. Environment Variables Check:')
    console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? '✅ Set' : '❌ Missing')
    console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing')
    console.log('CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME ? '✅ Set' : '❌ Missing')
    console.log('CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY ? '✅ Set' : '❌ Missing')
    console.log('CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET ? '✅ Set' : '❌ Missing')
    
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
        console.log('\n❌ Missing required environment variables!')
        console.log('\nTo fix this:')
        console.log('1. Create a .env file in the frontend directory')
        console.log('2. Add your Supabase credentials:')
        console.log('   SUPABASE_URL=your_supabase_project_url')
        console.log('   SUPABASE_ANON_KEY=your_supabase_anon_key')
        console.log('3. Restart the development server')
        return
    }
    
    console.log('\n2. Testing Supabase Connection:')
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
    
    try {
        // Test basic connection
        const { data, error } = await supabase
            .from('products')
            .select('count')
            .limit(1)
        
        if (error) {
            console.log('❌ Database connection failed:', error.message)
            
            if (error.message.includes('relation') && error.message.includes('does not exist')) {
                console.log('\n🔧 Issue: Database tables are missing')
                console.log('Solution:')
                console.log('1. Go to your Supabase dashboard')
                console.log('2. Navigate to SQL Editor')
                console.log('3. Run the SQL from create-tables.sql')
                console.log('4. Run the SQL from grant-all-permissions.sql')
            } else if (error.message.includes('Invalid API key')) {
                console.log('\n🔧 Issue: Invalid Supabase credentials')
                console.log('Solution:')
                console.log('1. Check your SUPABASE_URL and SUPABASE_ANON_KEY in .env')
                console.log('2. Verify credentials in your Supabase dashboard')
            } else if (error.message.includes('authentication')) {
                console.log('\n🔧 Issue: Authentication failed')
                console.log('Solution:')
                console.log('1. Check if your Supabase project is active')
                console.log('2. Verify your API keys are correct')
                console.log('3. Check Row Level Security settings')
            }
        } else {
            console.log('✅ Database connection successful!')
            
            // Test products table
            const { data: products, error: productsError } = await supabase
                .from('products')
                .select('*')
                .limit(5)
            
            if (productsError) {
                console.log('❌ Products query failed:', productsError.message)
            } else {
                console.log(`✅ Found ${products?.length || 0} products in database`)
                if (products && products.length > 0) {
                    console.log('Sample product:', products[0].name || 'Unnamed product')
                }
            }
            
            // Test categories table
            const { data: categories, error: categoriesError } = await supabase
                .from('categories')
                .select('*')
                .limit(5)
            
            if (categoriesError) {
                console.log('❌ Categories query failed:', categoriesError.message)
            } else {
                console.log(`✅ Found ${categories?.length || 0} categories in database`)
            }
        }
    } catch (err) {
        console.log('❌ Unexpected error:', err.message)
    }
    
    console.log('\n3. API Endpoint Test:')
    try {
        const response = await fetch('http://localhost:3000/api/products/supabase', {
            method: 'GET'
        })
        
        if (response.ok) {
            const data = await response.json()
            console.log(`✅ API endpoint working - returned ${data.length} products`)
        } else {
            console.log('❌ API endpoint failed:', response.status, response.statusText)
            const errorText = await response.text()
            console.log('Error details:', errorText)
        }
    } catch (apiError) {
        console.log('❌ API endpoint error:', apiError.message)
        console.log('Make sure your development server is running: npm run dev')
    }
    
    console.log('\n✅ Connection test complete!')
}

testConnectionStatus().catch(console.error) 