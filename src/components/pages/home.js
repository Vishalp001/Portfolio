import React from 'react'
import end from "../images/end.png"
import undraw from "../images/undrawsvg.svg"
import git from "../images/git.png"
import react from "../images/react.png"
import js from "../images/js.png"



function home() {
    return (
        <div>
             
            {/* ---------------MAIN--------------- */}
            <div className="mainSection">
            <div className="gif">
                <img src={undraw} alt="logo" />
            </div>
            <div className="main">
                <h1>Howdy, comps!</h1>
                <p>I'm Vishal Pohekar, a web <br/> developer && hiker</p>
            </div>
        </div>

        {/* ------------END---------- */}
        <div className="end">
            <img src={end} alt="logo" />
        </div>

        {/* ----------TOOLS------------ */}
        <div className="tools">
            <h1>Tools of choice</h1>
            <div>
                <a rel="noreferrer" href="https://github.com/Vishalp001" target="_blank">
                <img  className="git" alt="logo" src={git} /></a>
                <img style={{cursor:'pointer'}} className="react" alt="logo" src={react} />
                <img style={{cursor:'pointer'}} className="js" alt="logo" src={js} />
            </div>
        </div>

        {/* ---------------END-------------------- */}
        <div className="end">
            <img src={end} alt="logo" />
        </div>

        {/* -------------ABOUT----------- */}
        <div className="about">
            <h2>A bit about me</h2>

            <p>As an aspiring web Developer, I'm learning full stack web developer and server based applications. I take part in creating websites from frontend and backend. 
                <br/> <br/>
             As a Web developers I also analyze user needs to ensure the proper content, graphics and underlying structure are used to meet both the goals of the user and the website’s owner
            <br/> <br/>
            In my free time, I enjoy working on a couple of personal projects and writing about stuff I learn.</p>
        </div>

        </div>
    )
}

export default home
