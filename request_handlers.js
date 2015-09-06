
var exec = require('child_process').exec;

function start(response){
	console.log('Request handler --START-- was called');

	exec('ls -lah', function(error, stdout, stderr){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(stdout);
		response.end();
	});
}

function upload(response){
	console.log('Request handle --UPLOAD-- was called');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello Upload guy');
}

exports.start = start;
exports.upload = upload;



