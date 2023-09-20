import React from "react"
import { Searchbar } from "./Searchbar"
import { NavLink } from "react-router-dom"



export function Navbar(props){

    return(
        <nav className={props.darkMode ? "dark": ""}>
            <ul className="nav-link">
                <NavLink to="/">Home</NavLink>
            </ul>
            <ul className="nav-link">
                <NavLink to="/candidates">Candidates</NavLink>
            </ul>
            {/* <Searchbar darkMode={props.darkMode} onSearchResults={props.onSearchResults} /> */}
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