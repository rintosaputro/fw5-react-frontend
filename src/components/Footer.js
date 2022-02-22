/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../assets/css/footer.css'
import logo from '../assets/images/logo.png'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="bg-light pt-3">
          <div className="container row">
            <div className="col-lg-5">
              <img src={logo} alt="logo" />
              <p className="description">Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</p>
              <p>©2020 Vehicle Rental Center. All rights reserved</p>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="my-5 col-12 col-md-4">
                  <h5>Destinations</h5>
                  <ul className="list-group">
                    <li>Bali</li>
                    <li>Yogyakarta</li>
                    <li>Jakarta</li>
                    <li>Kalimantan</li>
                    <li>Malang</li>
                  </ul>
                </div>
                <div className="my-5 col-12 col-md-4">
                  <h5>Vehicle</h5>
                  <ul className="list-group">
                    <li>Bike</li>
                    <li>Cars</li>
                    <li>Motorbike</li>
                    <li>Return Times</li>
                    <li>FAQs</li>
                  </ul>
                </div>
                <div className="my-5 col-12 col-md-4">
                  <h5>Interests</h5>
                  <ul className="list-group">
                    <li>Adventure Travel</li>
                    <li>Art And Culture</li>
                    <li>wildlife And Nature</li>
                    <li>Family Holidays</li>
                    <li>Culinary Trip</li>
                  </ul>
                </div>
              </div>
            </div>
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
      </>
    )
  }
}
