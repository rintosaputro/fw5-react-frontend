/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../assets/css/nav-after.css'
import {FiMail} from 'react-icons/fi'
import logo from '../assets/images/logo.png'
import photo from '../assets/images/profile.png'

export default class NavAfterLogin extends Component {
  render() {
    return (
      <div>
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
              <div class="mail-profile ms-xl-5 d-flex align-items-center">
                <a href="#" class="me-4 message"><span class="text-white badge total-message">1</span><FiMail className='icon-message' /></a>
                <a href="profile.html" class="profile"><img src={photo} alt="Photoprofile." /></a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
