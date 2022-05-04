import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(){

    return(
        <>
        <nav className="navbar">
        
        <Link to="#"><span className="select-language">Idioma:</span></Link>      
        <Link to="#"><span className="language">English</span></Link>        
        <Link to="#"><span className="language">Portuguese</span></Link>
        
        <Link to="/"><span className="page-navigation">Home</span></Link>
        <Link to="/about"><span className="page-navigation">Sobre mim</span></Link>
        <Link to="/skills"><span className="page-navigation">Skills</span></Link>
        <Link to="/projects"><span className="page-navigation">Projetos</span></Link>
        <Link to="/contact"><span className="page-navigation">Contato</span></Link>
        
      </nav>;
        </>
    );
      
       
}

export default Navbar

