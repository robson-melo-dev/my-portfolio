import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
      <>
    <div className='projects-container'>
            <h1>Projetos que trabalhei</h1>
            <p>Bom, parece que este é meu melhor trabalho até agora. Então volte em alguns dias que esta seção estar recheada de projetos concluídos.</p>
    </div>

    <div className="next-page">
    <span className="next-page-btn">
      <a href="skills">	
&#10094; Skills</a>
    </span>
    <span className="next-page-btn">
      <a href="contact">Contato &#10095;</a>
    </span>
  </div>

    </>
  )
}

export default Projects