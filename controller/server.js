var http = require('http');
var dispatcher = require('httpdispatcher');
var fs = require('fs');
var server = http.createServer(handleRequest);
const PORT = 8000;
server.listen(PORT, function(){
  console.log('{1} requested', PORT);
});
function handleRequest(request, response){
  console.log('request handle started');
  try{
    console.log('URL: {1} was requested', request.url);
    dispatcher.dispatch(request, response);
  }
  catch(error){
    console.log('httpdispatcher encountered an error: {1}', error);
  }
  console.log('request handle ended');
}
dispatcher.setStaticDirname('../views');
dispatcher.setStatic('resources');
dispatch.onGet('main', function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('index.html');
})