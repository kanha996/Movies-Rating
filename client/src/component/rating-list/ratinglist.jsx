import React, { useEffect, useState } from 'react';
import RatingCard from '../rating-card/ratingcard';

const axios = require('axios');


function RatingList(props) {

    const [reviewList, setReviewList] = useState([]);

    const allRating =  () => {
        const res = axios.get(
          `http://www.localhost:4000/api/review/${props.id}`
        );

        setReviewList(res.data.rating)

      };

      useEffect(() => {
            allRating();
          },[]);

    
    return ( 
        <div className='rating-list'>
            <h1>REVIEWS</h1>
            {reviewList.map((e)=>(
                <RatingCard key={e.userid} id={e.userid} comment={e.reviewTxt}/>
            ))}
        </div>
     );
}

export default RatingList;