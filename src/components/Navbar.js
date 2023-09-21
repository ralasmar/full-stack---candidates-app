import React from "react"
import { NavLink } from "react-router-dom"



export function Navbar(props){

    return(
        <nav className={props.darkMode ? "dark": ""}>
            <ul>
                <li className="nav-link">
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/candidates">Candidates</NavLink>
                </li>  
            </ul>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p> 
            </div>
            
        </nav>
    )
}