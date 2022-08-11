import React, { useState } from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import FavoriteCard from './favoriteCard/favoriteCard'
import './favoritePage.css'

function FavoritePage() {
const [faveData,setFaveData] = useState(()=>JSON.parse(localStorage.getItem('fave')))

useEffect(()=> {
  setFaveData(()=>JSON.parse(localStorage.getItem('fave')))
},[])

const displayFaveData =()=> {
  return faveData.map((curRecipe)=> {
    return(
      <div key={curRecipe.id} className='favorite-page-div'>
      <FavoriteCard data={faveData} mappedData={curRecipe}/>
  </div>
    )
  })
}

  return (
    <Fragment>
        {displayFaveData()}
    </Fragment>
  )
}

export default FavoritePage