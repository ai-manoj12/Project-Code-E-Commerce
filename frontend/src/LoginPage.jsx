import React from 'react';
import './LoginPage.css'; // Import the CSS file
//
//
const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="login-title">Create your account</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Phone Number or Email</label>
          <input type="text" id="contact" placeholder="Enter your phone number or email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <div className="form-footer">
          <a href="#" className="trouble-link">Getting Trouble?</a>
        </div>
        <button type="submit" className="create-button">Create</button>
      </form>
    </div>
  );
};

export default LoginPage;
