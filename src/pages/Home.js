import foto from "../images/foto-perfil.jpg"; 
import './Home.css'


function App() {
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
        {/* ######################################       PRESENTATION  #################################### */}
        <div className="title">
          <h1>
            Olá, sou o <span className="nome">Robson</span>,
          </h1>
          <h2>e sou um Desenvolvedor Front End</h2>
        </div>
        <img src={foto} alt="foto de perfil" className="profile-pic" />

        {/* ######################################       NEXT PAGE BUTTON  #################################### */}
      </main>
      <div className="next-page">
        <span className="next-page-btn">
          <a href="about">Sobre mim &#10148;</a>
        </span>
      </div>
    </div>

  );
}

export default App;
