const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { on } = require("connect-mongo");
dotenv.config();

const connect = (dbObject) => {
  const { username , password , database } = dbObject;

  url = `mongodb+srv://admin:admin1234@cluster0.uaqq7.mongodb.net/userLogin?retryWrites=true&w=majority` ;
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  return mongoose.connect(url,connectionParams);
};

const getClient = () =>{
    return mongoose.connection.getClient();
}

module.exports = {connect,getClient};