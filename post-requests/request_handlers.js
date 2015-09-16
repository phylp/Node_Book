
var exec = require('child_process').exec;

function start(response, postData){
  var body =                //input for posting 
    '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
}

function upload(response, postData){
  console.log('Request handle --UPLOAD-- was called');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('You sent: ' + postData);
  response.end();
}

exports.start = start;
exports.upload = upload;


//this is for illustrativee purposes only. Normally you will separate view and controller logic. 


