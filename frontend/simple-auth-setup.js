// Simple authentication tables setup check
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

async function checkAuthTables() {
    console.log('🔍 Checking Authentication Tables...')
    console.log('')

    const tables = [
        'users',
        'otp_verifications', 
        'user_sessions',
        'rate_limits'
    ]

    let missingTables = []

    for (const table of tables) {
        try {
            console.log(`🔍 Checking table: ${table}`)
            
            const { data, error } = await supabase
                .from(table)
                .select('*')
                .limit(1)
            
            if (error) {
                console.log(`❌ Table ${table}: ${error.message}`)
                missingTables.push(table)
            } else {
                console.log(`✅ Table ${table}: Exists and accessible`)
            }
        } catch (err) {
            console.log(`❌ Table ${table}: ${err.message}`)
            missingTables.push(table)
        }
    }

    console.log('')
    
    if (missingTables.length === 0) {
        console.log('🎉 All authentication tables are ready!')
        return true
    } else {
        console.log('❌ Missing tables:', missingTables.join(', '))
        console.log('')
        console.log('📋 To fix this, you need to:')
        console.log('')
        console.log('1. Go to your Supabase dashboard:')
        console.log(`   ${supabaseUrl.replace('/rest/v1', '')}`)
        console.log('')
        console.log('2. Navigate to SQL Editor')
        console.log('')
        console.log('3. Copy and paste the contents of create-auth-tables.sql')
        console.log('')
        console.log('4. Execute the SQL')
        console.log('')
        console.log('5. Run this script again to verify')
        console.log('')
        
        // Show the SQL content
        console.log('📄 SQL Content to execute:')
        console.log('=====================================')
        console.log(`
-- Users table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    mobile_number VARCHAR(20) UNIQUE NOT NULL,
    country_code VARCHAR(5) NOT NULL DEFAULT '+91',
    email VARCHAR(255) UNIQUE,
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- OTP verification table
CREATE TABLE IF NOT EXISTS otp_verifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mobile_number VARCHAR(20) NOT NULL,
    country_code VARCHAR(5) NOT NULL DEFAULT '+91',
    otp_code VARCHAR(6) NOT NULL,
    attempts INTEGER DEFAULT 0,
    max_attempts INTEGER DEFAULT 3,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    is_used BOOLEAN DEFAULT FALSE,
    purpose VARCHAR(50) NOT NULL DEFAULT 'login',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User sessions table
CREATE TABLE IF NOT EXISTS user_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    device_info JSONB,
    ip_address INET,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_accessed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Rate limiting table
CREATE TABLE IF NOT EXISTS rate_limits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    identifier VARCHAR(100) NOT NULL,
    action VARCHAR(50) NOT NULL,
    attempts INTEGER DEFAULT 1,
    window_start TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    blocked_until TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(identifier, action)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_users_mobile ON users(mobile_number);
CREATE INDEX IF NOT EXISTS idx_otp_mobile ON otp_verifications(mobile_number, country_code);
CREATE INDEX IF NOT EXISTS idx_sessions_token ON user_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_rate_limits_identifier ON rate_limits(identifier, action);
        `)
        console.log('=====================================')
        
        return false
    }
}

checkAuthTables() 