<template>
  <div class="image-upload-field">
    <label class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
    </label>
    
    <!-- Image Preview Grid -->
    <div class="flex flex-wrap gap-2 mb-4">
      <div
        v-for="(image, index) in modelValue"
        :key="index"
        class="relative w-24 h-24 group"
      >
        <img
          :src="image.preview"
          class="w-full h-full object-cover rounded-lg border border-gray-200"
          :alt="`Preview ${index + 1}`"
        />
        
        <!-- Remove button -->
        <button
          type="button"
          @click="removeImage(index)"
          class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- Default indicator -->
        <div
          v-if="index === 0"
          class="absolute bottom-1 left-1 bg-blue-500 text-white text-xs px-1 py-0.5 rounded"
        >
          Default
        </div>
      </div>
      
      <!-- Upload button -->
      <label
        class="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
        :class="{ 'border-blue-500 bg-blue-50': isDragOver }"
        @dragover.prevent="isDragOver = true"
        @dragleave.prevent="isDragOver = false"
        @drop.prevent="handleDrop"
      >
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          multiple
          class="hidden"
          @change="handleFileSelect"
        />
        <svg class="w-6 h-6 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span class="text-xs text-gray-500 text-center">Add Images</span>
      </label>
    </div>
    
    <!-- Help text -->
    <p class="text-sm text-gray-500">
      {{ helpText || 'Upload multiple images. First image will be the default. Drag and drop or click to select.' }}
    </p>
    
    <!-- Error message -->
    <p v-if="error" class="text-sm text-red-600 mt-1">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ImageFile {
  file: File
  preview: string
}

interface Props {
  modelValue: ImageFile[]
  label?: string
  helpText?: string
  maxFiles?: number
  maxSize?: number // in MB
}

interface Emits {
  (e: 'update:modelValue', value: ImageFile[]): void
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Images',
  maxFiles: 10,
  maxSize: 5
})

const emit = defineEmits<Emits>()

const fileInput = ref<HTMLInputElement>()
const isDragOver = ref(false)
const error = ref('')

const validateFile = (file: File): boolean => {
  // Check file type
  if (!file.type.startsWith('image/')) {
    error.value = 'Please select only image files'
    return false
  }
  
  // Check file size
  const maxSizeBytes = props.maxSize * 1024 * 1024
  if (file.size > maxSizeBytes) {
    error.value = `File size must be less than ${props.maxSize}MB`
    return false
  }
  
  // Check max files
  if (props.modelValue.length >= props.maxFiles) {
    error.value = `Maximum ${props.maxFiles} files allowed`
    return false
  }
  
  error.value = ''
  return true
}

const createPreview = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target?.result as string)
    reader.readAsDataURL(file)
  })
}

const addFiles = async (files: File[]) => {
  const validFiles = files.filter(validateFile)
  
  if (validFiles.length === 0) return
  
  const newImages: ImageFile[] = []
  
  for (const file of validFiles) {
    const preview = await createPreview(file)
    newImages.push({ file, preview })
  }
  
  emit('update:modelValue', [...props.modelValue, ...newImages])
}

const handleFileSelect = async (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files?.length) return
  
  await addFiles(Array.from(input.files))
  input.value = '' // Reset input
}

const handleDrop = async (event: DragEvent) => {
  isDragOver.value = false
  
  const files = Array.from(event.dataTransfer?.files || [])
    .filter(file => file.type.startsWith('image/'))
  
  await addFiles(files)
}

const removeImage = (index: number) => {
  const newImages = [...props.modelValue]
  
  // Revoke the object URL to free memory
  if (newImages[index].preview) {
    URL.revokeObjectURL(newImages[index].preview)
  }
  
  newImages.splice(index, 1)
  emit('update:modelValue', newImages)
}

// Cleanup on unmount
onUnmounted(() => {
  props.modelValue.forEach(image => {
    if (image.preview) {
      URL.revokeObjectURL(image.preview)
    }
  })
})
</script>

<style scoped>
.image-upload-field {
  @apply w-full;
}
</style> 