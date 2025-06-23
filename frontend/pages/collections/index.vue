<template>
  <div class="collections-page">
    <!-- Hero Section -->
    <section class="collections-hero">
      <div class="hero-content">
        <h1 class="hero-title">{{ $t('collections.title') }}</h1>
        <p class="hero-subtitle">{{ $t('collections.subtitle') }}</p>
      </div>
      <div class="hero-gradient"></div>
    </section>

    <!-- Featured Collections -->
    <section v-if="featuredCollections.length > 0" class="featured-collections">
      <div class="container">
        <h2 class="section-title">{{ $t('collections.featured') }}</h2>
        <div class="featured-grid">
          <div 
            v-for="collection in featuredCollections" 
            :key="collection.id" 
            class="featured-card"
            @click="navigateToCollection(collection.slug)"
          >
            <div class="featured-image-wrapper">
              <img 
                :src="collection.banner_image" 
                :alt="collection.banner_alt || collection.name"
                class="featured-image"
                loading="lazy"
              />
              <div class="featured-overlay">
                <div class="featured-content">
                  <h3 class="featured-name">{{ collection.name }}</h3>
                  <p class="featured-description">{{ collection.description }}</p>
                  <div class="featured-stats">
                    <span class="product-count">
                      {{ collection.product_count }} {{ $t('collections.products') }}
                    </span>
                    <span class="view-count">
                      {{ collection.view_count }} {{ $t('collections.views') }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Collections -->
    <section class="all-collections">
      <div class="container">
        <div class="collections-header">
          <h2 class="section-title">{{ $t('collections.allCollections') }}</h2>
          <div class="collections-filters">
            <div class="search-wrapper">
              <Icon name="heroicons:magnifying-glass" class="search-icon" />
              <input 
                v-model="searchQuery" 
                type="text" 
                :placeholder="$t('collections.search')"
                class="search-input"
                @input="debouncedSearch"
              />
            </div>
            <select v-model="sortBy" class="sort-select" @change="fetchCollections">
              <option value="display_order">{{ $t('collections.sortBy.featured') }}</option>
              <option value="name">{{ $t('collections.sortBy.name') }}</option>
              <option value="product_count">{{ $t('collections.sortBy.popularity') }}</option>
              <option value="created_at">{{ $t('collections.sortBy.newest') }}</option>
            </select>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="loading-grid">
          <div v-for="i in 6" :key="i" class="collection-skeleton">
            <div class="skeleton-image"></div>
            <div class="skeleton-content">
              <div class="skeleton-title"></div>
              <div class="skeleton-description"></div>
              <div class="skeleton-stats"></div>
            </div>
          </div>
        </div>

        <!-- Collections Grid -->
        <div v-else-if="filteredCollections.length > 0" class="collections-grid">
          <div 
            v-for="collection in filteredCollections" 
            :key="collection.id" 
            class="collection-card"
            @click="navigateToCollection(collection.slug)"
          >
            <div class="card-image-wrapper">
              <img 
                :src="collection.banner_image" 
                :alt="collection.banner_alt || collection.name"
                class="card-image"
                loading="lazy"
              />
              <div class="card-badge" v-if="collection.is_featured">
                <Icon name="heroicons:star-solid" />
                {{ $t('collections.featured') }}
              </div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ collection.name }}</h3>
              <p class="card-description">{{ collection.description }}</p>
              
              <!-- Tag Filters Display -->
              <div class="tag-filters">
                <span 
                  v-for="tag in collection.tag_filters.slice(0, 3)" 
                  :key="tag" 
                  class="tag-filter"
                >
                  {{ tag }}
                </span>
                <span v-if="collection.tag_filters.length > 3" class="tag-more">
                  +{{ collection.tag_filters.length - 3 }} more
                </span>
              </div>

              <div class="card-stats">
                <div class="stat">
                  <Icon name="heroicons:cube" />
                  <span>{{ collection.product_count }} products</span>
                </div>
                <div class="stat">
                  <Icon name="heroicons:eye" />
                  <span>{{ collection.view_count }} views</span>
                </div>
              </div>

              <!-- Price Range -->
              <div v-if="collection.min_price || collection.max_price" class="price-range">
                <Icon name="heroicons:currency-rupee" />
                <span>
                  ₹{{ collection.min_price || '0' }} - ₹{{ collection.max_price || '∞' }}
                </span>
              </div>

              <div class="card-footer">
                <button class="view-collection-btn">
                  {{ $t('collections.viewCollection') }}
                  <Icon name="heroicons:arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="empty-state">
          <Icon name="heroicons:folder-open" class="empty-icon" />
          <h3>{{ $t('collections.noCollections') }}</h3>
          <p>{{ $t('collections.noCollectionsDesc') }}</p>
        </div>

        <!-- Load More -->
        <div v-if="hasMore && !loading" class="load-more-section">
          <button @click="loadMore" :disabled="loadingMore" class="load-more-btn">
            <Icon v-if="loadingMore" name="heroicons:arrow-path" class="animate-spin" />
            {{ loadingMore ? $t('common.loading') : $t('collections.loadMore') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { debounce } from 'lodash-es'

// SEO Meta
useHead({
  title: 'Collections - Urvashi Jewellers',
  meta: [
    {
      name: 'description',
      content: 'Explore our carefully curated jewelry collections including bridal, diamond, pearl, and gold collections.'
    },
    {
      property: 'og:title',
      content: 'Jewelry Collections - Urvashi Jewellers'
    },
    {
      property: 'og:description',
      content: 'Discover our stunning jewelry collections featuring the finest craftsmanship and designs.'
    }
  ]
})

// Types
interface Collection {
  id: string
  name: string
  slug: string
  description: string
  banner_image: string
  banner_alt?: string
  is_featured: boolean
  display_order: number
  tag_filters: string[]
  tag_match_mode: 'ANY' | 'ALL'
  min_price?: number
  max_price?: number
  view_count: number
  product_count: number
  created_at: string
  updated_at: string
}

// Reactive state
const collections = ref<Collection[]>([])
const loading = ref(true)
const loadingMore = ref(false)
const hasMore = ref(false)
const searchQuery = ref('')
const sortBy = ref('display_order')
const currentPage = ref(0)
const pageSize = 12

// Computed properties
const featuredCollections = computed(() => 
  collections.value.filter(c => c.is_featured).slice(0, 4)
)

const filteredCollections = computed(() => {
  let filtered = collections.value

  // Apply search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(collection => 
      collection.name.toLowerCase().includes(query) ||
      collection.description.toLowerCase().includes(query) ||
      collection.tag_filters.some(tag => tag.toLowerCase().includes(query))
    )
  }

  // Sort collections
  return filtered.sort((a, b) => {
    switch (sortBy.value) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'product_count':
        return b.product_count - a.product_count
      case 'created_at':
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      case 'display_order':
      default:
        return a.display_order - b.display_order
    }
  })
})

