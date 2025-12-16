import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/shared.css";

const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/upload-prescription", label: "Upload Prescription" },
    { path: "/prescription-status", label: "Prescription Status" },
    { path: "/inventory", label: "Inventory" },
    { path: "/cart", label: "Cart" },
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
  ];

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <NavLink 
          key={item.path}
          to={item.path} 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'bg-white bg-opacity-20 rounded px-3 py-1 font-semibold' : ''}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;