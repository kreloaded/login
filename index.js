// create express app
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  PORT = process.env.PORT || 8080;

const rootPrefix = ".",
  userRoutes = require(rootPrefix + "/routes/users");

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Users routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
