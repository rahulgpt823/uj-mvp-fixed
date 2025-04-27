<template>
  <div>
    <div ref="mapContainer" class="map-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();

interface Props {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{
    position: { lat: number; lng: number };
    title?: string;
    info?: string;
  }>;
}

const props = withDefaults(defineProps<Props>(), {
  center: () => ({ lat: 19.0760, lng: 72.8777 }), // Default to Mumbai
  zoom: 12,
  markers: () => []
});

const mapContainer = ref<HTMLElement | null>(null);
const map = ref<google.maps.Map | null>(null);
const mapMarkers = ref<google.maps.Marker[]>([]);
const infoWindows = ref<google.maps.InfoWindow[]>([]);

onMounted(() => {
  if (!mapContainer.value) return;

  // Initialize the map
  map.value = new google.maps.Map(mapContainer.value, {
    center: props.center,
    zoom: props.zoom,
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });

  // Add markers
  addMarkers();
});

// Watch for changes in markers prop
watch(() => props.markers, () => {
  clearMarkers();
  addMarkers();
}, { deep: true });

function clearMarkers() {
  mapMarkers.value.forEach(marker => marker.setMap(null));
  mapMarkers.value = [];
  infoWindows.value.forEach(window => window.close());
  infoWindows.value = [];
}

function addMarkers() {
  if (!map.value) return;

  props.markers.forEach(markerData => {
    const marker = new google.maps.Marker({
      position: markerData.position,
      map: map.value!,
      title: markerData.title,
      animation: google.maps.Animation.DROP
    });

    if (markerData.info) {
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="info-window">
            <h3>${markerData.title}</h3>
            <p>${markerData.info}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindows.value.forEach(window => window.close());
        infoWindow.open(map.value!, marker);
      });

      infoWindows.value.push(infoWindow);
    }

    mapMarkers.value.push(marker);
  });
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.info-window) {
  padding: 8px;
  max-width: 200px;
}

:deep(.info-window h3) {
  margin: 0 0 8px;
  color: var(--primary);
  font-size: 1.1rem;
}

:deep(.info-window p) {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text);
}
</style> 