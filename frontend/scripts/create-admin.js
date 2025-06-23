const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('🔍 Environment check:');
console.log('SUPABASE_URL:', supabaseUrl ? '✅ Set' : '❌ Missing');
console.log('SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? '✅ Set' : '❌ Missing');

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing Supabase credentials in .env file');
    console.error('Please ensure you have:');
    console.error('- SUPABASE_URL=your_supabase_url');
    console.error('- SUPABASE_SERVICE_ROLE_KEY=your_service_role_key');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createAdminUser() {
    try {
        console.log('🔐 Creating/updating admin user...');
        
        // First, check if user exists
        console.log('🔍 Checking for existing admin user...');
        const { data: users, error: listError } = await supabase.auth.admin.listUsers();
        
        if (listError) {
            console.error('❌ Error listing users:', listError.message);
            return;
        }
        
        const existingUser = users.users.find(user => user.email === 'rahulgpt823@gmail.com');

        if (existingUser) {
            console.log('✅ User already exists, updating role...');
            const { error: updateError } = await supabase.auth.admin.updateUserById(
                existingUser.id,
                { 
                    user_metadata: { role: 'ADMIN' },
                    app_metadata: { role: 'ADMIN' }
                }
            );
            
            if (updateError) {
                console.error('❌ Error updating user:', updateError.message);
                return;
            }
            
            console.log('✅ User role updated successfully');
            console.log('📧 Email:', existingUser.email);
            console.log('🔑 Password: ECe$8162');
            console.log('🎯 Role: ADMIN');
            return;
        }

        // Create new user
        console.log('🆕 Creating new admin user...');
        const { data, error } = await supabase.auth.admin.createUser({
            email: 'rahulgpt823@gmail.com',
            password: 'ECe$8162',
            email_confirm: true, // Auto-confirm email
            user_metadata: {
                role: 'ADMIN'
            },
            app_metadata: {
                role: 'ADMIN'
            }
        });

        if (error) {
            console.error('❌ Error creating admin user:', error.message);
            return;
        }

        console.log('✅ Admin user created successfully!');
        console.log('📧 Email: rahulgpt823@gmail.com');
        console.log('🔑 Password: ECe$8162');
        console.log('🎯 Role: ADMIN');
        console.log('🆔 User ID:', data.user.id);
        
    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

// Also create admin in your custom users table if needed
async function createCustomAdminUser() {
    try {
        console.log('\n🔍 Checking custom users table...');
        
        // Check if admin exists in your custom users table
        const { data: existingUser, error: checkError } = await supabase
            .from('users')
            .select('*')
            .eq('email', 'rahulgpt823@gmail.com')
            .single();
            
        if (checkError && checkError.code !== 'PGRST116') {
            console.log('⚠️  Custom users table check failed:', checkError.message);
            return;
        }
        
        if (existingUser) {
            console.log('✅ Admin exists in custom users table');
            // Update role if needed
            const { error: updateError } = await supabase
                .from('users')
                .update({ role: 'admin' })
                .eq('email', 'rahulgpt823@gmail.com');
                
            if (updateError) {
                console.log('⚠️  Failed to update role in custom table:', updateError.message);
            } else {
                console.log('✅ Role updated in custom users table');
            }
            return;
        }
        
        // Create in custom users table
        console.log('🆕 Creating admin in custom users table...');
        const { error: insertError } = await supabase
            .from('users')
            .insert({
                email: 'rahulgpt823@gmail.com',
                role: 'admin',
                firstName: 'Admin',
                lastName: 'User',
                isVerified: true,
                isActive: true
            });
            
        if (insertError) {
            console.log('⚠️  Failed to create in custom users table:', insertError.message);
        } else {
            console.log('✅ Admin created in custom users table');
        }
        
    } catch (err) {
        console.log('⚠️  Custom users table operation failed:', err.message);
    }
}

async function main() {
    console.log('🚀 Starting admin user setup...\n');
    
    await createAdminUser();
    await createCustomAdminUser();
    
    console.log('\n🎉 Admin setup complete!');
    console.log('\n📋 Next steps:');
    console.log('1. Go to http://localhost:3000/login');
    console.log('2. Click "Admin" tab');
    console.log('3. Login with:');
    console.log('   📧 Email: rahulgpt823@gmail.com');
    console.log('   🔑 Password: ECe$8162');
    console.log('4. You should be redirected to admin dashboard');
}

main().catch(console.error); 