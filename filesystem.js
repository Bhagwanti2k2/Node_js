const fs=require('fs');
const http=require('http');
http.createServer((req, resp)=>
{
fs.readFile("calculator.html" , 'utf-8' , (err, data)=>
{
  if(err)
  {
   console.log("Error in reading file", err);
   return;
  }
  resp.writeHead(200, {'content-Type':'text/html'});
  resp.write(data);
})
}).listen(8080);