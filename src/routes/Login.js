import React from 'react';
import LoginPage from '../Pages/LoginPage.js';
import Footer from '../Components/Footer.js';
import Navbar from '../Components/Navbar.js';

const Login = () => {
  return (
    <div className="Login">
       <Navbar /> 
      <LoginPage />
      <Footer />
    </div>
  );
};

export default Login;
