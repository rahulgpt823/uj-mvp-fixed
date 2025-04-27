<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ translations.welcome }}</h1>
        <p>{{ translations.discover }}</p>
        <div class="hero-buttons">
          <NuxtLink to="/collections" class="btn">{{ translations.exploreCollections }}</NuxtLink>
          <NuxtLink to="/about" class="btn btn-outline">{{ translations.ourStory }}</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Categories -->
    <section class="section featured-categories">
      <div class="container">
        <h2 class="section-title text-center">{{ translations.ourCollections }}</h2>
        <div class="grid grid-4">
          <div class="category-card">
            <div class="category-image">
              <img src="https://placehold.co/600x400" :alt="translations.necklaces" />
            </div>
            <h3>{{ translations.necklaces }}</h3>
            <NuxtLink to="/collections/necklaces" class="link-overlay"></NuxtLink>
          </div>
          
          <div class="category-card">
            <div class="category-image">
              <img src="https://placehold.co/600x400" :alt="translations.earrings" />
            </div>
            <h3>{{ translations.earrings }}</h3>
            <NuxtLink to="/collections/earrings" class="link-overlay"></NuxtLink>
          </div>
          
          <div class="category-card">
            <div class="category-image">
              <img src="https://placehold.co/600x400" :alt="translations.rings" />
            </div>
            <h3>{{ translations.rings }}</h3>
            <NuxtLink to="/collections/rings" class="link-overlay"></NuxtLink>
          </div>
          
          <div class="category-card">
            <div class="category-image">
              <img src="https://placehold.co/600x400" :alt="translations.bracelets" />
            </div>
            <h3>{{ translations.bracelets }}</h3>
            <NuxtLink to="/collections/bracelets" class="link-overlay"></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="section featured-products bg-light">
      <div class="container">
        <h2 class="section-title text-center">{{ translations.featuredProducts }}</h2>
        <div class="grid grid-3">
          <div class="product-card card">
            <div class="product-image">
              <img src="https://placehold.co/600x400" :alt="translations.diamondNecklace" />
              <div class="product-tags">
                <span class="tag tag-new">{{ translations.new }}</span>
              </div>
              <div class="product-actions">
                <button class="icon-action" :aria-label="translations.addToWishlist">
                  <span class="material-icons">favorite_border</span>
                </button>
                <button class="icon-action" :aria-label="translations.quickView">
                  <span class="material-icons">visibility</span>
                </button>
                <button class="icon-action" :aria-label="translations.addToCart">
                  <span class="material-icons">shopping_bag</span>
                </button>
              </div>
            </div>
            <div class="product-info">
              <h3>{{ translations.diamondNecklace }}</h3>
              <p class="product-price">₹45,000</p>
              <NuxtLink to="/product/1" class="link-overlay"></NuxtLink>
            </div>
          </div>
          
          <div class="product-card card">
            <div class="product-image">
              <img src="https://placehold.co/600x400" :alt="translations.goldBangles" />
              <div class="product-tags">
                <span class="tag tag-bestseller">{{ translations.bestseller }}</span>
              </div>
              <div class="product-actions">
                <button class="icon-action" :aria-label="translations.addToWishlist">
                  <span class="material-icons">favorite_border</span>
                </button>
                <button class="icon-action" :aria-label="translations.quickView">
                  <span class="material-icons">visibility</span>
                </button>
                <button class="icon-action" :aria-label="translations.addToCart">
                  <span class="material-icons">shopping_bag</span>
                </button>
              </div>
            </div>
            <div class="product-info">
              <h3>{{ translations.goldBangles }}</h3>
              <p class="product-price">₹28,000</p>
              <NuxtLink to="/product/2" class="link-overlay"></NuxtLink>
            </div>
          </div>
          
          <div class="product-card card">
            <div class="product-image">
              <img src="https://placehold.co/600x400" :alt="translations.rubyEarrings" />
              <div class="product-actions">
                <button class="icon-action" :aria-label="translations.addToWishlist">
                  <span class="material-icons">favorite_border</span>
                </button>
                <button class="icon-action" :aria-label="translations.quickView">
                  <span class="material-icons">visibility</span>
                </button>
                <button class="icon-action" :aria-label="translations.addToCart">
                  <span class="material-icons">shopping_bag</span>
                </button>
              </div>
            </div>
            <div class="product-info">
              <h3>{{ translations.rubyEarrings }}</h3>
              <p class="product-price">₹15,000</p>
              <NuxtLink to="/product/3" class="link-overlay"></NuxtLink>
            </div>
          </div>
        </div>
        
        <div class="text-center view-all">
          <NuxtLink to="/collections" class="btn">{{ translations.viewAllProducts }}</NuxtLink>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about-section">
      <div class="container">
        <div class="grid grid-2">
          <div class="about-image">
            <img src="https://placehold.co/600x400" :alt="translations.aboutAlt" />
          </div>
          <div class="about-content">
            <h2>{{ translations.aboutTitle }}</h2>
            <p>{{ translations.aboutText1 }}</p>
            <p>{{ translations.aboutText2 }}</p>
            <NuxtLink to="/about" class="btn">{{ translations.readMore }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="section testimonial-section bg-light">
      <div class="container">
        <h2 class="section-title text-center">{{ translations.testimonialTitle }}</h2>
        <div class="testimonial-carousel">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>{{ translations.testimonialText }}</p>
            </div>
            <div class="testimonial-author">
              <div class="author-image">
                <img src="https://placehold.co/600x400" :alt="translations.testimonialAuthor" />
              </div>
              <div class="author-info">
                <h4>{{ translations.testimonialAuthor }}</h4>
                <p>{{ translations.testimonialLocation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram Section -->
    <section class="section instagram-section">
      <div class="container">
        <h2 class="section-title text-center">{{ translations.followInstagram }}</h2>
        <p class="text-center">@urvashijewellers</p>
        <div class="instagram-feed">
          <div v-for="i in 4" :key="i" class="instagram-item">
            <img src="https://placehold.co/600x400" :alt="translations.instagramPost" />
            <a href="#" class="instagram-overlay" :aria-label="translations.viewOnInstagram">
              <span class="material-icons">instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <BrandCertifications />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from '#imports';
import { useTranslation } from '~/composables/useTranslation';

const { currentLanguage, translate } = useTranslation();

const translations = ref({
  welcome: 'Welcome to Urvashi Jewellers',
  discover: 'Discover our exquisite collection of fine jewelry',
  exploreCollections: 'Explore Collections',
  ourStory: 'Our Story',
  ourCollections: 'Our Collections',
  necklaces: 'Necklaces',
  earrings: 'Earrings',
  rings: 'Rings',
  bracelets: 'Bracelets',
  featuredProducts: 'Featured Products',
  diamondNecklace: 'Diamond Necklace',
  goldBangles: 'Gold Bangles Set',
  rubyEarrings: 'Ruby Earrings',
  new: 'New',
  bestseller: 'Bestseller',
  addToWishlist: 'Add to wishlist',
  quickView: 'Quick view',
  addToCart: 'Add to cart',
  viewAllProducts: 'View All Products',
  aboutTitle: 'About Urvashi Jewellers',
  aboutText1: 'With over 25 years of expertise in crafting exquisite jewelry, we bring you timeless pieces that celebrate life\'s precious moments.',
  aboutText2: 'Each piece is meticulously crafted by our skilled artisans using the finest materials and contemporary designs.',
  readMore: 'Read More',
  aboutAlt: 'About Urvashi Jewellers',
  testimonialTitle: 'What Our Customers Say',
  testimonialText: 'The craftsmanship and attention to detail in their jewelry is exceptional. I couldn\'t be happier with my purchase!',
  testimonialAuthor: 'Priya Sharma',
  testimonialLocation: 'Mumbai, India',
  followInstagram: 'Follow Us on Instagram',
  instagramPost: 'Instagram post',
  viewOnInstagram: 'View on Instagram'
});

async function updateTranslations() {
  if (currentLanguage.value !== 'en') {
    try {
      const [
        welcome, discover, exploreCollections, ourStory,
        ourCollections, necklaces, earrings, rings,
        bracelets, featuredProducts, diamondNecklace,
        goldBangles, rubyEarrings, newTag, bestseller,
        addToWishlist, quickView, addToCart, viewAllProducts,
        aboutTitle, aboutText1, aboutText2, readMore,
        aboutAlt, testimonialTitle, testimonialText,
        testimonialAuthor, testimonialLocation,
        followInstagram, instagramPost, viewOnInstagram
      ] = await Promise.all([
        translate('Welcome to Urvashi Jewellers'),
        translate('Discover our exquisite collection of fine jewelry'),
        translate('Explore Collections'),
        translate('Our Story'),
        translate('Our Collections'),
        translate('Necklaces'),
        translate('Earrings'),
        translate('Rings'),
        translate('Bracelets'),
        translate('Featured Products'),
        translate('Diamond Necklace'),
        translate('Gold Bangles Set'),
        translate('Ruby Earrings'),
        translate('New'),
        translate('Bestseller'),
        translate('Add to wishlist'),
        translate('Quick view'),
        translate('Add to cart'),
        translate('View All Products'),
        translate('About Urvashi Jewellers'),
        translate('With over 25 years of expertise in crafting exquisite jewelry, we bring you timeless pieces that celebrate life\'s precious moments.'),
        translate('Each piece is meticulously crafted by our skilled artisans using the finest materials and contemporary designs.'),
        translate('Read More'),
        translate('About Urvashi Jewellers'),
        translate('What Our Customers Say'),
        translate('The craftsmanship and attention to detail in their jewelry is exceptional. I couldn\'t be happier with my purchase!'),
        translate('Priya Sharma'),
        translate('Mumbai, India'),
        translate('Follow Us on Instagram'),
        translate('Instagram post'),
        translate('View on Instagram')
      ]);

      translations.value = {
        welcome,
        discover,
        exploreCollections,
        ourStory,
        ourCollections,
        necklaces,
        earrings,
        rings,
        bracelets,
        featuredProducts,
        diamondNecklace,
        goldBangles,
        rubyEarrings,
        new: newTag,
        bestseller,
        addToWishlist,
        quickView,
        addToCart,
        viewAllProducts,
        aboutTitle,
        aboutText1,
        aboutText2,
        readMore,
        aboutAlt,
        testimonialTitle,
        testimonialText,
        testimonialAuthor,
        testimonialLocation,
        followInstagram,
        instagramPost,
        viewOnInstagram
      };
    } catch (error) {
      console.error('Translation failed:', error);
    }
  } else {
    translations.value = {
      welcome: 'Welcome to Urvashi Jewellers',
      discover: 'Discover our exquisite collection of fine jewelry',
      exploreCollections: 'Explore Collections',
      ourStory: 'Our Story',
      ourCollections: 'Our Collections',
      necklaces: 'Necklaces',
      earrings: 'Earrings',
      rings: 'Rings',
      bracelets: 'Bracelets',
      featuredProducts: 'Featured Products',
      diamondNecklace: 'Diamond Necklace',
      goldBangles: 'Gold Bangles Set',
      rubyEarrings: 'Ruby Earrings',
      new: 'New',
      bestseller: 'Bestseller',
      addToWishlist: 'Add to wishlist',
      quickView: 'Quick view',
      addToCart: 'Add to cart',
      viewAllProducts: 'View All Products',
      aboutTitle: 'About Urvashi Jewellers',
      aboutText1: 'With over 25 years of expertise in crafting exquisite jewelry, we bring you timeless pieces that celebrate life\'s precious moments.',
      aboutText2: 'Each piece is meticulously crafted by our skilled artisans using the finest materials and contemporary designs.',
      readMore: 'Read More',
      aboutAlt: 'About Urvashi Jewellers',
      testimonialTitle: 'What Our Customers Say',
      testimonialText: 'The craftsmanship and attention to detail in their jewelry is exceptional. I couldn\'t be happier with my purchase!',
      testimonialAuthor: 'Priya Sharma',
      testimonialLocation: 'Mumbai, India',
      followInstagram: 'Follow Us on Instagram',
      instagramPost: 'Instagram post',
      viewOnInstagram: 'View on Instagram'
    };
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
.hero {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url('https://placehold.co/1920x1080') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--light);
}

.hero-content {
  max-width: 800px;
  padding: var(--spacing-xl);
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-xl);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
}

.btn {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: 1.1rem;
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--light);
  color: var(--light);
}

.btn-outline:hover {
  background: var(--light);
  color: var(--primary);
}

.section-title {
  margin-bottom: var(--spacing-xl);
}

.category-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  text-align: center;
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

.bg-light {
  background-color: var(--bg-cream);
}

.featured-products {
  padding: var(--spacing-xl) 0;
}

.product-card {
  position: relative;
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

.view-all {
  margin-top: var(--spacing-xl);
}

.about-section {
  padding: var(--spacing-xl) 0;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-lg);
}

.testimonial-section {
  padding: var(--spacing-xl) 0;
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

.instagram-section {
  padding: var(--spacing-xl) 0;
}

.instagram-feed {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.instagram-item {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.instagram-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.instagram-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  opacity: 0;
  transition: var(--transition);
}

.instagram-item:hover img {
  transform: scale(1.05);
}

.instagram-item:hover .instagram-overlay {
  opacity: 1;
}

@media (max-width: 992px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .instagram-feed {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 70vh;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .about-section .grid {
    gap: var(--spacing-lg);
  }
  
  .testimonial-card {
    padding: var(--spacing-md);
  }
  
  .testimonial-content p {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .instagram-feed {
    grid-template-columns: 1fr;
  }
}
</style> 