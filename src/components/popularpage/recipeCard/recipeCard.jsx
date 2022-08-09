import React, { Fragment } from 'react'
import Favorite from '../../favoritesPage/favoriteButton/favoriteButton'
import './recipeCard.css'

function RecipeCard() {
  return (
    <Fragment>
        <div className="recipe-card">
            <div className="recipe-img-div">
                <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" className="recipe-img" />
            </div>
            <div className="recipe-details">
                <p className="recipe-name">Burger Thief</p>
                <p className="recipe-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam tempore aperiam magnam soluta corporis,</p>
            </div>

            <Favorite/>
        </div>
    </Fragment>
  )
}

export default RecipeCard