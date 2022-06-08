import React from "react";
import "../rating-card/ratingcard.css";

function RatingCard(props) {
  return (
    <div className="card">
      <img src="https://img.icons8.com/color/48/000000/customer-skin-type-7.png" alt="image people"/>
      <span className="userid">{props.id}</span>
      <p className="comment">{props.comment}</p>
      <button type="submit" className="delete-btn">
        delete
      </button>
    </div>
  );
}

export default RatingCard;
