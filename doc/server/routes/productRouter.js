const express = require("express");
const router = express.Router();

// post - {PUBLIC_URL}/token/login
router.get("/", async (req, res) => {
  res.json({ msg: "product  성공" });
});

module.exports = router;
