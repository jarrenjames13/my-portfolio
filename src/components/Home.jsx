import React from "react";
import "./css/Home.css";
import Profile from "../assets/Home.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <div className="Home" id="home">
      <img src={Profile} alt="" />
      <h1 className="introduction">
        Hi I am <span className="name">Jarren James Parungao</span>, an aspiring{" "}
        <span>programmer</span>
      </h1>
      <p className="me">focuses on creating functional applications </p>
      <div className="connect">
        <a
          href="https://github.com/jarrenjames13"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaGithub size={20}/>
        </a>
        <a
          href="https://linkedin.com/in/jarrenjames13"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default Home;
