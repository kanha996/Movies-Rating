import React, { useState,  } from "react";
import { Link } from "react-router-dom";
import "../header/header.css";

function Header() {
  const [search, setSearch] = useState([]);
  const[userLogin,setUserLogin] = useState(false);

  return (
    <>
      <div className="header-main">
        <div className="header-title">
            <Link to={'/'}>
            <span className="title-name"> 🎥Movie Review</span>
            </Link>
          
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="search for movies"
            className="search-input"
            onChange={(e)=> setSearch(e.target.value)}
          />
        </div>
        <Link to="/login">
        <div className="login-btn">
        <button className="login-link">{userLogin ? "LOGOUT ": "LOGIN"}</button>
        </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
