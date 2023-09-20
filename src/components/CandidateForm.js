import React, { useState } from "react"

export function CandidateForm(props){
    const [newCand, setNewCand] = useState(
        {
            name: "",
            location: "",
            bio: "",
            skills: ""
        }
    )

function handleSubmit(event){
    event.preventDefault()

    props.onSubmit(newCand)

    setNewCand({
        name: "",
        location:"",
        bio: "",
        skills: ""
    })
}

return (
    <form className={props.darkMode ? "dark": ""} onSubmit={handleSubmit}>
        <label htmlFor="form">Add a Candidate</label>
        <input
            className="form-name"
            value={newCand.name}
            onChange={event => setNewCand({...newCand, name: event.target.value})}
            type="text"
            id="name"
            placeholder="Enter candidate first and last name"
        />
        <input 
            className="form-location"
            value={newCand.location}
            onChange={event => setNewCand({...newCand, location: event.target.value})}
            type="text"
            id="location"
            placeholder="Enter candidiate location"
        />
        <input 
            className="form-bio"
            value={newCand.bio}
            onChange={event => setNewCand({...newCand, bio: event.target.value})}
            type="text"
            id="bio"
            placeholder="Enter candidate bio"
        />
        <input 
            className="form-skills"
            value={newCand.skills}
            onChange={event=> setNewCand({...newCand, skills: event.target.value})}
            type="text"
            id="skills"
            placeholder="Enter candidate skills list"
        />
        <select 
            className="form-expertise"
            value={newCand.expertise}
            onChange={event => setNewCand({...newCand, expertise: event.target.value})}
            type="input"
            id="expertise"
        >
            <option value="select">--Select Expertise Level--</option>
            <option value="Intern Level">Intern Level</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Intermediate Level">Intermediate Level</option>
            <option value="Senior Level">Senior Level</option>
        </select>
        <button className="add-btn">Submit</button>
    </form>
)}