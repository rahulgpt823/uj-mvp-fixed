// Check the actual structure of authentication tables
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase credentials')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkTableStructure() {
    console.log('🔍 Checking Table Structure...')
    console.log('')

    const tables = [
        'users',
        'otp_verifications', 
        'user_sessions',
        'rate_limits'
    ]

    for (const table of tables) {
        try {
            console.log(`📋 Table: ${table}`)
            
            // Try to get a sample record to see the structure
            const { data, error } = await supabase
                .from(table)
                .select('*')
                .limit(1)

            if (error) {
                console.log(`❌ Error: ${error.message}`)
            } else {
                console.log(`✅ Structure: ${Object.keys(data[0] || {}).join(', ')}`)
            }
            
            console.log('')
        } catch (err) {
            console.log(`❌ Error: ${err.message}`)
            console.log('')
        }
    }

    // Test a simple insert without the purpose column
    console.log('🧪 Testing simple insert without purpose column...')
    
    const testData = {
        mobile_number: 'test123',
        country_code: '+91',
        otp_code: '123456',
        expires_at: new Date(Date.now() + 10 * 60 * 1000).toISOString()
        // Removed purpose column
    }

    try {
        const { data, error } = await supabase
            .from('otp_verifications')
            .insert(testData)
            .select()

        if (error) {
            console.log(`❌ Insert failed: ${error.message}`)
        } else {
            console.log(`✅ Insert successful:`, data[0])
            
            // Clean up
            await supabase
                .from('otp_verifications')
                .delete()
                .eq('id', data[0].id)
            console.log('🧹 Test data cleaned up')
        }
    } catch (err) {
        console.log(`❌ Insert error: ${err.message}`)
    }
}

checkTableStructure() 