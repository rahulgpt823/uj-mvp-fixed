<template>
  <div 
    class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
    @click="handleBackdropClick"
    @keydown.esc="$emit('close')"
    tabindex="0"
  >
    <!-- Modal Content -->
    <div class="relative w-full h-full max-w-6xl max-h-screen p-4 flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4 text-white">
        <div class="text-lg font-medium">
          Image {{ currentIndex + 1 }} of {{ images.length }}
        </div>
        <button
          @click="$emit('close')"
          class="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Image Container -->
      <div class="flex-1 relative overflow-hidden rounded-lg bg-black flex items-center justify-center">
        <div 
          ref="imageContainer"
          class="relative w-full h-full cursor-grab active:cursor-grabbing"
          @mousedown="startPan"
          @mousemove="pan"
          @mouseup="endPan"
          @mouseleave="endPan"
          @wheel="handleZoom"
        >
          <img
            v-if="currentImage"
            ref="zoomImage"
            :src="currentImage.url"
            :alt="`Product Image ${currentIndex + 1}`"
            class="max-w-none transition-transform duration-200 ease-out"
            :style="imageStyle"
            @dragstart.prevent
          />
        </div>

        <!-- Navigation Arrows -->
        <button
          v-if="images.length > 1"
          @click="previousImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          v-if="images.length > 1"
          @click="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Zoom Controls -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-black/50 rounded-full px-4 py-2">
          <button
            @click="zoomOut"
            :disabled="zoomLevel <= minZoom"
            class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          
          <div class="text-white text-sm font-medium w-16 text-center">
            {{ Math.round(zoomLevel * 100) }}%
          </div>
          
          <button
            @click="zoomIn"
            :disabled="zoomLevel >= maxZoom"
            class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          
          <button
            @click="resetZoom"
            class="text-white text-sm hover:text-gray-300 transition-colors ml-2"
          >
            Reset
          </button>
        </div>
      </div>

      <!-- Thumbnail Navigation -->
      <div v-if="images.length > 1" class="mt-4 flex justify-center">
        <div class="flex space-x-2 max-w-full overflow-x-auto pb-2">
          <button
            v-for="(image, index) in images"
            :key="index"
            @click="changeImage(index)"
            :class="[
              'flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200',
              index === currentIndex ? 'border-white ring-2 ring-white/50' : 'border-gray-400 hover:border-white'
            ]"
          >
            <img
              :src="image.url"
              :alt="`Thumbnail ${index + 1}`"
              class="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      <!-- Instructions -->
      <div class="mt-4 text-center text-gray-400 text-sm">
        <p>Scroll to zoom • Drag to pan • Use arrow keys to navigate</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'

interface Image {
  url: string
  publicId?: string
  isDefault?: boolean
}

interface Props {
  images: Image[]
  currentIndex: number
}

const props = defineProps<Props>()

// Emits
const emit = defineEmits<{
  close: []
  changeImage: [index: number]
}>()

// Reactive state
const zoomLevel = ref(1)
const panX = ref(0)
const panY = ref(0)
const isPanning = ref(false)
const lastPanX = ref(0)
const lastPanY = ref(0)

// Constants
const minZoom = 0.5
const maxZoom = 5
const zoomStep = 0.5

// Refs
const imageContainer = ref<HTMLElement>()
const zoomImage = ref<HTMLImageElement>()

// Computed properties
const currentImage = computed(() => {
  return props.images[props.currentIndex] || null
})

const imageStyle = computed(() => {
  return {
    transform: `scale(${zoomLevel.value}) translate(${panX.value}px, ${panY.value}px)`,
    transformOrigin: 'center center'
  }
})

// Methods
const zoomIn = () => {
  if (zoomLevel.value < maxZoom) {
    zoomLevel.value = Math.min(zoomLevel.value + zoomStep, maxZoom)
  }
}

const zoomOut = () => {
  if (zoomLevel.value > minZoom) {
    zoomLevel.value = Math.max(zoomLevel.value - zoomStep, minZoom)
    
    // Reset pan if zoomed out to original size
    if (zoomLevel.value === 1) {
      panX.value = 0
      panY.value = 0
    }
  }
}

const resetZoom = () => {
  zoomLevel.value = 1
  panX.value = 0
  panY.value = 0
}

const handleZoom = (event: WheelEvent) => {
  event.preventDefault()
  
  if (event.deltaY < 0) {
    zoomIn()
  } else {
    zoomOut()
  }
}

const startPan = (event: MouseEvent) => {
  if (zoomLevel.value > 1) {
    isPanning.value = true
    lastPanX.value = event.clientX
    lastPanY.value = event.clientY
  }
}

const pan = (event: MouseEvent) => {
  if (isPanning.value && zoomLevel.value > 1) {
    const deltaX = event.clientX - lastPanX.value
    const deltaY = event.clientY - lastPanY.value
    
    panX.value += deltaX / zoomLevel.value
    panY.value += deltaY / zoomLevel.value
    
    lastPanX.value = event.clientX
    lastPanY.value = event.clientY
    
    // Constrain panning to keep image within bounds
    constrainPan()
  }
}

const endPan = () => {
  isPanning.value = false
}

const constrainPan = () => {
  if (!imageContainer.value || !zoomImage.value) return
  
  const containerRect = imageContainer.value.getBoundingClientRect()
  const imageRect = zoomImage.value.getBoundingClientRect()
  
  const maxPanX = Math.max(0, (imageRect.width - containerRect.width) / (2 * zoomLevel.value))
  const maxPanY = Math.max(0, (imageRect.height - containerRect.height) / (2 * zoomLevel.value))
  
  panX.value = Math.max(-maxPanX, Math.min(maxPanX, panX.value))
  panY.value = Math.max(-maxPanY, Math.min(maxPanY, panY.value))
}

const previousImage = () => {
  const newIndex = props.currentIndex === 0 ? props.images.length - 1 : props.currentIndex - 1
  changeImage(newIndex)
}

const nextImage = () => {
  const newIndex = (props.currentIndex + 1) % props.images.length
  changeImage(newIndex)
}

const changeImage = (index: number) => {
  resetZoom()
  emit('changeImage', index)
}

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'Escape':
      emit('close')
      break
    case 'ArrowLeft':
      event.preventDefault()
      previousImage()
      break
    case 'ArrowRight':
      event.preventDefault()
      nextImage()
      break
    case '+':
    case '=':
      event.preventDefault()
      zoomIn()
      break
    case '-':
      event.preventDefault()
      zoomOut()
      break
    case '0':
      event.preventDefault()
      resetZoom()
      break
  }
}

// Watch for image changes to reset zoom
watch(() => props.currentIndex, () => {
  nextTick(() => {
    resetZoom()
  })
})

// Lifecycle
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Custom scrollbar for thumbnail navigation */
::-webkit-scrollbar {
  height: 4px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style> 