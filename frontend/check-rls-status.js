// Check current RLS status and policies
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

async function checkRLSStatus() {
    console.log('🔍 Checking RLS Status and Policies...')
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
            
            // Check if RLS is enabled
            const { data: rlsData, error: rlsError } = await supabase
                .rpc('get_table_rls_status', { table_name: table })
            
            if (rlsError) {
                console.log(`❌ Could not check RLS status: ${rlsError.message}`)
            } else {
                console.log(`✅ RLS Status: ${rlsData ? 'Enabled' : 'Disabled'}`)
            }

            // Try to get policies (this might not work with anon key)
            try {
                const { data: policies, error: policiesError } = await supabase
                    .from('information_schema.policies')
                    .select('*')
                    .eq('table_name', table)
                
                if (policiesError) {
                    console.log(`⚠️  Could not fetch policies: ${policiesError.message}`)
                } else {
                    console.log(`📝 Policies found: ${policies.length}`)
                    policies.forEach(policy => {
                        console.log(`   - ${policy.policy_name}: ${policy.action} ${policy.permissive ? 'ALLOW' : 'DENY'}`)
                    })
                }
            } catch (err) {
                console.log(`⚠️  Could not check policies: ${err.message}`)
            }
            
            console.log('')
        } catch (err) {
            console.log(`❌ Error checking ${table}: ${err.message}`)
            console.log('')
        }
    }

    // Test a simple insert to see what happens
    console.log('🧪 Testing simple insert...')
    
    try {
        const testData = {
            mobile_number: 'test123',
            country_code: '+91',
            otp_code: '123456',
            expires_at: new Date(Date.now() + 10 * 60 * 1000).toISOString()
        }

        const { data, error } = await supabase
            .from('otp_verifications')
            .insert(testData)
            .select()

        if (error) {
            console.log(`❌ Insert failed: ${error.message}`)
            console.log(`   Code: ${error.code}`)
            console.log(`   Details: ${error.details}`)
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

    console.log('')
    console.log('📋 If RLS is still blocking, you may need to:')
    console.log('1. Check if there are existing policies that conflict')
    console.log('2. Drop all existing policies and recreate them')
    console.log('3. Temporarily disable RLS for testing')
}

checkRLSStatus() 