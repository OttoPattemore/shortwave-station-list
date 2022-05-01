var map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);

async function getStationList(){
    const stations = await fetch("sw.json");
    return stations.json();
}
function getStationText(station){

    // Generate power string
    const iskWStation = station["power"] > 1000;
    const powerUnit = iskWStation ? "kW" : "W";
    const power = iskWStation ? station["power"] / 1000 : station["power"];

    return station["name"] + "\t" + station["frequency"]+"Khz" + "\t" + power + powerUnit;
}
getStationList().then(function(data){
    data["stations"].forEach(function(station){
        const lat = station["location"][0];
        const long = station["location"][1];
        L.marker([lat, long]).addTo(map)
            .bindPopup(getStationText(station));
    });
});