import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import React from "react";

function Navbar() {
  const [move, setMove] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      localStorage.setItem("searchQuery", searchTerm.trim());
      navigate("/search");
      setMove(false); 
      setSearchTerm(""); 
    }
  };

  const closeMenu = () => setMove(false);

  return (
    <>
      <div className="cont">
        <div className="contNav">
          <div className="partone">
            <NavLink to={"/home"} onClick={closeMenu}>
              <div className="logo">
                tren<span className="dcolor">d</span>ify
              </div>
            </NavLink>
            
            <form className="search" onSubmit={handleSearch}>
              <i className="fa-solid fa-magnifying-glass aftinp"></i>
              <input
                className="insearch"
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>

          <div className="sings">
            <NavLink className={({ isActive }) => isActive ? "btntwo activeLink" : "btntwo"} to="/home">
              <i className="fa-regular fa-house marg"></i> Home
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "btntwo activeLink" : "btntwo"} to="/favourite">
              <i className="fa-regular fa-heart marg"></i> Favourites
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "btntwo activeLink" : "btntwo"} to="/cart">
              <i className="fas fa-shopping-cart marg"></i> Cart
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "btntwo activeLink" : "btntwo"} to="/register">
              <i className="fa-solid fa-user marg"></i> Register
            </NavLink>
          </div>

          <div className="list">
            <i
              onClick={() => setMove(!move)}
              className={`fa-solid ${move ? "fa-xmark rotute" : "fa-bars-staggered"}`}
            ></i>
          </div>

          <div className={`listII ${move ? "move" : ""}`}>
            <form className="searchII" onSubmit={handleSearch}>
              <input
                className="insearch space"
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="btt">
                <i className="fa-solid fa-magnifying-glass iconSear"></i>
              </button>
            </form>
            
            <div className="linking">
              <NavLink onClick={closeMenu} className="btntwo space" to="/home">
                <i className="fa-regular fa-house marg"></i> Home
              </NavLink>
              <NavLink onClick={closeMenu} className="btntwo space" to="/favourite">
                <i className="fa-regular fa-heart marg"></i> Favourites
              </NavLink>
              <NavLink onClick={closeMenu} className="btntwo space" to="/cart">
                <i className="fas fa-shopping-cart marg"></i> Cart
              </NavLink>
              <NavLink onClick={closeMenu} className="btntwo space" to="/register">
                <i className="fa-solid fa-user marg"></i> Register
              </NavLink>
            </div>
          </div>
        </div>

        <div className={`divcover ${move ? "setCover" : ""}`} onClick={closeMenu}></div>
      </div>
    </>
  );
}

export default Navbar;