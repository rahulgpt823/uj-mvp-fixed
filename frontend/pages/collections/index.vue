<template>
  <div class="collections-page">
    <div class="container">
      <h1 class="page-title">Our Collections</h1>
      <div class="grid grid-4">
        <div class="category-card" v-for="category in categories" :key="category.id">
          <div class="category-image">
            <img :src="category.image" :alt="category.name" />
          </div>
          <h3>{{ category.name }}</h3>
          <NuxtLink :to="category.path" class="link-overlay"></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    id: 1,
    name: 'Necklaces',
    path: '/collections/necklaces',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 2,
    name: 'Earrings',
    path: '/collections/earrings',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 3,
    name: 'Rings',
    path: '/collections/rings',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 4,
    name: 'Bracelets',
    path: '/collections/bracelets',
    image: 'https://placehold.co/600x400'
  }
]
</script>

<style scoped>
.collections-page {
  padding: var(--spacing-xl) 0;
}

.page-title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.category-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  text-align: center;
  margin-bottom: var(--spacing-lg);
}

.category-image {
  height: 300px;
  overflow: hidden;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.category-card:hover .category-image img {
  transform: scale(1.05);
}

.category-card h3 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding: var(--spacing-md);
  font-size: 1.2rem;
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