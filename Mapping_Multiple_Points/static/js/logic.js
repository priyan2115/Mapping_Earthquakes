//add console.log()n to check if it works or not
console.log("working");
//create a map object with a center and zoom level.
let map=L.map('mapid').setView([40.7,-94.5],4);
// Get data from cities.js
let cityData = cities;
//  Add a multiple markers for cities
//Loop through the cities array and create one Marker for each city.
cityData.forEach(function(city){
    console.log(city)
    L.circleMarker(city.location, {
        //we change the color of radius
        color:"orange",
        fillColor:"orange",
        //decreased population no by 200000
        radius: city.population/200000
    })
    .bindPopup("<h2>" + city.city+"," + city.state+"</h2><hr><h3> Population " + city.population.toLocaleString() +"</h3>")
    .addTo(map);
});
//  Add a marker to the map for Los Angeles, California.
//L.circle([34.0522, -118.2437],{
    //color:'black',          
    //fillColor:'#ffffa1',
    //fillOpacity:0.5,
    //radius:300
//}).addTo(map);
//add the tile layer on the map
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);