import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../style/Header.css'
import { AiOutlineMenu } from 'react-icons/ai'

function Header() {
  return (
    <header className='header'>
        <span className='headerTitle'>
          <Link to='/'>Neon City Fitness</Link>
        </span>
        <nav className='navbar'>
            <div className='nav_dropdown'>
                <button className='nav_button'><AiOutlineMenu className='nav_icon' /></button>
                <div className='nav_dropItems'>
                    <NavLink to='/locations'>Locations</NavLink>
                    <NavLink to='/memberships'>Memberships</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/join'>Join Now</NavLink>
                </div>
            </div>
            <div className='nav_list'>
              <NavLink className='navlink' to='/locations'>Locations</NavLink>
              <NavLink className='navlink' to='/memberships'>Memberships</NavLink>
              <NavLink className='navlink' to='/contact'>Contact</NavLink>
              <NavLink className='navlink' to='/join'>Join Now</NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Header