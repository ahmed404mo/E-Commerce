import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import '../All/First.css';
import './SkinCare.css';
import { useLove } from '../../FunctionLove/Love';

function SkinCare() {
  const { act, handel } = useLove();
  const [phons, setPhons] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/category/skin-care")
      .then((res) => {
        setPhons(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []); 

  const getOldPrice = (price, discount) => {
    return ((price * 100) / (100 - discount)).toFixed(2);
  };

  return (
    <div className="home-wrapper">
      
      <div className="section-header">
        <h2 className="section-title">All Type <span>SkinCare</span></h2>
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

    </div>
  );
}

export default SkinCare;