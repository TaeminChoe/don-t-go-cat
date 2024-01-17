/**
 * User 관련 API
 */

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ msg: "/user 테스트" });
});

module.exports = router;
