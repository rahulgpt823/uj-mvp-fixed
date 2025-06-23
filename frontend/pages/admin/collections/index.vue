<template>
  <div class="admin-collections-page">
    <!-- Header -->
    <div class="page-header">
      <div class="header-content">
        <h1>Collection Management</h1>
        <p>Manage your product collections, seasonal campaigns, and featured items</p>
      </div>
      <button @click="openAddModal" class="primary-btn">
        <Icon name="heroicons:plus" />
        Add Collection
      </button>
    </div>

    <!-- Stats Overview -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <Icon name="heroicons:squares-2x2" />
        </div>
        <div class="stat-content">
          <span class="stat-number">{{ collections.length }}</span>
          <span class="stat-label">Total Collections</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon active">
          <Icon name="heroicons:eye" />
        </div>
        <div class="stat-content">
          <span class="stat-number">{{ activeCollections }}</span>
          <span class="stat-label">Active Collections</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon featured">
          <Icon name="heroicons:star" />
        </div>
        <div class="stat-content">
          <span class="stat-number">{{ featuredCollections }}</span>
          <span class="stat-label">Featured Collections</span>
        </div>
      </div>
    </div>

    <!-- Filters & Search -->
    <div class="filters-section">
      <div class="search-box">
        <Icon name="heroicons:magnifying-glass" />
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search collections..."
          class="search-input"
        />
      </div>
      <div class="filter-controls">
        <select v-model="statusFilter" class="filter-select">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select v-model="featuredFilter" class="filter-select">
          <option value="">All Types</option>
          <option value="featured">Featured Only</option>
          <option value="regular">Regular Only</option>
        </select>
      </div>
    </div>

    <!-- Collections Table -->
    <div class="collections-table-container">
      <div v-if="loading" class="loading-state">
        <Icon name="heroicons:arrow-path" class="animate-spin" />
        <span>Loading collections...</span>
      </div>

      <div v-else-if="filteredCollections.length === 0" class="empty-state">
        <Icon name="heroicons:folder-open" />
        <h3>No collections found</h3>
        <p>{{ searchQuery ? 'Try adjusting your search criteria' : 'Create your first collection to get started' }}</p>
        <button @click="openAddModal" class="primary-btn">
          <Icon name="heroicons:plus" />
          Add Collection
        </button>
      </div>

      <table v-else class="collections-table">
        <thead>
          <tr>
            <th>Collection</th>
            <th>Tags</th>
            <th>Products</th>
            <th>Status</th>
            <th>Analytics</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="collection in filteredCollections" :key="collection.id" class="collection-row">
            <!-- Collection Info -->
            <td class="collection-info">
              <div class="collection-banner">
                <img :src="collection.banner_image" :alt="collection.name" />
                <div v-if="collection.is_featured" class="featured-badge">
                  <Icon name="heroicons:star-solid" />
                </div>
              </div>
              <div class="collection-details">
                <h3>{{ collection.name }}</h3>
                <p>{{ collection.description }}</p>
                <span class="collection-id">ID: {{ collection.id.slice(0, 8) }}...</span>
              </div>
            </td>

            <!-- Tag Filters -->
            <td class="tag-filters">
              <div class="tag-list">
                <span 
                  v-for="tag in collection.tag_filters.slice(0, 3)" 
                  :key="tag" 
                  class="tag"
                >
                  {{ tag }}
                </span>
                <span v-if="collection.tag_filters.length > 3" class="tag-more">
                  +{{ collection.tag_filters.length - 3 }}
                </span>
              </div>
              <div class="tag-mode">
                <span :class="['mode-badge', collection.tag_match_mode.toLowerCase()]">
                  {{ collection.tag_match_mode }}
                </span>
              </div>
            </td>

            <!-- Product Count -->
            <td class="product-count">
              <div class="count-display">
                <span class="count-number">{{ collection.product_count }}</span>
                <span class="count-label">products</span>
              </div>
              <div v-if="collection.min_price || collection.max_price" class="price-range">
                ₹{{ collection.min_price || '0' }} - ₹{{ collection.max_price || '∞' }}
              </div>
            </td>

            <!-- Status -->
            <td class="status-column">
              <div class="status-controls">
                <button 
                  @click="toggleStatus(collection)" 
                  :class="['status-toggle', { active: collection.is_active }]"
                >
                  <span class="toggle-slider"></span>
                </button>
                <span class="status-label">
                  {{ collection.is_active ? 'Active' : 'Inactive' }}
                </span>
              </div>
              <div v-if="collection.start_date || collection.end_date" class="date-info">
                <Icon name="heroicons:calendar" />
                <span v-if="collection.start_date">
                  {{ formatDate(collection.start_date) }}
                </span>
                <span v-if="collection.start_date && collection.end_date"> - </span>
                <span v-if="collection.end_date">
                  {{ formatDate(collection.end_date) }}
                </span>
              </div>
            </td>

            <!-- Analytics -->
            <td class="analytics-column">
              <div class="analytics-stats">
                <div class="stat-item">
                  <Icon name="heroicons:eye" />
                  <span>{{ collection.view_count || 0 }}</span>
                </div>
                <div class="stat-item">
                  <Icon name="heroicons:heart" />
                  <span>{{ collection.favorites_count || 0 }}</span>
                </div>
              </div>
            </td>

            <!-- Actions -->
            <td class="actions-column">
              <div class="action-buttons">
                <button @click="editCollection(collection)" class="action-btn edit">
                  <Icon name="heroicons:pencil" />
                </button>
                <button @click="duplicateCollection(collection)" class="action-btn duplicate">
                  <Icon name="heroicons:document-duplicate" />
                </button>
                <button @click="confirmDelete(collection)" class="action-btn delete">
                  <Icon name="heroicons:trash" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add/Edit Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h2>{{ editingCollection ? 'Edit Collection' : 'Add New Collection' }}</h2>
          <button @click="closeModal" class="close-btn">
            <Icon name="heroicons:x-mark" />
          </button>
        </div>

        <form @submit.prevent="saveCollection" class="modal-form">
          <!-- Basic Information -->
          <div class="form-section">
            <h3>Basic Information</h3>
            <div class="form-grid">
              <div class="form-group">
                <label>Collection Name *</label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  required 
                  placeholder="e.g., Diwali Special 2024"
                />
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea 
                  v-model="form.description" 
                  placeholder="Brief description of the collection"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Banner Image -->
          <div class="form-section">
            <h3>Banner Image</h3>
            <div class="image-upload-section">
              <div class="image-preview">
                <img v-if="form.banner_image" :src="form.banner_image" alt="Banner preview" />
                <div v-else class="image-placeholder">
                  <Icon name="heroicons:photo" />
                  <span>No image selected</span>
                </div>
              </div>
              <div class="image-controls">
                <input 
                  v-model="form.banner_image" 
                  type="url" 
                  placeholder="Enter image URL"
                  required
                />
                <input 
                  v-model="form.banner_alt" 
                  type="text" 
                  placeholder="Alt text for accessibility"
                />
              </div>
            </div>
          </div>

          <!-- Tag Configuration -->
          <div class="form-section">
            <h3>Product Filtering</h3>
            <div class="form-grid">
              <div class="form-group full-width">
                <label>Tag Filters *</label>
                <div class="tag-input-container">
                  <input 
                    v-model="tagInput" 
                    type="text" 
                    placeholder="Type and press Enter to add tags"
                    @keydown.enter.prevent="addTag"
                  />
                  <div class="tag-chips">
                    <span 
                      v-for="(tag, index) in form.tag_filters" 
                      :key="index" 
                      class="tag-chip"
                    >
                      {{ tag }}
                      <button type="button" @click="removeTag(index)">
                        <Icon name="heroicons:x-mark" />
                      </button>
                    </span>
                  </div>
                </div>
                <p class="help-text">Products with these tags will appear in this collection</p>
              </div>
              <div class="form-group">
                <label>Tag Match Mode</label>
                <select v-model="form.tag_match_mode">
                  <option value="ANY">ANY - Product needs any of these tags</option>
                  <option value="ALL">ALL - Product needs all these tags</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Advanced Settings -->
          <div class="form-section">
            <h3>Advanced Settings</h3>
            <div class="form-grid">
              <div class="form-group">
                <label>Minimum Price</label>
                <input v-model.number="form.min_price" type="number" min="0" placeholder="0" />
              </div>
              <div class="form-group">
                <label>Maximum Price</label>
                <input v-model.number="form.max_price" type="number" min="0" placeholder="No limit" />
              </div>
              <div class="form-group">
                <label>Start Date (Optional)</label>
                <input v-model="form.start_date" type="date" />
              </div>
              <div class="form-group">
                <label>End Date (Optional)</label>
                <input v-model="form.end_date" type="date" />
              </div>
              <div class="form-group">
                <label>Display Order</label>
                <input v-model.number="form.display_order" type="number" min="0" placeholder="0" />
                <p class="help-text">Lower numbers appear first</p>
              </div>
            </div>
          </div>

          <!-- Collection Status -->
          <div class="form-section">
            <h3>Status & Visibility</h3>
            <div class="checkbox-grid">
              <label class="checkbox-label">
                <input v-model="form.is_active" type="checkbox" />
                <span>Active - Collection is visible to customers</span>
              </label>
              <label class="checkbox-label">
                <input v-model="form.is_featured" type="checkbox" />
                <span>Featured - Show in featured collections section</span>
              </label>
            </div>
          </div>

          <!-- Modal Actions -->
          <div class="modal-actions">
            <button type="button" @click="closeModal" class="secondary-btn">
              Cancel
            </button>
            <button type="submit" :disabled="saving" class="primary-btn">
              <Icon v-if="saving" name="heroicons:arrow-path" class="animate-spin" />
              <span>{{ editingCollection ? 'Update Collection' : 'Create Collection' }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal-overlay" @click="closeDeleteModal">
      <div class="modal-container delete-modal" @click.stop>
        <div class="modal-header">
          <h2>Delete Collection</h2>
        </div>
        <div class="modal-content">
          <p>Are you sure you want to delete <strong>{{ deletingCollection?.name }}</strong>?</p>
          <p class="warning-text">This action cannot be undone.</p>
        </div>
        <div class="modal-actions">
          <button @click="closeDeleteModal" class="secondary-btn">Cancel</button>
          <button @click="deleteCollection" :disabled="deleting" class="danger-btn">
            <Icon v-if="deleting" name="heroicons:arrow-path" class="animate-spin" />
            <span>Delete Collection</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Page metadata
definePageMeta({
  layout: 'admin',
  middleware: ['admin']
})

// Types
interface Collection {
  id: string
  name: string
  slug: string
  description: string
  banner_image: string
  banner_alt?: string
  tag_filters: string[]
  tag_match_mode: 'ANY' | 'ALL'
  min_price?: number
  max_price?: number
  start_date?: string
  end_date?: string
  is_active: boolean
  is_featured: boolean
  display_order: number
  view_count: number
  product_count: number
  favorites_count?: number
  created_at: string
  updated_at: string
}

// Reactive data
const collections = ref<Collection[]>([])
const loading = ref(true)
const saving = ref(false)
const deleting = ref(false)
const showModal = ref(false)
const showDeleteModal = ref(false)
const editingCollection = ref<Collection | null>(null)
const deletingCollection = ref<Collection | null>(null)

// Filters
const searchQuery = ref('')
const statusFilter = ref('')
const featuredFilter = ref('')

// Form data
const form = ref({
  name: '',
  description: '',
  banner_image: '',
  banner_alt: '',
  tag_filters: [] as string[],
  tag_match_mode: 'ANY' as 'ANY' | 'ALL',
  min_price: null as number | null,
  max_price: null as number | null,
  start_date: '',
  end_date: '',
  is_active: true,
  is_featured: false,
  display_order: 0
})

const tagInput = ref('')

// Computed properties
const activeCollections = computed(() => 
  collections.value.filter(c => c.is_active).length
)

const featuredCollections = computed(() => 
  collections.value.filter(c => c.is_featured).length
)

const filteredCollections = computed(() => {
  let filtered = collections.value

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(collection =>
      collection.name.toLowerCase().includes(query) ||
      collection.description.toLowerCase().includes(query) ||
      collection.tag_filters.some(tag => tag.toLowerCase().includes(query))
    )
  }

  // Status filter
  if (statusFilter.value === 'active') {
    filtered = filtered.filter(c => c.is_active)
  } else if (statusFilter.value === 'inactive') {
    filtered = filtered.filter(c => !c.is_active)
  }

  // Featured filter
  if (featuredFilter.value === 'featured') {
    filtered = filtered.filter(c => c.is_featured)
  } else if (featuredFilter.value === 'regular') {
    filtered = filtered.filter(c => !c.is_featured)
  }

  return filtered.sort((a, b) => a.display_order - b.display_order)
})

