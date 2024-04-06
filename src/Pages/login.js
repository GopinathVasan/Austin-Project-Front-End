import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import './clientLoginStyle.css';
import Display from "../display";

const LoginP = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('login');
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

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Requesting password reset for:', forgotPasswordEmail);
    // Simulating OTP generation
    setStep('otp');
  };

  const handleVerifyOTP = () => {
    // Implement your OTP verification logic here
    console.log('Verifying OTP:', otp);
    // Assuming OTP verification is successful
    setStep('resetPassword');
  };

  const handleResetPassword = () => {
    // Implement your reset password logic here
    console.log('Resetting password...');
  };

  return (
    <>
    {isLoggedIn ? (
      <Display />
    ) : (
    <>
      <Navbar />
    <div>
      {step === 'login' && (
        <div className="client-login-container">
        <h1>Login</h1>
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
          <a className="forgot-password" onClick={() => setStep('forgotPassword')}>Forgot password?</a>
          {message && <p>{message}</p>}
        </form>
      </div>
      )}

      {step === 'forgotPassword' && (
        <div className="client-login-container">
            <h1>Forgot Password</h1>
        <form className='login-form'>
          <div className="form-group">
          <label className='login-label' htmlFor="email">Email-ID:</label>
          <input className='login-input' type="email" placeholder="Email" value={forgotPasswordEmail} onChange={(e) => setForgotPasswordEmail(e.target.value)} />
          </div>
          <button className='login-btn' onClick={handleForgotPassword}>Reset Password</button>
          </form>
        </div>
      )}

      {step === 'otp' && (
        <div className="client-login-container">
          <h1>OTP Verification</h1>
          <form className='login-form'>
          <div className="form-group">
          <label className='login-label' htmlFor="email">Enter OTP:</label>
          <input className='login-input' type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          </div>
          <button className='login-btn' onClick={handleVerifyOTP}>Verify OTP</button>
          </form>
        </div>
      )}

      {step === 'resetPassword' && (
        <div className="client-login-container">
          <h1>Reset Password</h1>
          <form className='login-form'>
          <div className="form-group">
            <label className='login-label' htmlFor="password">Password:</label>
            <input className='login-input' type="password" placeholder="New Password" />
            </div>
            <div className="form-group">
            <label className='login-label' htmlFor="password">Confirm Password:</label>
            <input className='login-input' type="password" placeholder="Confirm New Password" />
            </div>
          <button className='login-btn' onClick={handleResetPassword}>Reset Password</button>
          </form>
        </div>
      )}
    </div>
    <Footer />
    </>
    )}
    </>
  );
};
// return (
//     <div>
//       {step === 'login' && (
//         <div>
//           <h1>Login</h1>
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           <button onClick={handleLogin}>Login</button>
//           <p onClick={() => setStep('forgotPassword')}>Forgot Password?</p>
//         </div>
//       )}

//       {step === 'forgotPassword' && (
//         <div>
//           <h1>Forgot Password</h1>
//           <input type="email" placeholder="Email" value={forgotPasswordEmail} onChange={(e) => setForgotPasswordEmail(e.target.value)} />
//           <button onClick={handleForgotPassword}>Reset Password</button>
//         </div>
//       )}

//       {step === 'otp' && (
//         <div>
//           <h1>OTP Verification</h1>
//           <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
//           <button onClick={handleVerifyOTP}>Verify OTP</button>
//         </div>
//       )}

//       {step === 'resetPassword' && (
//         <div>
//           <h1>Reset Password</h1>
//           <input type="password" placeholder="New Password" />
//           <input type="password" placeholder="Confirm New Password" />
//           <button onClick={handleResetPassword}>Reset Password</button>
//         </div>
//       )}
//     </div>
//   );
// };

export default LoginP;
