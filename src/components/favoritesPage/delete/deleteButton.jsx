import React, { Fragment } from 'react'
import './deleteButton.css'
import {ImBin} from 'react-icons/im'

function DeleteButton({data,id}) {

  // const dataArr = [props]
// REMOVE THE DATA AND PUSH TO LOCALSTORAGE
const deleteData =(id)=> {
  const restData = data.filter((item)=>item.id !== id )

  localStorage.setItem('fave', JSON.stringify(restData))
}

  return (
    <Fragment>
        <div className='delete-button' onClick={()=>deleteData(id)}><ImBin/> Delete</div>
    </Fragment>
  )
}

export default DeleteButton