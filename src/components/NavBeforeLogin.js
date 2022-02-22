/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import logo from "../assets/images/logo.png"

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid bg-white nav-fluid">
          <div className="container navigation">
            <a href="index.html" className="navbar-brand">
              <img src={logo} alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse main-nav" id="navbarNav">
              <ul className="navbar-nav me-xl-5">
                <li className="nav-item">
                  <a className="nav-link active" href="/index.html">Home</a>
                </li>
                <li className="nav-item mx-xl-3">
                  <a className="nav-link" href="vehicle-type.html">Vehicle Type</a>
                </li>
                <li className="nav-item me-xl-3">
                  <a className="nav-link" href="history.html">History</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>
              <div className="button-section ms-lg-5">
                <a href="../pages/Login" className="me-lg-4 btn btn-outline">Login</a>
                <a href="signup.html" className="btn btn-green">Register</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
