<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Filters -->
    <div class="mb-8">
      <div class="flex flex-wrap gap-4">
        <!-- Category Filter -->
        <div class="w-full md:w-64">
          <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            v-model="filters.categoryId"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            @change="handleCategoryChange"
          >
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <!-- Subcategory Filter -->
        <div class="w-full md:w-64">
          <label class="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
          <select
            v-model="filters.subcategoryId"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">All Subcategories</option>
            <option v-for="subcategory in subcategories" :key="subcategory.id" :value="subcategory.id">
              {{ subcategory.name }}
            </option>
          </select>
        </div>

        <!-- Price Range Filter -->
        <div class="w-full md:w-64">
          <label class="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <select
            v-model="filters.priceRange"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">All Prices</option>
            <option value="0-10000">Under ₹10,000</option>
            <option value="10000-50000">₹10,000 - ₹50,000</option>
            <option value="50000-100000">₹50,000 - ₹1,00,000</option>
            <option value="100000+">Above ₹1,00,000</option>
          </select>
        </div>

        <!-- Sort Filter -->
        <div class="w-full md:w-64">
          <label class="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
          <select
            v-model="filters.sortBy"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="newest">Newest First</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name_asc">Name: A to Z</option>
            <option value="name_desc">Name: Z to A</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <!-- Product Image -->
        <div class="relative aspect-square">
          <img
            :src="product.images[0]?.imageUrl || '/placeholder.jpg'"
            :alt="product.name"
            class="w-full h-full object-cover"
          />
          <div
            v-if="product.salePrice"
            class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm"
          >
            Sale
          </div>
        </div>

        <!-- Product Info -->
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ product.name }}</h3>
          <p class="text-sm text-gray-500 mb-2">{{ product.subcategory?.name }}</p>
          
          <!-- Price -->
          <div class="flex items-center gap-2 mb-4">
            <span class="text-lg font-bold text-gray-900">₹{{ product.price }}</span>
            <span
              v-if="product.salePrice"
              class="text-sm text-gray-500 line-through"
            >
              ₹{{ product.salePrice }}
            </span>
          </div>

          <!-- View Details Button -->
          <button
            @click="viewProduct(product.id)"
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>

    <!-- No Products Message -->
    <div
      v-if="filteredProducts.length === 0"
      class="text-center py-12"
    >
      <p class="text-gray-500 text-lg">No products found matching your criteria.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const products = ref([]);
const categories = ref([]);
const subcategories = ref([]);

const filters = ref({
  categoryId: '',
  subcategoryId: '',
  priceRange: '',
  sortBy: 'newest'
});

// Fetch products
const fetchProducts = async () => {
  try {
    const response = await fetch('/api/products');
    products.value = await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Fetch categories
const fetchCategories = async () => {
  try {
    const response = await fetch('/api/categories');
    categories.value = await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// Fetch subcategories
const fetchSubcategories = async (categoryId: string) => {
  try {
    const response = await fetch(`/api/categories/${categoryId}/subcategories`);
    subcategories.value = await response.json();
  } catch (error) {
    console.error('Error fetching subcategories:', error);
  }
};

// Handle category change
const handleCategoryChange = () => {
  filters.value.subcategoryId = '';
  if (filters.value.categoryId) {
    fetchSubcategories(filters.value.categoryId);
  } else {
    subcategories.value = [];
  }
};

// Filter and sort products
const filteredProducts = computed(() => {
  let result = [...products.value];

  // Filter by category
  if (filters.value.categoryId) {
    result = result.filter(product => 
      product.subcategory?.categoryId === filters.value.categoryId
    );
  }

  // Filter by subcategory
  if (filters.value.subcategoryId) {
    result = result.filter(product => 
      product.subcategoryId === filters.value.subcategoryId
    );
  }

  // Filter by price range
  if (filters.value.priceRange) {
    const [min, max] = filters.value.priceRange.split('-').map(Number);
    result = result.filter(product => {
      const price = product.salePrice || product.price;
      if (max) {
        return price >= min && price <= max;
      } else {
        return price >= min;
      }
    });
  }

  // Sort products
  switch (filters.value.sortBy) {
    case 'price_asc':
      result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
      break;
    case 'price_desc':
      result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
      break;
    case 'name_asc':
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name_desc':
      result.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default: // newest
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  return result;
});

// View product details
const viewProduct = (productId: number) => {
  router.push(`/jewellery/${productId}`);
};

// Watch for filter changes
watch(filters, () => {
  // You can add additional logic here if needed
}, { deep: true });

onMounted(() => {
  fetchProducts();
  fetchCategories();
});
</script> 