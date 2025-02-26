import React from "react";
import "./css/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <p>© {new Date().getFullYear()} Portfolio | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
