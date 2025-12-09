import React from "react";
import Navbar from "./Navbar";
import "../styles/shared.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/logo.png" alt="Pharmacy Logo" />
        Pharmacy Store
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
