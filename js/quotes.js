var container = document.getElementById("message");
var btn = document.getElementById("newQuote");

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
    
    for (i = 0; i < arr.length; i++) {
        out += "<p>" + arr[i].quote + "<br>" + arr[i].name + "</p>";
    }   
    container.insertAdjacentHTML('beforeend', htmlString);
};

