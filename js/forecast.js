'use strict';
var w = document.getElementById('temperature');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myForecast);
    } else { 
        w.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//function showPosition(position) {
//    w.innerHTML = "Latitude: " + position.coords.latitude + 
//    "<br>Longitude: " + position.coords.longitude; 
//}

function myForecast(position) {
    var latitude = position.coords.latitude,
	 	longitude = position.coords.longitude;
	
	var url = "api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon"+longitude+"&appid=ba896bc9279489205dedeaa091028a55";

	var request = new XMLHttpRequest();
	
	request.onload = function() {
		var data = JSON.parse(request.responseText);
		renderHTML(data);
	}
	request.open('GET', url, true);
	request.send();
}

function renderHTML(obj) {
	var output = "";
	for (i = 0; i < obj.length; i++) {
		output += "<p>" + obj[i].coord + obj[i].weather[0].icon + "</p>";
	}
	w.insertAdjacentHTML('beforeend', output);
}