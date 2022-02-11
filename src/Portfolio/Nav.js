import React, {useState} from 'react'
import './Style/main.css'
import {
    Link, Outlet
} from 'react-router-dom'
import Check from './Check'

export default function Nav(){

    return(
        <div>
            <Link to='/'><button >Home <span> > </span></button></Link>
            <Link to='/Project'><button >Project <span> > </span></button></Link>
            <Link to='/About'><button >About <span> > </span></button></Link>
            <Outlet />
        </div>
    )
}