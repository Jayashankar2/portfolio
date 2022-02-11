import React from 'react'
import './Style/main.css'
import img3 from './Image/person3.png'
import Nav from './Nav'
import { useEffect } from 'react/cjs/react.production.min'

export default function Main(){

    return(
        <div className='main'>
            <div className='background'>
                <img src={img3} />
            </div>
            <section className='container'>
                <div className='sidebar'>
                    <div className='nav'>
                        <nav>   
                            <Nav />
                        </nav>
                    </div>
                    <div className='achive'>
                        <div>
                            <span>4K</span>
                            <p className='stat'>Views</p>
                            <p className='para'>Behance</p>
                        </div>
                        <div>
                            <span>20K</span>
                            <p className='stat'>Views</p>
                            <p className='para'>YouTube</p>
                        </div>
                        <div>
                            <span>14K</span>
                            <p className='stat'>Followers</p>
                            <p className='para'>Instagram</p>
                        </div>
                        <div>
                            <span>3.2K</span>
                            <p className='stat'>Followers</p>
                            <p className='para'>GitHub</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='biodata'>
                <p>Hi, I'm James Williams.</p>
                <span>Full-stack Developer</span>
            </section>
        </div>
    )
}