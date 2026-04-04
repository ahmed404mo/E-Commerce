import React, { use } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import signup from '../image/logup.png'
import './Signup.css'

function Signup() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const [messageText, setMessageText] = useState('');
  const [messageType, setMessageType] = useState(''); 

  const  Navigate = useNavigate();

  

  const clickSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // if (existingUsers.some(user => user.email === email)) {
      
    // }
    const userData = { name, email, password };
    
    const existingUser = JSON.parse(localStorage.getItem('users')) || [];
    const EmailExists = existingUser.some(user => user.email === email)
    if (EmailExists) {
      setMessageText('Email already exists. Please use a different email.');
      setMessageType('error');
        setTimeout(() => { 
        Navigate('/signin')
      }, 1000);
      return;
    }
    existingUsers.push(userData);
    const newUser = { name, email, password };    
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    setMessageText('Signup successful! Please sign in.');
    setMessageType('success');
      setTimeout(() => {
      Navigate('/signin')
    }, 1000);
    return
  } 
  return (
    <>
      {messageText && (
        
      <div className={`message ${messageType}`} >
        <div className={`howUser `}>
          {messageText}
        </div>
      </div>
      )}
      <div className="contSignIn">
        <div className="listSign marginBetween">
          <div>
        <h2>Sign Up</h2>
        <p className='pFont'>Welcome back you've been missed!</p>
        <form onSubmit={clickSubmit} className='listInpt '>
              <label  className='font'  htmlFor="">Full Name</label>
          <input onChange={(e)=>setName(e.target.value)} className='marginBetween bord' type="text" placeholder="user name" required />
              <label className='font'  htmlFor="">Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} className='marginBetween bord' type="email" placeholder="email" required />
              <label className='font' htmlFor="">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} className='marginBetween bord' type="password" placeholder="Password" required />
          <button className='loginbtn' type="submit">Sign Up</button>
          <div className="link">
            <p className='changeSpace'>Already have an account? <NavLink to="/signin">Login</NavLink></p>
      </div>
    </form>
  </div>
          </div>
          
                  <div className="img">
          <img src={signup} alt="Login" />
        </div>
      </div>

    </>
  )
}

export default Signup