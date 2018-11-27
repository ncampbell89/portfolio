$(document).ready(function () {

	function doOnOrientationChange() {
	    if(window.orientation == 90) {

	    	if(window.screen.height <= 448) {
//				$('h1').css("font-size", "5em");
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

	    	if (window.screen.width <= 448) { // 448 or less
	    		$('h1').css('font-size', '5.5em');
	    		$('#greeting').css("font-size", "1.5em");
	    		$('.clockGreet').css("margin-top", "54px");
	    	}

	    	if (window.screen.width <= 385) { // 385 or less
	    		$('h1').css('font-size', '4em');
	    		$('#greeting').css("font-size", "1em");
	    		$('.clockGreet').css("margin-top", "54px");
	    	}

	    	if (window.screen.width <= 330) { // 330 or less
	    		$('h1').css('font-size', '4.5em');
	    		$('#greeting').css("font-size", "1em");
	    		$('.logo').css({'width':'80px', 'left':'2.5em', top: '2em'});
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



var x = window.matchMedia("(min-width: 600px)"); 

function onMediaQuery(x) {
    if(x.matches) { // If media query break point it hit
        $('#burger').hide();
		$('#menu').hide();
		$('#cross').hide();
    } else { // less than 600px
		$('#burger').show();
	}
}
x.addListener(onMediaQuery);

});


////***** THE CLOCK *****////
function myTime() {
	const d = new Date();

	var hour = d.getHours();
	var minute = d.getMinutes();
	var second = d.getSeconds();

	if(minute < 10) {
		minute = '0' + minute;
	}
	// if(second < 10) {
	// 	second = '0' + second;
	// }
	var greeting = document.querySelector('#greeting');

	if (hour < 12) {
		if(hour == 0) {
			hour = 12;
		}
//		document.getElementById('background').style("background-image: url(images/morning.jpg)")
		greeting.innerHTML = 'Good Morning!';
	} else if (hour < 18) {
		hour -= 12;
		if(hour == 0) {
			hour = 12;
		}	
		greeting.innerHTML = 'Good Afternoon!';
	} else {
		hour -= 12;
		greeting.innerHTML =  'Good Evening!';
	}
    
    const clock = document.querySelector("#clock");
    clock.innerHTML = `${hour}:${minute}`;
    
}
setInterval(myTime, 1000);





/////****** FOR CONTACT FORM ******/////
function ajaxSubmit() {
	let firstName = document.getElementById('firstName'),
		lastName = document.getElementById('lastName'),
		company = document.getElementById('company'),
		email = document.getElementById('email'),
		phone = document.getElementById('phone'),
		message = document.getElementById('message');

	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {      
		if (xhr.status == 200 && xhr.readyState == 4) { 
            let btn = document.querySelector("#submit");
			btn.innerHTML = xhr.responseText;
            btn.disabled = true;
		} 
	} 
    
	xhr.open('POST', 'formProcessor.php?', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("firstName=" + firstName.value + "&lastName=" + lastName.value + "&company=" + company.value + "&email=" + email.value + "&phone=" + phone.value + "&message=" + message.value);
}

function callValidation() {
    if(grecaptcha.getResponse().length == 0){
        alert('Please click the reCAPTCHA checkbox');
        return false;
    } else {
        return true;
    }   
}

var onloadCallback = function() {
    grecaptcha.render('.g-recaptcha', {
      'sitekey' : '6LcaaXAUAAAAAH710hUTjykuHSFEDOcZDp4ZG47j',
      'success': true,
        // timestamp of the load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
      'timestamp': myTime(),
      'hostname': 'www.campbellsportfolio.com'
    });
};








