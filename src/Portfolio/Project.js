import React from "react";
import Nav from './Nav'
import './Style/project.css'
import cov1 from './Image/calculator.jpg'
import cov2 from './Image/chatting.jpg'
import cov3 from './Image/ecommerce.jpg'
import cov4 from './Image/socialmedia.jpg'
import cov5 from './Image/weather.jpg'


function Project(){

    return(
        <div className="projectPage">
            <div className="container">
                <div className="pagenName">
                    <h1>Projects</h1>
                    <h1>James Williams</h1>
                </div>
                <div className="childContainer">
                    <div className="project1">
                        <div>
                            <p>Scientific Calculator</p>
                        </div>
                    </div>
                    <div className="project2">
                        <div>
                            <p>Social Media</p>
                        </div>
                    </div>
                    <div className="project3">
                        <div>
                            <p>E-Commerce Site</p>
                        </div>
                    </div>
                    <div className="project4">
                        <div>
                            <p>Messaging App</p>
                        </div>
                    </div>
                    <div className="project5">
                        <div>
                            <p>Blogging Site</p>
                        </div>
                    </div>
                    <div className="project6">
                        <div>
                            <p>Weather App</p>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <Nav />
                </div>
            </div>
        </div>
    )
}


export default Project;