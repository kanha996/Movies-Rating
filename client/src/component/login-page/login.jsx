import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setVerificationMail] = useState([]);
  const [password, setVerificationWord] = useState([]);

  const loginHandler = async () => {
      await axios
        .post("http://localhost:3000/api/session", { email, password })
        .then(() => {
          window.alert("LOGIN SUCCESSFULLY");
          localStorage.setItem("user", "Subho");
          navigate("/");
          console.log("hii");
        });
  };

  return (
    <div className="login-main">
      <div className="login-wrapper">
        <div className="email-input">
          <span className="email-txt">E-Mail</span>
          <input
            type="text"
            className="email-box"
            onChange={(e) => setVerificationMail(e.target.value)}
          />
        </div>
        <div className="password-input">
          <span className="password-txt">password</span>
          <input
            type="password"
            className="password-box"
            onChange={(e) => setVerificationWord(e.target.value)}
          />
        </div>
        <div className="signin-wrapper">
          <button type="submit" onClick={loginHandler}>
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
