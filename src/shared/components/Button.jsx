import React from "react";

const Button = ({ label, onClick, type = "button", className = "", disabled = false }) => {
  return (
    <button 
      className={`btn ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      type={type} 
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;