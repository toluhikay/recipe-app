import React, { Fragment } from 'react'
import './favoriteCard.css'
import DeleteButton from '../delete/deleteButton'

function FavoriteCard({data,mappedData}) {
  return (
    <Fragment>
        <div className="favorite-card">
            <div className="favorite-meal-div">
                <div className="favorite-meal-img">
                    <img src={mappedData.image} style={{
                        'width': '100px'
                    }} alt="" />
                </div>
                <div className="favorite-meal-div2">
                    <p className="favorite-meal-name-p">{mappedData.title}</p>
                    <p>Ready In Minutes: {mappedData.readyInMinutes} minutes</p>
                </div>
            </div>

            <div className="favorites-star-div">
                    <DeleteButton data={data} id={mappedData.id}/>
            </div>
        </div>
    </Fragment>
  )
}

export default FavoriteCard