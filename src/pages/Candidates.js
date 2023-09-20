import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { CandidateForm } from '../components/CandidateForm'
import { CandidateList } from '../components/CandidateList'
import { CandidateLayout } from '../CandidateLayout'
import { Searchbar } from '../components/Searchbar'
import { Pagination } from '../Pagination'


export function Candidates(props){
    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }


    const [candidates, setCandidates] = useState(() => {
        const localValue = localStorage.getItem("CANDIDATES")
        if(localValue == null) {
            return []
        }
        return JSON.parse(localValue)
    })

    function addCandidate(name, location, bio, skills, expertise){
        setCandidates(currentCandidates => {
            const newCandidates = [
                { id: crypto.randomUUID(), name, location, bio, skills, expertise },
                ...currentCandidates
            ]
            localStorage.setItem("CANDIDATES", JSON.stringify(newCandidates))
            return newCandidates
        })
        alert("New Candidate Added")
    }

    function deleteCandidate(id){
        setCandidates(currentCandidates => {
            const updatedCandidates = currentCandidates.filter(candidate => candidate.id !== id)

            localStorage.setItem("CANDIDATES", JSON.stringify(updatedCandidates))
            return updatedCandidates
        })
        alert("Candidate removed from database")
    }

    function sortByName(){
        const sortedNames = [...candidates].sort((a,b) => a.name.name.localeCompare(b.name.name))
        console.log(sortedNames)
        setCandidates(sortedNames)
    }

    function sortByLocation(){
        const sortedNames = [...candidates].sort((a,b) => a.name.location.localeCompare(b.name.location))
        setCandidates(sortedNames)
    }
    
    return (
        <>
            <h1 className="candidates-heading">Candidates</h1>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} onSearchResults={setCandidates} />
            
            <div className="form-and-list">
                <CandidateForm onSubmit={addCandidate} darkMode={darkMode}/>
                <div className="list-and-search">
                    <Searchbar darkMode={darkMode} onSearchResults={setCandidates} />
                    <ul>
                        Sort by: <button className='sort-btn' type="submit" onClick={sortByName}>Name</button>
                        <button className='sort-btn' type="submit" onClick={sortByLocation}>Location</button>
                     </ul>
                    <CandidateList candidates={candidates} deleteCandidate={deleteCandidate} darkMode={darkMode}  />
                </div>
            </div>
           
        </>
    ) 
    
}