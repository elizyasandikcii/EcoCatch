// Initialize map WITH VIEWPORT SET
const map = L.map('map').setView([30, 0], 3); // Added zoom level 3

// Add tile layer with CORRECT URL FORMAT
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Test marker to verify map works
L.marker([30, 0]).addTo(map)
  .bindPopup("Map is working!")
  .openPopup();

// Microplastics button - TEST FUNCTION
document.getElementById('microplastic-btn').addEventListener('click', function() {
  alert("Microplastics button works!");
  // Your actual microplastics logic will go here
});