// Methods
const fetchCollections = async (append = false) => {
  try {
    if (!append) {
      loading.value = true
      currentPage.value = 0
    } else {
      loadingMore.value = true
    }

    const { data } = await $fetch('/api/collections', {
      query: {
        limit: pageSize,
        offset: currentPage.value * pageSize,
        featured_only: 'false',
        include_counts: 'true'
      }
    })

    if (data.collections) {
      if (append) {
        collections.value.push(...data.collections)
      } else {
        collections.value = data.collections
      }
      hasMore.value = data.has_more
      currentPage.value++
    }
  } catch (error) {
    console.error('Failed to fetch collections:', error)
  } finally {
    loading.value = false
    loadingMore.value = false
  }
}

const loadMore = () => {
  if (!loadingMore.value && hasMore.value) {
    fetchCollections(true)
  }
}

const navigateToCollection = (slug: string) => {
  navigateTo(`/collections/${slug}`)
}

// Debounced search
const debouncedSearch = debounce(() => {
  // Search is handled by computed property
}, 300)

// Lifecycle
onMounted(() => {
  fetchCollections()
})

// Watch for sort changes
watch(sortBy, () => {
  fetchCollections()
})
</script>

<style scoped>
.collections-page {
  min-height: 100vh;
}

.collections-hero {
  position: relative;
  height: 50vh;
  min-height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  color: white;
  z-index: 2;
  position: relative;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  color: #1f2937;
}

/* Featured Collections */
.featured-collections {
  padding: 4rem 0;
  background: #f9fafb;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.featured-card {
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;
}

.featured-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.featured-image-wrapper {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-card:hover .featured-image {
  transform: scale(1.05);
}

.featured-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}

.featured-content {
  color: white;
}

.featured-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.featured-description {
  opacity: 0.9;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.featured-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.8;
}

/* All Collections */
.all-collections {
  padding: 4rem 0;
}

.collections-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;
}

.collections-filters {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.search-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  width: 1.25rem;
  height: 1.25rem;
}

.search-input {
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  min-width: 250px;
  transition: border-color 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.sort-select {
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  cursor: pointer;
}

/* Collections Grid */
.collections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.collection-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #f3f4f6;
}

.collection-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.card-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.collection-card:hover .card-image {
  transform: scale(1.03);
}

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #fbbf24;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.card-description {
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.tag-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag-filter {
  background: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.tag-more {
  color: #6b7280;
  font-size: 0.75rem;
  font-style: italic;
}

.card-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.price-range {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #059669;
  font-weight: 500;
  margin-bottom: 1rem;
}

.card-footer {
  border-top: 1px solid #f3f4f6;
  padding-top: 1rem;
}

.view-collection-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-collection-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

/* Loading States */
.loading-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.collection-skeleton {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.skeleton-image {
  height: 200px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

.skeleton-content {
  padding: 1.5rem;
}

.skeleton-title,
.skeleton-description,
.skeleton-stats {
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 0.25rem;
}

.skeleton-title {
  height: 1.5rem;
  margin-bottom: 0.5rem;
}

.skeleton-description {
  height: 3rem;
  margin-bottom: 1rem;
}

.skeleton-stats {
  height: 1rem;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #6b7280;
}

.empty-icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  opacity: 0.5;
}

/* Load More */
.load-more-section {
  text-align: center;
  margin-top: 3rem;
}

.load-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.load-more-btn:hover {
  background: #667eea;
  color: white;
}

.load-more-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .collections-header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .collections-filters {
    flex-direction: column;
  }
  
  .search-input {
    min-width: auto;
  }
  
  .collections-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
  }
}
</style> 