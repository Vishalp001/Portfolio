import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

function footer() {
    return (
        <div className="footerMain">
            <div className="footer" >

                <div>
                    <h1> <span>&#60;</span>vishal.dev <span>/&#62;</span></h1>
                </div>

                <div className="footerIcon">
                    <a rel="noreferrer" href="https://github.com/Vishalp001" target="_blank">
                        <FiGithub /></a>

                    <a rel="noreferrer" href="https://twitter.com/vishalp_tech" target="_blank">
                        <FiTwitter /></a>

                    <a rel="noreferrer" href="https://www.instagram.com/vishal_19_10/" target="_blank">
                        <FiInstagram /></a>
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
