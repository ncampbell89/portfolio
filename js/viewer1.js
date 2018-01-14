$(document).ready(function() {
	$(document).on('keydown', function(e) {
		if (e.which === 13) {
			// Gets search input
			var searchTerm = $('input').val();

			//API URL with search term
			var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

			$.ajax({
				type: "GET",
				url: url,
				async: false,
				dataType: "json",
				success: function(data) {
					//console.log(data);
					// 1. Title
					// 2. Description
					// 3. Link
					$('#output').html('');
					for (var i = 0; i < data[1].length; i++) { 
						$('#output').prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p><hr></li>");
					}
					$('.container').css("margin-top", "0px");
				},
				error: function(errorMessage) {
					alert("Error");
				}
			})
		}
	})
});