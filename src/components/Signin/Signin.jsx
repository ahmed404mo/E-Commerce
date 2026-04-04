import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './signin.css';
import signin from '../image/login.png';
import {useNavigate} from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" أو "error"
  const Navigate = useNavigate();


  const sendSubmit = (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.(com|org)$/.test(email)) {
      setMessageText(" Email incorrect");
      setMessageType("error");
      return;
    }

    if (password.length < 8) {
      setMessageText(" Password needs at least 8 characters");
      setMessageType("error");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      setMessageText(" Email or Password incorrect");
      setMessageType("error");
      return;
    }

    setMessageText(` Welcome back, ${user.name}!`);
    setMessageType("success");
    setTimeout(() => { 
      Navigate('/cart')
    }, 1000);
  };

  return (
    <>
      {messageText && (
        <div className={`message ${messageType}`}>
          {messageText}
        </div>
      )}

      <div className="contSignIn">
        <div className="img">
          <img src={signin} alt="Login" />
        </div>

        <div className="listSign marginBetween">
          <div>
            <h2>Login</h2>
            <p className='pFont'>Welcome back you've been missed!</p>

            <form onSubmit={sendSubmit} className='listInpt '>
              <label className='font' htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='bord marginBetween'
                type="email"
                placeholder="email"
                required
              />

              <label className='font' htmlFor="">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='bord marginBetween'
                type="password"
                placeholder="Password"
                required
              />

              <button className='loginbtn' type="submit">Login</button>

              <div className="link">
                <p className='changeSpace'>
                  Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
