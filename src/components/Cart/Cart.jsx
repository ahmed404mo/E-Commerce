import React, { useEffect, useState } from "react";
import { Api } from "../AllApi/Api";
import { useAddCart } from "../Home/FunctionLove/AddCart";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function AddCart() {
  const { products } = Api();
  const { cart, addToCart, removeFromCart, getTotalPrice } = useAddCart();

  const [cartProducts, setCartProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    const isLogin = localStorage.getItem("users");

    if (!isLogin) {
      navigate("/signin");
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      localStorage.removeItem("addCart");
      setCartProducts([]);
    }, 3000);
  };

  useEffect(() => {
    if (products && products.length > 0) {
      const filtered = products.filter((p) => cart[p.id]);
      setCartProducts(filtered);
    }
  }, [products, cart]);

  return (
    <div className="contWidth">
      <h2 className="divlop">🛒 My Shopping Cart</h2>

      {cartProducts.length === 0 ? (
        <p className="notyet">Your cart is empty. Start shopping now!</p>
      ) : (
        <>
          <div className="containeri">
            {cartProducts.map((p) => (
              <div key={p.id} className="itemss">
                <div className="item">
                  <div className="contItem">
                    <div className="imhe">
                      <img src={p.thumbnail} alt={p.title} />
                      {p.discountPercentage > 0 && (
                        <span className="off">
                          {p.discountPercentage.toFixed(0)}% <br /> OFF
                        </span>
                      )}
                    </div>

                    <div className="desc">
                      <h5>{p.title}</h5>
                      <div className="price">
                        <p>{p.price}$</p>
                        <del>
                          {(p.price / (1 - p.discountPercentage / 100)).toFixed(
                            2,
                          )}
                          $
                        </del>
                      </div>

                      <div className="carder">
                        <p className="dis">
                          Save:{" "}
                          {(
                            p.price / (1 - p.discountPercentage / 100) -
                            p.price
                          ).toFixed(2)}
                          $
                        </p>

                        <div className="quantity-controls">
                          <button
                            onClick={() => removeFromCart(p.id)}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span>{cart[p.id]}</span>
                          <button
                            onClick={() => addToCart(p.id)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>
              Total Price: <span>{getTotalPrice(products).toFixed(2)}$</span>
            </h3>

            <div className="payment-card">
              <h4>💳 Payment Details</h4>
              {success ? (
                <div className="success-message">
                  🎉 Payment Successful! Thank you for your purchase.
                </div>
              ) : (
                <form onSubmit={handlePayment}>
                  <input type="text" placeholder="Cardholder Name" required />
                  <input
                    type="text"
                    placeholder="Card Number"
                    maxLength="16"
                    pattern="\d{16}"
                    title="Please enter 16 digits"
                    required
                  />
                  <div className="payment-row">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                    />
                    <input
                      type="password"
                      placeholder="CVV"
                      maxLength={3}
                      required
                    />
                  </div>
                  <button type="submit">Pay Now</button>
                </form>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddCart;
