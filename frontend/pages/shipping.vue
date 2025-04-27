<template>
  <div class="shipping-page">
    <section class="hero">
      <div class="container">
        <h1>Shipping Information</h1>
        <p>Learn about our shipping policies and delivery options</p>
      </div>
    </section>
    
    <section class="content">
      <div class="container">
        <h2>Shipping Policy</h2>
        <p>We offer reliable shipping services to ensure your precious jewelry reaches you safely.</p>
        
        <div class="shipping-details">
          <h3>Delivery Options</h3>
          <ul>
            <li>Standard Shipping (3-5 business days)</li>
            <li>Express Shipping (1-2 business days)</li>
            <li>International Shipping (7-14 business days)</li>
          </ul>
          
          <h3>Shipping Costs</h3>
          <p>Shipping costs are calculated based on your location and chosen delivery method.</p>
          
          <h3>Order Tracking</h3>
          <p>Once your order is shipped, you will receive a tracking number via email.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.shipping-page {
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

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.shipping-details {
  margin-top: var(--spacing-lg);
}

.shipping-details h3 {
  margin: var(--spacing-lg) 0 var(--spacing-sm);
}

.shipping-details ul {
  list-style: disc;
  margin-left: var(--spacing-lg);
}

.shipping-details li {
  margin-bottom: var(--spacing-sm);
}
</style> 