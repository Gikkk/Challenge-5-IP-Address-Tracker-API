// map
const map = L.map('mapid', { zoomControl: false }).setView([41.9195, 45.4706], 18);
const ip = document.getElementById("ip");
const apiKey = 'at_nnK6qdFGOiIqA2yT2VPPAfPX641Tp';
const apiUrl = 'https://geo.ipify.org/api/v1?';
const url = apiUrl + 'apiKey=' + apiKey + '&ipAddress=' + ip;

const myIcon = L.icon({
    iconUrl: '../images/icon-location.svg',
    iconSize: [25, 40],
    iconAnchor: [12.5, 38],
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([41.9195, 45.4706], {icon: myIcon}).addTo(map);

request
async function getData(){
    const response= await fetch(url)
    const data = await response.json();
    console.log(data);
}
getData();



  
  