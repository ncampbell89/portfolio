var container = document.getElementById("message");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/ncampbell89/portfolio/gh-pages/js/quotes.json');
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            renderHTML(data);
        } else {
            console.log("We connected to the server but it returned an error.");
        }
    };
    request.onerror = function() {
        console.log("Connection error");
    };

    request.send();
})

function renderHTML(arr) {
    var out = "";
    
    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        counter++;
        out += "<p>" + arr[i][counter].quote + "<br>" + arr[i][counter].name + "</p>";
    } 

    if (counter > arr.length) {counter = 0};
      
    container.insertAdjacentHTML('beforeend', out);
};

