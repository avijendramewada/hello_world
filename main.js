// const user={
//     name:"vijendra",
//     email:"vijendra@gmail.com",
//     phoneno:"8517999564"
// }
// console.log("hello",user.name);
// console.log("email:",user.email);
// console.log("number:",user.phoneno)
var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   const user={
    name:"vijendra",
    email:"vijendra@gmail.com",
    phoneno:"8517999564"
}
// console.log("hello",user.name);
// console.log("email:",user.email);
// console.log("number:",user.phoneno)
   // Send the response body as "Hello World"
//    response.end('Hello World\n');
   response.end("hello \n",user.name);
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');