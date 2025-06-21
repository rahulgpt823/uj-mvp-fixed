// Simple test to verify Supabase imports
import { createClient } from '@supabase/supabase-js'

console.log('Testing Supabase imports...')

try {
    // Test creating a client
    const supabase = createClient('https://test.supabase.co', 'test-key')
    console.log('✅ Supabase client created successfully')
    
    // Test importing types
    const { AuthUser } = await import('@supabase/supabase-js')
    console.log('✅ AuthUser type imported successfully')
    
} catch (error) {
    console.error('❌ Supabase import test failed:', error)
} 