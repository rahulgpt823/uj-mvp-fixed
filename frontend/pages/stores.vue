<template>
  <div class="stores">
    <section class="stores-hero">
      <div class="container">
        <h1>{{ translations.title }}</h1>
        <p>{{ translations.subtitle }}</p>
      </div>
    </section>

    <section class="stores-content">
      <div class="container">
        <div class="stores-grid stores-grid-full">
          <div class="stores-list">
            <div v-for="store in stores" :key="store.id" class="store-card">
              <div class="store-header">
                <h3>{{ store.name }}</h3>
              </div>
              <div class="store-details">
                <div class="detail-item">
                  <i class="material-icons">location_on</i>
                  <p class="store-address">{{ store.address }}</p>
                </div>
                <div class="detail-item">
                  <i class="material-icons">access_time</i>
                  <p class="store-hours">{{ translations.openingHours }}: {{ store.hours }}</p>
                </div>
                <div class="detail-item">
                  <i class="material-icons">phone</i>
                  <p class="store-phone">{{ translations.phone }}: {{ store.phone }}</p>
                </div>
              </div>
              <div class="store-actions">
                <a :href="`https://www.google.com/maps/place/?q=place_id:${store.placeId}`" 
                   target="_blank" 
                   class="btn btn-primary">
                  <i class="material-icons">location_on</i>
                  {{ translations.viewOnMap }}
                </a>
              </div>
            </div>
          </div>
          
          <!-- Map container commented out until Google Maps API is set up -->
          <!-- <div class="map-container">
            <div id="map" ref="mapRef"></div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from '#imports';
import { useTranslation } from '~/composables/useTranslation';

const { currentLanguage, translate } = useTranslation();

const translations = ref({
  title: 'Our Stores',
  subtitle: 'Visit us at our locations',
  openingHours: 'Opening Hours',
  phone: 'Phone',
  viewOnMap: 'View on Map'
});

const stores = ref([
  {
    id: 1,
    name: "Urvashi Jewellers - Azad Chowk",
    address: "310, Rustampur Rd, Mahuesugharpur, Azad Nagar, Gorakhpur, Uttar Pradesh 273016, India",
    hours: "11:30 AM to 8:00 PM",
    phone: "+91-9415280391",
    location: { lat: 26.760447, lng: 83.370169 },
    placeId: "ChIJEYuMvzRDkTkRYLMri2Y-v4w"
  },
  {
    id: 2,
    name: "New Urvashi Jewellers",
    address: "Ranidiha, PCCM+V73, Divya Nagar, Mahadevapuram Colony, Khorabar, Gorakhpur, Uttar Pradesh 273010, India",
    hours: "11:30 AM to 8:00 PM",
    phone: "+91-9621043878",
    location: { lat: 26.759674, lng: 83.433669 },
    placeId: "ChIJySeHe2ldkTkR72KUNcyFxYY"
  }
]);

async function updateTranslations() {
  if (currentLanguage.value !== 'en') {
    try {
      const [title, subtitle, openingHours, phone, viewOnMap] = await Promise.all([
        translate('Our Stores'),
        translate('Visit us at our locations'),
        translate('Opening Hours'),
        translate('Phone'),
        translate('View on Map')
      ]);

      translations.value = {
        title,
        subtitle,
        openingHours,
        phone,
        viewOnMap
      };
    } catch (error) {
      console.error('Translation failed:', error);
    }
  } else {
    translations.value = {
      title: 'Our Stores',
      subtitle: 'Visit us at our locations',
      openingHours: 'Opening Hours',
      phone: 'Phone',
      viewOnMap: 'View on Map'
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

/* Google Maps functionality commented out until API is set up
const mapRef = ref<HTMLElement | null>(null);
let map: google.maps.Map | null = null;
let markers: google.maps.Marker[] = [];

function initMap() {
  if (!mapRef.value) return;

  const mumbai = { lat: 19.0760, lng: 72.8777 };
  
  map = new google.maps.Map(mapRef.value, {
    zoom: 12,
    center: mumbai,
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });

  stores.value.forEach(store => {
    const marker = new google.maps.Marker({
      position: store.position,
      map: map,
      title: store.name,
      animation: google.maps.Animation.DROP
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div class="info-window">
          <h3>${store.name}</h3>
          <p>${store.address}</p>
          <p>${translations.value.openingHours}: ${store.hours}</p>
          <p>${translations.value.phone}: ${store.phone}</p>
        </div>
      `
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    markers.push(marker);
  });
}

function selectStore(store: any) {
  if (!map) return;
  map.panTo(store.position);
  map.setZoom(15);
  
  const marker = markers.find(m => m.getPosition()?.equals(store.position));
  if (marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(() => marker.setAnimation(null), 1500);
  }
}
*/
</script>

<style scoped>
.stores {
  min-height: 100vh;
}

.stores-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url('https://placehold.co/1920x400') center/cover;
  padding: var(--spacing-xxl) var(--spacing-xl);
  text-align: center;
  color: var(--light);
}

.stores-hero h1 {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.stores-hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.stores-content {
  padding: var(--spacing-xl) 0;
}

.stores-grid {
  display: grid;
  gap: var(--spacing-xl);
}

.stores-grid-full {
  max-width: 800px;
  margin: 0 auto;
}

.stores-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.store-card {
  background: var(--light);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.store-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.store-header {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--spacing-sm);
}

.store-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
}

.detail-item i {
  color: var(--primary);
  font-size: 1.2rem;
}

.store-address,
.store-hours,
.store-phone {
  margin: 0;
  flex: 1;
}

.store-actions {
  margin-top: var(--spacing-sm);
}

.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
}

.btn-primary i {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .stores-hero h1 {
    font-size: 2.5rem;
  }

  .stores-hero p {
    font-size: 1rem;
  }
}

/* Google Maps styles commented out
.map-container {
  height: 600px;
  border-radius: var(--border-radius);
  overflow: hidden;
}

#map {
  width: 100%;
  height: 100%;
}

:deep(.info-window) {
  padding: var(--spacing-sm);
}

:deep(.info-window h3) {
  color: var(--primary);
  margin-bottom: var(--spacing-xs);
  font-size: 1.1rem;
}

:deep(.info-window p) {
  margin-bottom: var(--spacing-xs);
  font-size: 0.9rem;
  color: var(--text);
}
*/
</style> 