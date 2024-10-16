var map = L.map("map").setView([12.988458, 80.253928], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

L.marker([12.988458, 80.253928])
  .addTo(map)
  .bindPopup("Thiruvanmiyur, Chennai")
  .openPopup();
