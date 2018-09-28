$(document).ready(function() {
    $('.keyword').hide();
	$('.x').hide();

	$('#search').click(function() {
		$('.lookup').hide();
		$('.icon').hide();
		$('.keyword').show();
		$('.keyword').val('');
		$('.x').show();
	});

	$('.x').on('click', function() {
		$('.keyword').hide();
		$('.lookup').show();
		$('.icon').show();
		$('#output').html('');
		$('.container').css("margin-top", "120px");
		$(this).hide();
	});
})