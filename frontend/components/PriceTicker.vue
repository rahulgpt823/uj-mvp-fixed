<template>
  <div class="price-ticker" :class="{ 'is-loading': isLoading }">
    <div class="ticker-container">
      <div class="ticker-wrapper">
        <div class="ticker-item">
          <span class="metal gold">
            <span class="material-icons">monetization_on</span>
            {{ translations.gold }} (24K): ₹{{ formatPrice(prices.gold) }}/10g
            <span class="change" :class="{ 'up': priceChanges.gold > 0, 'down': priceChanges.gold < 0 }">
              {{ formatChange(priceChanges.gold) }}
              <span class="material-icons">{{ priceChanges.gold > 0 ? 'trending_up' : 'trending_down' }}</span>
            </span>
          </span>
          <span class="metal silver">
            <span class="material-icons">monetization_on</span>
            {{ translations.silver }}: ₹{{ formatPrice(prices.silver) }}/kg
            <span class="change" :class="{ 'up': priceChanges.silver > 0, 'down': priceChanges.silver < 0 }">
              {{ formatChange(priceChanges.silver) }}
              <span class="material-icons">{{ priceChanges.silver > 0 ? 'trending_up' : 'trending_down' }}</span>
            </span>
          </span>
          <span class="updated">
            {{ translations.lastUpdated }}: {{ formatTime(lastUpdate) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from '#imports';
import { useTranslation } from '~/composables/useTranslation';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();
const { currentLanguage, translate } = useTranslation();

const translations = ref({
  gold: 'Gold (24K)',
  silver: 'Silver',
  lastUpdated: 'Last Updated',
  per10Gm: '/10g',
  perKg: '/kg'
});

const prices = ref({
  gold: 0,
  silver: 0
});

const priceChanges = ref({
  gold: 0,
  silver: 0
});

const lastUpdate = ref(new Date());
const isLoading = ref(true);
let updateInterval: NodeJS.Timeout;

// Cache configuration
const CACHE_KEY = 'price_ticker_cache';
const CACHE_TTL = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
const UPDATE_INTERVAL = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
const MAX_RETRIES = 5;
const INITIAL_RETRY_DELAY = 5000; // 5 seconds
const MAX_RETRY_DELAY = 30 * 60 * 1000; // 30 minutes

// Rate limiting
const RATE_LIMIT_KEY = 'price_ticker_last_fetch';
const MIN_FETCH_INTERVAL = 60 * 60 * 1000; // 1 hour minimum between fetches

interface CacheData {
  prices: {
    gold: number;
    silver: number;
  };
  timestamp: number;
}

// Check if we can make a new request
function canMakeRequest(): boolean {
  try {
    const lastFetch = localStorage.getItem(RATE_LIMIT_KEY);
    if (!lastFetch) return true;

    const lastFetchTime = parseInt(lastFetch, 10);
    const now = Date.now();
    return now - lastFetchTime >= MIN_FETCH_INTERVAL;
  } catch (error) {
    console.error('Error checking rate limit:', error);
    return false;
  }
}

// Update last fetch time
function updateLastFetchTime() {
  try {
    localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
  } catch (error) {
    console.error('Error updating last fetch time:', error);
  }
}

// Load cached data from localStorage
function loadCachedData(): CacheData | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const data = JSON.parse(cached) as CacheData;
      const now = Date.now();
      if (now - data.timestamp < CACHE_TTL) {
        return data;
      }
    }
  } catch (error) {
    console.error('Error loading cache:', error);
  }
  return null;
}

