import { getPlaceId } from '../utils/getPlaceId';

const stores = [
    {
        name: "Urvashi Jewellers - Azad Chowk",
        location: { lat: 26.760447, lng: 83.370169 }
    },
    {
        name: "New Urvashi Jewellers",
        location: { lat: 26.759674, lng: 83.433669 }
    }
];

async function fetchAllPlaceIds() {
    console.log('Fetching Place IDs for stores...\n');

    for (const store of stores) {
        try {
            const result = await getPlaceId(store.name, store.location);
            console.log(`Store: ${store.name}`);
            if (result.error) {
                console.log('Error:', result.error);
            } else {
                console.log('Place ID:', result.placeId);
                console.log('Confirmed Name:', result.name);
                console.log('Formatted Address:', result.formattedAddress);
            }
            console.log('-------------------\n');
        } catch (error) {
            console.error(`Error processing ${store.name}:`, error);
        }
    }
}

// Run the script
fetchAllPlaceIds(); 