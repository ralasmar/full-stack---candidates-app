import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar } from "./components/Navbar"


export function CandidateLayout(props){
    const { id } = useParams()
    const [candidate, setCandidate] = useState(null)

    useEffect(() => {
        const fetchCandidateData = async () => {
            try {
                const response = JSON.parse(window.localStorage.getItem("CANDIDATES"))
                const index =  response.findIndex(candidate => id === candidate.id)
                
                setCandidate(response[index])
            } catch (error){
                console.error("error fetching data", error)
            }
        }
        fetchCandidateData()
    }, [id])
        
    return (

        <>
        <h1 className="profile-heading">Candidate Profile</h1>
        <Navbar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
        {candidate && (
        <div className={props.darkMode ? "dark": ""}>
            <section className="profile-page" key={id}>
                <h1 className="profile-name">{candidate.name.name}</h1>
                <img className="profile-pic" src={candidate.name.photo}></img>
                <p className="profile-location"><strong>Location:</strong> {candidate.name.location}</p>
                <p classname="profile-level"><strong>Level:</strong> {candidate.name.expertise}</p>
                <p className="proile-skills"><strong>Skills:</strong> {candidate.name.skills}</p>
                <p className="profile-bio"><strong>Bio:</strong> {candidate.name.bio}</p>/
            </section>
        </div>
        )}
        
        </>
    )
}