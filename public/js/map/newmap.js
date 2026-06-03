const map = L.map("map").setView([20.5937, 78.9629], 5);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19
}).addTo(map);

let marker;

const searchInput = document.getElementById("locationSearch");

// ========== Helper: place marker on map ==========
function placeMarker(lat, lng) {
    if (marker) map.removeLayer(marker);
    marker = L.marker([lat, lng]).addTo(map);
}

// ========== 1) Search location when user types & presses Enter / blurs ==========
searchInput.addEventListener("change", async () => {
    const query = searchInput.value.trim();
    if (!query) return;

    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
        );
        const data = await response.json();

        if (!data.length) {
            alert("Location not found! You can select a location directly on the map.");
            return;
        }

        const result = data[0];
        const lat = parseFloat(result.lat);
        const lng = parseFloat(result.lon);

        // Move map & place marker
        map.setView([lat, lng], 12);
        placeMarker(lat, lng);

        // Save coordinates in hidden fields
        document.getElementById("lng").value = lng;
        document.getElementById("lat").value = lat;

        // Update the input with the resolved name
        searchInput.value = result.display_name;

    } catch (err) {
        console.error("Geocoding error:", err);
        alert("Something went wrong while searching. You can select a location directly on the map.");
    }
});

// ========== 2) Click on map → place marker & reverse-geocode to fill location ==========
map.on("click", async function (e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    // Place marker immediately
    placeMarker(lat, lng);

    // Save coordinates in hidden fields
    document.getElementById("lng").value = lng;
    document.getElementById("lat").value = lat;

    // Reverse-geocode to get address and fill the location input
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await response.json();

        if (data && data.display_name) {
            searchInput.value = data.display_name;
        } else {
            searchInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
        }
    } catch (err) {
        console.error("Reverse geocoding error:", err);
        // Fallback: show raw coordinates
        searchInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    }
});