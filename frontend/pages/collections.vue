<template>
  <div class="collections">
    <section class="collections-hero">
      <h1>{{ translations.title }}</h1>
      <p>{{ translations.subtitle }}</p>
    </section>

    <section class="collections-grid">
      <div v-for="collection in collections" :key="collection.id" class="collection-card">
        <img :src="collection.image" :alt="collection.name" />
        <div class="collection-info">
          <h3>{{ collection.name }}</h3>
          <p>{{ collection.description }}</p>
          <NuxtLink :to="'/collection/' + collection.id" class="btn">
            {{ translations.viewCollection }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from '#imports';
import { useTranslation } from '~/composables/useTranslation';

const { currentLanguage, translate } = useTranslation();

const translations = ref({
  title: 'Our Collections',
  subtitle: 'Explore our carefully curated collections of fine jewelry',
  viewCollection: 'View Collection'
});

const collections = ref([
  {
    id: 1,
    name: 'Bridal Collection',
    description: 'Timeless pieces for your special day',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 2,
    name: 'Diamond Collection',
    description: 'Exquisite diamond jewelry for every occasion',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 3,
    name: 'Gold Collection',
    description: 'Traditional and modern gold jewelry designs',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 4,
    name: 'Pearl Collection',
    description: 'Elegant pearl jewelry for sophisticated taste',
    image: 'https://placehold.co/600x400'
  }
]);

async function updateTranslations() {
  if (currentLanguage.value !== 'en') {
    try {
      // Translate static content
      const [title, subtitle, viewCollection] = await Promise.all([
        translate('Our Collections'),
        translate('Explore our carefully curated collections of fine jewelry'),
        translate('View Collection')
      ]);

      translations.value = {
        title,
        subtitle,
        viewCollection
      };

      // Translate collection items
      const translatedCollections = await Promise.all(
        collections.value.map(async (collection) => {
          const [name, description] = await Promise.all([
            translate(collection.name),
            translate(collection.description)
          ]);

          return {
            ...collection,
            name,
            description
          };
        })
      );

      collections.value = translatedCollections;
    } catch (error) {
      console.error('Translation failed:', error);
    }
  } else {
    // Reset to English
    translations.value = {
      title: 'Our Collections',
      subtitle: 'Explore our carefully curated collections of fine jewelry',
      viewCollection: 'View Collection'
    };

    collections.value = [
      {
        id: 1,
        name: 'Bridal Collection',
        description: 'Timeless pieces for your special day',
        image: 'https://placehold.co/600x400'
      },
      {
        id: 2,
        name: 'Diamond Collection',
        description: 'Exquisite diamond jewelry for every occasion',
        image: 'https://placehold.co/600x400'
      },
      {
        id: 3,
        name: 'Gold Collection',
        description: 'Traditional and modern gold jewelry designs',
        image: 'https://placehold.co/600x400'
      },
      {
        id: 4,
        name: 'Pearl Collection',
        description: 'Elegant pearl jewelry for sophisticated taste',
        image: 'https://placehold.co/600x400'
      }
    ];
  }
}

// Watch for language changes
watch(currentLanguage, async () => {
  await updateTranslations();
});

// Initial translation
onMounted(async () => {
  await updateTranslations();
});
</script>

<style scoped>
.collections {
  min-height: 100vh;
}

.collections-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url('https://placehold.co/1920x400') center/cover;
  padding: var(--spacing-xxl) var(--spacing-xl);
  text-align: center;
  color: var(--light);
}

.collections-hero h1 {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.collections-hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.collections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  padding: var(--spacing-xl);
  max-width: 1400px;
  margin: 0 auto;
}

.collection-card {
  background: var(--light);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.collection-card:hover {
  transform: translateY(-5px);
}

.collection-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.collection-info {
  padding: var(--spacing-lg);
  text-align: center;
}

.collection-info h3 {
  margin-bottom: var(--spacing-sm);
  color: var(--primary);
}

.collection-info p {
  margin-bottom: var(--spacing-md);
  color: var(--text);
}

.btn {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--primary);
  color: var(--light);
  border-radius: var(--border-radius);
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background: var(--primary-dark);
}

@media (max-width: 768px) {
  .collections-hero h1 {
    font-size: 2.5rem;
  }

  .collections-hero p {
    font-size: 1rem;
  }

  .collections-grid {
    grid-template-columns: 1fr;
    padding: var(--spacing-md);
  }
}
</style> 