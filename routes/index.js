const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.render("index", {
    id: 1,
    title: "Express Application",
    name: "Rodney St. Cloud",
    email: "hoyrod1@aol.com",
  });
});

module.exports = router;
