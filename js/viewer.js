$(document).ready(function() {

$('.keyword').hide();
$('.x').hide();

$('#search').click(function() {
	$('.lookup').hide();
	$('.icon').hide();
	$('.keyword').show();
	$('.x').show();
});

$('.x').on('click', function() {
	$('.keyword').hide();
	$('.lookup').show();
	$('.icon').show();
	$(this).hide();
});

document.addEventListener('keydown', function(e) {
	if (e.which === 13) {
		var request = new XMLHttpRequest();

		request.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2');
		request.onload = function() {
			var data = JSON.parse(request.responseText);
			renderHTML(data);
		};

		request.send();

		function renderHTML(obj) {
			var output = "";

			for (var i = 0; i < obj.length; i++) {
				output += "<p>" + obj[i].query + "</p>";
			}

			search.insertAdjacentHTML('beforeend', output);
		}
	}
});

});