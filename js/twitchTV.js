$(document).ready(function() {
	// var following = [];
	// Stream info and status api call
	$.ajax({
		type: 'GET',
		url: "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp",
		headers: {
			'Client-ID': 'wsbuj09kwsrey6ok93h1dkgvryqco8'
		},
		success: function(data1) {
			if (data1.stream === null) {
				$("#status").html("Free Code Camp is currently OFFLINE.");
			} else {
				$("#status").html("Free Code Camp is currently LIVE.");
			}
		}
	});

	$.ajax({
		type: 'GET',
		url: "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels",
		headers: {
			'Client-ID': 'wsbuj09kwsrey6ok93h1dkgvryqco8'
		},
		success: function(data2) {
			for (var i = 0; i < data2.follows.length; i++) {
				//gets display name
				var name = data2.follows[i].channel.display_name;
				var logo = data2.follows[i].channel.logo;
				var status = data2.follows[i].channel.status;
				var link = "https://www.twitch.tv/"+name;

				if (logo == null) {
					logo = "images/do_not.png";
				}

				$("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" +
					"<a href='"+link+"'>"+ "<img src='"+logo+"' width='70' height='70'>" + "</a>" +
					"</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status +
					"</div></div>" + "<br>");
			}
		}
	});

	var deletedFollowers = ['brunofin', 'comster404'];
	for (var i = 0; i < deletedFollowers.length; i++) {
		$.ajax({
			type: 'GET',
			url: 'https://wind-bow.glitch.me/twitch-api/streams/'+deletedFollowers[i],
			header: {
				'Client-ID': 'wsbuj09kwsrey6ok93h1dkgvryqco8'
			},
			error: function(data3) {
				var logo = "images/do_not.png";
				var name = data3.statusText;
				var status = data3.status;
				var link = "https://www.twitch.tv/"+name;

				$("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" +
					"<a href='"+link+"'>"+ "<img src='"+logo+"' width='70' height='70'>" + "</a>" +
					"</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status +
					"</div></div>" + "<br>");
			}
		});
	}

});