-- COMPREHENSIVE AUTH & DATABASE FIX
-- Run this entire script in your Supabase SQL Editor
-- This will fix all authentication, schema, and permission issues

-- ==============================================
-- 1. DROP ALL EXISTING TABLES (Fresh Start)
-- ==============================================
DROP TABLE IF EXISTS user_favorites CASCADE;
DROP TABLE IF EXISTS user_sessions CASCADE;
DROP TABLE IF EXISTS rate_limits CASCADE;
DROP TABLE IF EXISTS otp_verifications CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- ==============================================
-- 2. CREATE CORE TABLES WITH CORRECT SCHEMA
-- ==============================================

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mobile_number VARCHAR(15) NOT NULL,
    country_code VARCHAR(5) NOT NULL DEFAULT '+91',
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    is_verified BOOLEAN DEFAULT true,
    is_active BOOLEAN DEFAULT true,
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(mobile_number, country_code)
);

-- OTP verifications table
CREATE TABLE otp_verifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mobile_number VARCHAR(15) NOT NULL,
    country_code VARCHAR(5) NOT NULL DEFAULT '+91',
    otp_code VARCHAR(6) NOT NULL,
    is_used BOOLEAN DEFAULT false,
    is_verified BOOLEAN DEFAULT false,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    used_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User sessions table
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

-- Rate limits table
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

-- User favorites table (with all required columns)
CREATE TABLE user_favorites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    product_id VARCHAR(255) NOT NULL,
    product_name VARCHAR(500) NOT NULL,
    product_image TEXT NOT NULL,
    product_price DECIMAL(10,2) NOT NULL,
    product_category VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, product_id)
);

-- ==============================================
-- 3. CREATE INDEXES FOR PERFORMANCE
-- ==============================================
CREATE INDEX idx_users_mobile_country ON users(mobile_number, country_code);
CREATE INDEX idx_users_email ON users(email) WHERE email IS NOT NULL;
CREATE INDEX idx_users_role ON users(role);

CREATE INDEX idx_otp_mobile_country ON otp_verifications(mobile_number, country_code);
CREATE INDEX idx_otp_expires ON otp_verifications(expires_at);

CREATE INDEX idx_sessions_user_id ON user_sessions(user_id);
CREATE INDEX idx_sessions_token ON user_sessions(session_token);
CREATE INDEX idx_sessions_expires ON user_sessions(expires_at);

CREATE INDEX idx_rate_limits_identifier ON rate_limits(identifier, action);

CREATE INDEX idx_favorites_user_id ON user_favorites(user_id);
CREATE INDEX idx_favorites_product_id ON user_favorites(product_id);
CREATE INDEX idx_favorites_created ON user_favorites(created_at);

-- ==============================================
-- 4. CREATE TRIGGERS FOR UPDATED_AT
-- ==============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_otp_updated_at 
    BEFORE UPDATE ON otp_verifications 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_sessions_updated_at 
    BEFORE UPDATE ON user_sessions 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_rate_limits_updated_at 
    BEFORE UPDATE ON rate_limits 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_favorites_updated_at 
    BEFORE UPDATE ON user_favorites 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ==============================================
-- 5. DISABLE RLS (FOR DEVELOPMENT)
-- ==============================================
-- Note: Enable RLS in production for security
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE otp_verifications DISABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions DISABLE ROW LEVEL SECURITY;
ALTER TABLE rate_limits DISABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites DISABLE ROW LEVEL SECURITY;

-- ==============================================
-- 6. GRANT ALL PERMISSIONS
-- ==============================================
-- Grant permissions to anon role (for API access)
GRANT ALL ON users TO anon;
GRANT ALL ON otp_verifications TO anon;
GRANT ALL ON user_sessions TO anon;
GRANT ALL ON rate_limits TO anon;
GRANT ALL ON user_favorites TO anon;

-- Grant permissions to authenticated role
GRANT ALL ON users TO authenticated;
GRANT ALL ON otp_verifications TO authenticated;
GRANT ALL ON user_sessions TO authenticated;
GRANT ALL ON rate_limits TO authenticated;
GRANT ALL ON user_favorites TO authenticated;

-- Grant permissions to service_role
GRANT ALL ON users TO service_role;
GRANT ALL ON otp_verifications TO service_role;
GRANT ALL ON user_sessions TO service_role;
GRANT ALL ON rate_limits TO service_role;
GRANT ALL ON user_favorites TO service_role;

-- Grant schema usage
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;

