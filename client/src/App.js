import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/login-page/login";
import Signup from "./component/signup-page/sign-up"
import HomePage from "./home";
import MoviePage from "./component/Movie-Page/moviepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/:movieid" element={<MoviePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
