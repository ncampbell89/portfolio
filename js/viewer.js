//var $ = this.require('jQuery');

$(document).ready(function () {
    $('.keyword').hide();
	$('.x').hide();
    $('.back').hide();

	$('.lookup').on('click', function () {
		$('.lookup').hide();
		$('.icon').hide();
		$('.keyword').show();
		$('.keyword').val('');
		$('.back').show();
	});
    
    $('.back').on('click', function () {
        $('.lookup').show();
		$('.icon').show();
		$('.keyword').hide();
        $('.back').hide();
        $('#output').hide();
    });
    
	$(document).on('keydown', function (e) {
		if (e.which === 13) {
			// Gets search input
			var searchTerm = $('input').val();

			//API URL with search term
			var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

			$.ajax({
				type: "GET",
				url: url,
				async: false,
				dataType: "json",
				success: function (data) {
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
				error: function () {
					this.alert("Error");
				}
			})
		}
	})
    
});

function goBack() {
    window.history.back();
}