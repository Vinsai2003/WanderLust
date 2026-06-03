const mapDiv = document.getElementById("map");

const coordinates = JSON.parse(mapDiv.dataset.coordinates);
const title = mapDiv.dataset.title;

// MongoDB stores [lng, lat]
const lng = coordinates[0];
const lat = coordinates[1];

const map = L.map("map").setView([lat, lng], 10);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19
}).addTo(map);

const marker = L.marker([lat, lng])
    .addTo(map)
    .bindPopup(title)
    .openPopup();