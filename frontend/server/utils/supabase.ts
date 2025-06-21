import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { H3Event } from 'h3'

export const serverSupabaseClient = (event: H3Event) => {
    const config = useRuntimeConfig()
    let cookies: any = {}

    const cookieHeader = getHeader(event, 'cookie')
    if (cookieHeader) {
        cookies = parseCookies(event)
    }

    const supabase = createServerClient(
        config.public.supabaseUrl,
        config.public.supabaseAnonKey,
        {
            cookies: {
                get(key: string) {
                    return cookies[key]
                },
                set(key: string, value: string, options: CookieOptions) {
                    setCookie(event, key, value, options)
                },
                remove(key: string, options: CookieOptions) {
                    setCookie(event, key, '', { ...options, maxAge: -1 })
                },
            },
        }
    )

    return supabase
} 