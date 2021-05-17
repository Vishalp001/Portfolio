import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <div>
      <header className='header'>
        <h1>
          <Link to='/'>
            <span>&#60;</span>vishal.dev <span>/&#62;</span>
          </Link>{' '}
        </h1>
        <ul>
          <li>
            <Link to='/projects'>
              <span>#</span>project
            </Link>
          </li>
          <li>
            <Link to='/blogs'>
              <span>#</span>blogs
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <span>#</span>about
            </Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default header
