$(document).ready(function () {
  $('#newQuote').on('click', function () {

    var xhttp = new XMLHttpRequest();
    var url = "quotes.txt";

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};

xhttp.open("GET", url, true);
xhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += arr[i].quote + arr[i].name;
    }
    document.getElementById("message").innerHTML = out;
    };

  });
});

