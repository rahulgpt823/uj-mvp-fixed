<template>
  <div class="language-switcher">
    <select v-model="currentLocale" @change="changeLanguage" class="language-select">
      <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, locales } = useI18n()
const currentLocale = ref(locale.value)
const availableLocales = locales.value

const changeLanguage = () => {
  locale.value = currentLocale.value
}
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.language-select {
  padding: 8px 12px;
  border: 1px solid var(--primary);
  border-radius: var(--border-radius);
  background-color: var(--light);
  color: var(--dark);
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: var(--transition);
}

.language-select:hover {
  border-color: var(--secondary);
}

.language-select:focus {
  box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
}
</style> 