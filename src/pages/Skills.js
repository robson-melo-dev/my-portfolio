import React from "react";
import progpic from "../images/programming2.png";
import "./Skills.css";
import { Link } from "react-router-dom";

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
        <Link to="/about">&#10094; Sobre mim</Link>
        </span>
        <span className="next-page-btn">
        <Link to="/projects">Projetos &#10095;</Link>
        </span>
      </div>
    </>
  );
};

export default Skills;
