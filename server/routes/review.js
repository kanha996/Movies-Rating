const express = require("express");
const router = express.Router();
const axios = require("axios");
const ratingdb = require("../model/ratingDB");
require("dotenv").config();
router.use(express.json());
const movieratingdb = require("../model/moviereview");
const { response } = require("express");
const auth = require("../middleware/auth");
const uuid = require("uuid").v4;

// router.post("/", (req, res) => {
//   function movieAPi() {
//     return axios
//       .get(
//         `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}&page=1`
//       )
//       .then((response) => {
//         return response.data;
//       });
//   }

//   Promise.all([movieAPi()]).then(function (response) {
//     // console.log(response[0].re);
//     for (let i = 0; i < response[0].results.length; i++) {
//       const {
//         id,
//         name,
//         title,
//         poster_path,
//         first_air_date,
//         release_date,
//         media_type,
//         overview,
//         vote_average
//       } = response[0].results[i];
//       let rate = new ratingdb({
//         movieID: id,
//         name: name,
//         title: title,
//         overview: overview,
//         vote_average: vote_average,
//         poster_path: poster_path,
//         first_air_date: first_air_date,
//         release_date: release_date,
//         media_type: media_type,
//       });
//       rate.save();
//     }
//   });
// });

router.get("/:movieid", async (req, res) => {
  try {
    const response = await ratingdb.findOne({ movieID: req.params.movieid });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: "error in fetching" });
  }
});

router.post("/", auth.authenticate, async (req, res) => {
  const { movie_id, comment } = req.body;

  const username = req.session.username;

  const review = {
    userid: username,
    reviewTxt: comment,
  };

  try {
    await ratingdb.findOneAndUpdate(
      { movieID: movie_id },
      { $addToSet: { rating: review } }
    );
    res.status(200).send({ success: "review Added" });
  } catch (error) {
    res.status(500).send(err);
  }
});

router.delete("/", async (req, res) => {
  const { movie_id, userid } = req.body;

  await ratingdb
    .updateMany(
      { movieID: movie_id },
      {
        $pull: { rating: { userid: userid } },
      }
    )
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((err) => {
      res.status(501).send(err);
    });
});

// router.post("/check", auth.authenticate, (req, res) => {
//   const { movie_id } = req.body;
//   const username = req.session.username;

//   ratingdb
//     .find({
//       movieID: movie_id,
//       rating: { $elemMatch: { userid: username } },
//     })
//     .then((data) => {
//       if (data.length > 0) {
//         res.status(200).send();
//       } else if (data.length === 0) {
//         res.status(204).send();
//       }
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

module.exports = router;
