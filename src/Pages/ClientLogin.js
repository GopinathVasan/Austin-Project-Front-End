import React, { useState } from 'react';
import './clientLoginStyle.css';
import './LanguageSelection';

const ClientLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add the logic to send the signin data to your backend or handle it as needed
    console.log('Signin data:', { username, password });

    // Optionally, you can reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="client-login-container">
      <h1>Austin Partnership</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Welcome to Austin Partnership Continue To Login</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username or email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
      <div className="Remember me">
        <a href="#">Remember Me</a>
      </div>
      
      <div className="forgot-password">
        <a href="#">Forgot password?</a>
      </div>
       <div className="Contact-Support">
        <a href="#">Contact Technical Support</a>
      </div>
      
    </div>
  );
};

export default ClientLogin;