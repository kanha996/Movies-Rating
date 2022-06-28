const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const api = require("./app");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require('cors');
app.use(cors());
const uuid = require("uuid").v4;
const db = require("../server/db");
const username = process.env.ADMIN;
const password = process.env.PASS;
const database = process.env.DB;
require("dotenv").config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4000;

db.connect({ username , password , database })
  .then(() => {
    app.use(
      "/api",
      session({
        genid()  {
          return uuid();
        },
        store: new MongoStore({ client: db.getClient() }),
        secret: "qwertyqwerty12345",
        resave: false,
        saveUninitialized: false,
      }),
      api
    );
  })
  .catch((err) => {
    console.log(`MongoDb connection Unsuccessful ${err}`);
  });

app.listen(PORT, () => {
  console.log(`Connected to : ${PORT}`);
});
