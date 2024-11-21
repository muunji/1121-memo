const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
  if(request.method === "GET") {
    if(request.url === "/") {
      response.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})
      response.write();
      response.end();
    }
  }
})

server.listen(3000,function(){
  console.log("http://localhos:3000");
})