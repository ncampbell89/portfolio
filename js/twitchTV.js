$(document).ready(function() {
	// var following = [];
	// Stream info and status api call
	$.ajax({
		type: 'GET',
		url: "https://api.twitch.tv/kraken/streams/freecodecamp",
		headers: {
			'Client-ID': 'pqnxt79n3bxumafxsa83plmihlaqqe'
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
		url: "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
		headers: {
			'Client-ID': 'pqnxt79n3bxumafxsa83plmihlaqqe'
		},
		success: function(data2) {
			for (var i = 0; i < data2.follows.length; i++) {
				//gets display name
				var name = data2.follows[i].channel.display_name;
				var logo = data2.follows[i].channel.logo;
				var status = data2.follows[i].channel.status;

				if (logo == null) {
					logo = "images/do_not.png";
				}

				$("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" + "<a href='https://www.twitch.tv/"+name+"'>" +
					"<img src='"+logo+"' width='70' height='70'>" + "</a>" +
					"</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status +
					"</div></div>");
			}
			streams();
		}
	});

function streams() {
	var followers = $("#followerInfo");
	for(var i = 0; i < followers.length; i++) {
		$.ajax({
			type: 'GET',
			url: 'https://api.twitch.tv/kraken/streams/freecodecamp',
			headers: {
				'Client-ID': 'pqnxt79n3bxumafxsa83plmihlaqqe'
			},
			success: function(data4) {
				$("#followerInfo .row").css({"padding-top": "10px", "padding-bottom": "10px"});

				if (data4.stream === null) /*offline*/ {
					$("#followerInfo .row").css("background-color", "#ff6666");
				} else if (data4.stream !== null) /*online*/ {
					$("#followerInfo .row").css("background-color", "#00cc44");
				}
			},
			error: function(data3) {
				var logo = "images/do_not.png";
				var name = data3.statusText;
				var status = data3.status;

				$("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" + "<a href='https://www.twitch.tv/"+name+"'>" +
					"<img src='"+logo+"' width='70' height='70'>" + "</a>" +
					"</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status +
					"</div></div>");
			}
		});
	}
};


});