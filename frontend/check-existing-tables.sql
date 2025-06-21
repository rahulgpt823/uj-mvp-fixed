-- Check existing tables in the database
-- Run this first to see what tables already exist

-- List all tables in the public schema
SELECT 'ALL TABLES:' as section, table_name, table_type 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- Check authentication-related tables specifically
SELECT 'AUTH TABLES:' as section, table_name, 
       CASE WHEN table_name IN ('users', 'otp_verifications', 'user_sessions', 'rate_limits', 'user_cart', 'user_carts', 'user_favorites', 'quotation_requests', 'quotations') 
            THEN 'AUTHENTICATION RELATED' 
            ELSE 'OTHER' 
       END as table_type
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('users', 'otp_verifications', 'user_sessions', 'rate_limits', 'user_cart', 'user_carts', 'user_favorites', 'quotation_requests', 'quotations')
ORDER BY table_name;

-- Check structure of existing auth tables
SELECT 'USERS TABLE STRUCTURE:' as section, column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'users' AND table_schema = 'public'
ORDER BY ordinal_position;

SELECT 'OTP_VERIFICATIONS TABLE STRUCTURE:' as section, column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'otp_verifications' AND table_schema = 'public'
ORDER BY ordinal_position;

SELECT 'USER_SESSIONS TABLE STRUCTURE:' as section, column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'user_sessions' AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check if RLS is enabled
SELECT 'RLS STATUS:' as section, tablename, rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' 
  AND tablename IN ('users', 'otp_verifications', 'user_sessions', 'rate_limits', 'user_cart', 'user_carts', 'user_favorites', 'quotation_requests', 'quotations')
ORDER BY tablename;

-- Check existing policies
SELECT 'EXISTING POLICIES:' as section, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies 
WHERE schemaname = 'public' 
  AND tablename IN ('users', 'otp_verifications', 'user_sessions', 'rate_limits', 'user_cart', 'user_carts', 'user_favorites', 'quotation_requests', 'quotations')
ORDER BY tablename, policyname; 