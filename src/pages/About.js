

function About() {
  return (
    <div className="main-container">
      {/* ######################################       NAVBAR   #################################### */}
      <nav className="navbar">
        <span className="select-language">
          <a href="#">Idioma:</a>
        </span>
        <span className="language">
          <a href="#">English</a>
        </span>
        <span className="language">
          <a href="#">Portuguese</a>
        </span>
        <span className="page-link">
          <a href="#">Sobre mim</a>
        </span>
        <span>
          <a href="#">Skills</a>
        </span>
        <span>
          <a href="#">Projetos</a>
        </span>
        <span>
          <a href="#">Contato</a>
        </span>
      </nav>

      <main>
        <h1>Sobre Mim</h1>
        <p>
          Sou um Desenvolvedor Front-End autodidata, baseado no Brasil, buscando
          oportunidades de crescimento. Trazendo uma atitude motivada e uma
          variedade de soft skills, como dedicação e pensamento orientado para a
          resolução de problemas. Comprometido em utilizar minhas habilidades
          para promover a missão de uma empresa. Dedicado a identificar as
          necessidades dos clientes e fornecer soluções eficazes para os
          problemas. Bilíngue, trabalhador e pronto para se juntar à minha
          próxima equipe. Sou um desenvolvedor em desenvolvimento, apaixonado
          por Front End e trabalhando duro para melhorar e aprender mais a cada
          dia que passa.
        </p>
      </main>
    </div>
  );
}

export default About;
