const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const userCred = require("../model/loginDB");
const auth = require("../middleware/auth");
const userRegister = require("../model/registerDB");
router.use(express.json());

router.post("/", (req, res) => {
  if (!req.body) {
    res
      .status(400)
      .send({ error: "Email and Password not present in request" });
    return;
  }
  const { email, password } = req.body;

  if (!email) {
    res.status(400).send({ error: "Email not present in request" });
    return;
  }

  if (!password) {
    res.status(400).send({ error: "Password not present in request" });
    return;
  }

  userCred
    .findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(201).send({ error: "No user Found" });
        return;
      }

      const match = bcrypt.compareSync(password, user.password);

      if (!match) {
        res.status(404).send({ error: "Enter valid email or password" });
        return;
      }

      req.session.userId = user.id;
      req.session.username = user.email;
      res.status(200).send({ success: `Hi ${email}` });
    })
    .catch(() => {
      res.status(500).send({ error: "Internal Server Error" });
    });
});

router.delete("/delete", (req, res) => {
  try {
    delete req.session.userId;
    res.status(200).send("Session Ended");
  } catch (error) {
    res.status(500).send({ error: "Unable to delete Session" });
  }
});

router.get("/me", auth.authenticate, (req, res) => {
  userRegister
    .findOne({ email: req.session.username })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch(() => {
      res.status(500).send({ error: "Internal Server Error" });
    });
});

module.exports = router;
