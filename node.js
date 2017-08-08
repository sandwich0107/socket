ver https = require('http');

http.createServer(function (req,res){

res.writeHead(200,{'Concent-Type':'text/plain'});

res.end('hello world\n');

}).listen()
