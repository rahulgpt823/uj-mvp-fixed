// Simple admin user creation script
console.log('🔧 Ensuring admin user exists...');

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://bclkkbinnlxxsucnwlfj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbGtrYmlubmx4eHN1Y253bGZqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg0MzAwNCwiZXhwIjoyMDYxNDE5MDA0fQ.OH-sqazssVhAMf-pz78M4fKCo_Llbh2JSqe4JTWwtyeY'
);

async function ensureAdmin() {
    try {
        console.log('Creating/updating admin user...');
        
        const { data, error } = await supabase.auth.admin.createUser({
            email: 'rahulgpt823@gmail.com',
            password: 'ECe$8162',
            email_confirm: true,
            user_metadata: { role: 'ADMIN' }
        });

        if (error && error.message.includes('already registered')) {
            console.log('✅ Admin user already exists');
        } else if (error) {
            console.error('❌ Error:', error.message);
        } else {
            console.log('✅ Admin user created successfully');
        }
        
        console.log('\n🎯 Admin Login Credentials:');
        console.log('Email: rahulgpt823@gmail.com');
        console.log('Password: ECe$8162');
        console.log('\n📍 Login URL: http://localhost:3000/login (Admin tab)');
        
    } catch (err) {
        console.error('❌ Failed:', err.message);
    }
}

ensureAdmin(); 