// Save data to cache
function saveToCache(data: { gold: number; silver: number }) {
  try {
    const cacheData: CacheData = {
      prices: data,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error saving to cache:', error);
  }
}

async function updateTranslations() {
  if (currentLanguage.value !== 'en') {
    try {
      const [gold, silver, lastUpdated, per10Gm, perKg] = await Promise.all([
        translate('Gold (24K)'),
        translate('Silver'),
        translate('Last Updated'),
        translate('/10g'),
        translate('/kg')
      ]);

      translations.value = {
        gold,
        silver,
        lastUpdated,
        per10Gm,
        perKg
      };
    } catch (error) {
      console.error('Translation failed:', error);
    }
  } else {
    translations.value = {
      gold: 'Gold (24K)',
      silver: 'Silver',
      lastUpdated: 'Last Updated',
      per10Gm: '/10g',
      perKg: '/kg'
    };
  }
}

async function fetchPrices(retryCount = 0) {
  try {
    // Always check cache first
    const cachedData = loadCachedData();
    if (cachedData) {
      const oldPrices = { ...prices.value };
      prices.value = cachedData.prices;
      priceChanges.value = {
        gold: prices.value.gold - oldPrices.gold,
        silver: prices.value.silver - oldPrices.silver
      };
      lastUpdate.value = new Date(cachedData.timestamp);
      isLoading.value = false;
      
      // If we can't make a new request, return early with cached data
      if (!canMakeRequest()) {
        console.log('Using cached data due to rate limiting');
        return;
      }
    }

    const goldUrl = 'https://gold-silver-live-price-india.p.rapidapi.com/gold_price_india_city_value/';
    const silverUrl = 'https://gold-silver-live-price-india.p.rapidapi.com/silver_price_india_city_value/';
    
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': String(config.public.rapidApiKey || ''),
        'x-rapidapi-host': 'gold-silver-live-price-india.p.rapidapi.com',
        'city': 'Lucknow'
      }
    };

    // Update last fetch time before making the request
    updateLastFetchTime();

    const [goldResponse, silverResponse] = await Promise.all([
      fetch(goldUrl, options),
      fetch(silverUrl, options)
    ]);

    if (!goldResponse.ok || !silverResponse.ok) {
      // Check for rate limit
      if (goldResponse.status === 429 || silverResponse.status === 429) {
        if (retryCount < MAX_RETRIES) {
          const delay = Math.min(
            INITIAL_RETRY_DELAY * Math.pow(2, retryCount),
            MAX_RETRY_DELAY
          );
          console.warn(`Rate limit reached, retrying in ${delay/1000} seconds...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          return fetchPrices(retryCount + 1);
        }
        // If we've exhausted retries, throw error to use cached data
        throw new Error('Rate limit exceeded after maximum retries');
      }
      throw new Error('API response not ok');
    }

    const [goldData, silverData] = await Promise.all([
      goldResponse.json(),
      silverResponse.json()
    ]);
    
    // Store old prices before updating
    const oldPrices = {
      gold: prices.value.gold,
      silver: prices.value.silver
    };
    
    // Convert 1 gram prices to required units (10g for gold, 1kg for silver)
    const goldPricePerGram = parseFloat(goldData.Lucknow_24k || '0');
    const silverPricePerGram = parseFloat(silverData.Lucknow_1g || '0');

    if (isNaN(goldPricePerGram) || isNaN(silverPricePerGram)) {
      throw new Error('Invalid price data received');
    }

    const newPrices = {
      gold: goldPricePerGram * 10, // Convert to 10g
      silver: silverPricePerGram * 1000 // Convert to 1kg
    };

    // Calculate price changes
    priceChanges.value = {
      gold: newPrices.gold - oldPrices.gold,
      silver: newPrices.silver - oldPrices.silver
    };

    // Update current prices
    prices.value = newPrices;
    lastUpdate.value = new Date();
    
    // Save to cache
    saveToCache(newPrices);
    
    isLoading.value = false;
  } catch (error) {
    console.error('Failed to fetch prices:', error);
    
    // Use cached data as fallback if available
    const cachedData = loadCachedData();
    if (cachedData) {
      console.log('Using cached data as fallback');
      prices.value = cachedData.prices;
      priceChanges.value = { gold: 0, silver: 0 };
      lastUpdate.value = new Date(cachedData.timestamp);
    } else {
      // Use default prices if no cache available
      console.log('Using default prices as fallback');
      prices.value = {
        gold: 62500, // Default price for 10g gold
        silver: 75000  // Default price for 1kg silver
      };
      priceChanges.value = {
        gold: 0,
        silver: 0
      };
    }
    isLoading.value = false;
  }
}

function formatPrice(price: number): string {
  return price.toLocaleString('en-IN');
}

function formatChange(change: number): string {
  const sign = change > 0 ? '+' : '';
  return `${sign}${change.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}

onMounted(async () => {
  await updateTranslations();
  await fetchPrices();
  // Set up periodic updates
  updateInterval = setInterval(fetchPrices, UPDATE_INTERVAL);
});

onUnmounted(() => {
  if (updateInterval) clearInterval(updateInterval);
});

// Watch for language changes and update translations
watch(currentLanguage, async () => {
  await updateTranslations();
});
</script>

<style scoped>
.price-ticker {
  background: var(--dark);
  color: var(--light);
  padding: 0.5rem 0;
  overflow: hidden;
  position: relative;
}

.price-ticker.is-loading {
  opacity: 0.8;
}

.ticker-container {
  width: 100%;
  overflow: hidden;
}

.ticker-wrapper {
  display: flex;
  animation: ticker 30s linear infinite;
  white-space: nowrap;
}

.ticker-item {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
}

.metal {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.gold {
  color: #FFD700;
}

.silver {
  color: #C0C0C0;
}

.change {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

.change.up {
  color: #4CAF50;
}

.change.down {
  color: #F44336;
}

.updated {
  color: var(--text-light);
  font-size: 0.9rem;
}

.material-icons {
  font-size: 1.2rem;
}

@keyframes ticker {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media (max-width: 768px) {
  .ticker-item {
    gap: 1rem;
  }
}
</style> 