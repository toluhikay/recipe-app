import React, { Fragment } from 'react'
import './deleteButton.css'
import {ImBin} from 'react-icons/im'

function DeleteButton() {
  return (
    <Fragment>
        <div className='delete-button'><ImBin/> Delete</div>
    </Fragment>
  )
}

export default DeleteButton