import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import whatsapp from "../images/whatsapp.png";
import github from "../images/github.png";

const Contact = () => {
  return (
    <>
    <div className='contact-container'>
           <article>
           <h1 className='contact-title'>Vamos Trabalhar Juntos!</h1>
           <p>
               Preencha o formulário de contato ou envie um email para <br/>
               <span className='email'>sys.robson@gmail.com</span>.<br/>
               Minhas redes sociais:
           </p>
           <a href='https://www.linkedin.com/in/robsonthedev/'><img src={linkedin} alt="" className='social-icon'/></a>
           <a href='https://github.com/robson-melo-dev'><img src={github} alt=""className='social-icon'/></a>
           <a href='https://www.instagram.com/robson.raven/'><img src={instagram} alt=""className='social-icon'/></a>
           <a href='https://www.facebook.com/robsonpantro'><img src={facebook} alt=""className='social-icon'/></a>
           <a href='https://api.whatsapp.com/send?phone=5555981182976&text=Ol%C3%A1!%20Vim%20pelo%20Portf%C3%B3lio.'><img src={whatsapp} alt=""className='social-icon'/></a>
           
       </article>
       <form className="contact-form">
           <label>
           <input type="text" placeholder='Nome'className='input'/>
           </label>
           <label>           
               <input type="email" placeholder='Email'className='input'/>
            </label>
           <label>
           <input type="text" placeholder='Assunto'className='input'/>
           </label>
           <label className='input-message'>
           <textarea placeholder='Mensagem'/>
           </label>
           <label>
           <input type="submit" value="Enviar"/>
           </label>
           
       </form>
       </div>
       <div className="next-page">
        <span className="next-page-btn">
        <Link to="/projects">&#10094; Projetos</Link>
        </span>
        </div>
    </>
  )
}

export default Contact