// Supported languages
export const supportedLanguages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'bn', name: 'Bengali' },
    { code: 'mr', name: 'Marathi' },
];

// Using MyMemory Translation API (free and more reliable)
const MYMEMORY_API_URL = 'https://api.mymemory.translated.net/get';

// Translation cache
const translationCache: Record<string, Record<string, string>> = {};
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Rate limiting
const REQUEST_INTERVAL = 1000; // 1 second between requests
let lastRequestTime = 0;

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getCacheKey(text: string, targetLanguage: string): string {
    return `${text}:${targetLanguage}`;
}

function getFromCache(text: string, targetLanguage: string): string | null {
    const cache = translationCache[targetLanguage];
    if (cache && cache[text]) {
        return cache[text];
    }
    return null;
}

function saveToCache(text: string, targetLanguage: string, translation: string) {
    if (!translationCache[targetLanguage]) {
        translationCache[targetLanguage] = {};
    }
    translationCache[targetLanguage][text] = translation;
}

export async function translateText(text: string, targetLanguage: string) {
    console.log(`Attempting to translate text to ${targetLanguage}:`, text);

    // Return original text if target language is English
    if (targetLanguage === 'en') {
        return text;
    }

    // Check cache first
    const cachedTranslation = getFromCache(text, targetLanguage);
    if (cachedTranslation) {
        console.log('Using cached translation');
        return cachedTranslation;
    }

    try {
        // Implement rate limiting
        const now = Date.now();
        const timeSinceLastRequest = now - lastRequestTime;
        if (timeSinceLastRequest < REQUEST_INTERVAL) {
            await delay(REQUEST_INTERVAL - timeSinceLastRequest);
        }
        lastRequestTime = Date.now();

        const response = await fetch(
            `${MYMEMORY_API_URL}?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`
        );

        if (!response.ok) {
            if (response.status === 429) {
                console.warn('Rate limit reached, waiting before retry...');
                await delay(2000); // Wait 2 seconds before retry
                return translateText(text, targetLanguage); // Retry the translation
            }
            throw new Error(`Translation failed: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.responseStatus === 200) {
            const translation = data.responseData.translatedText;
            console.log('Translation successful:', translation);

            // Save to cache
            saveToCache(text, targetLanguage, translation);

            return translation;
        } else {
            console.error('Translation API error:', data);
            throw new Error(data.responseDetails || 'Translation failed');
        }
    } catch (error) {
        console.error('Translation error:', error);
        return text; // Return original text if translation fails
    }
}

// Function to check if translation service is available
export async function checkTranslationService() {
    try {
        const response = await fetch(
            `${MYMEMORY_API_URL}?q=test&langpair=en|hi`
        );
        if (!response.ok) {
            throw new Error('Translation service unavailable');
        }
        const data = await response.json();
        return data.responseStatus === 200;
    } catch (error) {
        console.error('Translation service check failed:', error);
        return false;
    }
}

export async function detectLanguage(text: string): Promise<string> {
    // MyMemory doesn't provide language detection
    // We'll assume English if the text matches English characters, otherwise return 'unknown'
    const englishPattern = /^[A-Za-z\s.,!?'"()-]+$/;
    return englishPattern.test(text) ? 'en' : 'unknown';
}

// Initialize cache from localStorage if available
if (typeof window !== 'undefined') {
    try {
        const savedCache = localStorage.getItem('translationCache');
        if (savedCache) {
            Object.assign(translationCache, JSON.parse(savedCache));
        }
    } catch (error) {
        console.error('Error loading translation cache:', error);
    }
}

// Save cache to localStorage periodically
if (typeof window !== 'undefined') {
    setInterval(() => {
        try {
            localStorage.setItem('translationCache', JSON.stringify(translationCache));
        } catch (error) {
            console.error('Error saving translation cache:', error);
        }
    }, 5 * 60 * 1000); // Save every 5 minutes
} 