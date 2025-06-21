import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://bclkkbinnlxxsucnwlfj.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbGtrYmlubmx4eHN1Y253bGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NDMwMDQsImV4cCI6MjA2MTQxOTAwNH0._xcYt_-IzQRJOOIwjzD-ESJEd9cJgAgXvb_HF9Rbl2E'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function fixUsersTable() {
  console.log('🔧 Fixing users table schema...')
  
  try {
    // Check if role column exists
    console.log('📋 Checking users table structure...')
    
    const { data: columns, error: columnsError } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type, is_nullable')
      .eq('table_schema', 'public')
      .eq('table_name', 'users')
    
    if (columnsError) {
      console.log('Could not check table structure:', columnsError.message)
    } else {
      console.log('Current columns:', columns?.map(c => c.column_name) || [])
    }

    // Try to add role column if it doesn't exist
    console.log('👥 Adding role column to users table...')
    
    // First, let's try to insert a test user to see the exact error
    const testUser = {
      mobile_number: '9999999999',
      country_code: '+91',
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      is_verified: true,
      is_active: true,
      role: 'user'
    }
    
    const { data: insertResult, error: insertError } = await supabase
      .from('users')
      .insert(testUser)
      .select()
    
    if (insertError) {
      console.log('❌ Insert failed:', insertError.message)
      
      if (insertError.message.includes('role')) {
        console.log('🔧 Role column is missing. Let\'s create a new table structure...')
        
        // Create a new users table with correct structure
        const { error: createError } = await supabase.rpc('exec_sql', {
          sql: `
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
          `
        })
        
        if (createError) {
          console.log('❌ Could not recreate table:', createError.message)
          console.log('💡 You may need to manually create the table in Supabase dashboard')
        } else {
          console.log('✅ Users table recreated with correct structure')
        }
      }
    } else {
      console.log('✅ Test insert successful')
      
      // Clean up test data
      await supabase
        .from('users')
        .delete()
        .eq('mobile_number', '9999999999')
    }

    console.log('🎉 Users table fix completed!')
    
  } catch (error) {
    console.error('❌ Fix failed:', error)
    console.log('💡 Try running the SQL manually in your Supabase dashboard SQL editor')
  }
}

fixUsersTable() 