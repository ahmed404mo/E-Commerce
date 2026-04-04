import { useState, useEffect } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handelCart = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id]) {
        delete updated[id]; 
      } else {
        updated[id] = true; 
      }
      return updated;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const isInCart = (id) => {
    return !!cart[id];
  };

  const cartCount = Object.keys(cart).length;

return (
  <div className="home-wrapper"> 
    
    <div className="section-header">
      <h2 className="section-title">All Type <span></span></h2>
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