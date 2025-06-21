<template>
  <transition name="fade-slide">
    <div v-if="show" class="mega-menu collections-mega-menu">
      <div class="mega-menu-section" v-for="cat in categories" :key="cat.name">
        <a href="#" class="nav-list-link mega-menu-title">{{ cat.name }}</a>
        <ul>
          <li v-for="sub in cat.subcategories" :key="sub">
            <span class="bullet-btn"></span>
            <a href="#" class="nav-list-link">{{ sub }}</a>
          </li>
        </ul>
      </div>
      <div class="mega-menu-section">
        <a href="#" class="nav-list-link mega-menu-title">GENDER</a>
        <ul>
          <li v-for="g in genders" :key="g">
            <span class="bullet-btn"></span>
            <a href="#" class="nav-list-link">{{ g }}</a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps } from 'vue'
import { Category, SubcategoryByCategory, Gender } from '~/types/enums'

const props = defineProps({ show: Boolean })

const categories = [
  {
    name: Category.GOLD_ORNAMENTS,
    subcategories: SubcategoryByCategory[Category.GOLD_ORNAMENTS]
  },
  {
    name: Category.SILVER_ARTICLES,
    subcategories: SubcategoryByCategory[Category.SILVER_ARTICLES]
  },
  {
    name: Category.SILVER_ORNAMENTS,
    subcategories: SubcategoryByCategory[Category.SILVER_ORNAMENTS]
  },
  {
    name: Category.SILVER_JEWELLERY,
    subcategories: SubcategoryByCategory[Category.SILVER_JEWELLERY]
  }
]

const genders = Object.values(Gender)
</script>

<style scoped>
.mega-menu.collections-mega-menu {
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 1.2rem 1.2rem;
  display: flex;
  gap: 1.5rem;
  z-index: 100;
  min-width: 800px;
  width: 75vw;
  max-width: 1200px;
  height: 65vh;
  max-height: 65vh;
  overflow-y: auto;
  opacity: 1;
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 500;
  align-items: flex-start;
}
.mega-menu-title {
  margin: 0 0 1.2rem 0;
  display: inline-block;
  font-size: 1.18rem;
  font-family: 'Playfair Display', var(--font-heading), serif;
  font-weight: 700;
  color: #bfa16a;
  letter-spacing: 1.5px;
  padding-bottom: 0.4rem;
  background: none;
  border-radius: 2px;
  text-transform: uppercase;
  border-bottom: 2.5px solid #bfa16a;
}
.mega-menu-section {
  margin-right: 1.2rem;
}
.mega-menu-section ul {
  margin-top: 0.3rem;
}
.mega-menu-section li {
  margin-bottom: 0.18rem;
  font-family: var(--font-body), sans-serif;
  font-size: 0.98rem;
  color: #666;
  text-align: left;
  font-weight: 500;
  letter-spacing: 0.1px;
  line-height: 1.5;
  padding-left: 0;
  position: relative;
  transition: background 0.2s;
  min-height: 2rem;
  display: flex;
  align-items: center;
}
.mega-menu-section li::before {
  display: none;
}
.mega-menu-section li .bullet-btn {
  display: none;
  width: 0.7rem;
  height: 0.7rem;
  background: var(--secondary);
  margin-right: 0.5rem;
  transition: opacity 0.2s, transform 0.2s;
  opacity: 0;
  flex-shrink: 0;
  border-radius: 2px;
  transform: rotate(45deg) scale(0.9);
  box-shadow: 0 1px 4px rgba(191,161,106,0.10);
}
.mega-menu-section li:hover .bullet-btn {
  display: inline-block;
  opacity: 1;
  transform: rotate(45deg) scale(1.1);
}
.mega-menu-section li:hover {
  background: rgba(191, 161, 106, 0.07);
}

/* Use the same style as .nav-list a in the header */
.nav-list-link {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 1.05rem;
  color: #222;
  text-decoration: none;
  position: relative;
  transition: color 0.2s;
  padding-bottom: 2px;
  display: inline-block;
}
.nav-list-link:hover, .nav-list-link:focus {
  color: var(--primary);
}
.nav-list-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background-color: var(--secondary);
  transition: width 0.3s;
}
.nav-list-link:hover::after, .nav-list-link:focus::after {
  width: 100%;
}
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(18px) scale(0.98);
}
@media (max-width: 900px) {
  .mega-menu.collections-mega-menu {
    flex-wrap: wrap;
    min-width: 100vw;
    padding: 1rem;
    gap: 1.5rem;
    font-size: 1rem;
  }
}
</style> 