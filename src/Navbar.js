function Navbar(){

    return(
        <>
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
        <span>
          <a href="/">Home</a>
        </span>
        <span>
          <a href="about">Sobre mim</a>
        </span>
        <span>
          <a href="skills">Skills</a>
        </span>
        <span>
          <a href="projects">Projetos</a>
        </span>
        <span>
          <a href="contact">Contato</a>
        </span>
      </nav>;
        </>
    );
      
       
}

export default Navbar

