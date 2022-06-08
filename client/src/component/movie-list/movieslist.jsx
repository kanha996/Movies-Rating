import React from 'react';
import MoveL from "../movie-card/movie";
import "../movie-list/movieslist.css"

function MoviesList({movieList,search}) {

   

    return ( 
        <div className='movilist'>
            {movieList.map((e)=>(
                
                <MoveL key={e.id} movieid={e.name || e.title} img={e.poster_path}  title={e.name || e.title} date={e.first_air_date || e.release_date} media={e.media_type} />
            ))}
        </div>
     );
}

export default MoviesList;