import React from "react";
import progpic from "../images/programming2.png";
import "./Skills.css";

export const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <img src={progpic} alt="" className="progpic2" />

        <article className="skills">
          <h1>Minhas Skills</h1>
          <p>
            HTML
            <br />
            CSS
            <br />
            Javascript
            <br />
            React
            <br />
            Git
            <br />
            Responsive Design
            <br />
            Acessibilty
            <br />
          </p>
        </article>
      </div>
      <div className="next-page">
        <span className="next-page-btn">
          <a href="about">&#10094; Sobre mim</a>
        </span>
        <span className="next-page-btn">
          <a href="projects">Projetos &#10095;</a>
        </span>
      </div>
    </>
  );
};

export default Skills;
