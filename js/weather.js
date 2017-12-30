var container = document.getElementById('local_weather');

var latitude = JSON.coord.lon;
var longitude = JSON.coord.lat;

if (navigator.geolocation) {
	window.onload = function() {
		var currentPosition;
		function getCurrentLocation (position) {
	        currentPosition = position;
	        latitude = currentPosition.coords.latitude;
	        longitude = currentPosition.coords.longitude;
    	}
	}
}

var request = new XMLHttpRequest();
request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat='+latitude+'&lon='+longitude);
request.onload = function() {
	var data = JSON.parse(request.responseText);
	renderHTML(data);
}

function renderHTML(data) {
	var output = "";

	for (var i = 0; i < data.length; i++) {
		output += '<p>' + data[i] + '</p>';
	}

	container.insertAdjacentHTML(output);
}