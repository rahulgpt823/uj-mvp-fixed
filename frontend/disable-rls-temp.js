// Temporarily disable RLS for testing
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

async function disableRLSTemp() {
    console.log('🔓 Temporarily disabling RLS for testing...')
    console.log('')

    const tables = [
        'users',
        'otp_verifications', 
        'user_sessions',
        'rate_limits'
    ]

    for (const table of tables) {
        try {
            console.log(`🔓 Disabling RLS for table: ${table}`)
            
            // Try to insert a test record to see if RLS is blocking
            const testData = {
                mobile_number: 'test123',
                country_code: '+91',
                otp_code: '123456',
                expires_at: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
                purpose: 'test'
            }

            const { data, error } = await supabase
                .from('otp_verifications')
                .insert(testData)
                .select()

            if (error) {
                console.log(`❌ Insert failed for ${table}: ${error.message}`)
                
                if (error.message.includes('permission denied') || error.message.includes('RLS')) {
                    console.log(`💡 RLS is blocking inserts for ${table}`)
                    console.log(`📋 You need to run this SQL in Supabase dashboard:`)
                    console.log(`   ALTER TABLE ${table} DISABLE ROW LEVEL SECURITY;`)
                    console.log(`   GRANT ALL ON ${table} TO anon;`)
                }
            } else {
                console.log(`✅ Insert successful for ${table}`)
                
                // Clean up test data
                if (data && data[0]) {
                    await supabase
                        .from('otp_verifications')
                        .delete()
                        .eq('id', data[0].id)
                    console.log(`🧹 Test data cleaned up for ${table}`)
                }
            }
        } catch (err) {
            console.log(`❌ Error testing ${table}: ${err.message}`)
        }
    }

    console.log('')
    console.log('📋 If RLS is blocking inserts, run these SQL commands in Supabase dashboard:')
    console.log('')
    console.log('-- Disable RLS temporarily')
    console.log('ALTER TABLE users DISABLE ROW LEVEL SECURITY;')
    console.log('ALTER TABLE otp_verifications DISABLE ROW LEVEL SECURITY;')
    console.log('ALTER TABLE user_sessions DISABLE ROW LEVEL SECURITY;')
    console.log('ALTER TABLE rate_limits DISABLE ROW LEVEL SECURITY;')
    console.log('')
    console.log('-- Grant permissions to anon role')
    console.log('GRANT ALL ON users TO anon;')
    console.log('GRANT ALL ON otp_verifications TO anon;')
    console.log('GRANT ALL ON user_sessions TO anon;')
    console.log('GRANT ALL ON rate_limits TO anon;')
    console.log('')
    console.log('-- Grant usage on sequences')
    console.log('GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;')
    console.log('')
    console.log('⚠️  Remember to re-enable RLS in production!')
}

disableRLSTemp() 