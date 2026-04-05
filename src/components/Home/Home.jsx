import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Home() {
  const [data, setData] = useState([]);
  const [phons, setPhons] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      axios.get('https://dummyjson.com/products/category/smartphones?limit=5'),
      axios.get('https://dummyjson.com/products/categories')
    ])
      .then(([phonesRes, categoriesRes]) => {
        setPhons(phonesRes.data.products);
        localStorage.setItem("smartphones", JSON.stringify(phonesRes.data.products));
        
        setData(categoriesRes.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2 style={{ color: '#5f48f9', fontSize: '24px', fontWeight: 'bold' }}>
          Loading Trendify...
        </h2>
      </div>
    );
  }

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
  );
}

export default Home;