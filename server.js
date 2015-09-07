var http = require('http');
var url = require('url');

function start(route, handle){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' received');
		var postData = '';
		request.setEncoding('utf8');

		request.addListener('data', function(postDataChunk){
			postData += postDataChunk;
			console.log('Received POST data chunk: ' + postDataChunk + '.');  //good for learning, not production code
		});

		request.addListener('end', function(){
			route(handle, pathname, response, postData);
		});
	}
	
	http.createServer(onRequest).listen(8888);
	console.log('Server has begun!');	
}

exports.start = start;

