-- Compatible Database Setup for Urvashi Jewellers Authentication
-- This script works with existing tables and adds missing functionality

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Check if tables exist and create only if they don't
DO $$
BEGIN
    -- Check if users table exists and has the right structure
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'users') THEN
        CREATE TABLE users (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
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
        RAISE NOTICE 'Created users table';
    ELSE
        -- Check if we need to add missing columns to existing users table
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'mobile_number') THEN
            ALTER TABLE users ADD COLUMN mobile_number VARCHAR(15);
            ALTER TABLE users ADD COLUMN country_code VARCHAR(5) DEFAULT '+91';
            ALTER TABLE users ADD COLUMN first_name VARCHAR(50);
            ALTER TABLE users ADD COLUMN last_name VARCHAR(50);
            ALTER TABLE users ADD COLUMN is_verified BOOLEAN DEFAULT false;
            ALTER TABLE users ADD COLUMN is_active BOOLEAN DEFAULT true;
            ALTER TABLE users ADD COLUMN role VARCHAR(20) DEFAULT 'user';
            RAISE NOTICE 'Added missing columns to existing users table';
        END IF;
    END IF;

    -- Check if otp_verifications table exists
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'otp_verifications') THEN
        CREATE TABLE otp_verifications (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
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
        RAISE NOTICE 'Created otp_verifications table';
    ELSE
        -- Add missing columns if they don't exist
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'otp_verifications' AND column_name = 'used_at') THEN
            ALTER TABLE otp_verifications ADD COLUMN used_at TIMESTAMP WITH TIME ZONE;
            ALTER TABLE otp_verifications ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
            RAISE NOTICE 'Added missing columns to existing otp_verifications table';
        END IF;
        
        -- Remove purpose column if it exists (simplifying the design)
        IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'otp_verifications' AND column_name = 'purpose') THEN
            ALTER TABLE otp_verifications DROP COLUMN purpose;
            RAISE NOTICE 'Removed purpose column from otp_verifications table';
        END IF;
    END IF;

    -- Check if user_sessions table exists
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'user_sessions') THEN
        CREATE TABLE user_sessions (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            session_token VARCHAR(255) NOT NULL UNIQUE,
            device_info JSONB,
            expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
            is_active BOOLEAN DEFAULT true,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
        RAISE NOTICE 'Created user_sessions table';
    ELSE
        -- Add missing columns if they don't exist
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_sessions' AND column_name = 'device_info') THEN
            ALTER TABLE user_sessions ADD COLUMN device_info JSONB;
            ALTER TABLE user_sessions ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
            RAISE NOTICE 'Added missing columns to existing user_sessions table';
        END IF;
    END IF;

    -- Check if rate_limits table exists
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'rate_limits') THEN
        CREATE TABLE rate_limits (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            identifier VARCHAR(100) NOT NULL,
            action VARCHAR(50) NOT NULL,
            attempts INTEGER DEFAULT 1,
            window_start TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            blocked_until TIMESTAMP WITH TIME ZONE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            UNIQUE(identifier, action)
        );
        RAISE NOTICE 'Created rate_limits table';
    END IF;

    -- Check if user_carts table exists (handle both singular and plural)
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'user_carts') THEN
        IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'user_cart') THEN
            -- Rename existing user_cart to user_carts
            ALTER TABLE user_cart RENAME TO user_carts;
            RAISE NOTICE 'Renamed user_cart to user_carts';
        ELSE
            CREATE TABLE user_carts (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                product_id INTEGER NOT NULL, -- Reference to products table
                quantity INTEGER NOT NULL DEFAULT 1,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                UNIQUE(user_id, product_id)
            );
            RAISE NOTICE 'Created user_carts table';
        END IF;
    END IF;

    -- Check if user_favorites table exists
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'user_favorites') THEN
        CREATE TABLE user_favorites (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            product_id INTEGER NOT NULL, -- Reference to products table
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            UNIQUE(user_id, product_id)
        );
        RAISE NOTICE 'Created user_favorites table';
    END IF;

    -- Check if quotations table exists (handle both quotation_requests and quotations)
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'quotations') THEN
        IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'quotation_requests') THEN
            -- Rename existing quotation_requests to quotations
            ALTER TABLE quotation_requests RENAME TO quotations;
            RAISE NOTICE 'Renamed quotation_requests to quotations';
        ELSE
            CREATE TABLE quotations (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                product_id INTEGER NOT NULL, -- Reference to products table
                quantity INTEGER NOT NULL DEFAULT 1,
                message TEXT,
                status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'completed')),
                admin_response TEXT,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
            RAISE NOTICE 'Created quotations table';
        END IF;
    END IF;

END $$;

