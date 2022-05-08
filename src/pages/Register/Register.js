import React from 'react';
import "./Register.css"

const Register = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
          <div className="loginLeft">
              <h3 className="loginLogo">ConnectSocial</h3>
              <span className="loginDesc">Connect with friends and the world around you on ConnectSocial</span>
          </div>
          <div className="loginRight">
              <div className="loginBox">
                  <input type="email" placeholder='Username' className="loginInput" />
                  <input type="email" placeholder='Email' className="loginInput" />
                  <input type="email" placeholder='Password' className="loginInput" />
                  <input type="password" placeholder='Password Again' className="loginInput" />
                  <button className="loginButton">Sign Up</button>
                  
                  <button className="loginRegisterButton">Log In</button>
                  
              </div>
          </div>
      </div>
    </div>
  )
}

export default Register
