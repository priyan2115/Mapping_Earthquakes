//add console.log()n to check if it works or not
console.log("working");
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);
// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer){
        console.log(layer);
        layer.bindPopup();
    }
}).addTo(map);
//coordinates for each point to be used in the polyline
//  Add a marker to the map 
L.geoJson(sanFranAirport, {
    //we turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log (feature);
      return L.marker(latlng)
      .bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2><hr><h3> Airport Name: " + feature.properties.name + "</h3>")
     }
}).addTo(map);
//L.circle([34.0522, -118.2437],{
    //color:'black',          
    //fillColor:'#ffffa1',
    //fillOpacity:0.5,
    //radius:300
//}).addTo(map);
//add the tile layer on the map
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);