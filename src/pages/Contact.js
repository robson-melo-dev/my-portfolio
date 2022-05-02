import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
    <h1 className='contact-title'>Vamos Trabalhar Juntos!</h1>
    <div className='contact-container'>
  
       <article>
           <p>
               Preencha o formulário de contato ou envie um email para <br/>
               <span className='email'>sys.robson@gmail.com</span>
           </p>
       </article>
       <form className="contact-form">
           <label>
           <input type="text" placeholder='Nome'/>
           </label>
           <label>           
               <input type="text" placeholder='Email'/>
            </label>
           <label>
           <input type="text" placeholder='Assunto'/>
           </label>
           <label>
           <input type="text" placeholder='Mensagem'/>
           </label>
           <label>
           <input type="submit" value="Enviar"/>
           </label>
           
       </form>
    </div>
    </>
  )
}

export default Contact