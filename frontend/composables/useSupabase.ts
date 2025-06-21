import { createClient } from '@supabase/supabase-js'
import { useRuntimeConfig } from '#app'

let supabaseInstance: ReturnType<typeof createClient> | null = null

export const useSupabase = () => {
    const config = useRuntimeConfig()

    if (!supabaseInstance) {
        supabaseInstance = createClient(
            config.public.supabaseUrl as string,
            config.public.supabaseAnonKey as string
        )
    }

    return supabaseInstance
} 