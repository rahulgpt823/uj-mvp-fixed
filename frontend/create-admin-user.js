/**
 * 🔐 Admin User Setup Script
 * 
 * This script helps you create or find your admin user
 * Run this in Supabase SQL Editor or using Node.js
 */

// For Supabase SQL Editor, copy this SQL:
console.log(`
🔐 ADMIN USER SETUP

=== STEP 1: Check Existing Admin Users ===
Copy this to Supabase SQL Editor:

SELECT id, phone, email, role, is_verified, created_at 
FROM users 
WHERE role = 'admin' 
ORDER BY created_at DESC;

=== STEP 2: Create New Admin User (if none exist) ===
Replace +919876543210 with YOUR phone number:

INSERT INTO users (
  phone, 
  role, 
  is_verified, 
  created_at, 
  updated_at
) VALUES (
  '+919876543210',  -- Replace with YOUR phone number
  'admin',
  true,
  NOW(),
  NOW()
);

=== STEP 3: Make Existing User Admin ===
If you have a regular user account, make it admin:

UPDATE users 
SET role = 'admin', is_verified = true 
WHERE phone = '+919876543210';  -- Replace with YOUR phone

=== STEP 4: Login Process ===
1. Go to your website
2. Click Login
3. Enter your phone number
4. Enter the OTP sent to your phone
5. You'll be logged in as admin

=== STEP 5: Verify Admin Access ===
After login, try accessing:
- /admin (if you have admin pages)
- Collection management APIs
- Admin-only features

`);

// If you want to run this via Node.js with Supabase:
const { createClient } = require('@supabase/supabase-js');

async function setupAdmin() {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
        console.log('❌ Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env file');
        return;
    }
    
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
    
    try {
        // Check existing admin users
        console.log('🔍 Checking for existing admin users...');
        const { data: admins, error: adminError } = await supabase
            .from('users')
            .select('id, phone, email, role, created_at')
            .eq('role', 'admin')
            .order('created_at', { ascending: false });
            
        if (adminError) {
            console.error('❌ Error checking admin users:', adminError.message);
            return;
        }
        
        if (admins && admins.length > 0) {
            console.log('✅ Found existing admin users:');
            admins.forEach(admin => {
                console.log(`   📱 Phone: ${admin.phone}`);
                console.log(`   🆔 ID: ${admin.id}`);
                console.log(`   📅 Created: ${admin.created_at}`);
                console.log('');
            });
            console.log('You can login with any of these phone numbers using OTP');
            return;
        }
        
        // No admin users found, provide instructions
        console.log('⚠️  No admin users found!');
        console.log('');
        console.log('📝 To create an admin user:');
        console.log('1. Replace YOUR_PHONE_NUMBER below with your actual phone');
        console.log('2. Run this in Supabase SQL Editor:');
        console.log('');
        console.log(`INSERT INTO users (phone, role, is_verified, created_at, updated_at) VALUES`);
        console.log(`('+919876543210', 'admin', true, NOW(), NOW());`);
        console.log('');
        console.log('3. Then login using OTP with that phone number');
        
    } catch (error) {
        console.error('❌ Setup failed:', error.message);
    }
}

// Export for Node.js usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { setupAdmin };
    
    // Run if called directly
    if (require.main === module) {
        setupAdmin();
    }
} 