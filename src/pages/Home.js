import React, { useState } from "react"
import { Navbar } from "../components/Navbar"
import { CandidateForm } from '../components/CandidateForm'
import supabase from "../config/supabaseClient"


export function Home(props){
    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }

    console.log(supabase)

   return (
    <>
        <h1 className='app-heading'>Home</h1>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* <CandidateForm onSubmit={props.addCandidate} darkMode={props.darkMode}/> */}
        <div className="home-display">
            <text className="home-text">Find your newest employee easier than ever!</text>
            <img className="home-image" src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
        </div>
        
    </>
   
   )
   
}