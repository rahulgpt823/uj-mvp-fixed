import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

async function testSupabaseClient() {
    console.log('🔍 Testing Supabase Client Connection')
    console.log('====================================')
    
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_ANON_KEY
    
    console.log('Environment variables:')
    console.log('SUPABASE_URL:', supabaseUrl)
    console.log('SUPABASE_ANON_KEY:', supabaseKey ? 'Set (hidden for security)' : 'Not set')
    
    if (!supabaseUrl || !supabaseKey) {
        console.log('❌ Missing Supabase environment variables')
        return
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    try {
        console.log('\n1. Testing basic connection...')
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .limit(1)
        
        if (error) {
            console.log('❌ Supabase query failed:', error.message)
            console.log('Error details:', error)
            
            // Check if it's a table not found error
            if (error.message.includes('relation') && error.message.includes('does not exist')) {
                console.log('\n🔍 The "products" table does not exist in your database.')
                console.log('This means either:')
                console.log('1. You need to create the tables in Supabase')
                console.log('2. You need to run database migrations')
                console.log('3. The table has a different name')
                
                // Try to list all tables
                console.log('\n2. Trying to list available tables...')
                const { data: tables, error: tablesError } = await supabase
                    .rpc('get_tables')
                    .select('*')
                
                if (tablesError) {
                    console.log('❌ Could not list tables:', tablesError.message)
                } else {
                    console.log('✅ Available tables:', tables)
                }
            }
        } else {
            console.log('✅ Supabase connection successful!')
            console.log('Found', data?.length || 0, 'products')
            if (data && data.length > 0) {
                console.log('Sample product:', data[0])
            }
        }
        
        // Test if we can access any table
        console.log('\n3. Testing access to auth users...')
        const { data: authData, error: authError } = await supabase.auth.getUser()
        if (authError) {
            console.log('❌ Auth test failed:', authError.message)
        } else {
            console.log('✅ Auth access working')
        }
        
    } catch (err) {
        console.log('❌ Unexpected error:', err.message)
    }
}

testSupabaseClient().catch(console.error) 