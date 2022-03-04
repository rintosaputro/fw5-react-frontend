/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../assets/css/signup.css'
import google from '../assets/images/google.png'
import logo from '../assets/images/logo.png'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Signup extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <main className="row signup-page">
        <div className="col col-sm-5 col-md-6 img-section">
        </div>
        <div className="col-12 col-sm-7 col-md-6 pt-5 form-section">
          <div className="opacity">
            <form className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="my-5 container header-sign">Sign Up</h2>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="/login.html" className="btn mt-5 signup">Sign Up</a>
              <div className="row d-flex align-items-center another">
                <div className="col"><hr /></div>
                <div className="col-5 text-muted text-center text-another">or try another way</div>
                <div className="col"><hr /></div>
              </div>
              <a href="#" className="btn my-5 google"><img src={google} alt="google" /> Sign Up With Google</a>
              <Link to='/login' className="btn login">Login</Link> <br />
            </form>
      
            <footer className="bg-light container pt-5">
              <div>
                <Link to='/'><img src={logo} alt="logo" width="20px" /></Link>
                <p className="description">Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</p>
                <p>©2020 Vehicle Rental Center. All rights reserved</p>
              </div>
              <div className="row social">
                <ul className="list-group">
                <li> <a href="#"><FaTwitter /></a> </li>
                <li><a href="#"><FaFacebookF /></a></li>
                <li><a href="#"><FaInstagram /></a> </li>
                <li><a href="#"><FaLinkedinIn /></a></li>
                <li><a href="#"><FaYoutube /></a></li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </main>
    )
  }
}
