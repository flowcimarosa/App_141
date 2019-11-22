var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRquest(request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('Request for '+pathName+' received.');
    route(handle, pathName, response, request);
  }

  var port = 8000;
  http.createServer(onRquest).listen(port);
  console.log('Server has started. Listening on port: '+port+'...');
}

exports.start = start;
