import React from "react";
// import axios from 'axios';

function Login() {
  // const loginHandler = async () => {
  //     try{
  //         const res = await axios.post('/api/session').then(()=>{
  //             window.alert("LOGIN SUCCESSFULLY")
  //         })
  //     } catch(error){
  //         alert(error);
  //     }
  // };

  return (
    <div className="login-main">
      <div className="login-wrapper">
        <div className="email-input">
          <span className="email-txt">E-Mail</span>
          <input type="text" className="email-box" />
        </div>
        <div className="password-input">
          <span className="password-txt">password</span>
          <input type="password" className="password-box" />
        </div>
      </div>
    </div>
  );
}

export default Login;
