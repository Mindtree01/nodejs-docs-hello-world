var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
 

});

var port = process.env.PORT || 1337;


console.log("Server running at http://localhost:%d", port);
