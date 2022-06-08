import React from 'react';
import { Link } from 'react-router-dom';
import "../movie-card/movie.css"

function MovieCard(props) {
    return ( 
        <>
        <Link to={`/${props.movieid}`}>
        <div className='movie-tile'>
            <img src={`https://image.tmdb.org/t/p/w300${props.img}`} alt='img'/>
            <span className='title-txt'>{props.title}</span>
            <span className='release-txt'>{props.date}</span>
            <span className='media-type'>{props.media}</span>
        </div>
        </Link>
        </>
     );
}

export default MovieCard;