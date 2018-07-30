$(document).ready(function() {
	var url = "https://guarded-shore-81814.herokuapp.com/graphql";

	$.ajax({
		type: "GET",
		url: url,
		async: false,
		dataType: "json",
		success: function(data) {
			$('#statistics').html('');
		},
		error: function(error) {
			alert("error");
		}
	})
});