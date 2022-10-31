import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../Movie-Page/moviepage.css";
import RatingCard from "../rating-card/ratingcard";
import RatingList from "../rating-list/ratinglist";
import RatingPage from "../Rating-page/ratingpage";
const axios = require("axios");

function MoviePage() {
  const [reviewsList, setReviewsList] = useState([]);
  const [id, setid] = useState([]);
  const [movieDetail, setMovieDetail] = useState([]);
  const { movieid } = useParams();
  const [postReview, setPostReview] = useState([]);
  // const [delcomment, setDelComment] = useState("");
  const navigate = useNavigate();

  const postReviewList = async () => {
    const movie_id = movieid;
    const comment = postReview;
    try {
      await axios.post("https://movieratingapi.onrender.com/api/review/", { movie_id, comment });
      allRating();
    } catch (error) {
      alert("Session Expired! Please Login to Continue");
      navigate("/login");
    }
  };

  const info = async () => {
    try {
      const res = await axios.get(`https://movieratingapi.onrender.com/api/review/${movieid}/`);
      setMovieDetail(res.data);
    } catch (error) {
      window.alert(error);
    }
  };

  const allRating = () => {
    axios
      .get(`https://movieratingapi.onrender.com/api/allratings/${movieid}/`)
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

  const currentUser = async () => {
    await axios
      .get("https://movieratingapi.onrender.com/api/session/me/")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setid(data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeComment = async () => {
    // const movie_id =  movieid;
    // const userid = id;
    const data = {
      movie_id: movieid,
      userid : id
    }
    try {
      await axios.delete('https://movieratingapi.onrender.com/api/review/',{data});
      allRating()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allRating();
    info();
    currentUser();
  }, []);

  return (
    <>
      <div className="moviepage-wrapper">
        <div className="header-title">
          <Link to={"/"}>
            <span className="title-name"> 🎥Movie Review</span>
          </Link>
          {/* <span className="id-user">{id}</span> */}
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
        <div className="rating-container">
          <div className="rating-wrapper">
            <p className="review-txt">POST A REVIEW </p>
            <textarea
              className="review-box"
              placeholder="Write Your Review"
              onChange={(e) => setPostReview(e.target.value)}
            />
            <button
              type="submit"
              className="review-btn"
              onClick={postReviewList}
            >
              POST
            </button>
          </div>
        </div>

        {reviewsList
          .slice(0)
          .reverse()
          .map((review, index) => (
            // <RatingCard
            //   key={index}
            //   id={review.userid || "Annoymous"}
            //   comment={review.reviewTxt}
            //   userid={review.id}         />
            <div key={index} className="card">
              <img
                src="https://img.icons8.com/color/48/000000/customer-skin-type-7.png"
                alt="people"
                rel="no-refferer"
              />
              <h1 className="userid">{review.userid} </h1>
              <p
                className="comment"
              >
                {review.reviewTxt}
              </p>
              {review.userid === id && (
                <button type="submit" className="delete-btn" onClick={removeComment}>
                  delete
                </button>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default MoviePage;
