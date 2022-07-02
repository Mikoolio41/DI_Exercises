// const { largeNumber } = require("./main");
const http = require("http");
const { dateTime } = require("./main");

// const b = 5;
// const c = b + largeNumber;

// console.log(c);

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.end(`<p>My Module is ${c}</p>
//   <h1>Hi there at the frontend</h1>`);
//   console.log("I'm listening");
// });
// server.listen(3000);

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`<p>The date and time are currently: ${dateTime}</p>`);
});
server.listen(8080);
