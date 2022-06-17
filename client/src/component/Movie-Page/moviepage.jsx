import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Movie-Page/moviepage.css";
import RatingList from "../rating-list/ratinglist";
import RatingPage from "../Rating-page/ratingpage";
const axios = require("axios");

function MoviePage() {
  const [reviewsList, setReviewsList] = useState([]);
  const [id, setid] = useState([]);
  const [movieDetail, setMovieDetail] = useState([]);
  const { movieid } = useParams();

  const info = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/review/${movieid}`
      );
      setMovieDetail(res.data);
    } catch (error) {
      window.alert(error);
    }
  };

  const allRating = () => {
    axios
      .get(`http://localhost:3000/api/allratings/${movieid}`)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setReviewsList(data);
      })
      .catch((error) => {
        window.alert(error);
      });
  };
  const currentUser = () =>{
    console.log("fetch");
    axios.get("http://localhost:3000/api/session/me").then((response)=>{
      return response.data;
    }).then((data)=>{
      console.log(data);
    })
  }

  useEffect(() => {
    allRating();
    info();
    currentUser();
  }, []);

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
                {movieDetail.name || movieDetail.title}
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
        <RatingList reviewsList={reviewsList} />
      </div>
    </>
  );
}

export default MoviePage;
