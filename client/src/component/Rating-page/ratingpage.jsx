import React, { useState } from "react";
import "../Rating-page/ratingpage.css"
const axios = require('axios');

function RatingPage(props) {
    const{movie} = props.id;
    const[postReview,setPostReview] = useState([]);

    


    const postReviewList = async () =>{
        const data = {
            movieid : movie,
            reviewTxt: postReview
        }
        await axios.put('http://localhost:4000/api/review/',data);
    } 
  return (
    <>
      <div className="rating-container">
          <div className="rating-wrapper">
              <p className="review-txt">POST A REVIEW </p>
              <textarea className="review-box" placeholder="Write Your Review" onChange={(e)=> setPostReview(e.target.value)}/>
              <button type="submit" className="review-btn" onClick={postReviewList}>POST</button>
          </div>
      </div>
    </>
  );
}

export default RatingPage;
