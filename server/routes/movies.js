const express = require("express");
const router = express.Router();
const ratingdb = require("../model/ratingDB");
router.use(express.json());

router.get("/all", async (req, res) => {
  const movielist = [];
  try {
    let info = await ratingdb.find();
    for (let i = 0; i < info.length; i++) {
      const {
        movieID,
        name,
        title,
        poster_path,
        first_air_date,
        release_date,
        media_type,
      } = info[i];
      movielist.push({
        id: movieID,
        name: name,
        title: title,
        poster_path: poster_path,
        release_date: release_date,
        first_air_date: first_air_date,
        media_type: media_type,
      });
    }
    res.status(200).json(movielist);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/allratings/:movieid", async (req, res) => {
  try {
    const ratings = await ratingdb.findOne({ movieID: req.params.movieid });
    const { rating } = ratings;
    res.status(200).json(rating);
  } catch (error) {
      res.status(500).json(error);
  }
});

module.exports = router;
