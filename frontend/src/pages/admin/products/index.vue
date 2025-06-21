<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Product Management</h1>
      <button
        @click="showAddModal = true"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add New Product
      </button>
    </div>

    <!-- Product List -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="product in products" :key="product.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                  <img
                    :src="product.images[0]?.imageUrl || '/placeholder.jpg'"
                    class="h-10 w-10 rounded-full object-cover"
                    :alt="product.name"
                  />
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                  <div class="text-sm text-gray-500">{{ product.sku }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ product.subcategory?.category?.name }}</div>
              <div class="text-sm text-gray-500">{{ product.subcategory?.name }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">₹{{ product.price }}</div>
              <div v-if="product.salePrice" class="text-sm text-red-500">
                Sale: ₹{{ product.salePrice }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  product.isPublished
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800',
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
                ]"
              >
                {{ product.isPublished ? 'Published' : 'Draft' }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button
                @click="editProduct(product)"
                class="text-indigo-600 hover:text-indigo-900 mr-3"
              >
                Edit
              </button>
              <button
                @click="deleteProduct(product.id)"
                class="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add/Edit Product Modal -->
    <div v-if="showAddModal || showEditModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div class="relative top-20 mx-auto p-5 border w-4/5 shadow-lg rounded-md bg-white">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium">
            {{ showEditModal ? 'Edit Product' : 'Add New Product' }}
          </h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Close</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form @submit.prevent="saveProduct" class="space-y-4">
          <!-- Basic Information -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Name</label>
              <input
                v-model="currentProduct.name"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">SKU</label>
              <input
                v-model="currentProduct.sku"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <!-- Category Selection -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Category</label>
              <select
                v-model="currentProduct.categoryId"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Subcategory</label>
              <select
                v-model="currentProduct.subcategoryId"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option v-for="subcategory in subcategories" :key="subcategory.id" :value="subcategory.id">
                  {{ subcategory.name }}
                </option>
              </select>
            </div>
          </div>

          <!-- Product Details -->
          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Price</label>
              <input
                v-model="currentProduct.price"
                type="number"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Sale Price</label>
              <input
                v-model="currentProduct.salePrice"
                type="number"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Stock Quantity</label>
              <input
                v-model="currentProduct.stockQuantity"
                type="number"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <!-- Product Images -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
            <ProductImageGallery
              v-if="currentProduct.id"
              :productId="currentProduct.id"
              :initialImages="currentProduct.images"
            />
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              v-model="currentProduct.description"
              rows="4"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>

          <!-- Meta Information -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Meta Title</label>
              <input
                v-model="currentProduct.metaTitle"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Meta Description</label>
              <input
                v-model="currentProduct.metaDescription"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <!-- Publish Status -->
          <div class="flex items-center">
            <input
              v-model="currentProduct.isPublished"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label class="ml-2 block text-sm text-gray-900">Publish Product</label>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <button
              type="button"
              @click="closeModal"
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {{ showEditModal ? 'Update Product' : 'Add Product' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProductImageGallery from '@/components/ProductImageGallery.vue';

const products = ref([]);
const categories = ref([]);
const subcategories = ref([]);
const showAddModal = ref(false);
const showEditModal = ref(false);
const currentProduct = ref({
  name: '',
  sku: '',
  description: '',
  price: '',
  salePrice: '',
  stockQuantity: 0,
  categoryId: '',
  subcategoryId: '',
  metaTitle: '',
  metaDescription: '',
  isPublished: false,
  images: []
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

// Edit product
const editProduct = (product: any) => {
  currentProduct.value = { ...product };
  showEditModal.value = true;
};

// Delete product
const deleteProduct = async (id: number) => {
  if (!confirm('Are you sure you want to delete this product?')) return;

  try {
    await fetch(`/api/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    await fetchProducts();
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

// Save product
const saveProduct = async () => {
  try {
    const method = showEditModal.value ? 'PUT' : 'POST';
    const url = showEditModal.value
      ? `/api/products/${currentProduct.value.id}`
      : '/api/products';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(currentProduct.value)
    });

    if (!response.ok) throw new Error('Failed to save product');

    await fetchProducts();
    closeModal();
  } catch (error) {
    console.error('Error saving product:', error);
  }
};

// Close modal
const closeModal = () => {
  showAddModal.value = false;
  showEditModal.value = false;
  currentProduct.value = {
    name: '',
    sku: '',
    description: '',
    price: '',
    salePrice: '',
    stockQuantity: 0,
    categoryId: '',
    subcategoryId: '',
    metaTitle: '',
    metaDescription: '',
    isPublished: false,
    images: []
  };
};

// Watch for category changes
watch(() => currentProduct.value.categoryId, (newCategoryId) => {
  if (newCategoryId) {
    fetchSubcategories(newCategoryId);
  }
});

onMounted(() => {
  fetchProducts();
  fetchCategories();
});
</script> 