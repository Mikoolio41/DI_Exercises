// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different
// lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/

// Expected Output:
const http = require("http");
// image
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`<h1>This is my first response</h1>
  <h1>This is my second response</h1>
  <p>This is my third response</p>`);
  console.log("I'm listening");
});
server.listen(3000);
// Exercise 2 : HTTP & JSON
// Instructions
// Create a server file, name it - server.js
// In this file, use http to create a server. Send the below Javascript Object to the browser:
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
// Hint : use JSON.
// 3. Your server should run on http://localhost:8080/

// Expected Output:

// image

// Exercise 3 : Express
// Instructions
// Create a server file, name it - serverExpress.js
// Use express to create a server. Return an HTML line of code (Use only HTML tags, no HTML files),
// for requests to the root URL (/).
// Remember to use the GET method for the server route.
// Your server should run on http://localhost:3000/
