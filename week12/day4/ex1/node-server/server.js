const http = require("http");

const user = {
  firstname: "John",
  lastname: "Doe",
};

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(user));
  res.end();
  console.log("I'm listening");
});
server.listen(8080);
