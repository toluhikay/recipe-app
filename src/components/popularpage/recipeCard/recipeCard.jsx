import React, { Fragment } from 'react'
import Favorite from '../../favoritesPage/favoriteButton/favoriteButton'
import './recipeCard.css'

function RecipeCard({img, name, recipe, prepTime}) {
  return (
    <Fragment>
        <div className="recipe-card" >
            <div className="recipe-img-div">
                <img src={img} alt=''/>
            </div>
            <div className="recipe-details">
                <p className="recipe-name">{name}</p>
                <p className="recipe-prep-time">Ready In Minutes: {prepTime}</p>
            </div>
            <Favorite/>
        </div>
    </Fragment>
  )
}

export default RecipeCard