//add console.log()n to check if it works or not
console.log("working");
//create a map object with option.
let map=L.map('mapid').setView([37.6214, -122.3790], 5);
//coordinates for each point to be used in the polyline
let line=[
    //[33.9416, -118.4085],
    [37.6213, -122.3790],
    [30.1899, -97.6686],
    [43.6873, -79.621622],
    //[40.7899, -111.9791],
    //[47.4502, -122.3088],
    [40.6413, -73.7781]
];
//create a polyline using the line coordinate and make line red.
L.polyline(line,{
    color:"lime"
}).addTo(map);
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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);