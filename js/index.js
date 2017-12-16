$(document).ready(function() {

	if ($('.sticky-header').length >= 1) {
		$(window).scroll(function() {
			var header = $(document).scrollTop();
			var headerHeight = $('.header-wrapper').height();

			if (header > headerHeight) {
				$('.sticky-header').addClass('sticky');
				$('.sticky-header').fadeIn();
			} else {
				$('.sticky-header').removeClass('sticky');
			}
		});
	}

	if ($('.sm_sticky-header').length >= 1) {
		$(window).scroll(function() {
			var header = $(document).scrollTop();
			var headerHeight = $('.sm_header-wrapper').height();

			if (header > headerHeight) {
				$('.sm_sticky-header').addClass('sm_sticky');
				$('.sm_sticky-header').fadeIn();
			} else {
				$('.sm_sticky-header').removeClass('sm_sticky');
			}
		});
	}

	$('a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

});