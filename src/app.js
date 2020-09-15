const userIp = document.querySelector('.ip-content')
const userIsp = document.querySelector('.isp')
const userLocation = document.querySelector('.location')
const userTimezone = document.querySelector('.timezone')
const button = document.querySelector(".button");

const searchInput = document.getElementById('ip');
const api = "https://geo.ipify.org/api/v1?apiKey=at_nnK6qdFGOiIqA2yT2VPPAfPX641Tp";

let lat = 0;
let lng = 0;

const map = L.map('mapid', { zoomControl: false }).setView([lat, lng], 18);
const myIcon = L.icon({
    iconUrl: '../images/icon-location.svg',
    iconSize: [25, 40],
    iconAnchor: [12.5, 38],
});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const checkRequest = () => {
    const ipRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:.[a-zA-Z]{2,})+$/;
  
    if (searchInput.value && ipRegex.test(searchInput.value)) {
      return {
        type: 'ip',
        value: searchInput.value,
      };
    } else if (searchInput.value && domainRegex.test(searchInput.value)) {
      return {
        type: 'domain',
        value: searchInput.value,
      };
    }
    // return user's ip by default
    return {
      type: 'ip',
      value: '',
    };
  };


// request
async function getData(){
    const response= await fetch(api)
    const data = await response.json();
    searchInput.value = '';
    console.log(data);
    userIp.textContent = data.ip;
    userIsp.textContent = data.isp;
    userLocation.textContent = data.location.city + ", " + data.location.country;
    userTimezone.textContent = "UTC " + data.location.timezone;
    lat = data.location.lat;
    lng = data.location.lng;
    

    L.marker([lat, lng], {icon: myIcon}).addTo(map);
    map.setView([lat, lng]);
}

button.addEventListener('click', event =>{
    event.preventDefault();

    getData();
});

getData();
    




  
  