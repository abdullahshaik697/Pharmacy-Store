import React from "react";
import "../styles/shared.css";

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Pharmacy Store — All Rights Reserved.
    </footer>
  );
};

export default Footer;
