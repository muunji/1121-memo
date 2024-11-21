const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(request, response){
  if(request.method === "GET") {
    if(request.url === "/") {
      const pathUrl = path.join(__dirname,"../public/index.html");
      const responseData = fs.readFileSync(pathUrl,'utf-8',function(err,data){
        if(err){
          console.error(err);
        }
        return data;
      })
      response.writeHead(200,"utf-8",{"Content-type":"text/html"})
      response.write(responseData);
      response.end();
    }
  }
})

server.listen(3000,function(){
  console.log("http://localhost:3000");
})