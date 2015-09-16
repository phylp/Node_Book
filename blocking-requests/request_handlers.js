
var exec = require('child_process').exec;

function start(){
  console.log('Request handler --START-- was called');
  var content = 'empty';

  function sleep(milliSeconds){          //this is basically a simulation of a timeout function
  var startTime = new Date().getTime();
  while(new Date().getTime() < startTime + milliSeconds);
  }

  sleep(8000);                    
  return 'Hello Start';
}



function upload(){
  console.log('Request handle --UPLOAD-- was called');
  return 'Hello Upload';
}


exports.start = start;
exports.upload = upload;

//now when start url is accessed, upload will not be able to be accessed for 8 seconds. 
//This is blocking i/o. Works, but it isn't good.

