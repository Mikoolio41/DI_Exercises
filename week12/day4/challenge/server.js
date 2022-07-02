// Use Express to create a few routes:
// The route /aboutMe/:hobby: displays the name of one hobby (ie. the value of the route parameter).
// If the parameter is not a string (ie. numbers or else), set the status to 404.
// The route /pic : displays an HTML file with a picture of your choice.
// The route /form : displays an HTML file.
// Requirements:
// The HTML file must be in the public folder.
// The HTML file must contain a form to contact you.
// The form must contain the inputs email and message. (add some HTML form validations)
// Output:
// You should get the data and display it on the route /formData.
// For example, “john@gmail.com sent you a message “Love your new website”.

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.get("/aboutMe/:hobby", (req, res) => {
  console.log(req.params);
  if (req.params.hobby == "movies") {
    res.send("yes i love movies");
  } else {
    res.status(404).send("oops");
  }
  res.send();
});
app.get("/pic", (req, res) => {
  res.sendFile("C:/GitHub/DI_Exercises/week12/day4/challenge/public/pic.html");
});
app.get("/form", (req, res) => {
  res.sendFile("C:/GitHub/DI_Exercises/week12/day4/challenge/public/form.html");
});

app.post("/formData", (req, res) => {
  console.log(req.body);
  res.send(`${req.body.email} sent you a message ${req.body.message}`);
});

app.listen(3000);
