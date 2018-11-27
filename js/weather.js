//API Key OpenWeather: ba896bc9279489205dedeaa091028a55
//API Key WWO: fdaad029be70473d8eb222213181611

var output = document.getElementById("weather");
var obj = {};
var tempStr = '';

function success(pos) {
    let crd = pos.coords; // gets the coordinates of the current location
    
    let url = `https://api.openweathermap.org/data/2.5/find?lat=${crd.latitude}&lon=${crd.longitude}&cnt=1&APPID=ba896bc9279489205dedeaa091028a55`;

    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        obj = JSON.parse(xhr.responseText);
        renderTemp();
    }
    xhr.open('GET', url, true)
    xhr.send()
//    navigator.sendBeacon(url, obj);
}
//window.addEventListener("unload", success, false);

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function renderTemp() {
    let temp = obj.list; // the array list of the weather conditions
    console.log(obj)
    console.log(temp)
    
    for(let i = 0; i < temp.length; i++) {
        let location = temp[i].name;
        
        let icon = temp[i].weather[0].icon;
        let iconURL = `https://openweathermap.org/img/w/${icon}.png`;
        
        // converts temperature from Kelvin to Fahrenheit
        let degrees = ((temp[i].main['temp'] - 273.15) * 9/5 + 32).toFixed(0);      
        let degreesLow = ((temp[i].main['temp_min'] - 273.15) * 9/5 + 32).toFixed(0);       
        let degreesHigh = ((temp[i].main['temp_max'] - 273.15) * 9/5 + 32).toFixed(0);
        
//        console.log(temp[i].main['temp_min'])
//        console.log(temp[i].main['temp_max'])
        
        output.innerHTML = `${location}<br><img src='${iconURL}'>&nbsp;<span style='position: relative; bottom: 18px'>${degrees}&deg;&thinsp;<sup><span id='fahrenheit' onclick='fahrenheit()' style='color:orange; cursor:pointer'>F</span> | <span id='celsius' onclick='celsius()' style='color:white; cursor:pointer'>C</span></sup><br><span id='highLow' style='font-size:18px'>L:&nbsp;${degreesLow}&deg;&ensp;H:&nbsp;${degreesHigh}&deg;</span></span>`;  
    }
}

function celsius() {
    let temp = obj.list;
    let location = temp[0].name;
    
    let icon = temp[0].weather[0].icon;
    let iconURL = `https://openweathermap.org/img/w/${icon}.png`;
    
    let degrees = (temp[0].main['temp'] - 273.15).toFixed(0);
    let degreesLow = (temp[0].main['temp_min'] - 273.15).toFixed(0);
    let degreesHigh = (temp[0].main['temp_max'] - 273.15).toFixed(0);
    
    output.innerHTML = `${location}<br><img src='${iconURL}'>&nbsp;<span style='position: relative; bottom: 18px'>${degrees}&deg;&thinsp;<sup><span id='fahrenheit' onclick='fahrenheit()' style='color:white; cursor:pointer'>F</span> | <span id='celsius' onclick='celsius()' style='color:orange; cursor:pointer'>C</span></sup><br><span id='highLow' style='font-size:18px'>L:&nbsp;${degreesLow}&deg;&ensp;H:&nbsp;${degreesHigh}&deg;</span></span>`;
}

function fahrenheit() {
    let temp = obj.list;
    let location = temp[0].name;
    
    let icon = temp[0].weather[0].icon;
    let iconURL = `https://openweathermap.org/img/w/${icon}.png`;

    let degrees = ((temp[0].main['temp'] - 273.15) * 9/5 + 32).toFixed(0);
    let degreesLow = ((temp[0].main['temp_min'] - 273.15) * 9/5 + 32).toFixed(0);       
    let degreesHigh = ((temp[0].main['temp_max'] - 273.15) * 9/5 + 32).toFixed(0);
    
    output.innerHTML = `${location}<br><img src='${iconURL}'>&nbsp;<span style='position: relative; bottom: 18px'>${degrees}&deg;&thinsp;<sup><span id='fahrenheit' onclick='fahrenheit()' style='color:orange; cursor:pointer'>F</span> | <span id='celsius' onclick='celsius()' style='color:white; cursor:pointer'>C</span></sup><br><span id='highLow' style='font-size:18px'>L:&nbsp;${degreesLow}&deg;&ensp;H:&nbsp;${degreesHigh}&deg;</span></span>`;
}

// This renders out the functions success and error for the geolocation method
navigator.geolocation.getCurrentPosition(success, error);
