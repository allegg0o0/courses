import React from "react";
import Home from "./component/home";
import Contact from "./component/contact";
import About from "./component/about";
import {HashRouter,  Route, Routes, NavLink} from "react-router-dom"
const Fu = (props) => {
    return (
        <div>          
            <h1>{props.name}</h1>
            <HashRouter>
            <ul>
                <li><NavLink to={"/home"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
            
            <Routes>
            <Route path='/about' Component={About}/>
            <Route path='/home' Component={Home}/>
            <Route path='/contact' Component={Contact}/>
            </Routes>
            </HashRouter>
        </div>
    );
}

export default Fu;
