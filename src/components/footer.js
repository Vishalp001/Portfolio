import React from 'react'
import git from "./images/git2.png"
import twitter from "./images/twitter.png"
import insta from "./images/insta.png"
import { Link } from "react-router-dom";

function footer() {
    return (
        <div  className="footerMain">
            <div className="footer" >

            <div>
            <h1> <span>&#60;</span>vishal.dev <span>/&#62;</span></h1>
            </div>

            <div className="footerIcon">
                <a href="https://github.com/Vishalp001" target="_blank">
            <img className="git2" alt="logo" src={git} /></a>

            <a href="https://twitter.com/vishalp_tech" target="_blank">
            <img className="twitter" alt="logo" src={twitter} /></a>

            <a href="https://www.instagram.com/vishal_19_10/" target="_blank">
            <img className="insta" alt="logo" src={insta} /></a>
            </div>
            
            </div>

            <div className="footer-2">
            <ul className="footer-links">
                <li><Link to="/projects" > <span>#</span>project</Link></li>
                <li><Link to="/blogs"><span>#</span>blogs</Link></li>
                <li><Link to="/about"><span>#</span>about</Link></li>
            </ul>
            </div>
        </div>
    )
}

export default footer
