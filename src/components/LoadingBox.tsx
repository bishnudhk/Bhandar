import React from 'react'
import { Spinner } from 'react-bootstrap'

function LoadingBox() {
  return (
    <Spinner animation='border' role='status'>
        <span className='visuallyHidden'>Loading...</span>
    </Spinner>
  )
}

export default LoadingBox