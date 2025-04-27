<template>
  <div class="returns-page">
    <section class="hero">
      <div class="container">
        <h1>Returns & Exchanges</h1>
        <p>Our commitment to your satisfaction</p>
      </div>
    </section>
    
    <section class="content">
      <div class="container">
        <h2>Returns Policy</h2>
        <p>We want you to be completely satisfied with your purchase. If you're not happy with your order, we're here to help.</p>
        
        <div class="returns-details">
          <h3>Return Period</h3>
          <p>You have 30 days from the delivery date to return your item(s).</p>
          
          <h3>Conditions</h3>
          <ul>
            <li>Items must be unworn and in original condition</li>
            <li>Original packaging must be intact</li>
            <li>Proof of purchase is required</li>
            <li>Custom-made items are non-returnable</li>
          </ul>
          
          <h3>How to Return</h3>
          <ol>
            <li>Contact our customer service</li>
            <li>Receive a return authorization</li>
            <li>Package your item securely</li>
            <li>Ship to our returns center</li>
          </ol>
          
          <h3>Refund Process</h3>
          <p>Once we receive and inspect your return, we'll process your refund within 5-7 business days.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.returns-page {
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

.returns-details {
  margin-top: var(--spacing-lg);
}

.returns-details h3 {
  margin: var(--spacing-lg) 0 var(--spacing-sm);
}

.returns-details ul,
.returns-details ol {
  margin-left: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.returns-details li {
  margin-bottom: var(--spacing-sm);
}

.returns-details ul {
  list-style: disc;
}

.returns-details ol {
  list-style: decimal;
}
</style> 