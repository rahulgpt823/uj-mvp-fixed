import { ref, computed } from '#imports';
import type { Ref } from 'vue';
import { translateText } from '~/services/translate';

// Create a global state for the current language
const currentLanguage = ref<string>(
    process.client ? localStorage.getItem('preferredLanguage') || 'en' : 'en'
);

export function useTranslation() {
    async function translate(text: string, targetLang?: string): Promise<string> {
        const lang = targetLang || currentLanguage.value;
        if (lang === 'en') return text;

        try {
            return await translateText(text, lang);
        } catch (error) {
            console.error('Translation error:', error);
            return text;
        }
    }

    async function translateObject<T extends Record<string, string>>(
        obj: T,
        targetLang?: string
    ): Promise<T> {
        const lang = targetLang || currentLanguage.value;
        if (lang === 'en') return obj;

        const translated: Record<string, string> = {};
        for (const [key, value] of Object.entries(obj)) {
            translated[key] = await translate(value, lang);
        }
        return translated as T;
    }

    // Create a reactive computed property for the language
    const language = computed({
        get: () => currentLanguage.value,
        set: (newLang: string) => {
            currentLanguage.value = newLang;
            if (process.client) {
                localStorage.setItem('preferredLanguage', newLang);
            }
        }
    });

    return {
        currentLanguage: language,
        translate,
        translateObject
    };
} 