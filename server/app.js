const express = require("express");
const router = express.Router();

const user = require("./routes/user");
const session = require("../server/routes/session");
const rs = require("./routes/review");
const movie = require('./routes/movies')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/register", user);
router.use("/session", session);
router.use("/review", rs);
router.use('/', movie)

module.exports = router;
