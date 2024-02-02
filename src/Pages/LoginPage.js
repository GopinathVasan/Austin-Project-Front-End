import React from 'react';
import { Link } from "react-router-dom";
import "./LoginPageStyles.css";
import Navbar from "../Components/Navbar";

const LoginPage = () => {
    return (
      
      <section className="loginpage-container">
        <Navbar />
        <div>
        <h2>Welcome to Austin Partnership</h2>
        
            <Link to="/Clientlogin" className="loginpage-links">
              User Login
            </Link>
            <Link to="/register" className="loginpage-links">
              Register
            </Link>       
      </div>
      </section>
    );
  };
  
  export default LoginPage;