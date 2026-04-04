import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Favourite.css";
import { Api } from "../AllApi/Api";
import { useLove } from "../Home/FunctionLove/Love";
import { useAddCart } from "../Home/FunctionLove/AddCart";

function Favourite() {
  const { cart, addToCart, deleteFromCart } = useAddCart();
  const { products } = Api();
  const { act, handel } = useLove();
  const [favProducts, setFavProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const filtered = products.filter((p) => act[p.id]);
      setFavProducts(filtered);
    }
  }, [products, act]);

  return (
    <div className="contWidth">
      <h2 className="divlop">❤️ My Favourite Products</h2>
      
      <div className="displyFav">
        {favProducts.length === 0 ? (
          <p className="notyet">Your wishlist is empty!</p>
        ) : (
          favProducts.map((p) => (
            <div key={p.id} className="itemss spaceimn">
              <div className="item">
                <div className="contItem">
                  <div className="imhe">
                    <img src={p.thumbnail} alt={p.title} />
                    
                    <i
                      onClick={() => handel(p.id)}
                      className={`fa-solid fa-heart mo ${act[p.id] ? "active" : ""}`}
                    ></i>

                    {p.discountPercentage > 0 && (
                      <span className="off">
                        {p.discountPercentage.toFixed(0)}% OFF
                      </span>
                    )}
                  </div>

                  <div className="desc">
                    <h5>{p.title.slice(0, 20)}...</h5>
                    <div className="price">
                      <p>{p.price}$</p>
                      <del>
                        {((p.price / (1 - p.discountPercentage / 100))).toFixed(1)}$
                      </del>
                    </div>

                    <p className="dis">
                      Save: {( (p.price / (1 - p.discountPercentage / 100)) - p.price ).toFixed(1)}$
                    </p>

                    <div className="bibyCard">
                      {cart[p.id] ? (
                        <div 
                          onClick={() => deleteFromCart(p.id)} 
                          className="cardStyle removeBtn"
                        >
                          Remove From Cart
                        </div>
                      ) : (
                        <div 
                          onClick={() => addToCart(p.id)} 
                          className="cardStyle addBtn"
                        >
                          Add To Cart
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favourite;