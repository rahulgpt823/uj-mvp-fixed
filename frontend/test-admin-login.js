const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://bclkkbinnlxxsucnwlfj.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbGtrYmlubmx4eHN1Y253bGZqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg0MzAwNCwiZXhwIjoyMDYxNDE5MDA0fQ.OH-sqazssVhAMf-pz78M4fKCo_Llbh2JSqe4JTWwtyeY';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testAdminLogin() {
    console.log('🧪 Testing Admin Login System...\n');
    
    try {
        // Step 1: Check if admin user exists in Supabase Auth
        console.log('1️⃣ Checking Supabase Auth users...');
        const { data: users, error: listError } = await supabase.auth.admin.listUsers();
        
        if (listError) {
            console.error('❌ Error listing users:', listError);
            return;
        }
        
        const adminUser = users.users.find(user => user.email === 'rahulgpt823@gmail.com');
        
        if (!adminUser) {
            console.log('❌ Admin user not found in Supabase Auth');
            console.log('🔧 Creating admin user...');
            
            const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
                email: 'rahulgpt823@gmail.com',
                password: 'ECe$8162',
                email_confirm: true,
                user_metadata: {
                    role: 'ADMIN'
                }
            });
            
            if (createError) {
                console.error('❌ Error creating admin user:', createError);
                return;
            }
            
            console.log('✅ Admin user created successfully');
        } else {
            console.log('✅ Admin user exists in Supabase Auth');
            console.log('   Email:', adminUser.email);
            console.log('   Role:', adminUser.user_metadata?.role);
            console.log('   Confirmed:', adminUser.email_confirmed_at ? 'Yes' : 'No');
        }
        
        // Step 2: Test authentication
        console.log('\n2️⃣ Testing authentication...');
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email: 'rahulgpt823@gmail.com',
            password: 'ECe$8162'
        });
        
        if (authError) {
            console.error('❌ Authentication failed:', authError.message);
            return;
        }
        
        console.log('✅ Authentication successful');
        console.log('   User ID:', authData.user.id);
        console.log('   Email:', authData.user.email);
        console.log('   Role:', authData.user.user_metadata?.role);
        
        // Step 3: Check users table
        console.log('\n3️⃣ Checking users table...');
        const { data: userRecord, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('email', 'rahulgpt823@gmail.com')
            .single();
            
        if (userError && userError.code === 'PGRST116') {
            console.log('❌ User not found in users table, creating...');
            
            const { data: newUserRecord, error: createUserError } = await supabase
                .from('users')
                .insert({
                    email: 'rahulgpt823@gmail.com',
                    first_name: 'Admin',
                    last_name: 'User',
                    role: 'admin',
                    is_verified: true,
                    is_active: true,
                    mobile_number: null,
                    country_code: '+91'
                })
                .select()
                .single();
                
            if (createUserError) {
                console.error('❌ Error creating user record:', createUserError);
                return;
            }
            
            console.log('✅ User record created successfully');
        } else if (userError) {
            console.error('❌ Error checking user record:', userError);
            return;
        } else {
            console.log('✅ User record exists in users table');
            console.log('   ID:', userRecord.id);
            console.log('   Role:', userRecord.role);
            console.log('   Active:', userRecord.is_active);
        }
        
        // Step 4: Test admin login API
        console.log('\n4️⃣ Testing admin login API...');
        
        const fetch = (await import('node-fetch')).default;
        
        const response = await fetch('http://localhost:3000/api/auth/admin-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'rahulgpt823@gmail.com',
                password: 'ECe$8162'
            })
        });
        
        const result = await response.json();
        
        if (!response.ok) {
            console.error('❌ Admin login API failed:', result);
            return;
        }
        
        console.log('✅ Admin login API successful');
        console.log('   Success:', result.success);
        console.log('   User:', result.user?.firstName, result.user?.lastName);
        console.log('   Role:', result.user?.role);
        
        console.log('\n🎉 All tests passed! Admin login should work now.');
        console.log('\n📋 Next steps:');
        console.log('1. Go to http://localhost:3000/login');
        console.log('2. Switch to "Admin" tab');
        console.log('3. Login with:');
        console.log('   📧 Email: rahulgpt823@gmail.com');
        console.log('   🔑 Password: ECe$8162');
        console.log('4. Navigate to /admin/collections');
        console.log('5. Try creating a collection');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    }
}

testAdminLogin(); 