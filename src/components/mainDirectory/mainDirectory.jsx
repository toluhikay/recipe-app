import Hero from "../heropage/hero";
import Popular from "../popularpage/popular";

import React, { Fragment } from 'react'

function MainDirectory() {
  return (
    <Fragment>
        <Hero/>
        <Popular/>
    </Fragment>
  )
}

export default MainDirectory