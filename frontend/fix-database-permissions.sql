-- Fix database permissions and table structure
-- Run this in your Supabase SQL Editor

-- Grant necessary permissions to the anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO anon;

-- Create or replace the users table with correct structure
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mobile_number VARCHAR(15) NOT NULL,
    country_code VARCHAR(5) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    is_verified BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(mobile_number, country_code)
);

-- Create or replace otp_verifications table
DROP TABLE IF EXISTS otp_verifications CASCADE;

CREATE TABLE otp_verifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mobile_number VARCHAR(15) NOT NULL,
    country_code VARCHAR(5) NOT NULL,
    otp_code VARCHAR(6) NOT NULL,
    is_used BOOLEAN DEFAULT false,
    is_verified BOOLEAN DEFAULT false,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    used_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create or replace user_sessions table
DROP TABLE IF EXISTS user_sessions CASCADE;

CREATE TABLE user_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    session_token VARCHAR(255) NOT NULL UNIQUE,
    device_info JSONB,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create or replace rate_limits table
DROP TABLE IF EXISTS rate_limits CASCADE;

CREATE TABLE rate_limits (
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

-- Create indexes for better performance
CREATE INDEX idx_users_mobile_country ON users(mobile_number, country_code);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_otp_mobile_country ON otp_verifications(mobile_number, country_code);
CREATE INDEX idx_otp_expires ON otp_verifications(expires_at);
CREATE INDEX idx_sessions_user ON user_sessions(user_id);
CREATE INDEX idx_sessions_token ON user_sessions(session_token);
CREATE INDEX idx_rate_limits_identifier ON rate_limits(identifier);

-- Grant permissions to anon role
GRANT ALL ON users TO anon;
GRANT ALL ON otp_verifications TO anon;
GRANT ALL ON user_sessions TO anon;
GRANT ALL ON rate_limits TO anon;

-- Disable RLS temporarily for testing (enable in production)
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE otp_verifications DISABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions DISABLE ROW LEVEL SECURITY;
ALTER TABLE rate_limits DISABLE ROW LEVEL SECURITY;

-- Test insert to verify everything works
INSERT INTO users (
    mobile_number, 
    country_code, 
    first_name, 
    last_name, 
    email, 
    is_verified, 
    role
) VALUES (
    '9999999999',
    '+91',
    'Test',
    'User',
    'test@example.com',
    true,
    'user'
);

-- Verify the insert worked
SELECT * FROM users WHERE mobile_number = '9999999999';

-- Clean up test data
DELETE FROM users WHERE mobile_number = '9999999999';

-- Show final table structures
SELECT 'users' as table_name, column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_schema = 'public' AND table_name = 'users'
ORDER BY ordinal_position;

SELECT 'otp_verifications' as table_name, column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_schema = 'public' AND table_name = 'otp_verifications'
ORDER BY ordinal_position; 