import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useAddCart } from '../../FunctionLove/AddCart'; 
import './ProductDetails.css'; 

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [mainImage, setMainImage] = useState(''); 
  const { cart, addToCart, deleteFromCart } = useAddCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setProduct(null); 

    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setMainImage(res.data.images[0] || res.data.thumbnail);
        
        axios.get(`https://dummyjson.com/products/category/${res.data.category}?limit=5`)
          .then((catRes) => {
            const filteredSuggestions = catRes.data.products
              .filter(p => p.id !== res.data.id)
              .slice(0, 4); 
            setSuggestions(filteredSuggestions);
          });
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return (
    <div className="loading-screen">
      <div className="spinner-border text-primary" style={{width: '4rem', height: '4rem'}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  const oldPrice = ((product.price * 100) / (100 - product.discountPercentage)).toFixed(2);

  return (
    <div className="pd-wrapper">
      
      <div className="pd-main-card">
        <div className="pd-gallery-sec">
          <div className="pd-main-img-box">
            <span className="pd-discount-badge">{Math.round(product.discountPercentage)}% OFF</span>
            <img src={mainImage} alt={product.title} className="pd-main-img" />
          </div>
          <div className="pd-thumbnails">
            {product.images.slice(0, 4).map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt="thumbnail" 
                className={`pd-thumb ${mainImage === img ? 'active' : ''}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        
        <div className="pd-info-sec">
          <div className="pd-meta">
            <span className="pd-brand">{product.brand || product.category}</span>
            <span className={`pd-stock ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}>
              <i className={`fa-solid ${product.stock > 0 ? 'fa-check-circle' : 'fa-times-circle'}`}></i> 
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          
          <h1 className="pd-title">{product.title}</h1>
          
          <div className="pd-rating">
            <span className="stars">
              <i className="fa-solid fa-star"></i> {product.rating.toFixed(1)}
            </span>
          </div>

          <p className="pd-desc">{product.description}</p>
          
          <div className="pd-pricing">
            <h2 className="pd-current-price">${product.price}</h2>
            <p className="pd-old-price"><del>${oldPrice}</del></p>
          </div>
          
          <div className="pd-action-btns">
            {cart[product.id] ? (
              <button onClick={() => deleteFromCart(product.id)} className="pd-btn pd-btn-remove">
                <i className="fa-solid fa-trash-can"></i> Remove from Cart
              </button>
            ) : (
              <button onClick={() => addToCart(product.id)} className="pd-btn pd-btn-add">
                <i className="fa-solid fa-cart-arrow-down"></i> Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div className="pd-suggestions-sec" style={{marginTop: '50px'}}>
          <div className="section-header">
            <h3 className="section-title">Similar <span>Products</span></h3>
          </div>

          <div className="modern-grid">
            {suggestions.map((s) => (
              <NavLink to={`/product/${s.id}`} key={s.id} className="modern-card">
                <div className="card-img-box">
                  <img src={s.thumbnail} alt={s.title} />
                </div>
                <div className="card-details">
                  <h5 className="card-title">{s.title}</h5>
                  <div className="card-price-row">
                    <span className="new-price">${s.price}</span>
                  </div>
                  <div className="pd-sugg-rating" style={{fontSize: '12px', color: '#ffc107', marginBottom: '10px'}}>
                    <i className="fa-solid fa-star"></i> {s.rating.toFixed(1)}
                  </div>
                  <span className="details-btn">View Details</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default ProductDetails;