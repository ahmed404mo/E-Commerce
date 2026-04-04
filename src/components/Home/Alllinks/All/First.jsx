import './First.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
import { NavLink } from 'react-router-dom';

import one from '../../../image/photo Slider/two.png'
import two from '../../../image/photo Slider/three.png'
import three from '../../../image/photo Slider/four.png'
import four from '../../../image/photo Slider/five.png'

import phon from '../../../image/Category/Apple-iPhone-11-PNG-Image.png'
import laptop from '../../../image/Category/Business-Laptop-Notebook-PNG-Pic.png'
import fragrance from '../../../image/Category/Beauty.png'
import beauty from '../../../image/Category/Beauty-Cosmetics-PNG-Clipart.png'
import kitchen from '../../../image/Category/d38a65c7-a6e3-4c66-8133-e2ea236fc1a7.png'
import watch from '../../../image/Category/Watch-PNG-File.png'

// Hooks 
import { useLove } from '../../FunctionLove/Love';
import { useAddCart } from '../../FunctionLove/AddCart';

function First() {
  const colors = ["#FF5733", "#33A1FF", "#28A745", "#FFC300", "#8E44AD"];
  const getFixedColor = (index) => colors[index % colors.length];

  // Category Data
  const catPhoto = [phon, kitchen, fragrance, watch, beauty];
  const catName = ["Phones", "Kitchen", "Fragrance", "Watch", 'Beauty'];
  const links = ["/home/phone", "/home/kitchen", "/home/fragrances", "/home/watch", "/home/beauty"];
  const [category, setCategory] = useState([]);
  
  // Hooks
  const { act, handel } = useLove();
  
  // States
  const [phons, setPhons] = useState([]);
  const [kitchenn, setKitchenn] = useState([]);
  const [laps, setLaps] = useState([]);
  const [dailyDeals, setDailyDeals] = useState([]); 

  useEffect(() => {
    const margCat = catName.map((name, index) => ({
      name, img: catPhoto[index], link: links[index],
    }));
    setCategory(margCat);
  }, []);

  // Fetch Phones
  useEffect(() => {
    const phones = localStorage.getItem("smartphones_data");
    if (phones) {
      setPhons(JSON.parse(phones));
    } else {
      axios.get('https://dummyjson.com/products/category/smartphones?limit=4')
        .then((res) => {
          setPhons(res.data.products);
          localStorage.setItem("smartphones_data", JSON.stringify(res.data.products));
      });
    }
  }, []); 

  // Fetch Kitchen
  useEffect(() => {
    const kitchen = localStorage.getItem("kitchen_data");
    if (kitchen) {
      setKitchenn(JSON.parse(kitchen));
    } else {
      axios.get('https://dummyjson.com/products/category/kitchen-accessories?limit=4') 
        .then((res) => {
          setKitchenn(res.data.products);
          localStorage.setItem("kitchen_data", JSON.stringify(res.data.products));
      });
    }
  }, []); 

  // Fetch Laptops
  useEffect(() => {
    const lapsing = localStorage.getItem("laptops_data");
    if (lapsing) {
      setLaps(JSON.parse(lapsing));
    } else {
      axios.get('https://dummyjson.com/products/category/laptops?limit=4')
        .then((res) => {
          setLaps(res.data.products);
          localStorage.setItem("laptops_data", JSON.stringify(res.data.products));
      });
    }
  }, []);

  // Fetch Daily Deals
  useEffect(() => {
      axios.get('https://dummyjson.com/products?limit=4&skip=20') 
        .then((res) => {
          setDailyDeals(res.data.products);
      });
  }, []); 

  const getOldPrice = (price, discount) => {
    return ((price * 100) / (100 - discount)).toFixed(2);
  };

  return (
    <div className="home-wrapper">
      
      {/* ================= Slider Section ================= */}
      <div className="hero-slider">
        <Splide
          options={{
            type: "loop", perPage: 1, autoplay: true, interval: 4000,
            pauseOnHover: true, arrows: true, pagination: true,
          }}
        >
          <SplideSlide><img src={one} alt="Slide 1" className="slider-img" /></SplideSlide>
          <SplideSlide><img src={two} alt="Slide 2" className="slider-img" /></SplideSlide>
          <SplideSlide><img src={three} alt="Slide 3" className="slider-img" /></SplideSlide>
          <SplideSlide><img src={four} alt="Slide 4" className="slider-img" /></SplideSlide>
        </Splide>
      </div>


      {/* ================= Categories Section ================= */}
      <div className="section-header">
        <h2 className="section-title">Shop By <span>Category</span></h2>
        <NavLink to={'/home/Category'} className="view-all-link">View All <i className="fa-solid fa-chevron-right"></i></NavLink>
      </div>

      <div className="category-grid">
        {category.map((cat, index) => (
          <NavLink to={cat.link} key={index} className="cat-item">
            <div className="cat-img-box">
              <img src={cat.img} alt={cat.name} />
            </div>
            <p className="cat-name">{cat.name}</p>
          </NavLink>
        ))}
      </div>

      {/* ================= Daily Deals Section ================= */}
      {dailyDeals.length > 0 && (
        <div className="daily-deals-sec">
          <div className="deals-header">
            <div>
              <h2 className="deals-title">Flash <span>Deals</span></h2>
              <p className="deals-subtitle">Hurry up! Offers end soon.</p>
            </div>
            <div className="deals-timer">
              <span>05</span>:<span>45</span>:<span>12</span>
            </div>
          </div>
          
          <div className="modern-grid deals-grid">
            {dailyDeals.map((p) => (
              <div className="modern-card deal-card" key={p.id}>
                <span className="card-badge deals-badge">HOT {Math.round(p.discountPercentage)}%</span>
                <div className="card-img-box deals-img-box">
                  <img src={p.thumbnail} alt={p.title} />
                </div>
                <div className="card-details">
                  <h3 className="card-title">{p.title}</h3>
                  <div className="card-price-row">
                    <span className="new-price">${p.price}</span>
                  </div>
                  <NavLink to={`/product/${p.id}`} className="details-btn">Buy Now</NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= Promo Banner ================= */}
      <div className="promo-banner">
        <div className="promo-content">
          <h3>Upgrade Your Tech</h3>
          <p>Get the latest devices with an extra 15% discount using code <strong>TECH15</strong></p>
          <NavLink to={'/home/laptop'} className="promo-btn">Shop Collection</NavLink>
        </div>
        <img src={laptop} alt="Promo" className="promo-img" />
      </div>

      {/* ================= Phones Section ================= */}
      <div className="section-header">
        <h2 className="section-title">Grab The Best Deal On <span>Smartphones</span></h2>
        <NavLink to={'/home/phone'} className="view-all-link">View All <i className="fa-solid fa-chevron-right"></i></NavLink>
      </div>

      <div className="modern-grid">
        {phons.map((p) => (
          <div className="modern-card" key={p.id}>
            <span className="card-badge">{Math.round(p.discountPercentage)}% OFF</span>
            <button className={`heart-btn ${act[p.id] ? "active" : ""}`} onClick={() => handel(p.id)}>
              <i className="fa-solid fa-heart"></i>
            </button>
            
            <div className="card-img-box">
              <img src={p.thumbnail} alt={p.title} />
            </div>
            
            <div className="card-details">
              <h3 className="card-title">{p.title}</h3>
              <div className="card-price-row">
                <span className="new-price">${p.price}</span>
                <span className="old-price"><del>${getOldPrice(p.price, p.discountPercentage)}</del></span>
              </div>
              <p className="save-text">Save ${((p.discountPercentage / 100) * p.price).toFixed(2)}</p>
              
              <NavLink to={`/product/${p.id}`} className="details-btn">
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* ================= Laptops Slider Section ================= */}
      <div className="section-header">
        <h2 className="section-title">Top <span>Laptops</span></h2>
        <NavLink to={'/home/laptop'} className="view-all-link">View All <i className="fa-solid fa-chevron-right"></i></NavLink>
      </div>

      <div className="laptop-slider-sec">
        <Splide
          options={{
            type: "loop", perPage: 4, autoplay: true, interval: 2500,
            pauseOnHover: true, arrows: true, pagination: false, gap: '20px',
            breakpoints: { 1024: { perPage: 3 }, 768: { perPage: 2 }, 480: { perPage: 1 } }
          }}
        >
          {laps.map((p, index) => (
            <SplideSlide key={p.id}>
              <div className="brand-card" style={{ background: `linear-gradient(-90deg, rgba(15,15,15,0.05) 0%, ${getFixedColor(index)}20 100%)` }}>
                <div className="brand-info">
                  <span className="brand-tag">{p.brand || "LAPTOP"}</span>
                  <p className="offer-text">UP TO {Math.round(p.discountPercentage)}% OFF</p>
                  <NavLink to={`/product/${p.id}`} className="brand-btn">View Details</NavLink>
                </div>
                <div className="brand-image">
                  <img src={p.thumbnail} alt={p.title} />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* ================= Kitchen Section ================= */}
      <div className="section-header mt-5">
        <h2 className="section-title">Grab The Best Deal On <span>Kitchen</span></h2>
        <NavLink to={'/home/kitchen'} className="view-all-link">View All <i className="fa-solid fa-chevron-right"></i></NavLink>
      </div>

      <div className="modern-grid">
        {kitchenn.map((p) => (
          <div className="modern-card" key={p.id}>
            <span className="card-badge">{Math.round(p.discountPercentage)}% OFF</span>
            <button className={`heart-btn ${act[p.id] ? "active" : ""}`} onClick={() => handel(p.id)}>
              <i className="fa-solid fa-heart"></i>
            </button>
            
            <div className="card-img-box">
              <img src={p.thumbnail} alt={p.title} />
            </div>
            
            <div className="card-details">
              <h3 className="card-title">{p.title}</h3>
              <div className="card-price-row">
                <span className="new-price">${p.price}</span>
                <span className="old-price"><del>${getOldPrice(p.price, p.discountPercentage)}</del></span>
              </div>
              <p className="save-text">Save ${((p.discountPercentage / 100) * p.price).toFixed(2)}</p>
              
              <NavLink to={`/product/${p.id}`} className="details-btn">
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default First;