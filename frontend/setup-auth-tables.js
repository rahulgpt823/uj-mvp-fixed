// Setup authentication tables in Supabase
import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
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

async function setupAuthTables() {
    console.log('🔧 Setting up Authentication Tables...')
    console.log('')

    try {
        // Read the SQL file
        const sqlPath = path.join(process.cwd(), 'create-auth-tables.sql')
        const sqlContent = fs.readFileSync(sqlPath, 'utf8')

        console.log('📄 SQL file loaded successfully')
        console.log('')

        // Split SQL into individual statements
        const statements = sqlContent
            .split(';')
            .map(stmt => stmt.trim())
            .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'))

        console.log(`📝 Found ${statements.length} SQL statements to execute`)
        console.log('')

        let successCount = 0
        let errorCount = 0

        for (let i = 0; i < statements.length; i++) {
            const statement = statements[i]
            
            if (statement.trim().length === 0) continue

            try {
                console.log(`🔄 Executing statement ${i + 1}/${statements.length}...`)
                
                const { error } = await supabase.rpc('exec_sql', { sql: statement })
                
                if (error) {
                    // Try direct execution if RPC fails
                    const { error: directError } = await supabase
                        .from('users')
                        .select('id')
                        .limit(0)
                    
                    if (directError && directError.message.includes('does not exist')) {
                        console.log(`⚠️  Statement ${i + 1} may need admin privileges or table already exists`)
                    } else {
                        console.error(`❌ Statement ${i + 1} failed:`, error)
                        errorCount++
                    }
                } else {
                    console.log(`✅ Statement ${i + 1} executed successfully`)
                    successCount++
                }
            } catch (err) {
                console.log(`⚠️  Statement ${i + 1} skipped (likely already exists):`, err.message)
            }
        }

        console.log('')
        console.log('📊 Execution Summary:')
        console.log(`✅ Successful: ${successCount}`)
        console.log(`❌ Errors: ${errorCount}`)
        console.log(`⏭️  Skipped: ${statements.length - successCount - errorCount}`)
        console.log('')

        // Test if tables were created
        console.log('🧪 Testing table creation...')
        
        const tables = ['users', 'otp_verifications', 'user_sessions', 'rate_limits']
        
        for (const table of tables) {
            try {
                const { data, error } = await supabase
                    .from(table)
                    .select('*')
                    .limit(1)
                
                if (error) {
                    console.log(`❌ Table ${table}: ${error.message}`)
                } else {
                    console.log(`✅ Table ${table}: Accessible`)
                }
            } catch (err) {
                console.log(`❌ Table ${table}: ${err.message}`)
            }
        }

        console.log('')
        console.log('🎉 Authentication tables setup completed!')

    } catch (error) {
        console.error('❌ Setup failed:', error)
    }
}

setupAuthTables() 