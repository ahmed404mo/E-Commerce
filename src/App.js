import { Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Start Import Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Notfound from "./components/Notfound";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Order from "./components/Order/Order";
import Cart from "./components/Cart/Cart";
import Favourite from "./components/Favourite/Favourite";
// End Import Component

import { HashRouter } from "react-router-dom";
// Start Sub Routes
import First from "./components/Home/Alllinks/All/First";
import Phone from "./components/Home/Alllinks/Phone/Phone";
import Laptop from "./components/Home/Alllinks/Laptop/Laptop";
import Beauty from "./components/Home/Alllinks/Beauty/Beauty";
import Kitchen from "./components/Home/Alllinks/Kitchen/Kitchen";
import Watche from "./components/Home/Alllinks/Watches/Watches";
import Fragrances from "./components/Home/Alllinks/Fragrances/Fragrances";
import Accessories from "./components/Home/Alllinks/Mobile Accessories/Accessories";
import SkinCare from "./components/Home/Alllinks/SkinCare/SkinCare";
import Tablets from "./components/Home/Alllinks/Tablets/Tablets";
import Category from "./components/Home/Alllinks/Category/Category";
import ProductDetails from "./components/Home/Alllinks/All/ProductDetails.jsx";
import SearchResults from "./components/Home/Alllinks/Search/SearchResults.jsx";
// End Sub Routes

// Import Context

function App() {
  const [data, setData] = useState(null);

  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          {/* Search Route - Global */}
          <Route path="/search" element={<SearchResults />} />

          {/* To Home */}
          <Route path="/home" element={<Home />}>
            <Route path="all" element={<First />} />
            <Route path="laptop" element={<Laptop />} />
            <Route path="phone" element={<Phone />} />
            <Route path="category" element={<Category />} />
            <Route path="beauty" element={<Beauty />} />
            <Route path="kitchen" element={<Kitchen />} />
            <Route path="watch" element={<Watche />} />
            <Route path="fragrances" element={<Fragrances />} />
            <Route path="skincare" element={<SkinCare />} />
            <Route path="tablets" element={<Tablets />} />
            <Route path="mobile-accessories" element={<Accessories />} />
            <Route index element={<Navigate to="all" replace />} />
          </Route>
          {/* End To Home */}

          <Route path="/favourite" element={<Favourite />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path='/home' element={<Navbar />} /> */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
