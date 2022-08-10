import React, { Fragment } from 'react'
import './favoriteButton.css'

function Favorite({OnClick}) {
  return (
    <Fragment>
        <button className='favorite' onClick={OnClick}>Add to Favorite</button>
    </Fragment>
  )
}

export default Favorite