import React from 'react';
import ClientLogin from '../Pages/ClientLogin.js';
import Footer from '../Components/Footer.js';
import Navbar from '../Components/Navbar.js';

const Login = () => {
  return (
    <div className="Login">
      <Navbar />
      <ClientLogin />
      <Footer />
    </div>
  );
};

export default Login;
