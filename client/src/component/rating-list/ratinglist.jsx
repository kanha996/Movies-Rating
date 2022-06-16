import React, { useEffect, useState } from 'react';
import RatingCard from '../rating-card/ratingcard';



function RatingList({reviewsList}) {
    
    return ( 
        // <div className='rating-list'>
            
        // </div>
        <>
        {reviewsList.map((e,index)=>(
          <RatingCard key={e.index} id={e.userid || "Annoymous"} comment={e.reviewTxt}/>
      ))}</>
        
     );
}

export default RatingList;