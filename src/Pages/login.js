import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import './clientLoginStyle.css';
// import Display from "../display";
import { useNavigate } from 'react-router-dom';
import { setToken } from '../utils/auth';

const LoginP = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [forgotPasswordPhonenumber, setForgotPasswordPhonenumber] = useState('');
  const [otp, setOtp] = useState('');
  const [new_Password, setNewPassword] = useState('');
  const [step, setStep] = useState('login');
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // const forgotPasswordAPI = 'http://127.0.0.1:8000/forgot/forgot_password';
  // const verifyOTPAPI = 'http://127.0.0.1:8000/forgot/verify_otp';
  // const resetPasswordAPI = 'http://127.0.0.1:8000/forgot/update_password';

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/auth/token',
        // const response = await axios.post('https://austin-partnership-back-end.onrender.com/auth/token',  
        {
          email: email,
          password: password
        });
        setToken(response.data.access_token);
        navigate('/dashboard');
    } catch (error) {
        console.error('Login failed:', error);
    }
};

  // const handleForgotPassword = async () => {
  //   console.log('Forgot password button clicked');
  //   try {
  //     console.log('Making API call to', forgotPasswordAPI);
  //     const response = await axios.post(forgotPasswordAPI, {
  //       email: forgotPasswordEmail,
  //       phone_number: forgotPasswordPhonenumber
  //     });
  //     console.log('Response from forgot password API:', response.data);
  //     setStep('otp');
  //   } catch (error) {
  //     console.error('Error in forgot password API:', error);
  //   }
  // };


  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/forgot/forgot_password', 
      // const response = await axios.post('https://austin-partnership-back-end.onrender.com/forgot/forgot_password',
        {
        email: forgotPasswordEmail,
        phone_number: forgotPasswordPhonenumber
      });
      console.log('Response from forgot password API:', response.data);
      if (response && response.data && response.data.message === "OTP code sent to your mobile phone") {
        // Assuming the response indicates that OTP code is generated successfully
        setStep('otp');
        setMessage("OTP generated successfully");
      } else {
        // Handle other cases such as server error or user not found
        console.error('Error in forgot password API:', response.data);
        // You may set an error message here if needed
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        setMessage(error.response.data.detail);
      } else {
        setMessage(error.message);
      }
    }
  };



  // const handleVerifyOTP = async () => {
  //   try {
  //     const response = await axios.post(verifyOTPAPI, {
  //       phone_number: forgotPasswordPhonenumber,
  //       otp_code: otp
  //     });
  //     console.log('Response from OTP verification API:', response.data);
  //     setStep('resetPassword');
  //   } catch (error) {
  //     console.error('Error in OTP verification API:', error);
  //   }
  // };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/forgot/verify_otp',
      // const response = await axios.post('https://austin-partnership-back-end.onrender.com/forgot/verify_otp',
        {
        phone_number: forgotPasswordPhonenumber,
        otp_code: otp
      });
      console.log('Response from forgot password API:', response.data);
      if (response && response.data && response.data.message === "OTP code verified successfully") {
        // setMessage("OTP code verified successfully");
        setStep('resetPassword');
        // setIsLoggedIn(true);
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
  

  // const handleResetPassword = async () => {
  //   try {
  //     const response = await axios.post(resetPasswordAPI, {
  //       phone_number: forgotPasswordPhonenumber,
  //       new_password: newPassword
  //     });
  //     console.log('Response from reset password API:', response.data);
  //     // Handle success message or redirection after resetting the password
  //   } catch (error) {
  //     console.error('Error in reset password API:', error);
  //   }
  // };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/forgot/update_password',
      // const response = await axios.post('https://austin-partnership-back-end.onrender.com/forgot/update_password',
        {
        email: forgotPasswordEmail,
        phone_number: forgotPasswordPhonenumber,
        new_password: new_Password // Include new_password in the request body
      });
      console.log('Response from forgot password API:', response.data);
      if (response && response.data && response.data.message === "Password updated successfully") {
        navigate('/clientlogin');
        // setIsLoggedIn(true);
        
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
            <div className="form-group">
              <label className='login-label' htmlFor="phonenumber">Phone Number:</label>
              <input className='login-input' type="tel" placeholder="Phone Number" value={forgotPasswordPhonenumber} onChange={(e) => setForgotPasswordPhonenumber(e.target.value)} />
            </div>
            <button className='login-btn' onClick={handleForgotPassword}>Reset Password</button>
            {message && <p>{message}</p>}
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
            {message && <p>{message}</p>}
          </form>
        </div>
      )}

      {step === 'resetPassword' && (
        <div className="client-login-container">
          <h1>Reset Password</h1>
          <form className='login-form'>
            <div className="form-group">
              <label className='login-label' htmlFor="password">New Password:</label>
              <input className='login-input' type="password" placeholder="New Password" value={new_Password} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label className='login-label' htmlFor="password">Confirm New Password:</label>
              <input className='login-input' type="password" placeholder="Confirm New Password" />
            </div>
            <button className='login-btn' onClick={handleResetPassword}>Reset Password</button>
            {message && <p>{message}</p>}
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

export default LoginP;