// Methods
const fetchCollections = async () => {
  try {
    loading.value = true
    
    const { data } = await $fetch('/api/admin/collections', {
      query: {
        include_inactive: 'true',
        include_analytics: 'true'
      }
    })
    collections.value = data.collections
  } catch (error) {
    console.error('Failed to fetch collections:', error)
  } finally {
    loading.value = false
  }
}

const openAddModal = () => {
  editingCollection.value = null
  resetForm()
  showModal.value = true
}

const editCollection = (collection: Collection) => {
  editingCollection.value = collection
  form.value = {
    name: collection.name,
    description: collection.description,
    banner_image: collection.banner_image,
    banner_alt: collection.banner_alt || '',
    tag_filters: [...collection.tag_filters],
    tag_match_mode: collection.tag_match_mode,
    min_price: collection.min_price,
    max_price: collection.max_price,
    start_date: collection.start_date?.split('T')[0] || '',
    end_date: collection.end_date?.split('T')[0] || '',
    is_active: collection.is_active,
    is_featured: collection.is_featured,
    display_order: collection.display_order
  }
  showModal.value = true
}

const saveCollection = async () => {
  try {
    saving.value = true
    
    const payload = { ...form.value }
    
    // Clean up empty values
    if (!payload.min_price) payload.min_price = null
    if (!payload.max_price) payload.max_price = null
    if (!payload.start_date) payload.start_date = ''
    if (!payload.end_date) payload.end_date = ''

    if (editingCollection.value) {
      // Update existing collection
      await $fetch(`/api/admin/collections/${editingCollection.value.id}`, {
        method: 'PUT',
        body: payload
      })
    } else {
      // Create new collection
      await $fetch('/api/admin/collections', {
        method: 'POST',
        body: payload
      })
    }

    await fetchCollections()
    closeModal()
  } catch (error: any) {
    console.error('Failed to save collection:', error)
    alert(error.data?.message || 'Failed to save collection')
  } finally {
    saving.value = false
  }
}

