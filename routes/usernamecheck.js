const express = require("express");
const router = express.Router();

const { githubCheck } = require("../controllers/usernamecheck");

router.get("/github/:username", githubCheck);

module.exports = router;
