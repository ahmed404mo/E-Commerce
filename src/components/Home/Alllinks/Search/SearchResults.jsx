import React, { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import "../All/First.css";
import { useLove } from "../../FunctionLove/Love";

function SearchResults() {
  const [searchQuery, setSearchQuery] = useState("");
  const { act, handel } = useLove();

  const allProducts = useMemo(() => {
    const keys = Object.keys(localStorage);
    let combined = [];
    
    keys.forEach(key => {
      if (key.includes("_data") || [
        "smartphones", "beauty", "fragrances", "laptops", "skin-care"
      ].includes(key)) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          if (Array.isArray(data)) {
            combined = [...combined, ...data];
          }
        } catch (e) {
          console.error("Error parsing", key);
        }
      }
    });

    const uniqueProducts = Array.from(new Map(combined.map(item => [item.id, item])).values());
    return uniqueProducts;
  }, []);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allProducts.filter(p => {
      return (
        (p.title && p.title.toLowerCase().includes(query)) ||
        (p.description && p.description.toLowerCase().includes(query)) ||
        (p.brand && p.brand.toLowerCase().includes(query)) ||
        (p.category && p.category.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, allProducts]);

  useEffect(() => {
    const checkQuery = () => {
      const query = localStorage.getItem("searchQuery") || "";
      setSearchQuery(query);
    };

    checkQuery(); 
    window.addEventListener("storage", checkQuery); 
    
    const interval = setInterval(checkQuery, 500);

    return () => {
      window.removeEventListener("storage", checkQuery);
      clearInterval(interval);
    };
  }, []);

  const getOldPrice = (price, discount) => {
    return Math.round((price / (1 - (discount || 0) / 100)) * 100) / 100;
  };

  return (
    <div className="home-wrapper" style={{marginTop: "100px"}}>
      <div className="section-header">
        <h2 className="section-title">
          {searchQuery ? `Results for "${searchQuery}"` : "Type something to search..."}
        </h2>
      </div>

      {filteredResults.length === 0 ? (
        <div className="no-results" style={{textAlign: "center", padding: "100px 0"}}>
           <i className="fa-solid fa-magnifying-glass" style={{fontSize: "50px", color: "#ddd", marginBottom: "20px"}}></i>
           <p style={{ fontSize: "18px", color: "#757575" }}>
             {searchQuery ? `No products found for "${searchQuery}"` : "Start typing to find products"}
           </p>
        </div>
      ) : (
        <>
          <p style={{ marginBottom: "20px", color: "#757575" }}>
            We found {filteredResults.length} smart matches for you.
          </p>
          <div className="modern-grid">
            {filteredResults.map((p) => (
              <div className="modern-card" key={p.id}>
                <span className="card-badge">{Math.round(p.discountPercentage || 0)}% OFF</span>

                <button
                  className={`heart-btn ${act[p.id] ? "active" : ""}`}
                  onClick={() => handel(p.id)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>

                <div className="card-img-box">
                  <img src={p.thumbnail} alt={p.title} />
                </div>

                <div className="card-details">
                  <h3 className="card-title">{p.title}</h3>
                  <div className="card-price-row">
                    <span className="new-price">${p.price}</span>
                    <span className="old-price">
                      <del>${getOldPrice(p.price, p.discountPercentage)}</del>
                    </span>
                  </div>
                  <NavLink to={`/product/${p.id}`} className="details-btn">
                    View Details
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchResults;