// Client ID = pqnxt79n3bxumafxsa83plmihlaqqe
/* ['restreamio', 'septiess', 'vihart', 'frinlet', 'Dr4xell',
'ExtremeModeration', 'noobs2ninjas', 'eisighul', 'SYNTAG', 'MeteorDev']*/
//https://api.twitch.tv/kraken/channels/freecodecamp?client_id=pqnxt79n3bxumafxsa83plmihlaqqe

$(function() {
	var streams = ['restreamio', 'septiess', 'vihart', 'frinlet', 'Dr4xell', 'ExtremeModeration', 'noobs2ninjas', 'eisighul', 'SYNTAG', 'MeteorDev'];

	$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=pqnxt79n3bxumafxsa83plmihlaqqe').done(function(data){
		//console.log(data);
		if (data.stream === null) {
			$('#status').html('Free Code Camp is offline');
		} else {
			$('#status').html('Free Code Camp is LIVE!');
		}
	});
	// JSON is for the information we get back. Shorthand for the ajax
	// ajax is the request we make

	for (var i = 0; i < streams.length; i++) {
		$.ajax({
			type: 'GET',
			url: 'https://api.twitch.tv/kraken/channels/'+ streams[i],
			headers: {
				'client-ID':'pqnxt79n3bxumafxsa83plmihlaqqe'
			},
			success: function(dataI) {
				//console.log(dataI);
				var name = dataI._links.self.slice(38);
				var logo = dataI.logo;
				var status = dataI.status;

				// dataI.name is from the channels url
				$.getJSON('https://api.twitch.tv/kraken/streams/'+ dataI.name +'?client_id=pqnxt79n3bxumafxsa83plmihlaqqe').done(function(data2){
					//console.log(data2);

					//console.log(name);
					if (data2.stream === null) {
						$('#followerInfo').append("<div class='row'>" + "<div class='col-md-4'>" + "<a href='https://www.twitch.tv/"+name+"'>" +
						"<img src='"+logo+"' width='70' height='70'>" + "</a>" +
						"</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status +
						"</div></div>");
					} else {
						$('#followerInfo').append("<div class='row' style='background-color:#00cc44;'>" + "<div class='col-md-4'>" + "<a href='https://www.twitch.tv/"+name+"'>" +
						"<img src='"+logo+"' width='70' height='70'>" + "</a>" +
						"</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status +
						"</div></div>");
					}
				});

			},
			error: function(err) {
				alert("Error: User not found");
			}
		});
	};
})