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
function updateStationList(data){

    let station_list = document.getElementById("station_list");
    // Clear the station list
    station_list.replaceChildren([]);


    data["stations"].forEach(function(station){
        let element = document.createElement("li");
        element.appendChild(document.createTextNode(getStationText(station)));
        station_list.appendChild(element);
    });
}
getStationList().then(data => updateStationList(data))