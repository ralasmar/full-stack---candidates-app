import React, { useState, useEffect } from "react"
import "./style.css"
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom"
import { Home } from "./pages/Home"
import { Candidates } from './pages/Candidates'
import { CandidateLayout } from './CandidateLayout'


function App(props) {
  const [backendData, setBackendData] = useState("")

  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((res) => res.json())
      .then((data) => setBackendData(data.backendData))
  }, [])

  return (
    <div className="App">
      <h1>{backendData}</h1>
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