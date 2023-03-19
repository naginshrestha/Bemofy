import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className='error-Container flex-column mt-4 d-flex  justify-content-center align-items-center'>
    <h1> oops! it's a dead end</h1>

    <Link to='/'  className="nav-link">
        back home
    </Link>


</div>
  )
}
