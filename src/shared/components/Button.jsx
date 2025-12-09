import React from "react";
import "../styles/shared.css";

const Button = ({ label, onClick, type = "button" }) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
