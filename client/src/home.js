import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import MoviesList from "./component/movie-list/movieslist";
import MoviePage from "./component/Movie-Page/moviepage";
import RatingList from "./component/rating-list/ratinglist";

function HomePage() {
  const [ movieList, fetchMovieList ] = useState([]);

  const fetchList = async () => {
    const {data} = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=1b6c5548b651ca79c1b54bb8139164dc&page=3"
    );
    fetchMovieList(data.results);
  };

  useEffect(() => {
    fetchList();
  },[]);

  return (
    <>
      <Header />
      <MoviesList movieList={movieList} />
      <Footer/>
      {/* <MoviesList movieList={movieList} /> */}
      {/* <MoviePage/>
      <RatingList reviewList={movieList}/> */}
    </>
  );
}

export default HomePage;
