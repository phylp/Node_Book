function start(){
	console.log('Request handler --START-- was called');
}

function upload(){
	console.log('Request handle --UPLOAD-- was called');
}


exports.start = start;
exports.upload = upload;