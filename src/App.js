import "./App.css";
import "./shop.css";
import "./productDetails.css";
import "./cart.css";
import "./searchedProduct.css";
import "./login.css";
import "./button.css";
import "./orders.css";
import "./modal.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Header from "./components/HeaderComponent/Header";
import Products from "./components/ProductsComponent/Products";
import Footer from "./components/FooterComponent/Footer";
import Buttons from "./components/FooterComponent/Buttons";
import ProductDetails from "./components/ProductsComponent/ProductDetails";
import Cart from "./components/CartComponent/Cart";
import SearchedProduct from "./components/ProductsComponent/SearchedProduct";
import Login from "./components/Users/Login";
import SignUp from "./components/Users/SignUp";
import MyAccount from "./components/OrderComponent/MyAccount";
import PaymentGateway from "./components/ProductsComponent/PaymentGateway";


function App({current}) {
  return (
    <Router>
      <div className="grid-container noselect">
        <Header />
        <main className="main-content noselect">
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/shop" element={<ProductDetails />} />
            <Route exact path="/shop/:id" element={<ProductDetails />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/blog" element={<SearchedProduct />} />
            <Route exact path="/search" element={<SearchedProduct />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/myaccount" element={<MyAccount />} />
            <Route exact path="/payment" element={<PaymentGateway />} />
           
          </Routes>
        </main>
        <Buttons />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
