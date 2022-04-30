import foto from "../images/foto-perfil.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <main className="main-home">
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
    </>
  );
}

export default Home;
