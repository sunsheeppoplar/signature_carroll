
var net = require('net'); //***WHY DOES MEIR'S WORK?????****////

var client = net.Socket();
client.connect(8888, function() {
 console.log('Connected to Server');
 // client.write("Hello Server");

 process.stdin.on('data', function(text) {
     var chunk = text;
     //console.log(chunk.toString());
         client.write(chunk);
     
 });

 client.on('data', function(data){
   console.log(data.toString().trim())
 });

 client.on('end', function() {
   console.log('disconnected from server');
 });
});