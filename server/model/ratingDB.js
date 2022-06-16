const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    
        movieID: String,
        name: String,
        title: String,
        overview: String,
        vote_average: String,
        poster_path: String,
        first_air_date: String,
        release_date: String,
        media_type: String,
        rating: Array
})

module.exports = mongoose.model("rating", ratingSchema);