import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import SignupForm from '../Signup/Signup';
import setFavicon from '../utils/setFavicon';

export default function LoginForm() {
  const [view, setView] = useState('login');

  useEffect(() => {
    if (view === 'login') setFavicon('/favicon-login.svg');
  }, [view]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log('Login submit', { username: data.get('username') });
  };

  if (view === 'signup') {
    return <SignupForm onBack={() => setView('login')} />;
  }

  return (
    <div className="box" style={{height:"450px"}}>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <div className="inputbox">
          <input type="text" name="username" required />
          <span>Username</span>
          <i></i>
        </div>

        <div className="inputbox mt-5">
          <input type="password" name="password" required />
          <span>Password</span>
          <i></i>
        </div>

        <div className="link">
          <a href="#">Forget Password</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setView('signup'); }}>Sign Up</a>
        </div>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}