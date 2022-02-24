import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavList() {
  return (
    <ul className="navbar-nav me-xl-5">
      <li className="nav-item">
        <NavLink to='/' className='nav-link' activeClassName='active'>Home</NavLink>
      </li>
      <li className="nav-item mx-xl-3">
        <NavLink to='/vehicle/type' className='nav-link' activeClassName='active'>Vehicle Type</NavLink>
      </li>
      <li className="nav-item me-xl-3">
        <NavLink to='/history' className='nav-link' activeClassName='active'>History</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/about' className='nav-link' activeClassName='active'>About</NavLink>
      </li>
    </ul>
  )
}
