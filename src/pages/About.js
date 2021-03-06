import "./About.css";
import foto from "../images/foto-perfil02.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <main className="about-container">
        <article className="about-copy">
          <h1 className="title-about">Sobre Mim</h1>
          <p>
            Sou um Desenvolvedor Front-End autodidata, baseado no Brasil,
            buscando oportunidades de crescimento. Trazendo uma atitude motivada
            e uma variedade de soft skills, como dedicação e pensamento
            orientado para a resolução de problemas. Comprometido em utilizar
            minhas habilidades para promover a missão de uma empresa. Dedicado a
            identificar as necessidades dos clientes e fornecer soluções
            eficazes para os problemas. Bilíngue, trabalhador e pronto para me
            juntar à minha próxima equipe. Sou um desenvolvedor em
            desenvolvimento, apaixonado por Front End e trabalhando duro para
            melhorar e aprender mais a cada dia que passa.
          </p>
          </article>
          <div className="img-container">
            <img src={foto} alt="" className="profile-pic" />
          </div>
      </main>

      <div className="next-page">
        <span className="next-page-btn">
        <Link to="/">&#10094; Home</Link>
        </span>
        <span className="next-page-btn">
        <Link to="/skills">Skills &#10095;</Link>
        </span>
      </div>
    </>
  );
}

export default About;
