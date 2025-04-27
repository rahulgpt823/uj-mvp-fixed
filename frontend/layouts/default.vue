<template>
  <div class="app">
    <PriceTicker />
    <header class="header">
      <div class="container">
        <div class="header-content">
          <NuxtLink to="/" class="logo">
            <img src="/images/uj-logo.svg" alt="Urvashi Jewellers Logo" class="logo-image" />
            <h1>Urvashi Jewellers</h1>
          </NuxtLink>
          <nav class="nav">
            <ul class="nav-list">
              <li><NuxtLink to="/">{{ translations.home }}</NuxtLink></li>
              <li><NuxtLink to="/collections">{{ translations.collections }}</NuxtLink></li>
              <li><NuxtLink to="/about">{{ translations.aboutUs }}</NuxtLink></li>
              <li><NuxtLink to="/stores">{{ translations.stores }}</NuxtLink></li>
              <li><NuxtLink to="/contact">{{ translations.contact }}</NuxtLink></li>
            </ul>
          </nav>
          <div class="header-actions">
            <select v-model="selectedLanguage" @change="handleLanguageChange" class="language-select">
              <option v-for="lang in languages" :key="lang.code" :value="lang.code">
                {{ lang.name }}
              </option>
            </select>
            <button class="icon-btn">
              <span class="material-icons">search</span>
            </button>
            <button class="icon-btn">
              <span class="material-icons">favorite_border</span>
            </button>
            <button class="icon-btn">
              <span class="material-icons">shopping_bag</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    
    <main>
      <slot />
    </main>
    
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h2>{{ translations.companyName }}</h2>
            <p>{{ translations.footerTagline }}</p>
          </div>
          
          <div class="footer-links">
            <div class="footer-section">
              <h3>{{ translations.quickLinks }}</h3>
              <ul>
                <li><NuxtLink to="/">{{ translations.home }}</NuxtLink></li>
                <li><NuxtLink to="/collections">{{ translations.collections }}</NuxtLink></li>
                <li><NuxtLink to="/about">{{ translations.aboutUs }}</NuxtLink></li>
                <li><NuxtLink to="/stores">{{ translations.stores }}</NuxtLink></li>
                <li><NuxtLink to="/contact">{{ translations.contact }}</NuxtLink></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>{{ translations.collections }}</h3>
              <ul>
                <li><NuxtLink to="/collections/necklaces">{{ translations.necklaces }}</NuxtLink></li>
                <li><NuxtLink to="/collections/earrings">{{ translations.earrings }}</NuxtLink></li>
                <li><NuxtLink to="/collections/rings">{{ translations.rings }}</NuxtLink></li>
                <li><NuxtLink to="/collections/bracelets">{{ translations.bracelets }}</NuxtLink></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>{{ translations.customerService }}</h3>
              <ul>
                <li><NuxtLink to="/shipping">{{ translations.shipping }}</NuxtLink></li>
                <li><NuxtLink to="/returns">{{ translations.returns }}</NuxtLink></li>
                <li><NuxtLink to="/faq">{{ translations.faq }}</NuxtLink></li>
                <li><NuxtLink to="/care">{{ translations.jewelryCare }}</NuxtLink></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>{{ translations.contactUs }}</h3>
              <p>{{ translations.address }}</p>
              <p>{{ translations.email }}: info@urvashijewellers.com</p>
              <p>{{ translations.phone }}: +91 1234567890</p>
              <div class="social-icons">
                <a href="#" aria-label="Facebook"><span class="material-icons">facebook</span></a>
                <a href="#" aria-label="Instagram"><span class="material-icons">instagram</span></a>
                <a href="#" aria-label="Pinterest"><span class="material-icons">pinterest</span></a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>{{ translations.copyright.replace('{year}', new Date().getFullYear().toString()) }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from '#imports';
import { supportedLanguages } from '~/services/translate';
import { useTranslation } from '~/composables/useTranslation';

const { currentLanguage, translate } = useTranslation();
const languages = supportedLanguages;
const selectedLanguage = ref(currentLanguage.value);

const translations = ref({
  home: 'Home',
  collections: 'Collections',
  aboutUs: 'About Us',
  contact: 'Contact',
  stores: 'Store Locator',
  companyName: 'Urvashi Jewellers',
  footerTagline: 'Exquisite jewelry crafted with passion and precision since 1985.',
  quickLinks: 'Quick Links',
  necklaces: 'Necklaces',
  earrings: 'Earrings',
  rings: 'Rings',
  bracelets: 'Bracelets',
  customerService: 'Customer Service',
  shipping: 'Shipping',
  returns: 'Returns',
  faq: 'FAQ',
  jewelryCare: 'Jewelry Care',
  contactUs: 'Contact Us',
  address: '123 Jewelry Lane, Your City',
  email: 'Email',
  phone: 'Phone',
  copyright: '© {year} Urvashi Jewellers. All rights reserved.'
});

async function updateTranslations() {
  if (selectedLanguage.value !== 'en') {
    try {
      const [
        home, collections, aboutUs, contact, stores,
        companyName, footerTagline, quickLinks,
        necklaces, earrings, rings, bracelets,
        customerService, shipping, returns, faq,
        jewelryCare, contactUs, address, email,
        phone, copyright
      ] = await Promise.all([
        translate('Home'),
        translate('Collections'),
        translate('About Us'),
        translate('Contact'),
        translate('Store Locator'),
        translate('Urvashi Jewellers'),
        translate('Exquisite jewelry crafted with passion and precision since 1985.'),
        translate('Quick Links'),
        translate('Necklaces'),
        translate('Earrings'),
        translate('Rings'),
        translate('Bracelets'),
        translate('Customer Service'),
        translate('Shipping'),
        translate('Returns'),
        translate('FAQ'),
        translate('Jewelry Care'),
        translate('Contact Us'),
        translate('123 Jewelry Lane, Your City'),
        translate('Email'),
        translate('Phone'),
        translate('© {year} Urvashi Jewellers. All rights reserved.')
      ]);
      
      translations.value = {
        home,
        collections,
        aboutUs,
        contact,
        stores,
        companyName,
        footerTagline,
        quickLinks,
        necklaces,
        earrings,
        rings,
        bracelets,
        customerService,
        shipping,
        returns,
        faq,
        jewelryCare,
        contactUs,
        address,
        email,
        phone,
        copyright
      };
    } catch (error) {
      console.error('Translation failed:', error);
    }
  } else {
    translations.value = {
      home: 'Home',
      collections: 'Collections',
      aboutUs: 'About Us',
      contact: 'Contact',
      stores: 'Store Locator',
      companyName: 'Urvashi Jewellers',
      footerTagline: 'Exquisite jewelry crafted with passion and precision since 1985.',
      quickLinks: 'Quick Links',
      necklaces: 'Necklaces',
      earrings: 'Earrings',
      rings: 'Rings',
      bracelets: 'Bracelets',
      customerService: 'Customer Service',
      shipping: 'Shipping',
      returns: 'Returns',
      faq: 'FAQ',
      jewelryCare: 'Jewelry Care',
      contactUs: 'Contact Us',
      address: '123 Jewelry Lane, Your City',
      email: 'Email',
      phone: 'Phone',
      copyright: '© {year} Urvashi Jewellers. All rights reserved.'
    };
  }
}

async function handleLanguageChange() {
  currentLanguage.value = selectedLanguage.value;
  if (process.client) {
    localStorage.setItem('preferredLanguage', selectedLanguage.value);
    await updateTranslations();
  }
}

// Keep selectedLanguage in sync with currentLanguage
watch(currentLanguage, async (newLang) => {
  selectedLanguage.value = newLang;
  await updateTranslations();
});

onMounted(async () => {
  await updateTranslations();
});
</script>

<style>
.header {
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--light);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  text-decoration: none;
  padding: var(--spacing-xs);
}

