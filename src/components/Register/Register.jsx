import React from 'react'
import { NavLink } from 'react-router-dom'
import './Register.css'
import one from '../image/landing/H5e32e581d6d741a599be338615154771A.jpg_960x960q80.jpg'
import two from '../image/landing/honor-8c.jpg'
import three from '../image/landing/unnamed.jpg'
import four from '../image/landing/black_flair_sh-6060_487x487.jpg'


function Home() {


  return (
<>
      <div className="contRegist">

         <div className="partOneHome ">
          <h1 className="siteName">Trendify</h1>
          
  <p className="tagline">
    Discover the latest products at the best prices, all in one place.
  </p>
  <p className="description mt-2">
    At <strong>Trendify</strong>, we bring you the newest trends in fashion,
    electronics, home essentials, and much more. Enjoy a smooth shopping
    experience with exclusive deals, trusted quality, and fast delivery to your
    doorstep.
  </p>
        <div className="btns">
          <div className="singin">
            <NavLink className=' btnone' to='/signin'>Login</NavLink>
          </div>
          <div className="singup">
            <NavLink className='btntwo' to='/signup'>Sign Up</NavLink>
          </div>
        </div>
        </div>
        
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-pause="false" data-bs-interval="3000" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={one} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={two} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={three} class="d-block w-100 " alt="..." />
    </div>
    <div class="carousel-item">
      <img src={four} class="d-block w-100" alt="..." />
    </div>
  </div>
</div>
      </div>
      
</>)}


export default Home