import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import './clientLoginStyle.css';
import Display from "../display";

const ClientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('https://austin-partnership-back-end.onrender.com/auth/token',
      const response = await axios.post('http://127.0.0.1:8000/auth/token',
       {
        email: email,
        password: password
      });
      if (response && response.data && response.data.access_token) {
        setMessage("Login Successful!");
        setIsLoggedIn(true);
      } else {
        setMessage('Error: Invalid response from server');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        setMessage(error.response.data.detail);
      } else {
        setMessage(error.message);
      }
    }
  };

  return (
    <>
    {isLoggedIn ? (
      <Display />
    ) : (
    <>
      <Navbar />
      <div className="client-login-container">
        <form className='login-form' onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='login-label' htmlFor="email">Email-ID:</label>
            <input
              className='login-input'
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter username or email address"
              required
            />
          </div>

          <div className="form-group">
            <label className='login-label' htmlFor="password">Password:</label>
            <input
              className='login-input'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          
          <button className='login-btn' type="submit">Sign In</button>
          <a className="forgot-password" href="/forgotpassword">Forgot password?</a>
          {message && <p>{message}</p>}
        </form>
      </div>
      <Footer />
    </>
    )}
    </>
  );
};

export default ClientLogin;
