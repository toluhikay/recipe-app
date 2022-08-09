import React, { Fragment } from 'react'
import './hero.css'

function Hero() {
  return (
    <Fragment>
        <div className="hero-div">
            <div className="hero-div1">
                <p className="hero-p1">Let's Start Cooking With Popular Recipes</p>
                <p className="hero-p2">This is the best place to learn how to cook with ease. Wohooo!!!</p>
            </div>
            <div className="hero-img-div">
                <div className="hero-img-div2">
                    <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" className="hero-img" />
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Hero