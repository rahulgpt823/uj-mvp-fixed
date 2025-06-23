const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

console.log('🚀 Starting admin creation...');

const supabaseUrl = 'https://bclkkbinnlxxsucnwlfj.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbGtrYmlubmx4eHN1Y253bGZqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg0MzAwNCwiZXhwIjoyMDYxNDE5MDA0fQ.OH-sqazssVhAMf-pz78M4fKCo_Llbh2JSqe4JTWwtyeY';

console.log('🔍 Using Supabase URL:', supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createAdmin() {
    try {
        console.log('🔐 Creating admin user...');
        
        // Create new admin user
        const { data, error } = await supabase.auth.admin.createUser({
            email: 'rahulgpt823@gmail.com',
            password: 'ECe$8162',
            email_confirm: true,
            user_metadata: {
                role: 'ADMIN'
            }
        });

        if (error) {
            if (error.message.includes('already registered')) {
                console.log('✅ User already exists! Updating role...');
                
                // Get the user and update role
                const { data: users } = await supabase.auth.admin.listUsers();
                const existingUser = users.users.find(user => user.email === 'rahulgpt823@gmail.com');
                
                if (existingUser) {
                    const { error: updateError } = await supabase.auth.admin.updateUserById(
                        existingUser.id,
                        { 
                            user_metadata: { role: 'ADMIN' }
                        }
                    );
                    
                    if (updateError) {
                        console.error('❌ Error updating user:', updateError.message);
                    } else {
                        console.log('✅ User role updated successfully');
                    }
                }
            } else {
                console.error('❌ Error creating admin:', error.message);
                return;
            }
        } else {
            console.log('✅ Admin user created successfully!');
        }

        console.log('\n🎉 Admin setup complete!');
        console.log('\n📧 Email: rahulgpt823@gmail.com');
        console.log('🔑 Password: ECe$8162');
        console.log('🎯 Role: ADMIN');
        
        console.log('\n📋 Next steps:');
        console.log('1. Go to http://localhost:3000/login');
        console.log('2. Click "Admin" tab');
        console.log('3. Login with the credentials above');
        
    } catch (err) {
        console.error('❌ Unexpected error:', err.message);
    }
}

createAdmin(); 