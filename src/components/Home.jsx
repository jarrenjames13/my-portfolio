import React from "react";
import "./css/Home.css";
import Profile from "../assets/Home.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <div className="Home" id="home">
      <img src={Profile} alt="" />
      <h1 className="introduction">
        Hi I am <span className="name">Jarren James Parungao</span>
        , an aspiring <span>programmer</span>
      </h1>
      <p className="me">focuses on creating functional applications </p>
      <div className="connect">
      <div className="button">
      <FaGithub />
      </div>
      <div className="button">
      <FaLinkedin />
      </div>
    </div>
    </div>
    
  );
};

export default Home;
