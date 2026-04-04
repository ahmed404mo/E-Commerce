import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../All/First.css';
import './Category.css';

import phon from '../../../image/Category/Apple-iPhone-11-PNG-Image.png';
import laptop from '../../../image/Category/Business-Laptop-Notebook-PNG-Pic.png';
import fragrance from '../../../image/Category/Beauty.png';
import beauty from '../../../image/Category/Beauty-Cosmetics-PNG-Clipart.png';
import kitchen from '../../../image/Category/d38a65c7-a6e3-4c66-8133-e2ea236fc1a7.png';
import mobileAccessores from '../../../image/Category/female-hand-holding-several-smartphones-different-colors-white-background-vector-illustration.png';
import tablet from '../../../image/Category/—Pngtree—star space series tablet case_15928700.png';
import skinCare from '../../../image/Category/—Pngtree—3d beauty cosmetics product design_6391024.png';
import watch from '../../../image/Category/Watch-PNG-File.png';

function Category() {
  const catPhoto = [phon, laptop, fragrance, beauty, kitchen, mobileAccessores, tablet, skinCare, watch];
  const catName = ["Phones", "Laptop", "Fragrance", "Beauty", "Kitchen", "Mobile Accessories", "Tablets", "Skin Care", "Watch"];
  const link = ["/home/phone", "/home/laptop", "/home/fragrances", "/home/beauty", "/home/kitchen", "/home/mobile-accessories", "/home/tablets", "/home/skincare", "/home/watch"];
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const margCat = catName.map((name, index) => ({
      name,
      img: catPhoto[index],
      link: link[index]
    }));
    setCategory(margCat);
  }, []);

  return (
    <div className="home-wrapper">
      <div className="section-header">
        <h2 className="section-title">All <span>Categories</span></h2>
      </div>

      <div className="page-category-grid">
        {category.map((cat, index) => (
          <NavLink to={cat.link} key={index} className="page-cat-item">
            <div className="page-cat-img-box">
              <img src={cat.img} alt={cat.name} />
            </div>
            <p className="page-cat-name">{cat.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Category;