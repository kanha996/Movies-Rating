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
    const res = await axios.get(
      "http://localhost:3000/api/all"
    );
    fetchMovieList(res.data);
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
