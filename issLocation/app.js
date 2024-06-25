
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    
    const {latitude, longitude} = data;

    marker.setLatLng([latitude, longitude]);
    map.setView([latitude, longitude], 2);

    document.getElementById('lat').textContent = latitude.toFixed(2);
    document.getElementById('lon').textContent = longitude.toFixed(2);
    console.log(latitude);
    console.log(longitude);
}
getISS();

setInterval(getISS, 1000);

