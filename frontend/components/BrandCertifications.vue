<template>
  <div class="certifications-section">
    <div class="container">
      <div class="certifications-grid">
        <div class="brand-logo">
          <div class="logo-container">
            <img src="/images/uj-logo.png" alt="Urvashi Jewellers Logo" />
            <span class="established">Since 2003</span>
          </div>
        </div>
        <div class="certifications">
          <div class="certification-item">
            <img src="/images/bis-hallmark.svg" alt="BIS Hallmark Certification" />
            <span>BIS Hallmark Certified</span>
          </div>
          <div class="certification-item">
            <img src="/images/gjc-certified.svg" alt="GJC Certification" />
            <span>GJC Certified</span>
          </div>
        </div>
        <div class="trust-badges">
          <div class="badge">
            <span class="material-icons">verified</span>
            <span>100% Certified</span>
          </div>
          <div class="badge">
            <span class="material-icons">diamond</span>
            <span>Premium Quality</span>
          </div>
          <div class="badge">
            <span class="material-icons">security</span>
            <span>Secure Purchase</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.certifications-section {
  background: linear-gradient(to right, var(--bg-cream), var(--light), var(--bg-cream));
  padding: var(--spacing-xl) 0;
  margin: var(--spacing-xl) 0;
}

.certifications-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  justify-items: center;
}

.brand-logo {
  text-align: center;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.brand-logo img {
  max-width: 200px;
  height: auto;
  object-fit: contain;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.brand-logo:hover img {
  transform: scale(1.1);
}

.established {
  font-family: var(--font-heading);
  font-style: italic;
  font-weight: 600;
  color: var(--primary);
  font-size: 1.1rem;
  margin-top: -4px;
  letter-spacing: 0.5px;
}

/* Fix the deep selector syntax */
:deep(.brand-logo .jewelry-elements) {
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
}

:deep(.brand-logo:hover .jewelry-elements) {
  opacity: 1;
}

.certifications {
  display: flex;
  gap: var(--spacing-lg);
  padding: 0 var(--spacing-xl);
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
}

.certification-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  text-align: center;
}

.certification-item img {
  width: 80px;
  height: auto;
  object-fit: contain;
}

.certification-item span {
  font-size: 0.9rem;
  color: var(--text);
  font-weight: 500;
}

.trust-badges {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--primary);
}

.badge .material-icons {
  font-size: 1.5rem;
}

.badge span:last-child {
  font-weight: 500;
}

@media (max-width: 768px) {
  .certifications-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .certifications {
    border: none;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    padding: var(--spacing-lg) 0;
    width: 100%;
    justify-content: center;
  }

  .trust-badges {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .established {
    font-size: 1rem;
    letter-spacing: 0.3px;
  }
}
</style> 