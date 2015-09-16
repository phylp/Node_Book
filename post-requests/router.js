function route(handle, pathname, response, postData) {     //unlike blocking example, here we added a response object to pass into function
  console.log('About to route a request for ' + pathname);
  if(typeof handle[pathname] === 'function'){
    return handle[pathname](response, postData);
  } else {
    console.log('No request handler found for ' + pathname);
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('404 Not found. Sorry!');
    response.end();
  }
}

exports.route = route;


//in this example, unlike the blocking i/o case, we have no return value
//Instead we are passing the respond object on. It will go on to the request handler.

