import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home page/Home";
import About from "./pages/about page/About";
import Products from "./pages/product page/Products";
import Contact from "./pages/contact page/Contact";
import SingleProduct from "./pages/product page/single product/SingleProduct";
import Cart from "./pages/cart page/Cart";
import Error from "./pages/error page/Error";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
};

export default App;
