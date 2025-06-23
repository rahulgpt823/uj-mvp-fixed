import { createClient } from '@supabase/supabase-js'
import { verifyAuthToken } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey)

    const { userId } = verifyAuthToken(event)

    const { data: user, error } = await supabase
        .from('users')
        .select('id, first_name, last_name, email, mobile_number')
        .eq('id', userId)
        .single()

    if (error || !user) {
        console.error('Error fetching account:', error)
        throw createError({
            statusCode: 404,
            statusMessage: 'User not found',
        })
    }

    return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        mobileNumber: user.mobile_number,
    }
}) 