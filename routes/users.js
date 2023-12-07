const express = require("express"),
  router = express.Router();

const rootPrefix = "..",
  routeHelper = require(rootPrefix + "/routes/helper");

/* POST: login */
router.post("/login", (req, res) => {
  res.json({
    message: "Login called.",
  });
});

/* POST: signup */
router.post("/signup", (req, res) => {
  const onServiceSuccessCallback = function (serviceResponse) {
    console.log("Service success callback called.");
    console.log(serviceResponse);
  };

  return Promise.resolve(
    new routeHelper({
      req: req,
      res: res,
      servicePath: "/app/services/users/Signup",
      serviceSuccessCallback: onServiceSuccessCallback,
    }).perform()
  );
});

module.exports = router;
