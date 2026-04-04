import { useState, useEffect } from "react";

export function useAddCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("addCart");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("addCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      if (prev[id] === 1) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  const deleteFromCart = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[id];
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const totalItems = Object.values(cart).reduce((acc, qty) => acc + qty, 0);

  const getTotalPrice = (products) => {
    return Object.entries(cart).reduce((acc, [id, qty]) => {
      const product = products.find((p) => p.id === Number(id));
      return product ? acc + product.price * qty : acc;
    }, 0);
  };

  return { 
    cart, 
    addToCart, 
    removeFromCart, 
    deleteFromCart, 
    clearCart, 
    totalItems, 
    getTotalPrice 
  };
}