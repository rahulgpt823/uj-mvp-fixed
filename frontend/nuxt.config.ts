// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

// Define runtime config types
declare module 'nuxt/config' {
    interface RuntimeConfig {
        public: {
            apiUrl: string
            rapidApiKey: string
            googleMapsApiKey: string
        }
    }
}

export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],

    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL || 'http://localhost:5000/api',
            rapidApiKey: process.env.RAPIDAPI_KEY,
            googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
        }
    },

    app: {
        head: {
            title: 'Urvashi Jewellers',
            meta: [
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
        typeCheck: true
    },

    compatibilityDate: '2025-04-26'
})