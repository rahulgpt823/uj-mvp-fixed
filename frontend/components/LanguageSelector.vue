<template>
  <div class="language-selector">
    <select v-model="selectedLanguage" @change="handleLanguageChange" class="language-select">
      <option v-for="lang in languages" :key="lang.code" :value="lang.code">
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from '#imports';
import { supportedLanguages } from '~/services/translate';
import { useTranslation } from '~/composables/useTranslation';

const { currentLanguage } = useTranslation();
const languages = supportedLanguages;
const selectedLanguage = ref(currentLanguage.value);

function handleLanguageChange() {
  if (process.client) {
    localStorage.setItem('preferredLanguage', selectedLanguage.value);
  }
  currentLanguage.value = selectedLanguage.value;
}

// Keep selectedLanguage in sync with currentLanguage
watch(currentLanguage, (newLang) => {
  selectedLanguage.value = newLang;
});
</script>

<style scoped>
.language-selector {
  display: flex;
  align-items: center;
}

.language-select {
  padding: 4px 8px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--light);
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: var(--transition);
  color: var(--dark);
}

.language-select:hover {
  border-color: var(--primary);
}

.language-select:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.1);
}

@media (max-width: 768px) {
  .language-select {
    width: auto;
  }
}
</style> 