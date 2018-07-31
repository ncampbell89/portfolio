$(document).ready(function () {

	function doOnOrientationChange() {
	    if(window.orientation == 90) {

	    	if(window.screen.height <= 448) {
				$('h1').css("font-size", "5em");
				$('#greeting').css("font-size", "1.5em");
				$('.clockGreet').css("margin-top", "70px");
			}

			if(window.screen.height <= 385) {
				$('h1').css("font-size", "4.5em");
				$('.logo').css({'width':'105px', 'top':'1.5em', 'left':'3em'});
				$('nav').css({'top':'2.5em', 'right':'2em'});
				$('#buttons').css({'top':'4rem','right':'4rem'});
				$('#greeting').css("font-size", "1.25em");
			}

			if(window.screen.height <= 330) {
	    		$('h1').css('font-size', '4em');
	    		$('#greeting').css("font-size", "1.1em");
	    		$('.logo').css({'width':'90px', 'left':'2.5em'});
	    		$('#buttons').css({'top':'3rem', 'right':'3rem'});
	    		$('.clockGreet').css('margin-top', '30px');
	    	}

	    } else if (window.orientation == 0) {
	    	if (window.screen.width <= 448) {
	    		$('h1').css('font-size', '5.5em');
	    		$('#greeting').css("font-size", "1.5em");
	    		$('.clockGreet').css("margin-top", "54px");
	    	}

	    	if (window.screen.width <= 385) {
	    		$('h1').css('font-size', '5em');
	    		$('#greeting').css("font-size", "1.4em");
	    		$('.clockGreet').css("margin-top", "54px");
	    	}

	    	if(window.screen.width <= 330) {
	    		$('h1').css('font-size', '4em');
	    		$('#greeting').css("font-size", "1.1em");
	    		$('.logo').css({'width':'90px', 'left':'2.5em'});
	    		$('#buttons').css({'top':'3rem', 'right':'3rem'});
	    	}
	    }
    }
 
  window.addEventListener('orientationchange', doOnOrientationChange);
 
  // Initial execution if needed
  doOnOrientationChange();


	$("#cross").hide();
	$("#menu").hide();

	$("#burger").click(function() {
		$("#menu").slideToggle("slow", function() {
			$("#burger").hide();
			$("#cross").show();
		});
	});

	$("#cross").click(function() {
		$("#menu").slideToggle("slow", function() {
			$("#burger").show();
			$("#cross").hide();
		});
	});
});

function myTime() {
	const d = new Date();

	let hour = d.getHours();
	let minute = d.getMinutes();
	let second = d.getSeconds();

	if(minute < 10) {
		minute = '0' + minute;
	}
	// if(second < 10) {
	// 	second = '0' + second;
	// }


	let greeting = document.querySelector('#greeting');

	if (hour < 12) {
		greeting.innerHTML = 'Good Morning!';
		if(hour == 0) {
			hour = 12;
		}
	} else if (hour < 18) {
		hour -= 12;
		greeting.innerHTML = 'Good Afternoon!';
	} else {
		hour -= 12;
		greeting.innerHTML =  'Good Evening!';
	}

	// let colon = ':';
	// colon = colon.fontsize(40);

		if(second % 2 === 0) {
			document.querySelector("#clock").innerHTML = `${hour}&#8202;:&#8202;${minute}`;
		} else {
			document.querySelector("#clock").innerHTML = `${hour}&nbsp;&#8202;${minute}`;
		}
	
	
}
setInterval(myTime, 1000);







