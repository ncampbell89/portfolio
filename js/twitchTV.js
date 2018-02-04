$(document).ready(function() {
	var following = [];
	// Stream info and status api call
	$.ajax({
		type: 'GET',
		url: "https://api.twitch.tv/kraken/streams/freecodecamp",
		headers: {
			'Client-ID': 'pqnxt79n3bxumafxsa83plmihlaqqe'
		},
		success: function(data1) {
			if (data1.stream === null) {
				$("#followerInfo .row").css("background-color", "#ff6666;");
			} else {
				$("#followerInfo .row").css("background-color", "#00cc44");
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
				var displayName = data2.follows[i].channel.display_name;
				var logo = data2.follows[i].channel.logo;
				var status;

				if (logo == null) {
					logo = "images/do_not.png";
				}

				if (status === null) {
					status = "Offline";
				} else {
					status = data2.follows[i].channel.status;
					$("followerInfo .row").addClass("online");
				}

				$("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" + "<a href='https://www.twitch.tv/"+name+"'>" +
					"<img src='"+logo+"' width='70' height='70'>" + "</a>" +
					"</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status +
					"</div></div>");
			}
			//streams();
		}
	});

var deletedFollowers = ['brunofin', 'comster404'];
	for(var i = 0; i < deletedFollowers.length; i++) {
		$.ajax({
			type: 'GET',
			url: 'https://api.twitch.tv/kraken/streams/'+deletedFollowers[i],
			headers: {
				'Client-ID': 'pqnxt79n3bxumafxsa83plmihlaqqe'
			},
			error: function(data3) {
				var logo = "images/do_not.png";
				var displayName = data3.statusText;
				var status = data3.status;
				console.log(data3.statusText);

				$("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" + "<a href='https://www.twitch.tv/"+name+"'>" +
					"<img src='"+logo+"' width='70' height='70'>" + "</a>" +
					"</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status +
					"</div></div>");
			}
		});
	}

});