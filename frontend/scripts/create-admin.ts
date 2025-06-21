import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase credentials in .env file')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function createAdminUser() {
    try {
        // First, check if user exists
        const { data: users } = await supabase.auth.admin.listUsers()
        const existingUser = users.users.find(user => user.email === 'rahulgpt823@gmail.com')

        if (existingUser) {
            console.log('User already exists, updating role...')
            const { error: updateError } = await supabase.auth.admin.updateUserById(
                existingUser.id,
                { user_metadata: { role: 'ADMIN' } }
            )
            if (updateError) {
                console.error('Error updating user:', updateError.message)
                return
            }
            console.log('User role updated successfully')
            return
        }

        // Create new user
        const { data, error } = await supabase.auth.admin.createUser({
            email: 'rahulgpt823@gmail.com',
            password: 'ECe$8162',
            email_confirm: true, // Auto-confirm email
            user_metadata: {
                role: 'ADMIN'
            }
        })

        if (error) {
            console.error('Error creating admin user:', error.message)
            return
        }

        console.log('Admin user created successfully:', data)
    } catch (err) {
        console.error('Unexpected error:', err)
    }
}

createAdminUser() 