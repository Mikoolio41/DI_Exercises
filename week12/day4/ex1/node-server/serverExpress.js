const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.write(`<h1>This is my first response</h1>
  <h1>This is my second response</h1>
  <p>This is my third response</p>`);
});
app.listen(3000);
