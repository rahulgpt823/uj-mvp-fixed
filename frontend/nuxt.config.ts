// https://nuxt.com/docs/api/configuration/nuxt-config
declare const defineNuxtConfig: Function;

export default defineNuxtConfig({
    compatibilityDate: '2025-01-06',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    ssr: true,

    nitro: {
        experimental: {
            wasm: true
        }
    },

    runtimeConfig: {
        // Private keys (only available on server-side)
        databaseUrl: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/urvashi_jewellers',
        cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
        cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
        cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
        jwtSecret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
        twilioAccountSid: process.env.TWILIO_ACCOUNT_SID || 'ACbbeb6ddedfc84ea677161484cc1a2366',
        twilioAuthToken: process.env.TWILIO_AUTH_TOKEN || '005c24e9df2d824c44eca3ed5b8ac57a',
        twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER || '7080677160',
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,

        public: {
            apiUrl: process.env.API_URL || 'http://localhost:3000/api',
            rapidApiKey: process.env.RAPIDAPI_KEY,
            googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
            apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseAnonKey: process.env.SUPABASE_ANON_KEY
        }
    },

    app: {
        head: {
            title: 'Urvashi Jewellers',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Urvashi Jewellers - Your trusted jewelry partner' },
                { hid: 'description', name: 'description', content: 'Urvashi Jewellers - Your trusted jewelry partner' },
                { name: 'description', content: 'Exquisite jewelry collection by Urvashi Jewellers' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ],
            script: [
                {
                    src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`,
                    defer: true
                }
            ]
        }
    },

    typescript: {
        strict: true,
        shim: false
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxt/icon'
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },

    experimental: {
        asyncContext: true
    },

    build: {
        transpile: ['@vueuse/core']
    },

    vite: {
        vue: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag: string) => tag.startsWith('v-')
                }
            }
        }
    }
})