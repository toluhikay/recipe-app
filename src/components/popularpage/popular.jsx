// import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import './popular.css'
import Favorite from '../favoritesPage/favoriteButton/favoriteButton'
import { Link } from 'react-router-dom'
import SearchBar from './searchPage/search'

function Popular() {
  const [popular, setPopular] = useState([])
  const [localStore, setLocalStore] = useState([])
  
  
  useEffect(()=>{
    getPopular()
  },[])

  const getPopular = async ()=>{
      const inspect = localStorage.getItem('popular');

      if(inspect){
        setPopular(JSON.parse(inspect))
      }else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=24`)
        const data = await api.json();

        localStorage.setItem('popular', JSON.stringify(data.recipes))
        setPopular(data.recipes)
        console.log(data);
      }
  }

  // const handleClick = ()=>{
  //   console.log(`${}`);
  // }


  return (
    <Fragment>
        <div className="popular-div">
            <p className="popular-recipe">Popular Recipe</p>
            <SearchBar/>
            <div className="recipes" >
                {
                  popular.map((items)=>{
                    return(
    
                      <div className="recipe-card" key={items.id}>
                        <Link to={'/recipe/' + items.id}>
                          <div className="recipe-img-div">
                              <img src={items.image} alt=''/>
                          </div>
                          <div className="recipe-details">
                              <p className="recipe-name">{items.title}</p>
                              <p className="recipe-prep-time">Ready In Minutes: {items.readyInMinutes}</p>
                          </div>
                        </Link>
                        <Favorite OnClick={()=>{
                          console.log(items.id);
                        }}/>
                      </div>
                        
                    )
                  })
                }
            </div>
        </div>
    </Fragment>
  )
}

export default Popular