const toggleStatus = async (collection: Collection) => {
  try {
    await $fetch(`/api/admin/collections/${collection.id}`, {
      method: 'PUT',
      body: {
        is_active: !collection.is_active
      }
    })
    
    collection.is_active = !collection.is_active
  } catch (error) {
    console.error('Failed to toggle collection status:', error)
  }
}

const duplicateCollection = (collection: Collection) => {
  editingCollection.value = null
  form.value = {
    name: `${collection.name} (Copy)`,
    description: collection.description,
    banner_image: collection.banner_image,
    banner_alt: collection.banner_alt || '',
    tag_filters: [...collection.tag_filters],
    tag_match_mode: collection.tag_match_mode,
    min_price: collection.min_price,
    max_price: collection.max_price,
    start_date: '',
    end_date: '',
    is_active: false,
    is_featured: false,
    display_order: collection.display_order + 1
  }
  showModal.value = true
}

const confirmDelete = (collection: Collection) => {
  deletingCollection.value = collection
  showDeleteModal.value = true
}

const deleteCollection = async () => {
  if (!deletingCollection.value) return
  
  try {
    deleting.value = true
    
    await $fetch(`/api/admin/collections/${deletingCollection.value.id}`, {
      method: 'DELETE',
    })
    
    await fetchCollections()
    closeDeleteModal()
  } catch (error) {
    console.error('Failed to delete collection:', error)
  } finally {
    deleting.value = false
  }
}

