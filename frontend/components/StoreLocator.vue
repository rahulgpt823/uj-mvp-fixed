<template>
  <div class="store-locator">
    <div class="stores-list">
      <h3>Our Stores</h3>
      <div class="store-cards">
        <div 
          v-for="store in stores" 
          :key="store.name"
          class="store-card"
          :class="{ active: selectedStore?.name === store.name }"
          @click="selectStore(store)"
        >
          <div class="store-card-header">
            <h4>{{ store.name }}</h4>
            <a 
              :href="store.mapsUrl" 
              target="_blank" 
              class="maps-link" 
              title="Open in Google Maps"
              @click.stop
            >
              <span class="material-icons">open_in_new</span>
            </a>
          </div>
          <div class="store-card-content" @click="selectStore(store)">
            <p><span class="material-icons">location_on</span> {{ store.address }}</p>
            <p><span class="material-icons">schedule</span> {{ store.hours }}</p>
            <p><span class="material-icons">phone</span> {{ store.phone }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="map-section">
      <div class="search-container">
        <div class="input-group">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Enter your location to get directions"
            @keyup.enter="searchLocation"
          />
          <button @click="searchLocation" class="search-btn">
            <span class="material-icons">search</span>
          </button>
          <button @click="getUserLocation" class="location-btn" title="Use my current location">
            <span class="material-icons">my_location</span>
          </button>
        </div>
      </div>

      <GoogleMap 
        ref="mapRef"
        :center="mapCenter"
        :zoom="11"
        :markers="allMarkers"
      />

      <div v-if="selectedStore && userLocation" class="distance-info">
        <p><span class="material-icons">directions_car</span> Distance to {{ selectedStore.name }}: {{ distance }}</p>
        <button @click="getDirections" class="directions-btn">
          <span class="material-icons">directions</span>
          Get Directions
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'

// Import Google Maps types
type LatLng = google.maps.LatLng
type Geocoder = google.maps.Geocoder
type GeocoderResponse = google.maps.GeocoderResponse
type DistanceMatrixService = google.maps.DistanceMatrixService
type DistanceMatrixResponse = google.maps.DistanceMatrixResponse

interface Store {
  name: string
  position: { lat: number; lng: number }
  address: string
  hours: string
  phone: string
  mapsUrl: string
}

interface Marker {
  position: { lat: number; lng: number }
  title: string
  info: string
}

// Store locations data
const stores: Store[] = [
  {
    name: "Urvashi Jewellers - Azad Chowk",
    position: { lat: 26.731926, lng: 83.370068 },
    address: "310, Rustampur Rd, Mahuesugharpur, Azad Nagar, Gorakhpur, Uttar Pradesh 273016",
    hours: "11:30 AM to 8:00 PM",
    phone: "+91-9415280391",
    mapsUrl: "https://www.google.com/maps/search/Urvashi+Jewellers+-+Azad+Chowk/@26.731926,83.370068,17z"
  },
  {
    name: "New Urvashi Jewellers",
    position: { lat: 26.722278, lng: 83.433515 },
    address: "PCCM+V73, Ranidiha, Khorabar, Gorakhpur, Uttar Pradesh 273010",
    hours: "11:30 AM to 8:00 PM",
    phone: "+91-9621043878",
    mapsUrl: "https://www.google.com/maps/search/New+Urvashi+Jewellers/@26.722278,83.433515,17z"
  }
]

// Calculate the center point between the two stores
const initialCenter = {
  lat: (stores[0].position.lat + stores[1].position.lat) / 2,
  lng: (stores[0].position.lng + stores[1].position.lng) / 2
}

const mapRef = ref<{ $refs: { map: google.maps.Map } } | null>(null)
const searchQuery = ref('')
const userLocation = ref<{ lat: number; lng: number } | null>(null)
const selectedStore = ref<Store>(stores[0])
const distance = ref<string>('')
const mapCenter = ref(initialCenter)

// Combine store markers with user location marker
const allMarkers = computed<Marker[]>(() => {
  const markers = stores.map(store => ({
    position: store.position,
    title: store.name,
    info: `<strong>${store.name}</strong><br>${store.address}`
  }))

  if (userLocation.value) {
    markers.push({
      position: userLocation.value,
      title: 'Your Location',
      info: 'Your Current Location'
    })
  }

  return markers
})

// Select a store
function selectStore(store: Store) {
  selectedStore.value = store
  mapCenter.value = store.position
  if (userLocation.value) {
    calculateDistance()
  }
}

// Get user's current location
async function getUserLocation() {
  try {
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })

    userLocation.value = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }

    await calculateDistance()
  } catch (error) {
    console.error('Error getting location:', error)
    alert('Unable to get your location. Please ensure location services are enabled.')
  }
}

// Search for a location
async function searchLocation() {
  if (!searchQuery.value) return

  try {
    const geocoder = new google.maps.Geocoder() as Geocoder
    const result = await geocoder.geocode({ address: searchQuery.value }) as GeocoderResponse

    if (result.results && result.results[0]) {
      userLocation.value = {
        lat: result.results[0].geometry.location.lat(),
        lng: result.results[0].geometry.location.lng()
      }

      await calculateDistance()
    }
  } catch (error) {
    console.error('Geocoding error:', error)
    alert('Location not found. Please try again.')
  }
}

// Calculate distance between user location and store
async function calculateDistance() {
  if (!userLocation.value || !selectedStore.value) return

  try {
    const service = new google.maps.DistanceMatrixService() as DistanceMatrixService
    const result = await service.getDistanceMatrix({
      origins: [new google.maps.LatLng(userLocation.value.lat, userLocation.value.lng)],
      destinations: [new google.maps.LatLng(selectedStore.value.position.lat, selectedStore.value.position.lng)],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC
    }) as DistanceMatrixResponse

    if (result.rows[0]?.elements[0]?.distance) {
      distance.value = result.rows[0].elements[0].distance.text
    }
  } catch (error) {
    console.error('Distance calculation error:', error)
  }
}

// Open Google Maps directions in a new tab
function getDirections() {
  if (!userLocation.value || !selectedStore.value) return

  const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.value.lat},${userLocation.value.lng}&destination=${selectedStore.value.position.lat},${selectedStore.value.position.lng}`
  window.open(url, '_blank')
}
</script>

<style scoped>
.store-locator {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.stores-list {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stores-list h3 {
  margin-bottom: 1rem;
  color: var(--primary);
}

.store-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.store-card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.store-card:hover {
  border-color: var(--primary);
}

.store-card.active {
  border-color: var(--primary);
  background-color: var(--bg-cream);
}

.store-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.maps-link {
  color: var(--primary);
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
}

.maps-link:hover {
  background-color: var(--bg-cream);
}

.maps-link .material-icons {
  font-size: 20px;
}

.store-card-content {
  cursor: pointer;
}

.store-card h4 {
  margin: 0 0 0.5rem;
  color: var(--primary);
}

.store-card p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.map-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-container {
  width: 100%;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.search-btn,
.location-btn,
.directions-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: var(--primary);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-btn:hover,
.location-btn:hover,
.directions-btn:hover {
  background-color: var(--primary-dark);
}

.distance-info {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.distance-info p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
}

.directions-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .store-locator {
    grid-template-columns: 1fr;
  }
}
</style> 