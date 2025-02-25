import React, { useState } from "react";
import "./css/Navbar.css"; // Link to your CSS file
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Portfolio</h2>
      </div>

      {/* Hamburger icon on mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <IoMdMenu />
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
