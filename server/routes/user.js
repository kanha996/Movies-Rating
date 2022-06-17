const express = require("express");
const router = express.Router();
router.use(express.json());
const userCredential = require("../model/loginDB");
const userRegister = require("../model/registerDB");

const bcrypt = require("bcryptjs");

//login
router.post("/", (req, res) => {
  if (!req.body) {
    res.status(400).send({ error: "E-mail and Password not present" });
    return;
  }
  const { email, password } = req.body;

  if (!email) {
    res.status(400).send({ error: "Enter Valid Email" });
    return;
  }
  if (!password) {
    res.status(400).send({ error: "Enter Valid Password" });
    return;
  }

  userCredential
    .findOne({ email })
    .then((user) => {
      if (user) {
        res.status(400).send("User Already login");
        return;
      }

      const hash = bcrypt.hashSync(password);

      const cred = new userCredential({
        email: email,
        password: hash,
      });
      cred.save().then(() => {
        const userdb = new userRegister({ _id: cred.id, email });
        userdb.save().then(() => {
          res.status(201).send({ Success: `Account Created ${email}` });
        });
      });
    })
    .catch(() => {
      res.status(500).send("Internal Server error");
    });
});

//session


//signup
// router.post("/register", (req, res) => {
//   const { userid, fullName, email, password } = req.body;

//   userRegister.findOne({ userid: userid }).then((data) => {
//     if (data) {
//       res.status.send("User Already Exists");
//     }
//   });

//   const register = new userCredential({
//     email: email,
//     password: password,
//   });

//   register.save();
// });

module.exports = router;
