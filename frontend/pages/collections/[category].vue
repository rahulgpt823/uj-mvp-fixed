<template>
  <div class="category-page">
    <div class="container">
      <h1 class="page-title">{{ categoryTitle }}</h1>
      <div class="grid grid-3">
        <div class="product-card card" v-for="product in products" :key="product.id">
          <div class="product-image">
            <img :src="product.image" :alt="product.name" />
            <div class="product-tags" v-if="product.tags">
              <span v-for="tag in product.tags" :key="tag" class="tag" :class="`tag-${tag}`">
                {{ tag }}
              </span>
            </div>
            <div class="product-actions">
              <button class="icon-action" aria-label="Add to wishlist">
                <span class="material-icons">favorite_border</span>
              </button>
              <button class="icon-action" aria-label="Quick view">
                <span class="material-icons">visibility</span>
              </button>
              <button class="icon-action" aria-label="Add to cart">
                <span class="material-icons">shopping_bag</span>
              </button>
            </div>
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="product-price">₹{{ product.price }}</p>
            <NuxtLink :to="`/product/${product.id}`" class="link-overlay"></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const category = route.params.category

// Capitalize first letter and remove hyphen
const categoryTitle = computed(() => {
  return category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')
})

// Mock products data (in a real app, this would come from an API)
const products = ref([
  {
    id: 1,
    name: 'Diamond Necklace',
    price: '45,000',
    image: 'https://placehold.co/600x400',
    tags: ['new']
  },
  {
    id: 2,
    name: 'Gold Chain',
    price: '35,000',
    image: 'https://placehold.co/600x400',
    tags: ['bestseller']
  },
  {
    id: 3,
    name: 'Pearl Necklace',
    price: '25,000',
    image: 'https://placehold.co/600x400'
  }
])
</script>

<style scoped>
.category-page {
  padding: var(--spacing-xl) 0;
}

.page-title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.product-card {
  position: relative;
  margin-bottom: var(--spacing-lg);
}

.product-image {
  position: relative;
  height: 350px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-tags {
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  z-index: 2;
}

.tag {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 5px;
}

.tag-new {
  background-color: var(--primary);
  color: var(--light);
}

.tag-bestseller {
  background-color: var(--secondary);
  color: var(--dark);
}

.product-actions {
  position: absolute;
  right: var(--spacing-sm);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  opacity: 0;
  transition: var(--transition);
  z-index: 2;
}

.product-card:hover .product-actions {
  opacity: 1;
}

.icon-action {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--light);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.icon-action:hover {
  background-color: var(--primary);
  color: var(--light);
}

.product-info {
  padding: var(--spacing-md);
  text-align: center;
}

.product-info h3 {
  margin-bottom: var(--spacing-xs);
  font-size: 1.2rem;
}

.product-price {
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 0;
}

.link-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style> 