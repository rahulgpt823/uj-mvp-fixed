-- Fix users table permissions for registration
-- Run this in your Supabase SQL Editor

-- First, let's check the current RLS status and policies
SELECT 'Current RLS Status:' as info, tablename, rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'users';

SELECT 'Current Policies:' as info, policyname, permissive, roles, cmd, qual
FROM pg_policies 
WHERE schemaname = 'public' AND tablename = 'users';

-- Option 1: Disable RLS temporarily for development (recommended for testing)
ALTER TABLE users DISABLE ROW LEVEL SECURITY;

-- Option 2: If you want to keep RLS enabled, create proper policies
-- (Uncomment the lines below if you prefer this approach)

-- DROP POLICY IF EXISTS "Allow insert for registration" ON users;
-- CREATE POLICY "Allow insert for registration" ON users
--     FOR INSERT WITH CHECK (true);

-- DROP POLICY IF EXISTS "Allow select for registration" ON users;
-- CREATE POLICY "Allow select for registration" ON users
--     FOR SELECT USING (true);

-- Grant necessary permissions to anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT ALL ON users TO anon;
GRANT ALL ON otp_verifications TO anon;
GRANT ALL ON user_sessions TO anon;
GRANT ALL ON rate_limits TO anon;

-- Grant permissions to authenticated role as well
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON users TO authenticated;
GRANT ALL ON otp_verifications TO authenticated;
GRANT ALL ON user_sessions TO authenticated;
GRANT ALL ON rate_limits TO authenticated;

-- Test the permissions by trying to insert a test user
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
) ON CONFLICT (mobile_number, country_code) DO NOTHING;

-- Verify the insert worked
SELECT 'Test successful - user created:' as status, 
       mobile_number, first_name, last_name 
FROM users 
WHERE mobile_number = '9999999999';

-- Clean up test data
DELETE FROM users WHERE mobile_number = '9999999999';

-- Show final permissions
SELECT 'Final RLS Status:' as info, tablename, rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'users';

SELECT 'Final Policies:' as info, policyname, permissive, roles, cmd, qual
FROM pg_policies 
WHERE schemaname = 'public' AND tablename = 'users'; 