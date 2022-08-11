import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import './searchPage.css'


const SearchBar = () => {
    
    const [input, setInput] = useState("")
    const [autoCom, setAutoCom] = useState([])
    const [display, setDisplay] = useState(false)
    const navigate = useNavigate()

    const getAutoComplete = async (input) =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=10&query=${input}`)
        const data = await api.json()
        console.log(data);
        setAutoCom(data)
    }

    useEffect(()=>{
      getAutoComplete(input)
    }, [input])


    const onChangehandler=(text)=>{
      setInput(text)
    }
    const onClickHandler=(text)=>{
      setInput(text)
      // if(input.length===0){
      //   setAutoCom([])
      // }
      setAutoCom([])
    }
    const displaySet = () =>{
      if(input.length>0){
        setDisplay(!display)
      }
    }
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
                    onChange={(e)=>{
                      onChangehandler(e.target.value)
                      displaySet()
                    }}
                    onBlur={()=>{
                      setTimeout(()=>{
                        setAutoCom([])
                        displaySet()
                      }, 100)
                    }}
                  style={{
                    "padding":"15px",
                    "width": "50%"
                  }}
                /> <br />
                {

                    display && <div className="autocomplete" >             
                      {
                        autoCom && autoCom.map((data)=>{
                          return(
                            
                              <p onClick={()=>{onClickHandler(data.title)}} key={data.id}>{data.title}</p>
                            
                          )
                        })
                      }
                      </div>
                } 
            </form>
    </Fragment>
  )
}

export default SearchBar