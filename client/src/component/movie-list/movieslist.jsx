import React, { useEffect, useState } from "react";
import MoveL from "../movie-card/movie";
import "../movie-list/movieslist.css";

function MoviesList({ movieList }) {
  const [search, setSearch] = useState("");
  return (
    <>
    
      <div className="movilist-wrapper">
      <div className="search-box">
          <input
            type="text"
            placeholder="search for movies"
            className="search-input"
            onChange={(e)=> setSearch(e.target.value)}
          />
        </div>
        <div className="movilist">
        {movieList
          .filter((event) => {
            if (
              event["title" || "name"]
                .toLocaleLowerCase()
                .startsWith(search.toLocaleLowerCase())
            ) {
              return event;
            }
          })
          .map((e) => (
            <MoveL
              key={e.id}
              movieid={e.id}
              img={e.poster_path}
              title={e.name || e.title}
              date={e.first_air_date || e.release_date}
              media={e.media_type}
            />
          ))}
        </div>
        
      </div>
    </>
  );
}

export default MoviesList;
