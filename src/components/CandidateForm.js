import React, { useState } from "react"
import supabase from "../config/supabaseClient"
import { useForm } from "react-hook-form"

export function CandidateForm(props){
    const [file, setFile] = useState()
    const [newCand, setNewCand] = useState(
        {
            name: "",
            photo: "",
            location: "",
            bio: "",
            skills: "",
            resume: ""
        }
    )

    const handleFile = (event) => {
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        props.onSubmit(newCand)

        // const { data, error } = await supabase
        //     .from('candidates')
        //     .insert([{ name, location, bio, skills, expertise}])

        setNewCand({
            name: "",
            photo: "",
            location:"",
            bio: "",
            skills: "",
            resume: ""
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
                className="form-photo"
                value={newCand.photo}
                onChange={event => setNewCand({...newCand, photo: event.target.value})}
                type="text"
                id="photo"
                placeholder="Add candidate photo"
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
            <input 
                className="form-resume"
                value={newCand.resume}
                type="file" 
                name="resume" 
                onChange={handleFile}
            />
            <button className="add-btn">Submit</button>
        </form>
)}