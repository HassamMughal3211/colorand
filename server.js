const http = require("http");

const PORT = 8001;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

const server = http.createServer((req, res) => {
   var url = req.url;
   var method = req.method;
   if(url === "/api/v1/colors" && method === "GET"){
       res.writeHead(200, {"Content-type": "application/json","Access-Control-Allow-Origin":"*"})
       var colors = {
           red: getRandomInt(0,256),
           green: getRandomInt(0,256),
           blue:getRandomInt(0,256)
       }
       res.end(
           JSON.stringify({
               status:"success",
               data:{
                   colors,
               }
           })
       );

   }else{
      res.writeHead(404)
      res.end("no data found")
    }
   // res.end("jeeto pakistan");
})

server.listen(PORT,() => {
    console.log(`hosted on ${PORT}`)
})