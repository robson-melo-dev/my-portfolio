import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <main className="main-home">
        {/* ######################################       PRESENTATION  #################################### */}
        <div className="title">
          <h1>
            Olá, eu sou o <span className="nome">Robson</span>
          </h1>
          <h2>e sou um Desenvolvedor Front End</h2>
        </div>

        {/* ######################################       NEXT PAGE BUTTON  #################################### */}
      </main>
      <div className="next-page">
        <span className="next-page-btn">
          <Link to="about">Sobre mim &#10095;</Link>
        </span>
      </div>
    </div>
  );
}

export default Home;
