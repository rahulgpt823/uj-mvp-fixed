import { useRuntimeConfig } from '#app';

interface PlaceSearchResult {
    placeId: string;
    name: string;
    formattedAddress: string;
    error?: string;
}

export async function getPlaceId(
    searchQuery: string,
    location: { lat: number; lng: number }
): Promise<PlaceSearchResult> {
    const config = useRuntimeConfig();
    const apiKey = config.public.googleMapsApiKey;

    try {
        // First, use the Places API Text Search to find the place
        const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
            searchQuery
        )}&location=${location.lat},${location.lng}&radius=1000&key=${apiKey}`;

        const response = await fetch(searchUrl);
        const data = await response.json();

        if (data.status === 'OK' && data.results.length > 0) {
            const place = data.results[0];
            return {
                placeId: place.place_id,
                name: place.name,
                formattedAddress: place.formatted_address
            };
        } else {
            return {
                placeId: '',
                name: searchQuery,
                formattedAddress: '',
                error: 'Place not found'
            };
        }
    } catch (error) {
        console.error('Error fetching place ID:', error);
        return {
            placeId: '',
            name: searchQuery,
            formattedAddress: '',
            error: 'Error fetching place ID'
        };
    }
} 