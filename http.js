var http = require("http");

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello World"
    response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');


var fs = require("fs");
// fs is the file system module we will see it later
var data = fs.readFileSync('hello.txt');

console.log(data.toString());


