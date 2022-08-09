import React, { Fragment } from 'react'
import './navigation.css'
import {Link, Outlet} from 'react-router-dom'
import {GiHotMeal} from 'react-icons/gi'
import {FaHamburger} from 'react-icons/fa'
import {MdFavorite} from 'react-icons/md'

function Navigation() {
  return (
    <Fragment>
        <header className="header">
            {/* logo and hamburger div for mobile responsiveness */}
            <div className="hamburger-div">
                <div className="logo">
                    <Link to='/'>
                        <GiHotMeal className='logo-icon'/>
                    </Link>
                </div>
                <div className="hamburger-menu">
                    <FaHamburger/>
                </div>
            </div>

            {/* the links nav */}
            <nav className="nav-links">
                <ul className="nav-ul">
                    <li>
                        <Link to='favoritePage' className='link'>Favorites <MdFavorite/></Link>
                    </li>
                </ul>
            </nav>
        </header>


        <Outlet/>
    </Fragment>

  )
}

export default Navigation