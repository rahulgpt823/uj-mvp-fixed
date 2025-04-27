<template>
  <div class="about-page">
    <div v-if="isTranslating" class="translation-overlay">
      <span class="material-icons loading-icon">translate</span>
      Translating...
    </div>

    <LanguageSelector @language-change="handleLanguageChange" />
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>{{ content.title }}</h1>
        <p>{{ content.subtitle }}</p>
      </div>
    </section>
    
    <!-- Our Story Section -->
    <section class="story">
      <div class="container">
        <div class="story-content">
          <div class="text-content">
            <h2>{{ content.storyTitle }}</h2>
            <p>{{ content.storyContent }}</p>
          </div>
          <div class="image">
            <img src="https://placehold.co/600x400" alt="Our Story" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Values Section -->
    <section class="section our-values bg-light">
      <div class="container">
        <h2 class="section-title text-center">Our Values</h2>
        <div class="grid grid-3">
          <div class="value-card">
            <div class="value-icon">
              <span class="material-icons">diamond</span>
            </div>
            <h3>Quality Craftsmanship</h3>
            <p>We believe in creating jewelry that stands the test of time. Each piece is meticulously crafted by our skilled artisans using the finest materials and techniques.</p>
          </div>
          
          <div class="value-card">
            <div class="value-icon">
              <span class="material-icons">design_services</span>
            </div>
            <h3>Artistry & Design</h3>
            <p>We blend traditional Indian aesthetics with contemporary design sensibilities to create pieces that are both timeless and modern.</p>
          </div>
          
          <div class="value-card">
            <div class="value-icon">
              <span class="material-icons">handshake</span>
            </div>
            <h3>Trust & Transparency</h3>
            <p>We build lasting relationships with our customers based on trust, transparency, and ethical business practices.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Craftsmanship Section -->
    <section class="craftsmanship">
      <div class="container">
        <div class="craft-content">
          <div class="image">
            <img src="https://placehold.co/600x400" alt="Our Craftsmanship" />
          </div>
          <div class="text-content">
            <h2>Our Craftsmanship</h2>
            <p>Each piece is meticulously crafted by our skilled artisans, combining traditional techniques with modern innovation to create jewelry that stands the test of time.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="team">
      <div class="container">
        <h2>Meet Our Team</h2>
        <div class="team-grid">
          <div class="team-member">
            <img src="https://placehold.co/300x300" alt="Team Member 1" />
            <h3>Rahul Sharma</h3>
            <p>Master Jeweler</p>
          </div>
          <div class="team-member">
            <img src="https://placehold.co/300x300" alt="Team Member 2" />
            <h3>Priya Patel</h3>
            <p>Design Director</p>
          </div>
          <div class="team-member">
            <img src="https://placehold.co/300x300" alt="Team Member 3" />
            <h3>Amit Kumar</h3>
            <p>Gemologist</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonial Section -->
    <section class="section testimonial-section">
      <div class="container">
        <h2 class="section-title text-center">{{ content.testimonialTitle }}</h2>
        <div class="testimonial-carousel">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>{{ content.testimonialText }}</p>
            </div>
            <div class="testimonial-author">
              <div class="author-image">
                <img src="https://placehold.co/60x60" alt="Meera Patel" />
              </div>
              <div class="author-info">
                <h4>{{ content.testimonialAuthor }}</h4>
                <p>{{ content.testimonialRole }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section cta-section bg-light">
      <div class="container">
        <div class="cta-content text-center">
          <h2>Visit Our Showroom</h2>
          <p>Experience our collections in person and let our team help you find the perfect piece.</p>
          <NuxtLink to="/contact" class="btn">Contact Us</NuxtLink>
        </div>
      </div>
    </section>

    <div v-if="translationError" class="translation-error">
      {{ translationError }}
      <button @click="retryTranslation" class="retry-btn">
        <span class="material-icons">refresh</span>
        Retry
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useTranslation } from '~/composables/useTranslation';
import { checkTranslationService } from '~/services/translate';

const { currentLanguage, translateObject } = useTranslation();
const isTranslating = ref(false);
const translationError = ref('');

interface ContentType {
  title: string;
  subtitle: string;
  storyTitle: string;
  storyContent: string;
  testimonialTitle: string;
  testimonialText: string;
  testimonialAuthor: string;
  testimonialRole: string;
  [key: string]: string; // Index signature to allow string indexing
}

