import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavList from './NavList'
import '../../assets/css/vehicle-type.css'
import logo from "../../assets/images/logo.png"
import photo from "../../assets/images/profile.png"
import {FiMail} from 'react-icons/fi'
import {AiOutlineSearch} from 'react-icons/ai'

export default function NavPopular() {
  const navigate = useNavigate()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const search = ev.target.elements['search'].value
    navigate(`?type=${search}`)
  }

  return (
    <div className='vehicle-type'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid bg-white navigation">
          <a href="index.html" className="navbar-brand">
            <img src={logo} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navigation" id="navbarNav">
            <NavList />
            <form onSubmit={handleSubmit} className="d-flex position-relative">
              <input name='search' className="form-control" type="search" placeholder="Search vehicle" />
              <button type="submit" className="btn position-absolute end-0">
                <AiOutlineSearch className='search-icon' />
              </button>
            </form>
            <div className="mail-profile ms-xl-5 d-flex align-items-center">
              <Link to='/message' className="me-4 message"><span className="text-white badge total-message">1</span><FiMail className='icon-message' /></Link>
              <Link to='/profile' className='profile'>
                <img src={photo} alt="Photoprofile." />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
