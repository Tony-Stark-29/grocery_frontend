import { faBan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const NotFound = () => {
  return (
     
    <div className="container-fluid">
        <div className="row vh-100 align-items-center justify-content-center">
            <p className="col-2 text-center fs-2 fw-bolder">Not Found <FontAwesomeIcon className=' text-danger' icon={faBan} /> </p>
        </div>
    </div>
  )
}
