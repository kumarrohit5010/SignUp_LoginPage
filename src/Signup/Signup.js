import React, { useEffect } from 'react'
import "./Signup.css";
import setFavicon from '../utils/setFavicon';

export default function SignupForm({ onBack }) {
  useEffect(() => {
    setFavicon('/favicon-signup.svg');
  }, []);
  return (
    <div className="box">
      <form className="form">
        <h2>Sign Up</h2>

        <div className="inputbox">
          <input type="text" name="username" required />
          <span>Username</span>
          <i></i>
        </div>

        <div className="inputbox mt-5">
          <input type="email" name="email" required />
          <span>Email</span>
          <i></i>
        </div>

        <div className="inputbox mt-5">
          <input type="number" name="age" required />
          <span>Age</span>
          <i></i>
        </div>

        <div className="inputbox mt-5">
          <input type="password" name="password" required />
          <span>Password</span>
          <i></i>
        </div>

        <div className="link ">
          <button type="button">Already have an account?</button>
          <button type="button" onClick={() => onBack && onBack()}>Sign In</button>
        </div>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}