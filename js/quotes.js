$(document).ready(function() {
    $('#newQuote').on('click', function() {
        $.getJSON("quotes.txt", function(json) {
            $('#message').html(JSON.stringify(json));
        });
    });
});

/*$(document).ready(function () {
  $('#newQuote').on('click', function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onstatereadychange = function() {
    	for (var i = 0; i < myObj.length; i++) {
    		if (this.readyState == 4 && this.status == 200) {
    			$('#message').innerHTML = this.responseText;
    		}
    	};
    };
    xhttp.open("GET", "quotes.xml", true);
    xhttp.send();
  });
});*/

