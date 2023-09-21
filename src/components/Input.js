import React, { useState } from 'react'
import { CandidateForm } from './CandidateForm'

export function Input(props){
    const [newCand, setNewCand] = useState(
        {
            name: "",
            location: "",
            bio: "",
            skills: ""
        }
    )

    function handleChange(event) {
        const { name, value } = event.target;
        setNewCand({...newCand, [name]: value })
    }

    function handleSubmit(event){
        event.preventDefault()
    
        const { name, location, bio, skills, expertise } = newCand
        props.onSubmit(name, location, bio, skills, expertise)
    
        setNewCand({
            name: "",
            location:"",
            bio: "",
            skills: ""
        })
    }


    return (
       <>
        <input
            className="form-name"
            name="name"
            value={newCand.name}
            onChange={handleChange}
            type="text"
            id="name"
            placeholder="Enter candidate first and last name"
        />
        <input 
            className="form-location"
            value={newCand.location}
            onChange={handleChange}
            type="text"
            id="location"
            placeholder="Enter candidiate location"
        />
        <input 
            className="form-bio"
            value={newCand.bio}
            onChange={handleChange}
            type="text"
            id="bio"
            placeholder="Enter candidate bio"
        />
        <input 
            className="form-skills"
            value={newCand.skills}
            onChange={handleChange}
            type="text"
            id="skills"
            placeholder="Enter candidate skills list"
        />
        <select 
            className="form-expertise"
            value={newCand.expertise}
            onChange={handleChange}
            type="input"
            id="expertise"
        >
            <option value="select">--Select Expertise Level--</option>
            <option value="Intern Level">Intern Level</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Intermediate Level">Intermediate Level</option>
            <option value="Senior Level">Senior Level</option>
        </select>
        <button className="add-btn" onSubmit={handleSubmit}>Submit</button>
       </>
    )
}