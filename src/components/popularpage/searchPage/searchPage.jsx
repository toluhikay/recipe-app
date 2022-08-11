import React, { Fragment } from 'react'
import { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Favorite from '../../favoritesPage/favoriteButton/favoriteButton'
import SearchBar from './search'
import './searchPage.css'



function SearchPage() {
    const [searchedRecipe, setSearchRecipe] = useState([])
    let params = useParams()

    const getSearched = async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearchRecipe(recipes.results)
    }

    useEffect(()=>{
        getSearched(params.search)
    }, [params.search])

  return (
    <Fragment>
        <SearchBar/>
        <div className="search-box">
           {
            searchedRecipe.map((items)=>{
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
                        <Favorite/>
                      </div>
                )
            })
           }
        </div>
    </Fragment>
  )
}

export default SearchPage