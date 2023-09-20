import React, { useState, useEffect } from "react"
import "./style.css"
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom"
import { Home } from "./pages/Home"
import { Candidates } from './pages/Candidates'
import { CandidateLayout } from './CandidateLayout'


function App(props) {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [])

  return (
    <div className="App">
      <h1>{message}</h1>
      <BrowserRouter>  
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/candidates/:id" element={<CandidateLayout darkMode={props.darkMode} />} />
        </Routes>
    </BrowserRouter> 
    </div>
  )
}

export default App