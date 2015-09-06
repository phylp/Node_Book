var http = require('http');

function onRequest(request, response){
  console.log('request received from server 2');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World from server 2!');
  response.end();
}

http.createServer(onRequest).listen(8888);
console.log('Server has started');
  
