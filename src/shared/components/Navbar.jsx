import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/shared.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <NavLink to="/" className="nav-link">Home</NavLink>

      {/* Products */}
      <NavLink to="/products" className="nav-link">Products</NavLink>
      <NavLink to="/products/:id" className="nav-link">Product Details</NavLink>

      {/* Cart */}
      <NavLink to="/cart" className="nav-link">Cart</NavLink>

      {/* Orders */}
      <NavLink to="/checkout" className="nav-link">Checkout</NavLink>
      <NavLink to="/order-success" className="nav-link">Order Success</NavLink>

      {/* Authentication */}
      <NavLink to="/login" className="nav-link">Login</NavLink>
      <NavLink to="/register" className="nav-link">Register</NavLink>

    </nav>
  );
};

export default Navbar;