const defaultContent: ContentType = {
  title: "About Us",
  subtitle: "Our Journey in Fine Jewelry",
  storyTitle: "Our Story",
  storyContent: "With over 25 years of expertise in crafting exquisite jewelry...",
  testimonialTitle: "What Our Customers Say",
  testimonialText: "The craftsmanship and attention to detail...",
  testimonialAuthor: "Priya Sharma",
  testimonialRole: "Loyal Customer"
};

const content = ref<ContentType>({ ...defaultContent });

async function translateContent(lang: string) {
  if (lang === 'en') {
    content.value = { ...defaultContent };
    return;
  }

  isTranslating.value = true;
  translationError.value = '';

  try {
    // Check if translation service is available
    const isServiceAvailable = await checkTranslationService();
    if (!isServiceAvailable) {
      throw new Error('Translation service is currently unavailable');
    }

    content.value = await translateObject(defaultContent, lang);
  } catch (error) {
    console.error('Translation failed:', error);
    translationError.value = 'Failed to translate content. Please try again later.';
    content.value = { ...defaultContent }; // Fallback to English
  } finally {
    isTranslating.value = false;
  }
}

async function retryTranslation() {
  translationError.value = '';
  await translateContent(currentLanguage.value);
}

async function handleLanguageChange(language: string) {
  // Store language preference
  localStorage.setItem('preferredLanguage', language);

  isTranslating.value = true;
  translationError.value = '';

  try {
    if (language !== 'en') {
      // Create a new object to store translations
      const translatedContent: ContentType = { ...defaultContent };
      
      // Translate each field
      for (const key in defaultContent) {
        const result = await translateObject({ text: defaultContent[key] }, language);
        translatedContent[key] = result.text || defaultContent[key]; // Use the translated text or fallback
      }
      
      // Update content with translated values
      content.value = translatedContent;
    } else {
      // Reset to original English content
      content.value = { ...defaultContent };
    }
  } catch (error) {
    console.error('Translation failed:', error);
    translationError.value = 'Failed to translate content. Please try again later.';
    content.value = { ...defaultContent }; // Fallback to English
  } finally {
    isTranslating.value = false;
  }
}
</script>

<style scoped>
.about-page {
  padding: var(--spacing-xl) 0;
}

.hero {
  background-color: var(--bg-cream);
  padding: var(--spacing-xl) 0;
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.hero h1 {
  margin-bottom: var(--spacing-sm);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.story-content,
.craft-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  margin: var(--spacing-xl) 0;
}

.text-content {
  padding: var(--spacing-lg);
}

.text-content h2 {
  margin-bottom: var(--spacing-md);
}

.image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.team {
  background-color: var(--bg-cream);
  padding: var(--spacing-xl) 0;
  margin-top: var(--spacing-xl);
}

.team h2 {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  justify-items: center;
}

.team-member {
  text-align: center;
}

.team-member img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: var(--spacing-md);
  object-fit: cover;
}

.team-member h3 {
  margin-bottom: var(--spacing-xs);
}

.our-values {
  text-align: center;
}

.value-card {
  padding: var(--spacing-lg);
  background-color: var(--light);
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.value-icon {
  margin-bottom: var(--spacing-md);
}

.value-icon .material-icons {
  font-size: 2.5rem;
  color: var(--primary);
}

.testimonial-card {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: var(--spacing-lg);
  background-color: var(--light);
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.testimonial-content p {
  font-size: 1.25rem;
  font-style: italic;
  line-height: 1.8;
  position: relative;
  margin-bottom: var(--spacing-lg);
}

.testimonial-content p::before,
.testimonial-content p::after {
  content: '"';
  font-size: 2rem;
  color: var(--primary);
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}

.author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info h4 {
  margin-bottom: 0;
}

.author-info p {
  margin-bottom: 0;
  color: var(--primary);
}

.cta-section {
  padding: var(--spacing-xl) 0;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  margin-bottom: var(--spacing-md);
}

.cta-content p {
  margin-bottom: var(--spacing-lg);
}

@media (max-width: 768px) {
  .story-content,
  .craft-content {
    grid-template-columns: 1fr;
  }
  
  .craft-content {
    direction: ltr;
  }
  
  .text-content {
    padding: var(--spacing-md) 0;
  }
}

.translation-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(var(--primary-rgb), 0.1);
  padding: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 1000;
}

.loading-icon {
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.translation-error {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff3f3;
  border: 1px solid #ff4444;
  padding: 12px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.retry-btn {
  background: none;
  border: none;
  color: var(--primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.retry-btn:hover {
  background-color: rgba(var(--primary-rgb), 0.1);
}
</style> 