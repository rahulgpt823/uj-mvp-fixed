<!-- Product Image Upload Component -->
<template>
  <div class="image-upload-container">
    <!-- Main Upload Area -->
    <div 
      class="upload-area"
      @drop.prevent="handleDrop"
      @dragover.prevent
      @dragenter.prevent
    >
      <input
        ref="fileInput"
        type="file"
        multiple
        accept="image/*"
        class="hidden"
        @change="handleFileSelect"
      />
      
      <!-- Upload Instructions -->
      <div v-if="!images.length" class="upload-instructions">
        <div class="icon">
          <i class="material-icons">cloud_upload</i>
        </div>
        <p>Drag and drop your images here or</p>
        <button @click="$refs.fileInput.click()" class="upload-btn">
          Select Files
        </button>
        <p class="text-sm text-gray-500">
          Supported formats: JPG, PNG. Max size: 5MB
        </p>
      </div>

      <!-- Image Preview Grid -->
      <div v-else class="image-preview-grid">
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="image-preview-item"
        >
          <img 
            :src="image.preview" 
            :alt="'Preview ' + (index + 1)"
          />
          
          <!-- Image Controls -->
          <div class="image-controls">
            <button 
              @click="setDefaultImage(index)"
              :class="{'is-default': image.isDefault}"
            >
              <i class="material-icons">
                {{ image.isDefault ? 'star' : 'star_border' }}
              </i>
            </button>
            <button @click="removeImage(index)">
              <i class="material-icons">delete</i>
            </button>
          </div>

          <!-- Upload Progress -->
          <div 
            v-if="image.uploading"
            class="upload-progress"
          >
            <div 
              class="progress-bar"
              :style="{ width: image.progress + '%' }"
            ></div>
          </div>
        </div>

        <!-- Add More Button -->
        <div 
          class="add-more-btn"
          @click="$refs.fileInput.click()"
        >
          <i class="material-icons">add_photo_alternate</i>
          <span>Add More</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const emit = defineEmits(['update:images', 'upload-complete']);
const props = defineProps({
  productId: {
    type: Number,
    required: true
  },
  maxImages: {
    type: Number,
    default: 6
  }
});

const fileInput = ref<HTMLInputElement | null>(null);
const images = ref<Array<{
  file: File;
  preview: string;
  isDefault: boolean;
  uploading: boolean;
  progress: number;
  uploaded?: boolean;
  url?: string;
}>>([]);

// Handle file selection
async function handleFileSelect(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.files?.length) return;
  
  await addFiles(Array.from(input.files));
  input.value = ''; // Reset input
}

// Handle drag and drop
async function handleDrop(event: DragEvent) {
  const files = Array.from(event.dataTransfer?.files || [])
    .filter(file => file.type.startsWith('image/'));
  
  await addFiles(files);
}

// Add files to the preview
async function addFiles(files: File[]) {
  if (images.value.length + files.length > props.maxImages) {
    toast.error(`Maximum ${props.maxImages} images allowed`);
    return;
  }

  for (const file of files) {
    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error(`${file.name} is too large. Max size is 5MB`);
      continue;
    }

    // Create preview
    const preview = await createPreview(file);
    
    // Add to images array
    images.value.push({
      file,
      preview,
      isDefault: images.value.length === 0, // First image is default
      uploading: false,
      progress: 0
    });
  }

  // Start upload
  uploadImages();
}

// Create image preview
function createPreview(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result as string);
    reader.readAsDataURL(file);
  });
}

// Convert file to base64
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

// Upload images
async function uploadImages() {
  const unuploadedImages = images.value.filter(img => !img.uploaded);
  
  for (const image of unuploadedImages) {
    try {
      image.uploading = true;
      
      // Convert to base64
      const base64Image = await fileToBase64(image.file);
      
      // Upload to server
      const response = await fetch('/api/products/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageBase64: base64Image,
          productId: props.productId,
          isDefault: image.isDefault
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        image.uploaded = true;
        image.url = result.body.imageUrl;
        image.progress = 100;
        emit('upload-complete', result.body);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast.error(`Failed to upload ${image.file.name}`);
      console.error('Upload error:', error);
    } finally {
      image.uploading = false;
    }
  }
}

// Set default image
function setDefaultImage(index: number) {
  images.value = images.value.map((img, i) => ({
    ...img,
    isDefault: i === index
  }));
}

// Remove image
function removeImage(index: number) {
  images.value.splice(index, 1);
  
  // If we removed the default image, set a new default
  if (!images.value.some(img => img.isDefault) && images.value.length) {
    images.value[0].isDefault = true;
  }
}

// Watch for changes and emit
watch(images, (newImages) => {
  emit('update:images', newImages);
}, { deep: true });
</script>

<style scoped>
.image-upload-container {
  @apply w-full p-4;
}

.upload-area {
  @apply border-2 border-dashed border-gray-300 rounded-lg p-6 
    hover:border-primary transition-colors;
}

.upload-instructions {
  @apply flex flex-col items-center justify-center space-y-4 py-8;
}

.icon {
  @apply text-6xl text-gray-400;
}

.upload-btn {
  @apply px-6 py-2 bg-primary text-white rounded-lg 
    hover:bg-primary-dark transition-colors;
}

.image-preview-grid {
  @apply grid grid-cols-2 md:grid-cols-3 gap-4;
}

.image-preview-item {
  @apply relative rounded-lg overflow-hidden;
}

.image-preview-item img {
  @apply w-full h-48 object-cover;
}

.image-controls {
  @apply absolute top-2 right-2 flex space-x-2;
}

.image-controls button {
  @apply p-1 rounded-full bg-white/80 hover:bg-white 
    transition-colors text-gray-700;
}

.image-controls button.is-default {
  @apply text-yellow-500;
}

.upload-progress {
  @apply absolute bottom-0 left-0 right-0 h-1 bg-gray-200;
}

.progress-bar {
  @apply h-full bg-primary transition-all duration-300;
}

.add-more-btn {
  @apply flex flex-col items-center justify-center h-48 
    border-2 border-dashed border-gray-300 rounded-lg
    hover:border-primary cursor-pointer transition-colors;
}

.hidden {
  @apply sr-only;
}
</style> 