import React from "react";
import "./css/projects.css";
import proj1 from "../assets/proj-1.png";
import proj2 from "../assets/proj-2.jpg";
import proj3 from "../assets/proj-3.png";
const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <h1 className="title">Projects</h1>
      <div className="row">
        <div className="container">
          <img src={proj1} alt="Coding" className="image" />
          <button className="button">Coding</button>
        </div>
        <div className="container">
          <img src={proj2} alt="Description of Image" className="image" />
          <button className="button">Robotics</button>
        </div>
        <div className="container">
          <img src={proj3} alt="Description of Image" className="image" />
          <button className="button">Web Development</button>
        </div>
        <div className="container">
          <img src={proj3} alt="Description of Image" className="image" />
          <button className="button">Web Development</button>
        </div>
        <div className="container">
          <img src={proj3} alt="Description of Image" className="image" />
          <button className="button">Web Development</button>
        </div>
        <div className="container">
          <img src={proj3} alt="Description of Image" className="image" />
          <button className="button">Web Development</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
