const express = require("express");
const router = express.Router();

const api = require("./routes/user");
const session = require("../server/routes/session");
const rs = require("./routes/review");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/register", api);
router.use("/session", session);
router.use("/review", rs);

module.exports = router;