-- Create indexes (only if they don't exist)
CREATE INDEX IF NOT EXISTS idx_users_mobile ON users(mobile_number, country_code);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email) WHERE email IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_otp_verifications_mobile ON otp_verifications(mobile_number, country_code);
CREATE INDEX IF NOT EXISTS idx_otp_verifications_expires ON otp_verifications(expires_at);
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_token ON user_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_user_sessions_expires ON user_sessions(expires_at);
CREATE INDEX IF NOT EXISTS idx_rate_limits_identifier ON rate_limits(identifier, action);
CREATE INDEX IF NOT EXISTS idx_user_carts_user_id ON user_carts(user_id);
CREATE INDEX IF NOT EXISTS idx_user_favorites_user_id ON user_favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_quotations_user_id ON quotations(user_id);
CREATE INDEX IF NOT EXISTS idx_quotations_status ON quotations(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at (only if they don't exist)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.triggers WHERE trigger_name = 'update_users_updated_at') THEN
        CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.triggers WHERE trigger_name = 'update_otp_verifications_updated_at') THEN
        CREATE TRIGGER update_otp_verifications_updated_at BEFORE UPDATE ON otp_verifications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.triggers WHERE trigger_name = 'update_user_sessions_updated_at') THEN
        CREATE TRIGGER update_user_sessions_updated_at BEFORE UPDATE ON user_sessions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.triggers WHERE trigger_name = 'update_rate_limits_updated_at') THEN
        CREATE TRIGGER update_rate_limits_updated_at BEFORE UPDATE ON rate_limits FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.triggers WHERE trigger_name = 'update_user_carts_updated_at') THEN
        CREATE TRIGGER update_user_carts_updated_at BEFORE UPDATE ON user_carts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.triggers WHERE trigger_name = 'update_quotations_updated_at') THEN
        CREATE TRIGGER update_quotations_updated_at BEFORE UPDATE ON quotations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
END $$;

-- Set up Row Level Security (RLS) - only enable if not already enabled
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'users' AND rowsecurity = true) THEN
        ALTER TABLE users ENABLE ROW LEVEL SECURITY;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'otp_verifications' AND rowsecurity = true) THEN
        ALTER TABLE otp_verifications ENABLE ROW LEVEL SECURITY;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'user_sessions' AND rowsecurity = true) THEN
        ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'rate_limits' AND rowsecurity = true) THEN
        ALTER TABLE rate_limits ENABLE ROW LEVEL SECURITY;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'user_carts' AND rowsecurity = true) THEN
        ALTER TABLE user_carts ENABLE ROW LEVEL SECURITY;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'user_favorites' AND rowsecurity = true) THEN
        ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'quotations' AND rowsecurity = true) THEN
        ALTER TABLE quotations ENABLE ROW LEVEL SECURITY;
    END IF;
END $$;

-- Create policies (only if they don't exist)
DO $$
BEGIN
    -- Users table policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'users' AND policyname = 'Users can view their own data') THEN
        CREATE POLICY "Users can view their own data" ON users
            FOR SELECT USING (auth.uid()::text = id::text);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'users' AND policyname = 'Users can update their own data') THEN
        CREATE POLICY "Users can update their own data" ON users
            FOR UPDATE USING (auth.uid()::text = id::text);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'users' AND policyname = 'Allow insert for registration') THEN
        CREATE POLICY "Allow insert for registration" ON users
            FOR INSERT WITH CHECK (true);
    END IF;

    -- OTP verifications policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'otp_verifications' AND policyname = 'Allow OTP operations') THEN
        CREATE POLICY "Allow OTP operations" ON otp_verifications
            FOR ALL USING (true);
    END IF;

    -- User sessions policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_sessions' AND policyname = 'Users can manage their own sessions') THEN
        CREATE POLICY "Users can manage their own sessions" ON user_sessions
            FOR ALL USING (auth.uid()::text = user_id::text);
    END IF;

    -- Rate limits policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'rate_limits' AND policyname = 'Allow rate limit operations') THEN
        CREATE POLICY "Allow rate limit operations" ON rate_limits
            FOR ALL USING (true);
    END IF;

    -- User carts policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_carts' AND policyname = 'Users can manage their own cart') THEN
        CREATE POLICY "Users can manage their own cart" ON user_carts
            FOR ALL USING (auth.uid()::text = user_id::text);
    END IF;

    -- User favorites policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_favorites' AND policyname = 'Users can manage their own favorites') THEN
        CREATE POLICY "Users can manage their own favorites" ON user_favorites
            FOR ALL USING (auth.uid()::text = user_id::text);
    END IF;

    -- Quotations policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'quotations' AND policyname = 'Users can view their own quotations') THEN
        CREATE POLICY "Users can view their own quotations" ON quotations
            FOR SELECT USING (auth.uid()::text = user_id::text);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'quotations' AND policyname = 'Users can create quotations') THEN
        CREATE POLICY "Users can create quotations" ON quotations
            FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'quotations' AND policyname = 'Users can update their own quotations') THEN
        CREATE POLICY "Users can update their own quotations" ON quotations
            FOR UPDATE USING (auth.uid()::text = user_id::text);
    END IF;
END $$;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;

GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT, SELECT, UPDATE ON otp_verifications TO anon;
GRANT INSERT, SELECT, UPDATE ON rate_limits TO anon;
GRANT INSERT, SELECT ON users TO anon;
GRANT INSERT, SELECT ON user_sessions TO anon;

-- Show final table structure
SELECT 'FINAL TABLE STRUCTURE:' as info;
SELECT table_name, column_name, data_type, is_nullable
FROM information_schema.columns 
WHERE table_name IN ('users', 'otp_verifications', 'user_sessions', 'rate_limits', 'user_carts', 'user_favorites', 'quotations')
ORDER BY table_name, ordinal_position; 