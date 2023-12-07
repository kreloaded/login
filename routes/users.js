const express = require("express"),
  router = express.Router();

/* POST: login */
router.post("/login", (req, res) => {
  res.json({
    message: "Login called.",
  });
});

/* POST: signup */
router.post("/signup", (req, res) => {
  res.json({
    message: "Signup called.",
  });
});

module.exports = router;
