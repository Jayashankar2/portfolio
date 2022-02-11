import React from "react";
import Nav from './Nav'
import './Style/project.css'


function About(){

    return(
        <div className="projectPage">
            <div className="container">
                <div className="pagenName">
                    <h1>About</h1>
                    <h1>James Williams</h1>
                </div>
                <div className="chilContainer">
                    <div className="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="icons">
                            <button>Behance</button>
                            <button>YouTube</button>
                            <button>Instagram</button>
                            <button>GitHub</button>
                        </div>
                        <button>Hire Me <span> > </span></button>
                    </div>
                </div>
                <div className="navbar">
                    <Nav />
                </div>
            </div>
        </div>
    )
}


export default About;