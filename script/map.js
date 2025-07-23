// Initialize map
const map = L.map('map').setView([30, 0], 3);

// Add base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Add fake microplastic data
L.circle([40.7128, -74.0060], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500000
}).addTo(map).bindPopup('New York Microplastic Hotspot');
