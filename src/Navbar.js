import { Link } from "react-router-dom";

function Navbar(){

    return(
        <>
        <nav className="navbar">
        <span className="select-language">
        <Link to="#">Idioma:</Link>
        </span>
        <span className="language">
        <Link to="#">English</Link>
        </span>
        <span className="language">
        <Link to="#">Portuguese</Link>
        </span>
        <span>
        <Link to="/">Home</Link>
        </span>
        <span>
        <Link to="/about">Sobre mim</Link>
        </span>
        <span>
        <Link to="/skills">Skills</Link>
        </span>
        <span>
        <Link to="/projects">Projetos</Link>
        </span>
        <span>
        <Link to="/contact">Contato</Link>
        </span>
      </nav>;
        </>
    );
      
       
}

export default Navbar

