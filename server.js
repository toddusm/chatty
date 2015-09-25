var http = require('http');
var server = http.createServer();
server.listen(8888, function() {
	console.log('Listening on port 8888')
});
var messages = [];

server.on('request', function(request, response){
	
	if(request.method === "GET"){
		response.writeHead(200, {
  		'Connection': 'close',
 		 'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
  		'Access-Control-Allow-Methods': 'GET',
  		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
			response.end(JSON.stringify(messages));
	}
	
	if(request.method === 'POST'){
		response.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
		var postData = '';
       	request.on('data', function(chunk) {
           postData += chunk.toString();
        });
        request.on('end', function() {
			messages.push(JSON.parse(postData));
            console.log("Got POST data:");
            console.log(JSON.parse(postData));
			response.end(JSON.stringify(messages));
       });
	}
	
	if(request.method === 'OPTIONS') {
		response.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
		response.end('{}');
	}
	
});