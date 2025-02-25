import React from "react";
import "./css/About.css";
import profile from "../assets/about.jpg";

const About = () => {
  const skills = [
    { name: "HTML", level: "50%" },
    { name: "CSS", level: "55%" },
    { name: "JavaScript", level: "50%" },
    { name: "React", level: "55%" },
    { name: "Node.js", level: "50%" },
  ];

  return (
    <div className="About" id="about">
      <h1 className="title">About Me</h1>
      <div className="content">
        <img src={profile} alt="Profile" />
        <p>
          I want to be a fullstack developer well-versed in both frontend and
          backend development. I am passionate about coding and I want to make
          applications that will be used by many. I want to acquire skills that
          will enable me to turn all my ideas into reality. I am open to
          exploring new technologies and use it to expand my knowledge.
        </p>
      </div>

      {/* Skill Section */}
      <div className="skills-container">
        <h2 className="skills-title">Programming Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: skill.level }}>
                <span className="skill-level">{skill.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