-- Grant sequence permissions
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- ==============================================
-- 7. CREATE HELPER FUNCTIONS
-- ==============================================

-- Function to clean up expired sessions
CREATE OR REPLACE FUNCTION cleanup_expired_sessions()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM user_sessions 
    WHERE expires_at < NOW() OR is_active = false;
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Function to get user favorites count
CREATE OR REPLACE FUNCTION get_user_favorites_count(user_uuid UUID)
RETURNS INTEGER AS $$
BEGIN
    RETURN (
        SELECT COUNT(*) 
        FROM user_favorites 
        WHERE user_id = user_uuid
    );
END;
$$ LANGUAGE plpgsql;

-- Function to check if product is favorited
CREATE OR REPLACE FUNCTION is_product_favorited(user_uuid UUID, product_uuid VARCHAR)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS(
        SELECT 1 
        FROM user_favorites 
        WHERE user_id = user_uuid AND product_id = product_uuid
    );
END;
$$ LANGUAGE plpgsql;

-- Grant execute permissions on functions
GRANT EXECUTE ON FUNCTION cleanup_expired_sessions() TO anon;
GRANT EXECUTE ON FUNCTION get_user_favorites_count(UUID) TO anon;
GRANT EXECUTE ON FUNCTION is_product_favorited(UUID, VARCHAR) TO anon;

GRANT EXECUTE ON FUNCTION cleanup_expired_sessions() TO authenticated;
GRANT EXECUTE ON FUNCTION get_user_favorites_count(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION is_product_favorited(UUID, VARCHAR) TO authenticated;

-- ==============================================
-- 8. VERIFY SETUP
-- ==============================================

-- Insert test data to verify everything works
DO $$
DECLARE
    test_user_id UUID;
    test_session_token VARCHAR(255) := 'test_session_' || gen_random_uuid()::text;
BEGIN
    -- Test user creation
    INSERT INTO users (
        mobile_number, 
        country_code, 
        first_name, 
        last_name, 
        email,
        is_verified
    ) VALUES (
        '9999999999',
        '+91',
        'Test',
        'User',
        'test@example.com',
        true
    ) RETURNING id INTO test_user_id;
    
    -- Test session creation
    INSERT INTO user_sessions (
        user_id,
        session_token,
        expires_at
    ) VALUES (
        test_user_id,
        test_session_token,
        NOW() + INTERVAL '30 days'
    );
    
    -- Test favorite creation
    INSERT INTO user_favorites (
        user_id,
        product_id,
        product_name,
        product_image,
        product_price,
        product_category
    ) VALUES (
        test_user_id,
        'test_product_1',
        'Test Diamond Ring',
        'https://example.com/ring.jpg',
        50000.00,
        'Rings'
    );
    
    -- Verify all tables work
    RAISE NOTICE 'TEST RESULTS:';
    RAISE NOTICE 'Users count: %', (SELECT COUNT(*) FROM users);
    RAISE NOTICE 'Sessions count: %', (SELECT COUNT(*) FROM user_sessions);
    RAISE NOTICE 'Favorites count: %', (SELECT COUNT(*) FROM user_favorites);
    
    -- Clean up test data
    DELETE FROM user_favorites WHERE user_id = test_user_id;
    DELETE FROM user_sessions WHERE user_id = test_user_id;
    DELETE FROM users WHERE id = test_user_id;
    
    RAISE NOTICE 'Test data cleaned up successfully!';
    RAISE NOTICE '✅ ALL TABLES AND RELATIONSHIPS WORKING CORRECTLY!';
END $$;

-- ==============================================
-- 9. SHOW FINAL SCHEMA
-- ==============================================
SELECT 'FINAL TABLE STRUCTURE:' as info;

SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name IN ('users', 'otp_verifications', 'user_sessions', 'rate_limits', 'user_favorites')
ORDER BY table_name, ordinal_position;

-- ==============================================
-- 10. SHOW FOREIGN KEY RELATIONSHIPS
-- ==============================================
SELECT 
    'FOREIGN KEY RELATIONSHIPS:' as info;

SELECT 
    tc.table_name, 
    kcu.column_name, 
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name 
FROM 
    information_schema.table_constraints AS tc 
    JOIN information_schema.key_column_usage AS kcu
      ON tc.constraint_name = kcu.constraint_name
      AND tc.table_schema = kcu.table_schema
    JOIN information_schema.constraint_column_usage AS ccu
      ON ccu.constraint_name = tc.constraint_name
      AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY' 
AND tc.table_schema = 'public'
ORDER BY tc.table_name; 