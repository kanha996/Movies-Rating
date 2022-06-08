import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Movie-Page/moviepage.css";
import RatingList from "../rating-list/ratinglist";
import RatingPage from "../Rating-page/ratingpage";
const axios = require("axios");

function MoviePage() {
  const [id, setid] = useState([]);
  const [movieDetail, setMovieDetail] = useState([]);
  let { movieid } = useParams();

  const info = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=1b6c5548b651ca79c1b54bb8139164dc&language=en-US&query=${movieid}&page=&include_adult=false`
    );
    setMovieDetail(data.results[0]);
  };

  console.log(movieDetail.name);

  useEffect(() => {
    info();
  });

  //

  //   const{rating} = reviewList;

  return (
    <>
      <div className="moviepage-wrapper">
        <div className="header-title">
          <Link to={"/"}>
            <span className="title-name"> 🎥Movie Review</span>
          </Link>
        </div>
        <div className="page-body">
          <div className="movie-poster">
            <img
              className="movie-poster-img"
              src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
              alt="poster"
            />
          </div>
          <div className="movie-details">
            <div className="movie-name">
              <h1 className="movie-name-txt">
                {movieDetail.name || movieDetail.original_title}
              </h1>
            </div>
            <div className="movie-desc">
              <h2 className="movie-desc-txt">{movieDetail.overview}</h2>
            </div>
            <div className="movie-rating">
              <span className="movie-rating-txt">
                Vote Average - {movieDetail.vote_average}⭐️
              </span>
            </div>
            <div className="movie-release">
              <span className="movie-release-txt">
                Release Date - {movieDetail.release_date}
              </span>
            </div>
            <div className="trailer">
              <button type="submit" className="trailer-btn">
                Watch the Trailer on YouTube
              </button>
            </div>
          </div>
        </div>
        <RatingPage id={movieid} />
        {/* <RatingList id={movieDetail.id} /> */}
      </div>
    </>
  );
}

export default MoviePage;
