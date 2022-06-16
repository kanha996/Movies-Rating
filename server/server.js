const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const api = require("./app");
const sessions = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();
const cors = require('cors');
app.use(cors());
const uuid = require("uuid").v4;

const db = require("../server/db");
const url = process.env.MONGO_URL;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4000;

db.connect({ url })
  .then(() => {
    app.use(
      "/api",
      sessions({
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
