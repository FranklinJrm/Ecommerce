import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__title'>
            <Link className='header_link_title' to={"/"} >e-comerce</Link>
        </h1>

        <nav className='header_nav'>
            <ul className='header_list'>
                <li className='header_item'>
                    <NavLink className='header_link' to={"/login"} >Login</NavLink>
                </li>
                <li className='header_item'>
                    <NavLink className='header_link' to={"/purchases"} >Purchases</NavLink>
                </li>
                <li className='header_item'>
                    <NavLink className='header_link' to={"/cart"} >Cart</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header