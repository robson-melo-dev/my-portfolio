import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom';
import trigan from '../images/trigan.jpg'

const Projects = () => {
  return (
      <>
    <div className='projects-container'>
            <h1>Projetos que trabalhei</h1>
            <section className='project-card' >
            <a href='https://trigan.org/' target="_blank" rel='noreferrer'><img src={trigan} alt="" className='card-image'/></a>
            <section className='content'>
            <p>Atuo no Front End desta start up Escocesa, usando tecnologias como React, Next.js, Consumo de API com Axios, dentre outras.</p>
            <p>Clique na imagem para acessar o site.</p>
            </section>
            </section>
    </div>

    <div className="next-page">
    <span className="next-page-btn">
    <Link to="/skills">	
&#10094; Skills</Link>
    </span>
    <span className="next-page-btn">
    <Link to="/contact">Contato &#10095;</Link>
    </span>
  </div>

    </>
  )
}

export default Projects