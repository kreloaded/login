// create express app
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// set port, listen for requests
const PORT = process.env.PORT || 8080;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
