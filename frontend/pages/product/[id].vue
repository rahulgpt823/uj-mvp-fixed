<template>
  <div class="product-detail-page">
    <div class="container">
      <div class="breadcrumbs">
        <NuxtLink to="/">Home</NuxtLink> &gt;
        <NuxtLink to="/collections">Collections</NuxtLink> &gt;
        <span>{{ product.name }}</span>
      </div>
      
      <div class="product-detail">
        <div class="product-gallery">
          <div class="main-image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <!-- Thumbnail gallery can be added here in future -->
        </div>
        
        <div class="product-info">
          <h1>{{ product.name }}</h1>
          <p class="product-price">₹{{ product.price.toLocaleString('en-IN') }}</p>
          
          <div class="product-availability">
            <span :class="['status', product.inStock ? 'in-stock' : 'out-of-stock']">
              {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
            </span>
          </div>
          
          <div class="product-description">
            <p>{{ product.description }}</p>
          </div>
          
          <div class="product-actions">
            <div class="quantity-selector">
              <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
              <input type="number" v-model="quantity" min="1" />
              <button @click="increaseQuantity">+</button>
            </div>
            
            <button class="btn add-to-cart" :disabled="!product.inStock">
              Add to Cart
            </button>
            
            <button class="icon-btn wishlist">
              <span class="material-icons">favorite_border</span>
            </button>
          </div>
          
          <div class="product-meta">
            <p><strong>Category:</strong> {{ product.category }}</p>
            <p><strong>SKU:</strong> JW-{{ product.id }}</p>
          </div>
          
          <div class="product-features">
            <div class="feature">
              <span class="material-icons">verified</span>
              <p>100% Authentic Products</p>
            </div>
            <div class="feature">
              <span class="material-icons">local_shipping</span>
              <p>Free Shipping on Orders over ₹10,000</p>
            </div>
            <div class="feature">
              <span class="material-icons">support_agent</span>
              <p>24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="product-details-tabs">
        <div class="tabs">
          <button 
            :class="['tab', activeTab === 'description' ? 'active' : '']" 
            @click="activeTab = 'description'"
          >
            Description
          </button>
          <button 
            :class="['tab', activeTab === 'specifications' ? 'active' : '']" 
            @click="activeTab = 'specifications'"
          >
            Specifications
          </button>
          <button 
            :class="['tab', activeTab === 'reviews' ? 'active' : '']" 
            @click="activeTab = 'reviews'"
          >
            Reviews
          </button>
        </div>
        
        <div class="tab-content">
          <div v-if="activeTab === 'description'" class="tab-pane">
            <p>{{ product.description }}</p>
            <p>Each piece from Urvashi Jewellers is a testament to our commitment to quality and craftsmanship. Our jewelry is designed to be both timeless and contemporary, making it perfect for everyday wear as well as special occasions.</p>
          </div>
          
          <div v-if="activeTab === 'specifications'" class="tab-pane">
            <h3>Product Specifications</h3>
            <ul>
              <li><strong>Material:</strong> 18K Gold</li>
              <li><strong>Gemstone:</strong> Premium Quality</li>
              <li><strong>Weight:</strong> Varies by size</li>
              <li><strong>Dimensions:</strong> Custom sizes available</li>
              <li><strong>Certification:</strong> BIS Hallmark</li>
            </ul>
          </div>
          
          <div v-if="activeTab === 'reviews'" class="tab-pane">
            <h3>Customer Reviews</h3>
            <div class="review">
              <div class="review-header">
                <div class="stars">★★★★★</div>
                <p class="review-author">Priya Sharma</p>
              </div>
              <p class="review-content">"Absolutely beautiful piece! The craftsmanship is exceptional and it's exactly as pictured. Highly recommend!"</p>
            </div>
          </div>
        </div>
      </div>
      
      <section class="related-products">
        <h2>You May Also Like</h2>
        <div class="grid grid-3">
          <!-- Related products will be rendered here -->
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const route = useRoute();
const productId = route.params.id;
const quantity = ref(1);
const activeTab = ref('description');

// Dummy product data (in real app, this would be fetched from API)
const product = ref({
  id: productId,
  name: 'Diamond Necklace',
  category: 'Necklaces',
  price: 45000,
  image: '/images/product-1.jpg',
  description: 'Elegant diamond necklace with 18K gold setting. This stunning piece features hand-selected diamonds totaling 2 carats, set in a classic design that highlights the brilliance of each stone.',
  inStock: true
});

// Methods for quantity buttons
const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// In a real app, you would fetch product data from your API
onMounted(async () => {
  // Simulate API fetch
  // const { data } = await useFetch(`/api/products/${productId}`);
  // product.value = data.value;
});
</script>

<style scoped>
.product-detail-page {
  padding: var(--spacing-lg) 0;
}

.breadcrumbs {
  margin-bottom: var(--spacing-lg);
  font-size: 0.9rem;
}

.breadcrumbs a {
  color: var(--primary);
}

.breadcrumbs span {
  color: var(--text-dark);
}

.product-detail {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.product-gallery {
  overflow: hidden;
}

.main-image {
  height: 500px;
  overflow: hidden;
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius);
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info h1 {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
}

.product-price {
  font-size: 1.5rem;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.product-availability {
  margin-bottom: var(--spacing-md);
}

.status {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 0.9rem;
}

.in-stock {
  background-color: #e8f5e9;
  color: #388e3c;
}

.out-of-stock {
  background-color: #ffebee;
  color: #d32f2f;
}

.product-description {
  margin-bottom: var(--spacing-lg);
}

.product-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.quantity-selector {
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.quantity-selector button {
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: var(--transition);
}

.quantity-selector button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.quantity-selector input {
  width: 50px;
  height: 40px;
  border: none;
  text-align: center;
  font-size: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.add-to-cart {
  flex: 1;
  height: 40px;
}

.add-to-cart:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.wishlist {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: none;
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.wishlist:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--primary);
}

.product-meta {
  padding: var(--spacing-md) 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: var(--spacing-lg);
}

.product-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

.feature {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.feature .material-icons {
  color: var(--primary);
}

.product-details-tabs {
  margin-bottom: var(--spacing-xl);
}

.tabs {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: var(--spacing-lg);
}

.tab {
  padding: var(--spacing-md) var(--spacing-lg);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.tab.active {
  border-bottom-color: var(--primary);
  color: var(--primary);
}

.tab-content {
  padding: var(--spacing-md) 0;
}

.review {
  padding: var(--spacing-md);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-md);
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
}

.stars {
  color: var(--secondary);
}

.related-products h2 {
  margin-bottom: var(--spacing-lg);
}

@media (min-width: 768px) {
  .product-detail {
    grid-template-columns: 1fr 1fr;
  }
  
  .product-features {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 