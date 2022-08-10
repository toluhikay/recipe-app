import React, { Fragment, useState } from 'react'
import {useNavigate} from 'react-router-dom'


const SearchBar = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()
  return (
    <Fragment>
        {/* search bar */}
        <form className="search-input" 
            style={{
              "display":"flex", 
              "justifyContent":"center",
              "alignItems":"center",
              "width": "100%",
              "marginBottom": "20px"
            }}
            onSubmit={(e)=>{
                e.preventDefault()
                navigate('/searchedPage/'+ input)
            }}
        >
                <input 
                    type="text" 
                    value={input}
                    placeholder='search for recipes'
                    onChange={(e)=>setInput(e.target.value)}
                  style={{
                    "padding":"15px",
                    "width": "50%"
                  }}
                />
            </form>
    </Fragment>
  )
}

export default SearchBar