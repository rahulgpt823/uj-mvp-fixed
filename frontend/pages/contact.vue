<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with us or visit our store</p>
      </div>
    </section>
    
    <section class="section contact-section">
      <div class="container">
        <div class="grid grid-2">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions about our collections or services? We're here to help. Reach out to us through any of the methods below or visit our showroom to experience our pieces in person.</p>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">
                  <span class="material-icons">location_on</span>
                </div>
                <div class="contact-text">
                  <h3>Visit Us</h3>
                  <p>123 Jewelry Lane, City Center<br>Your City, State 123456</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <span class="material-icons">phone</span>
                </div>
                <div class="contact-text">
                  <h3>Call Us</h3>
                  <p>+91 1234567890<br>+91 9876543210</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <span class="material-icons">email</span>
                </div>
                <div class="contact-text">
                  <h3>Email Us</h3>
                  <p>info@urvashijewellers.com<br>sales@urvashijewellers.com</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <span class="material-icons">schedule</span>
                </div>
                <div class="contact-text">
                  <h3>Hours</h3>
                  <p>Monday - Saturday: 10:00 AM - 8:00 PM<br>Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h3>Connect With Us</h3>
              <div class="social-icons">
                <a href="#" aria-label="Facebook" class="social-icon">
                  <span class="material-icons">facebook</span>
                </a>
                <a href="#" aria-label="Instagram" class="social-icon">
                  <span class="material-icons">instagram</span>
                </a>
                <a href="#" aria-label="Twitter" class="social-icon">
                  <span class="material-icons">twitter</span>
                </a>
                <a href="#" aria-label="Pinterest" class="social-icon">
                  <span class="material-icons">pinterest</span>
                </a>
              </div>
            </div>
          </div>
          
          <div class="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="formData.name" required />
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="formData.email" required />
              </div>
              
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" v-model="formData.phone" />
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" v-model="formData.subject" required>
                  <option value="">Select a subject</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Custom Order">Custom Order</option>
                  <option value="Appointment Request">Appointment Request</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="formData.message" rows="5" required></textarea>
              </div>
              
              <button type="submit" class="btn btn-block" :disabled="submitting">
                {{ submitting ? 'Sending...' : 'Send Message' }}
              </button>
              
              <div v-if="formMessage" :class="['form-message', formSuccess ? 'success' : 'error']">
                {{ formMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section map-section">
      <div class="map-container">
        <div class="map-placeholder">
          <div class="map-content">
            <span class="material-icons map-icon">location_on</span>
            <h3>Visit Our Store</h3>
            <p>123 Jewelry Lane, City Center<br>Your City, State 123456</p>
            <a href="https://maps.google.com" target="_blank" class="btn btn-outline">Open in Google Maps</a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section faq-section bg-light">
      <div class="container">
        <h2 class="section-title text-center">Frequently Asked Questions</h2>
        <div class="faqs">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <span class="material-icons">{{ activeFaq === index ? 'remove' : 'add' }}</span>
            </div>
            <div class="faq-answer" :class="{ 'active': activeFaq === index }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Form data
const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const submitting = ref(false);
const formMessage = ref('');
const formSuccess = ref(false);

// FAQ data
const faqs = ref([
  {
    question: 'Do you offer customization services?',
    answer: 'Yes, we specialize in creating custom jewelry pieces. Our design team will work closely with you to bring your vision to life. Please contact us to schedule a consultation.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, UPI, net banking, and cash for in-store purchases. For custom orders, we may require a deposit upfront.'
  },
  {
    question: 'Do you offer repairs and resizing?',
    answer: 'Yes, we offer repair and resizing services for all jewelry, including pieces not purchased from us. Please bring your item to our store for an assessment and quote.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 15-day return policy for unused, unworn items in original packaging. Custom orders are non-refundable. Please see our Returns page for more details.'
  }
]);

const activeFaq = ref<number | null>(null);

// Methods
const submitForm = async () => {
  submitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success response
    formMessage.value = 'Thank you for your message. We will get back to you shortly!';
    formSuccess.value = true;
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  } catch (error) {
    // Error handling
    formMessage.value = 'There was an error sending your message. Please try again later.';
    formSuccess.value = false;
  } finally {
    submitting.value = false;
    
    // Clear message after some time
    setTimeout(() => {
      formMessage.value = '';
    }, 5000);
  }
};

const toggleFaq = (index: number): void => {
  activeFaq.value = activeFaq.value === index ? null : index;
};
</script>

<style scoped>
.contact-hero {
  background-color: var(--bg-cream);
  padding: var(--spacing-xl) 0;
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.contact-hero h1 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
}

.contact-hero p {
  font-size: 1.1rem;
}

.contact-section {
  margin-bottom: var(--spacing-xl);
}

.contact-info {
  padding-right: var(--spacing-lg);
}

.contact-info h2 {
  margin-bottom: var(--spacing-md);
}

.contact-details {
  margin-top: var(--spacing-lg);
}

.contact-item {
  display: flex;
  margin-bottom: var(--spacing-lg);
}

.contact-icon {
  margin-right: var(--spacing-md);
}

.contact-icon .material-icons {
  font-size: 2rem;
  color: var(--primary);
}

.contact-text h3 {
  margin-bottom: var(--spacing-xs);
  font-size: 1.2rem;
}

.contact-text p {
  margin-bottom: 0;
  line-height: 1.5;
}

.social-links {
  margin-top: var(--spacing-lg);
}

.social-icons {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--bg-cream);
  color: var(--primary);
  transition: var(--transition);
}

.social-icon:hover {
  background-color: var(--primary);
  color: var(--light);
}

.contact-form-wrapper {
  background-color: var(--light);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.contact-form-wrapper h2 {
  margin-bottom: var(--spacing-lg);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  font-size: 1rem;
  background-color: var(--light);
}

.form-group textarea {
  resize: vertical;
}

.btn-block {
  width: 100%;
}

.form-message {
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm);
  border-radius: var(--border-radius);
  text-align: center;
}

.form-message.success {
  background-color: #e8f5e9;
  color: #388e3c;
}

.form-message.error {
  background-color: #ffebee;
  color: #d32f2f;
}

.map-section {
  padding: 0;
}

.map-container {
  width: 100%;
}

.map-placeholder {
  background-color: var(--bg-cream);
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.map-content {
  padding: var(--spacing-xl);
}

.map-icon {
  font-size: 48px;
  color: var(--primary);
  margin-bottom: var(--spacing-md);
}

.map-content h3 {
  margin-bottom: var(--spacing-sm);
}

.map-content p {
  margin-bottom: var(--spacing-md);
}

.faq-section {
  padding: var(--spacing-xl) 0;
}

.faqs {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: var(--spacing-md);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  background-color: var(--light);
  cursor: pointer;
  transition: var(--transition);
}

.faq-question:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.faq-question h3 {
  margin: 0;
  font-size: 1.1rem;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  padding: 0 var(--spacing-md);
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-answer.active {
  max-height: 500px;
  padding: var(--spacing-md);
  padding-top: 0;
}

.faq-answer p {
  margin: 0;
}

@media (max-width: 768px) {
  .contact-info {
    padding-right: 0;
    margin-bottom: var(--spacing-xl);
  }
  
  .contact-item {
    align-items: flex-start;
  }
  
  .map-container {
    height: 300px;
  }
}
</style> 