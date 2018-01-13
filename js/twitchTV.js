$(document).ready(function() {
	var following = [];
	//Stream info and status api call
	var url = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
	$.getJSON(url, function(data1){
		if (data1.stream === null) {
			$("#status").html("Free Code Camp is currently offline.")
		} else {
			$("#status").html("Free Code Camp is currently online.")
		}
	});

	var followerURL = "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels";
	$.getJSON(followerURL, function(data2){
		for (var i=0; i < data2.follows.length; i++) {
			var displayName = data2.follows[i].channel.display_name;
			following.push(displayName);
		}
		following.push('comster404');
		following.push('brunofin');
		following.push('ESL_SC2');

		for (var i=0; i < following.length; i++) {
			var url2 = "https://wind-bow.glitch.me/twitch-api/users/"+following[i]+"/follows/channels";

			$.getJSON(url2).done(function(data3) {
				var logo;
				var status;
				var name;

				if (data3.error) {
					logo = "images/do_not.png";
					name = data3.message;
					status = data3.error;

					$("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" +
						"<img src='"+logo+"' width='70' height='70'>" +
						"</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status +
						"</div></div>" + "<br>");
				}

				if (data3.stream===null) {
					$.getJSON(data3._links.self, function(data5){
						console.log(data5.follows[0].channel.display_name);
					});
				}
			});
		}

		for (var i=0; i < following.length; i++) {
			var onlineURL = "https://wind-bow.glitch.me/twitch-api/users/"+following[i]+"/follows/channels";
			$.getJSON(onlineURL, function(data4) {
				var logo2 = data4.follows[0].channel.logo;

				var status2 = data4.follows[0].channel.status;

				var name2 = data4.follows[0].channel.name;

				$("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" +
						"<img src='"+logo2+"' width='70' height='70'>" +
						"</div>" + "<div class='col-md-4'>" + name2 + "</div>" + "<div class='col-md-4'>" + status2 +
						"</div></div>" + "<br>");
			});
		}
	});
});