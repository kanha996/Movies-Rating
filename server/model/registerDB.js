const mongoose = require('mongoose');

const signup = new mongoose.Schema({
    UserId: {type: String},
    fullName:{type: String},
    email: {type:String, required: true, unique: true},
    password: String,

})

module.exports = mongoose.model("registerDB",signup)