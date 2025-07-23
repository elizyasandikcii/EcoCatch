// Initialize map
const map = L.map('map').setView([30, 0], 2);

// Add base layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Microplastic heatmap (example)
function showMicroplastics() {
  // Replace with real Sentinel/EMODnet data
  const fakeData = { lat: 35, lng: -5, value: 0.8 }; // Mock data
  L.circle([fakeData.lat, fakeData.lng], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500000
  }).addTo(map).bindPopup(`Microplastic level: ${fakeData.value}`);
}

// Button event listeners
document.getElementById('microplastic-btn').addEventListener('click', showMicroplastics);
