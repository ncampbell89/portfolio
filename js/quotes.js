$(document).ready(function () {
  $('#newQuote').on('click', function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onstatereadychange = function() {
    	for (var i = 0; i < myObj.length; i++) {
    		if (this.readyState == 4 && this.status == 200) {
    			$('#message').innerHTML = this.responseText;
    		}
    	};
    };
    xhttp.open("GET", "http://localhost/Desktop/My_web_portfolio/quotes.txt", true);
    xhttp.send();
  });
});