.logo-image {
  height: 100px;
  width: 100px;
  transform-origin: center center;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}

.logo:hover .logo-image {
  transform: scale(1.12);
}

.logo h1 {
  font-size: 2.2rem;
  margin-bottom: 0;
  color: #C97C95;
  font-family: var(--font-heading);
  font-weight: 400;
  transition: opacity 0.3s ease;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
}

.nav-list a {
  font-weight: 500;
  position: relative;
}

.nav-list a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--secondary);
  transition: var(--transition);
}

.nav-list a:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--dark);
  transition: var(--transition);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  color: var(--primary);
}

.footer {
  background-color: var(--dark);
  color: var(--text-light);
  padding: var(--spacing-xl) 0 var(--spacing-md);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.footer h2, .footer h3 {
  color: var(--light);
}

.footer a {
  color: var(--text-light);
}

.footer a:hover {
  color: var(--secondary);
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: var(--spacing-sm);
}

.social-icons {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-md);
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr 2fr;
  }
  
  .footer-links {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .nav-list {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .header-actions {
    width: 100%;
    justify-content: center;
  }
  
  .logo-image {
    height: 85px;
    width: 85px;
  }
  
  .logo h1 {
    font-size: 2rem;
  }
  
  .logo:hover .logo-image {
    transform: scale(1.1);
  }
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
  margin-right: var(--spacing-md);
}

.language-select:hover {
  border-color: var(--primary);
}

.language-select:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.1);
}
</style> 