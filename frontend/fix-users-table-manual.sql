-- Fix users table structure
-- Run this in your Supabase SQL Editor

-- First, let's check the current table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'users';

-- Drop the existing users table if it exists
DROP TABLE IF EXISTS users CASCADE;

-- Create the users table with correct structure
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

-- Create indexes for better performance
CREATE INDEX idx_users_mobile_country ON users(mobile_number, country_code);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- Disable RLS temporarily for testing (enable in production)
ALTER TABLE users DISABLE ROW LEVEL SECURITY;

-- Test insert
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

-- Show final table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'users'
ORDER BY ordinal_position; 