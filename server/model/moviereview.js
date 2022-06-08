const mongoose = require('mongoose');

const movieRatingSchema = new mongoose.Schema({
    
        moviename: String,
        rating: [{
            comment: String
        }]
})

module.exports = mongoose.model("movieRating", movieRatingSchema);