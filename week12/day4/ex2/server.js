const express = require("express");
const app = express();
app.use(express.static("./public"));

app.get("/home", (req, res) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  console.log(user);
  res.send(user);
});
app.listen(3000);
