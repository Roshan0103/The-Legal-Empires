var map = L.map("map").setView([12.988458, 80.253928], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

L.marker([12.988458, 80.253928])
  .addTo(map)
  .bindPopup("Thiruvanmiyur, Chennai")
  .openPopup();

//scroll function
window.addEventListener("scroll", function () {
  const body = document.body;
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 50) {
    // Adjust this value as needed
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
});
