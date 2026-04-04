import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import'./Home.css'
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';



function Home() {
  const [data, setData] = useState([]);
  const[phons, setPhons] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category/smartphones?limit=5').then((res) => {
      setPhons(res.data.products)
      // console.log(res.data.products);
      localStorage.setItem("smartphones", JSON.stringify(res.data.products));
      const smartPhons = JSON.parse(localStorage.getItem("smartphones"))

      console.log(smartPhons);
      
      
    }, []).catch((err) => {
      console.log(err);
      
    })
    axios.get('https://dummyjson.com/products/categories').then((res) => {
      setData(res.data)
      // console.log(res.data);
      
    }).catch((err) => {
      console.log("error");
      
    })
  },[])

  return (
    <>
      <div className="contHome">

        <div className="dom">
        <div className='lininHome-slidna'> 
            <ul className='lininHome'>
<Splide
  options={{
    autoWidth: true, 
    gap: '0.5rem',   
    arrows: false,    
    pagination: false, 
    drag: 'free',     
    flickPower: 300,  
    trimSpace: false, 
  }}
>
      <SplideSlide>
        <NavLink className="lininHome-lis" to="all">All</NavLink>
      </SplideSlide>

      <SplideSlide>
        <NavLink className="lininHome-lis" to="laptop">Laptop</NavLink>
      </SplideSlide>

      <SplideSlide>
        <NavLink className="lininHome-lis" to="phone">Phone</NavLink>
      </SplideSlide>

      <SplideSlide>
        <NavLink className="lininHome-lis" to="beauty">Beauty</NavLink>
      </SplideSlide>

      <SplideSlide>
        <NavLink className="lininHome-lis" to="kitchen">Kitchen</NavLink>
      </SplideSlide>

      <SplideSlide>
        <NavLink className="lininHome-lis" to="watch">Watch</NavLink>
      </SplideSlide>

      <SplideSlide>
        <NavLink className="lininHome-lis" to="fragrances">Fragrances</NavLink>
      </SplideSlide>

      <SplideSlide>
        <NavLink className="lininHome-lis" to="mobile-accessories">Mobile Accessories</NavLink>
      </SplideSlide>

      <SplideSlide>
        <NavLink className="lininHome-lis" to="skincare">Skin Care</NavLink>
      </SplideSlide>

      <SplideSlide>
        <NavLink className="lininHome-lis" to="tablets">Tablets</NavLink>
      </SplideSlide>
    </Splide>
            </ul>
        </div>
        </div>
        <Outlet />

          </div>
    </>
  )
}

export default Home