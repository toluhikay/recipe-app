// import axios from 'axios'
import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './popular.css'
import RecipeCard from './recipeCard/recipeCard'

function Popular() {
  const [popular, setPopular] = useState([])
  
  
  useEffect(()=>{
    getPopular()
  }, [])

  const getPopular = async ()=>{
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_KEY}`)
      const data = await api.json();
      setPopular(data.recipes)
      console.log(data);
      
  }


  return (
    <Fragment>
        <div className="popular-div">
            <p className="popular-recipe">Popular Recipe</p>
            {/* search bar */}
            <div className="search-input">
                <input type="text" placeholder='search' />
            </div>
            <div className="recipes">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>
        </div>
    </Fragment>
  )
}

export default Popular