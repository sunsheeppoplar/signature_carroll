var net = require('net');
var port = 8888;
var rsvp = [];
var date = [];
var topic = [];
var server = net.createServer(function(socket) {
	socket.on('data', function(data) {
		var all = data.toString().trim().split(" ");
		socket.write("Welcome! Check out these commands (all start with "/"): rsvp, whatsup, and /headcount")	


		// to rsvp

		if (all[0] === "/rsvp") {
			rsvp.push(all[1] + " " + all[2] + " " + all[3])
			if (all[2] === undefined || all[3] === undefined) {
				socket.write("Hi! You didn't follow the input format: first name last name email - mind those spaces, please!");
			}
					
		// to see number of people who've rsvp'ed 
	
		}	else if (all[0] === "/headcount") {
				if (rsvp.length === 0) {
					socket.write("No one's coming yet. Are you?")
				}
				else if (rsvp.length === 1) {
					socket.write("Hey! You're the only one! Invite some dev buddies!")
				}
				else if (rsvp.length === 2) {
					socket.write("Two people as of now!")

				} else {
					socket.write("Hey! We can't wait to see you along with " + (rsvp.length - 1) + " other people!")
				};
		
		// to see the date and topic 

		}	else if (all[0] === "/whatsup") {
				if (date === undefined || topic === undefined) {
					socket.write("Looks like we haven't set next meeting's agenda yet!")
				} else { 
					socket.write("On " + date[0] + " we'll be talking about " + topic[0])
				};	

		// to clear the rsvp along with the password

		}	else if (all[0] === "/clear" && all[1] === "/carrollwascatholic") {
				rsvp.length = 0
				socket.write(rsvp)

		// 	set the date and topic with the password

		}	else if (all[0] === "/datetopic" && all[1] === "/decOfInd") {
				date.push(all[2])
				topic.push(all[3])
				socket.write("On " + date[0] + " we'll be talking about " + topic[0])


		// to print list of developers attending with the password
		}	else {
				all[0] === "/print" && all[1] === "/holysee"
				for (var i = 0; i < rsvp.length; i++) {
					socket.write(rsvp[i] + "; ")
				};

		}
	});  

	socket.on('end', function() {
		console.log("client disconnected")
	})
});

	server.listen(port, function() {
		console.log("listening on port " + port)
	});