import React, { useState } from "react";
import axios from "axios";
// import SuccessLogin from "./SuccessLogin";
// import Homepage from "../ComponentsPages/HomePage";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import './clientLoginStyle.css';
import Display from "../display";


const ClientLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username: username,
        password: password
      });
      if (response && response.data) {
        setMessage(response.data.message);
        setIsLoggedIn(true); // Set isLoggedIn state to true
      } else {
        setMessage('Error: invalid response from server');
      }
    } catch (error) {
      setMessage(error.message);
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
        {/* <h2>Welcome to Austin Partnership</h2> */}
       
          <form className='login-form' onSubmit={handleSubmit}>
            <div className="form-group">
              <label className='login-label' htmlFor="username">Email-ID:</label>
              <input
                className='login-input'
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            {message && <p>{message}</p>}
          </form>
       
      </div>
      <Footer />
    </>
    )
  }
  </>
  );
};

export default ClientLogin;
