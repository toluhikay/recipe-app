import React, { Fragment } from 'react'
import './favoriteCard.css'
import DeleteButton from '../delete/deleteButton'

function FavoriteCard() {
  return (
    <Fragment>
        <div className="favorite-card">
            <div className="favorite-meal-div">
                <div className="favorite-meal-img">
                    <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" style={{
                        'width': '100px'
                    }} alt="" />
                </div>
                <div className="favorite-meal-div2">
                    <p className="favorite-meal-name-p">Burger Thief</p>
                    <p>Preparation Time is</p>
                </div>
            </div>

            <div className="favorites-star-div">
                    <DeleteButton/>
            </div>
        </div>
    </Fragment>
  )
}

export default FavoriteCard