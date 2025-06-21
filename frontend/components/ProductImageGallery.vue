<!-- Product Image Gallery Component -->
<template>
  <div class="product-gallery">
    <!-- Main Image Display -->
    <div class="main-image-container">
      <div 
        ref="mainImage"
        class="main-image"
        @mousemove="handleZoom"
        @mouseleave="isZooming = false"
      >
        <img 
          :src="currentImage.url"
          :alt="currentImage.alt || 'Product image'"
          :style="zoomStyle"
        />
      </div>

      <!-- Image Navigation Arrows -->
      <button 
        v-if="images.length > 1"
        class="nav-btn prev"
        @click="prevImage"
      >
        <i class="material-icons">chevron_left</i>
      </button>
      <button 
        v-if="images.length > 1"
        class="nav-btn next"
        @click="nextImage"
      >
        <i class="material-icons">chevron_right</i>
      </button>
    </div>

    <!-- Thumbnail Strip -->
    <div 
      v-if="images.length > 1"
      class="thumbnail-strip"
    >
      <div 
        v-for="(image, index) in images"
        :key="index"
        class="thumbnail"
        :class="{ active: currentIndex === index }"
        @click="setCurrentImage(index)"
      >
        <img 
          :src="image.url"
          :alt="image.alt || `Thumbnail ${index + 1}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface ProductImage {
  url: string;
  alt?: string;
  isDefault?: boolean;
}

const props = defineProps<{
  images: ProductImage[];
}>();

const currentIndex = ref(0);
const isZooming = ref(false);
const zoomLevel = ref(2); // 2x zoom
const zoomPosition = ref({ x: 0, y: 0 });
const mainImage = ref<HTMLElement | null>(null);

// Get current image
const currentImage = computed(() => 
  props.images[currentIndex.value] || props.images[0]
);

// Computed zoom style
const zoomStyle = computed(() => {
  if (!isZooming.value) return {};
  
  return {
    transform: `scale(${zoomLevel.value})`,
    transformOrigin: `${zoomPosition.value.x}% ${zoomPosition.value.y}%`,
  };
});

// Navigation methods
function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}

function prevImage() {
  currentIndex.value = 
    currentIndex.value === 0 
      ? props.images.length - 1 
      : currentIndex.value - 1;
}

function setCurrentImage(index: number) {
  currentIndex.value = index;
}

// Zoom handling
function handleZoom(event: MouseEvent) {
  if (!mainImage.value) return;
  
  const rect = mainImage.value.getBoundingClientRect();
  
  // Calculate relative position (0-100)
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  
  zoomPosition.value = { x, y };
  isZooming.value = true;
}
</script>

<style scoped>
.product-gallery {
  @apply w-full max-w-2xl mx-auto;
}

.main-image-container {
  @apply relative aspect-square rounded-lg overflow-hidden bg-gray-100;
}

.main-image {
  @apply w-full h-full cursor-zoom-in;
}

.main-image img {
  @apply w-full h-full object-cover transition-transform duration-200;
}

.nav-btn {
  @apply absolute top-1/2 -translate-y-1/2 w-10 h-10
    bg-white/80 rounded-full flex items-center justify-center
    hover:bg-white transition-colors;
}

.nav-btn.prev {
  @apply left-4;
}

.nav-btn.next {
  @apply right-4;
}

.thumbnail-strip {
  @apply flex gap-2 mt-4 overflow-x-auto pb-2;
}

.thumbnail {
  @apply w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden
    cursor-pointer border-2 border-transparent
    hover:border-primary transition-colors;
}

.thumbnail.active {
  @apply border-primary;
}

.thumbnail img {
  @apply w-full h-full object-cover;
}
</style> 