/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../assets/css/signup.css'
import google from '../assets/images/google.png'
import logo from '../assets/images/logo.png'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'

export default class Signup extends Component {
  render() {
    return (
      <main class="row signup-page">
        <div class="col col-sm-5 col-md-6 img-section">
        </div>
        <div class="col-12 col-sm-7 col-md-6 pt-5 form-section">
          <div class="opacity">
            <form class="d-flex flex-column justify-content-center align-items-center">
              <h2 class="my-5 container header-sign">Sign Up</h2>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="/login.html" class="btn mt-5 signup">Sign Up</a>
              <div class="row d-flex align-items-center another">
                <div class="col"><hr /></div>
                <div class="col-5 text-muted text-center text-another">or try another way</div>
                <div class="col"><hr /></div>
              </div>
              <a href="#" class="btn my-5 google"><img src={google} alt="google" /> Sign Up With Google</a>
              <a href="/login.html" class="btn login">Login</a> <br />
            </form>
      
            <footer class="bg-light container pt-5">
              <div>
                <img src={logo} alt="logo" width="20px" />
                <p class="description">Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</p>
                <p>©2020 Vehicle Rental Center. All rights reserved</p>
              </div>
              <div class="row social">
                <ul class="list-group">
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
