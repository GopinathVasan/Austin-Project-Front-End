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
  const [forgotPasswordPhonenumber, setForgotPasswordPhonenumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState('login');
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const forgotPasswordAPI = 'http://127.0.0.1:8000/forgot/forgot_password';
  const verifyOTPAPI = 'http://127.0.0.1:8000/forgot/verify_otp';
  const resetPasswordAPI = 'http://127.0.0.1:8000/forgot/update_password';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/token', {
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
      const response = await axios.post('http://127.0.0.1:8000/forgot/forgot_password', {
        email: forgotPasswordEmail,
        phone_number: forgotPasswordPhonenumber
      });
      if (response && response.data && response.data.access_token) {
        setMessage("OTP code generated");
        setStep('otp');
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
      const response = await axios.post('http://127.0.0.1:8000/forgot/verify_otp', {
        phone_number: forgotPasswordPhonenumber,
        otp_code: otp
      });
      if (response && response.data && response.data.access_token) {
        setMessage("OTP code verified successfully");
        setStep('resetPassword');
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
      const response = await axios.post('http://127.0.0.1:8000/forgot/update_password', {
        email: forgotPasswordEmail,
        phone_number: forgotPasswordPhonenumber
      });
      if (response && response.data && response.data.access_token) {
        setMessage("Password updated successfully");
        setStep('login');
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
              <label className='login-label' htmlFor="password">New Password:</label>
              <input className='login-input' type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label className='login-label' htmlFor="password">Confirm New Password:</label>
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

export default LoginP;
