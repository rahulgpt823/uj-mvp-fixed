import { createClient } from '@supabase/supabase-js'
import { verifyAuthToken } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey)

    const { userId } = verifyAuthToken(event)

    // We need to use the master key to bypass RLS and delete the user.
    // The 'auth.users' table is protected.
    const adminAuthClient = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey).auth.admin

    const { error: deleteAuthUserError } = await adminAuthClient.deleteUser(userId)

    if (deleteAuthUserError) {
        // This might fail if the user was already deleted, which is okay.
        console.warn('Could not delete user from auth.users:', deleteAuthUserError.message)
    }

    // Also delete from public 'users' table
    const { error: deleteProfileError } = await supabase
        .from('users')
        .delete()
        .eq('id', userId)

    if (deleteProfileError) {
        console.error('Could not delete user profile:', deleteProfileError)
        throw createError({ statusCode: 500, message: 'Could not delete user profile.' })
    }


    return { success: true }
}) 