const addTag = () => {
  const tag = tagInput.value.trim().toLowerCase()
  if (tag && !form.value.tag_filters.includes(tag)) {
    form.value.tag_filters.push(tag)
    tagInput.value = ''
  }
}

const removeTag = (index: number) => {
  form.value.tag_filters.splice(index, 1)
}

const resetForm = () => {
  form.value = {
    name: '',
    description: '',
    banner_image: '',
    banner_alt: '',
    tag_filters: [],
    tag_match_mode: 'ANY',
    min_price: null,
    max_price: null,
    start_date: '',
    end_date: '',
    is_active: true,
    is_featured: false,
    display_order: 0
  }
  tagInput.value = ''
}

const closeModal = () => {
  showModal.value = false
  editingCollection.value = null
  resetForm()
}

const closeDeleteModal = () => {
  showDeleteModal.value = false
  deletingCollection.value = null
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString()
}

// Lifecycle
onMounted(() => {
  fetchCollections()
})
</script>

<style scoped>
/* Admin Collections Page Styles */
.admin-collections-page {
  min-height: 100vh;
  background-color: #f8fafc;
  padding: 2rem;
}

/* Page Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-content h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.header-content p {
  color: #6b7280;
  font-size: 1rem;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  color: #6b7280;
}

.stat-icon.active {
  background: #dcfdf7;
  color: #059669;
}

.stat-icon.featured {
  background: #fef3c7;
  color: #d97706;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
}

/* Filters Section */
.filters-section {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.search-box {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.search-box svg {
  position: absolute;
  left: 1rem;
  width: 1.25rem;
  height: 1.25rem;
  color: #6b7280;
  z-index: 1;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.filter-controls {
  display: flex;
  gap: 1rem;
}

.filter-select {
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  min-width: 150px;
}

/* Collections Table */
.collections-table-container {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.loading-state, .empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: #6b7280;
}

.loading-state svg, .empty-state svg {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
}

.empty-state h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

.collections-table {
  width: 100%;
  border-collapse: collapse;
}

.collections-table th {
  background: #f9fafb;
  padding: 1rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #e5e7eb;
}

.collection-row {
  border-bottom: 1px solid #f3f4f6;
  transition: background-color 0.15s ease;
}

.collection-row:hover {
  background: #f9fafb;
}

.collections-table td {
  padding: 1.5rem;
  vertical-align: top;
}

/* Collection Info */
.collection-info {
  display: flex;
  gap: 1rem;
  min-width: 300px;
}

.collection-banner {
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  overflow: hidden;
  flex-shrink: 0;
}

.collection-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 1rem;
  height: 1rem;
  background: #fbbf24;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.625rem;
}

.collection-details h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.collection-details p {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.collection-id {
  font-size: 0.75rem;
  color: #9ca3af;
  font-family: monospace;
}

/* Tag Filters */
.tag-filters {
  min-width: 200px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.tag {
  background: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.tag-more {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-style: italic;
}

.tag-mode {
  margin-top: 0.5rem;
}

.mode-badge {
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
}

.mode-badge.any {
  background: #dbeafe;
  color: #1d4ed8;
}

.mode-badge.all {
  background: #fecaca;
  color: #dc2626;
}

/* Product Count */
.product-count {
  text-align: center;
  min-width: 100px;
}

.count-display {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.count-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.count-label {
  font-size: 0.75rem;
  color: #6b7280;
}

.price-range {
  font-size: 0.75rem;
  color: #059669;
  margin-top: 0.5rem;
}

/* Status Column */
.status-column {
  min-width: 120px;
}

.status-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.status-toggle {
  width: 2.5rem;
  height: 1.25rem;
  background: #e5e7eb;
  border: none;
  border-radius: 0.625rem;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.status-toggle.active {
  background: #10b981;
}

.toggle-slider {
  width: 1rem;
  height: 1rem;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  transition: transform 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.status-toggle.active .toggle-slider {
  transform: translateX(1.25rem);
}

.status-label {
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
}

.date-info {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;
}

.date-info svg {
  width: 0.875rem;
  height: 0.875rem;
}

/* Analytics Column */
.analytics-column {
  min-width: 100px;
}

.analytics-stats {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.stat-item svg {
  width: 1rem;
  height: 1rem;
}

/* Actions Column */
.actions-column {
  min-width: 120px;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;
}

.action-btn svg {
  width: 1rem;
  height: 1rem;
}

.action-btn.edit {
  background: #eff6ff;
  color: #2563eb;
}

.action-btn.edit:hover {
  background: #dbeafe;
}

.action-btn.duplicate {
  background: #f3f4f6;
  color: #6b7280;
}

.action-btn.duplicate:hover {
  background: #e5e7eb;
}

.action-btn.delete {
  background: #fef2f2;
  color: #dc2626;
}

.action-btn.delete:hover {
  background: #fecaca;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-container {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}

.close-btn {
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6b7280;
  transition: background-color 0.15s ease;
}

.close-btn:hover {
  background: #f3f4f6;
}

.modal-form {
  padding: 2rem;
}

.form-section {
  margin-bottom: 2rem;
}

.form-section h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: border-color 0.15s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.help-text {
  font-size: 0.75rem;
  color: #6b7280;
}

/* Image Upload Section */
.image-upload-section {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1rem;
  align-items: start;
}

.image-preview {
  width: 150px;
  height: 100px;
  border: 2px dashed #d1d5db;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #9ca3af;
  font-size: 0.75rem;
}

.image-placeholder svg {
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.25rem;
}

.image-controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Tag Input */
.tag-input-container {
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tag-input-container input {
  border: none;
  outline: none;
  padding: 0.25rem 0;
  font-size: 0.875rem;
}

.tag-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.tag-chip {
  background: #3b82f6;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.tag-chip button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

.tag-chip button svg {
  width: 0.75rem;
  height: 0.75rem;
}

/* Checkboxes */
.checkbox-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: #374151;
}

.checkbox-label input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  accent-color: #3b82f6;
}

/* Modal Actions */
.modal-actions {
  border-top: 1px solid #e5e7eb;
  padding: 1.5rem 2rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.primary-btn,
.secondary-btn,
.danger-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.primary-btn {
  background: #3b82f6;
  color: white;
}

.primary-btn:hover {
  background: #2563eb;
}

.primary-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.secondary-btn {
  background: #f3f4f6;
  color: #374151;
}

.secondary-btn:hover {
  background: #e5e7eb;
}

.danger-btn {
  background: #dc2626;
  color: white;
}

.danger-btn:hover {
  background: #b91c1c;
}

/* Delete Modal */
.delete-modal {
  max-width: 400px;
}

.modal-content {
  padding: 1.5rem 2rem;
}

.modal-content p {
  margin-bottom: 0.5rem;
  color: #374151;
}

.warning-text {
  color: #dc2626;
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .admin-collections-page {
    padding: 1rem;
  }

  .page-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .filters-section {
    flex-direction: column;
    align-items: stretch;
  }

  .collections-table-container {
    overflow-x: auto;
  }

  .collections-table {
    min-width: 800px;
  }

  .modal-container {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .image-upload-section {
    grid-template-columns: 1fr;
  }
}
</style> 