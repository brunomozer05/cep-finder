let lat = -27.5969;
let lng = -48.5495;

const fetchcep = async () => {
  const url = "https://cep.awesomeapi.com.br/json/";
  const inputcep = document.getElementById("cepinput").value;

  const { cep, lat, lng, address, state, district, city } = await fetch(
    url + inputcep
  ).then((adress) => adress.json());

  if (map) {
    map.setView([lat, lng], 13);
    marker.setLatLng([lat, lng]);
  }
  console.log(cep);

  document.getElementById("printCity").innerHTML = `City: ${city} ${state}`;
  document.getElementById("printAddress").innerHTML = `Address: ${address}`;
  document.getElementById("printDistrict").innerHTML = `District: ${district}`;
};

var map = L.map("map").setView([lat, lng], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);

var marker = L.marker([lat, lng]).addTo(map).openPopup();

fetchcep();
