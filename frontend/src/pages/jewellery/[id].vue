<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Images -->
      <div class="space-y-4">
        <!-- Main Image -->
        <div class="aspect-square rounded-lg overflow-hidden">
          <img
            :src="selectedImage?.imageUrl || product.images[0]?.imageUrl || '/placeholder.jpg'"
            :alt="product.name"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Thumbnail Gallery -->
        <div class="grid grid-cols-4 gap-2">
          <button
            v-for="image in product.images"
            :key="image.id"
            @click="selectedImage = image"
            class="aspect-square rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-indigo-500"
            :class="{ 'ring-2 ring-indigo-500': selectedImage?.id === image.id }"
          >
            <img
              :src="image.imageUrl"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      <!-- Product Info -->
      <div class="space-y-6">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">{{ product.name }}</h1>
          <p class="text-sm text-gray-500 mt-2">
            {{ product.subcategory?.category?.name }} > {{ product.subcategory?.name }}
          </p>
        </div>

        <!-- Price -->
        <div class="flex items-baseline gap-4">
          <span class="text-2xl font-bold text-gray-900">₹{{ product.price }}</span>
          <span
            v-if="product.salePrice"
            class="text-lg text-gray-500 line-through"
          >
            ₹{{ product.salePrice }}
          </span>
        </div>

        <!-- Description -->
        <div>
          <h2 class="text-lg font-semibold text-gray-900 mb-2">Description</h2>
          <p class="text-gray-600 whitespace-pre-line">{{ product.description }}</p>
        </div>

        <!-- Product Details -->
        <div class="border-t border-gray-200 pt-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Product Details</h2>
          <dl class="grid grid-cols-1 gap-4">
            <div class="flex justify-between">
              <dt class="text-gray-500">SKU</dt>
              <dd class="text-gray-900">{{ product.sku }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-gray-500">Availability</dt>
              <dd class="text-gray-900">
                {{ product.stockQuantity > 0 ? 'In Stock' : 'Out of Stock' }}
              </dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-gray-500">Category</dt>
              <dd class="text-gray-900">{{ product.subcategory?.category?.name }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-gray-500">Subcategory</dt>
              <dd class="text-gray-900">{{ product.subcategory?.name }}</dd>
            </div>
          </dl>
        </div>

        <!-- Actions -->
        <div class="border-t border-gray-200 pt-6">
          <div class="flex gap-4">
            <button
              v-if="product.stockQuantity > 0"
              @click="addToCart"
              class="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
            <button
              v-else
              disabled
              class="flex-1 bg-gray-300 text-gray-500 py-3 px-6 rounded-md cursor-not-allowed"
            >
              Out of Stock
            </button>
            <button
              @click="addToWishlist"
              class="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300"
              :class="{ 'text-red-500 border-red-500': isInWishlist }"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="flex justify-center items-center min-h-[400px]">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { toast } from 'react-hot-toast';

const route = useRoute();
const product = ref(null);
const selectedImage = ref(null);
const isInWishlist = ref(false);

// Fetch product details
const fetchProduct = async () => {
  try {
    const response = await fetch(`/api/products/${route.params.id}`);
    if (!response.ok) throw new Error('Product not found');
    product.value = await response.json();
    selectedImage.value = product.value.images[0];
  } catch (error) {
    console.error('Error fetching product:', error);
    toast.error('Failed to load product details');
  }
};

// Add to cart
const addToCart = () => {
  // Implement cart functionality
  toast.success('Added to cart');
};

// Add to wishlist
const addToWishlist = () => {
  isInWishlist.value = !isInWishlist.value;
  toast.success(isInWishlist.value ? 'Added to wishlist' : 'Removed from wishlist');
};

onMounted(() => {
  fetchProduct();
});
</script> 