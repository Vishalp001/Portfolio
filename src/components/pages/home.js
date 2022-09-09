import React from 'react'
import undraw from "../images/undrawsvg.svg"
import { BsFillBootstrapFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { SiGitlab } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiMaterialUi } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { DiSass } from 'react-icons/di';




function home() {
    return (
        <div>

            {/* ---------------MAIN--------------- */}
            <div className="mainSection">

                <div className="main">
                    <h1>Howdy, comps! (Namaste.) </h1>
                    <p>I am Vishal Pohekar, a Full-Stack JavaScript Developer. I like to make digital experiences easier and simpler for people.</p>
                </div>

                <div className="gif">
                    <img src={undraw} alt="logo" />
                </div>
            </div>

            {/* ------------END---------- */}


            {/* ----------TOOLS------------ */}
            <div className="tools">
                <h1>Tools of choice</h1>

                <div className="icons">
                    <BsFillBootstrapFill />
                    <AiFillGithub />
                    <SiGitlab />
                    <SiJavascript />
                    <SiMaterialUi />
                    <SiMongodb />
                    <GrNode />
                    <FaReact />
                    <SiRedux />
                    <DiSass />
                </div>
            </div>

            {/* ---------------END-------------------- */}


            {/* -------------ABOUT----------- */}
            <div className="about">
                <h2>A bit about me</h2>

                <p>Hey there! Let me introduce myself again, my name is Vishal Pohekar, and I am a Full-Stack JavaScript developer. I have over 1.7 years of experience developing websites and web applications. I enjoy working on both Front-end and Back-end, but I work mostly on MERN apps. You can see my work of Front-end in React, and NodeJS in Back-end in my Projects.
                If you are looking to hire someone with my skills then you can drop me a mail at vishalpohekar1@gmail.com</p>
            </div>
        </div>
    )
}

export default home
