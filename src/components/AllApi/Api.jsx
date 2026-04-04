import { useState, useEffect } from "react";
import axios from "axios";
import { useLove } from "../Home/FunctionLove/Love";

export function Api() {
  const { handel, act } = useLove(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const categories = [
      "smartphones",
      "beauty",
      "fragrances",
      "kitchen-accessories",
      "laptops",
      "mobile-accessories",
      "skin-care",
      "tablets",
      "womens-watches",
      "mens-watches",
    ];

    let allProducts = [];

    Promise.all(
      categories.map((cat) =>
        axios
          .get(`https://dummyjson.com/products/category/${cat}`)
          .then((res) => {
            localStorage.setItem(cat, JSON.stringify(res.data.products));
            allProducts = [...allProducts, ...res.data.products];
          })
          .catch((err) => {
            console.error("Error fetching:", cat, err);
          })
      )
    ).then(() => {
      setProducts(allProducts);
    })
  }, []);

  return { products, act, handel };
}