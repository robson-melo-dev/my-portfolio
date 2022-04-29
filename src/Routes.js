import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home/';
import About from './pages/About/';
import Skills from './pages/Skills/';
import Projects from './pages/Projects'
import Contact from './pages/Contact'


export default () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/About">
               <About/>
            </Route>

            <Route exact path="/Skills">
               <Skills/>
            </Route>

            <Route exact path="/Projetos">
               <Projects/>
            </Route>

            <Route exact path="/Contact">
               <Contact/>
            </Route>

        </Switch>

    );

}
