import { serverSupabaseClient } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
    try {
        const client = await serverSupabaseClient(event)

        const { data: { user }, error: userError } = await client.auth.getUser()

        if (userError || !user) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized'
            })
        }

        const userId = user.id

        // Start a transaction to delete all user data
        const { error: transactionError } = await client.rpc('delete_user_account', {
            user_id: userId
        })

        if (transactionError) {
            console.error('Delete account transaction error:', transactionError)

            // Fallback: Delete manually if RPC fails
            await deleteUserDataManually(client, userId)
        }

        // Delete the user from Supabase Auth
        const { error: authDeleteError } = await client.auth.admin.deleteUser(userId)

        if (authDeleteError) {
            console.error('Auth delete error:', authDeleteError)
            // Continue even if auth delete fails, as we've already deleted the data
        }

        return {
            success: true,
            message: 'Account deleted successfully'
        }
    } catch (error: any) {
        console.error('Delete account error:', error)

        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to delete account'
        })
    }
})

async function deleteUserDataManually(client: any, userId: string) {
    try {
        // Delete in order to respect foreign key constraints

        // 1. Delete user favorites
        await client
            .from('user_favorites')
            .delete()
            .eq('user_id', userId)

        // 2. Delete user sessions
        await client
            .from('user_sessions')
            .delete()
            .eq('user_id', userId)

        // 3. Delete OTP records
        await client
            .from('otp_records')
            .delete()
            .eq('user_id', userId)

        // 4. Delete user profile
        await client
            .from('users')
            .delete()
            .eq('id', userId)

        console.log('User data deleted manually for user:', userId)
    } catch (error) {
        console.error('Manual delete error:', error)
        throw error
    }
} 