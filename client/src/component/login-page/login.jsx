import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../login-page/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setVerificationMail] = useState([]);
  const [password, setVerificationWord] = useState([]);

  const loginHandler = async () => {
      await axios
        .post("/api/session", { email, password })
        .then(() => {
          window.alert("LOGIN SUCCESSFULLY");
          // localStorage.setItem("user", "Subho");
          navigate("/");
          // console.log("hii");
        });
  };

  return (
    <div className="login-main">
      <div className="login-wrapper">
        <div className="input">
          <span className="email-txt">E-Mail</span>
          <input
            type="text"
            className="txt-box"
            onChange={(e) => setVerificationMail(e.target.value)}
          />
        </div>
        <div className="input">
          <span className="password-txt">password</span>
          <input
            type="password"
            className="txt-box"
            onChange={(e) => setVerificationWord(e.target.value)}
          />
        </div>
        <div className="signin-wrapper">
          <button type="submit" onClick={loginHandler} className="signin-btn">
            {" "}
            SIGN-IN{" "}
          </button>
        </div>
        <div className="signup-wrapper">
          <Link to="/register">New Member!! Click Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
