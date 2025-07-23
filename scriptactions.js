// Example: Spain's plastic ban action
const countryActions = [
  { name: "Spain", action: "Banned single-use plastics (2023)", latlng: [40, -4] },
  { name: "France", action: "Microfiber filter law (2022)", latlng: [46, 2] }
];

function showCountryActions() {
  countryActions.forEach(country => {
    L.marker(country.latlng)
      .addTo(map)
      .bindPopup(`<b>${country.name}</b><br>${country.action}`);
  });
}

document.getElementById('actions-btn').addEventListener('click', showCountryActions);
