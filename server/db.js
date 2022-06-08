const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { on } = require("connect-mongo");
dotenv.config();

const connect = (dbObject) => {
  const { url } = dbObject;

  mongourl = `${url}`;
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  return mongoose.connect(mongourl,connectionParams);
};

const getClient = () =>{
    return mongoose.connection.getClient();
}

module.exports = {connect,getClient};