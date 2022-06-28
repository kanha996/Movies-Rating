import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../signup-page/sign-up.css"

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const postSignup = async () => {
    try {
      await axios.post("/api/register", {
        email,
        password,
      });
      alert("Account Created")
      navigate('/login');
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="signup-main">
      <div className="signup-wrapper">
        <div className="input">
          <span className="txt">USER - ID</span>
          <input type="text" className="txt-box" />
        </div>
        <div className="input">
          <span className="txt">fullName</span>
          <input type="text" className="txt-box" />
        </div>
        <div className="input">
          <span className="txt">email</span>
          <input
            type="text"
            className="txt-box"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <span className="txt">passWord</span>
          <input
            type="password"
            className="txt-box"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="sign-up-btn" onClick={postSignup}>
          {" "}
          signup{" "}
        </button>
        <Link to="/login">Already Registered!! Click here to login </Link>
        {/* <button className='login'> login </button> */}
      </div>
    </div>
  );
}

export default Signup;
