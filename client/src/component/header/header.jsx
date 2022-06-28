import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../header/header.css";
import axios from 'axios';

function Header() {
  const [userLogin, setUserLogin] = useState(false);

  const checkLogin = async () => {
    try{
      await axios.get("https://movierating-io.herokuapp.com/api/session/me");
      setUserLogin(true);
    } catch(error){
      setUserLogin(false);
    }
  };

  useEffect(()=>{
    checkLogin()
  },[]);
  
  return (
    <>
      <div className="header-main">
        <div className="header-title">
          <Link to={"/"}>
            <span className="title-name"> 🎥Movie Review</span>
          </Link>
        </div>

        <Link to="/login">
          <div className="login-btn">
            {/* <button className="login-link">{userLogin ? "LOGOUT ": "LOGIN"}</button> */}
            <span className="login-link">
              {userLogin ? "LOGOUT " : "LOGIN"}
            </span>
            <img
              className="login-icon"
              src="data:image/png;base64,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"
            />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
