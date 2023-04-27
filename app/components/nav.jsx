import { HashLink as Link } from 'react-router-hash-link';

import React from 'react'

const Nav = () => {
  return (
    <nav className='nav'>

        <Link to={'/'}>
        <p>
          DM
        </p>
        </Link>

        <ul className='nav__list'>
            <li>
                <Link to={'/#story'}>Story</Link>
                <Link to={'/#projects'}>Projects</Link>
                <Link to={'#'}>Metrics</Link>
            </li>

        </ul>

        <button>
            Contact me!
        </button>



    </nav>
  )
}

export default Nav