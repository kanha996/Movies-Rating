const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    
        movieID: String,
        rating: Array
})

module.exports = mongoose.model("rating", ratingSchema);