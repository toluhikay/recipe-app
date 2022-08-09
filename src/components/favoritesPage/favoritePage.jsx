import React from 'react'
import { Fragment } from 'react'
import FavoriteCard from './favoriteCard/favoriteCard'
import './favoritePage.css'

function FavoritePage() {
  return (
    <Fragment>
        <div className='favorite-page-div'>
            <FavoriteCard/>
        </div>
    </Fragment>
  )
}

export default FavoritePage