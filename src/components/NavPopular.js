import React, { Component } from 'react'
import '../assets/css/vehicle-type.css'
import logo from "../assets/images/logo.png"
import user from "../assets/images/profile.png"

export default class NavPopular extends Component {
  render() {
    return (
      <div className='vehicle-type'>
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div class="container-fluid bg-white navigation">
            <a href="index.html" class="navbar-brand">
              <img src={logo} alt="Logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar button">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navigation" id="navbarNav">
              <ul class="navbar-nav me-xl-5">
                <li class="nav-item">
                  <a class="nav-link" href="/index.html">Home</a>
                </li>
                <li class="nav-item mx-xl-3">
                  <a class="nav-link active" href="vehicle-type.html">Vehicle Type</a>
                </li>
                <li class="nav-item me-xl-3">
                  <a class="nav-link" href="#">History</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
              <form class="d-flex position-relative">
                <input class="form-control" type="search" placeholder="Search vehicle" />
                <button type="submit" class="btn position-absolute end-0">
                  <i class="fa-solid fa-magnifying-glass search-icon"></i>
                </button>
              </form>
              <div class="mail-profile ms-xl-5 d-flex align-items-center">
                <a href="#" class="me-4 message"><span class="text-white badge total-message">1</span><i class="fa-regular fa-envelope icon-message"></i></a>
                <a href="profile.html" class="profile"><img src={user} alt="user" /></a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
