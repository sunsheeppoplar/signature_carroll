var net = require('net');
var port = 8888;
// var names = []
// var emails = []
var rsvp = []
var server = net.createServer(function(socket) {
	socket.on('data', function(data) {
		var all = data.toString().trim().split(" ");

		


		// to rsvp

		if (all[0] === "/rsvp") {
			rsvp.push(all[1] + " " + all[2] + " " + all[3])
			if (all[2] === undefined || all[3] === undefined) {
				socket.write("Hi! You didn't follow the input format: first name last name email - mind those spaces, please!")
			}
		
			
		// to see number of people who've rsvp'ed 
	
		}	else if (all[0] === "/headcount") {
			socket.write("Hey! We can't wait to see you along with " + rsvp.length + " people!")
		}





		// to print list of developers attending 
		for (var i = 0; i < rsvp.length; i++) {
				console.log(rsvp[i] + "; ")
			};

		// 





	});  

	socket.on('end', function() {
		console.log("client disconnected")
	})
});

	server.listen(port, function() {
		console.log("listening on port " + port)
	});