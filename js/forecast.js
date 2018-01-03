var w = document.getElementById('forecast');

function myForecast() {
	var latitude = position.coords.latitude
	var longitude = position.coords.longitude

	var request = new XMLHttpRequest();
	request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lon='+longitude+'&lat='+latitude);
	request.onload = function() {
		var data = JSON.parse(request.responseText);
		renderHTML(data);
	}
	request.send(null);
}

function renderHTML(obj) {
	var output = "";
	for (i = 0; i < obj.length; i++) {
		output += "<p>" + obj[i].coord + obj[i].weather[0].icon + "</p>";
	}
	w.insertAdjacentHTML('beforeend', output);
}