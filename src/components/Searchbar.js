import React, { useState } from 'react';
import { CandidateCard } from "./CandidateCard"

export function Searchbar(props){
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    console.log("button clicked")
    let results = [];

      
     const items = JSON.parse(localStorage.getItem("CANDIDATES"))
     console.log(items)

    for(let i=0; i < items.length; i++){
      if (items[i] && items[i].name && items[i].name.skills.toLowerCase().includes(query.toLowerCase())){
        results.push(items[i]);
      } else if (items[i] && items[i].name.name.toLowerCase().includes(query.toLowerCase())){
        results.push(items[i])
      } else if (items[i] && items[i].name.location.toLowerCase().includes(query.toLowerCase())){
        results.push(items[i])
      } else if (items[i] && items[i].name && items[i].name.bio.toLowerCase().includes(query.toLowerCase())){
        results.push(items[i])
      } 
    }
    props.onSearchResults(results)
  }

  
  return (
    <div  id="search-bar" className={props.darkMode ? "dark": ""}>
      <input 
          className='search-bar' 
          type="text" 
          value={query}
          onChange={(e) => {setQuery(e.target.value);
          console.log("Input value:", e.target.value);
          }}
          placeholder='Keyword Search'
        />
        <button 
          className="search-btn" 
          type="submit"
          onClick={() => handleSearch(query)}
        >Go</button>
    </div>
  )
}