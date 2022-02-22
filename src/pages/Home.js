/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../assets/css/home.css'
import Navigation from '../components/NavAfterLogin';
import Footer from "../components/Footer";
import merapi from '../assets/images/merapi.png';
import telukBogam from '../assets/images/kallimantan.png';
import bromo from '../assets/images/malang.png';
import malioboro from '../assets/images/malioboro.png';
import user from '../assets/images/user-homepage.png'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
import {FaStar} from 'react-icons/fa'

export default class Home extends Component {
  state = {
    data: [
      {
        location: 'Merapi',
        region: 'Yogyakarta',
        image: merapi
      },
      {
        location: 'Teluk Bogam',
        region: 'Kalimantan',
        image: telukBogam
      },
      {
        location: 'Bromo',
        region: 'Malang',
        image: bromo
      },
      {
        location: 'Malioboro',
        region: 'Yogyakarta',
        image: malioboro
      },
    ]
  }
  render() {
    return (
      <>
      <Navigation />
      <header class="header-homepage home">
        <div class="opacity">
          <div class="container">
            <h1>Explore and <br/> Travel</h1>
            <p>Vehicle Finder</p>
            <div class="line"></div>
            <form class="col-sm-12 col-lg-6">
              <div class="row">
                <div class="col-sm-6">
                  <select class="option-form">
                    <option>Location</option>
                    <option></option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <select class="option-form">
                    <option>Type</option>
                    <option></option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <select class="option-form">
                    <option>Payment</option>
                    <option></option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <label for="date" class="date-section">
                    <input type="date" class="option-form" id="date" />
                  </label>
                </div>
              </div>
              <button class="btn btn-green" aria-label="explore">Explore</button>
            </form>
          </div>
        </div>
      </header>
      
      <main class="container home">
        <section class="destination">
          <div class="d-flex justify-content-between align-items-center head">
            <h2>Popular in town</h2>
            <a href="more-detail.html" class="view-all">View all <i class="fa-solid fa-angle-right"></i></a>
          </div>
          <div class="row">
            {this.state.data.map((item) => {
              return <div class="col-6 col-lg-3 mb-3 text-center">
                <a href="#" className='d-inline-block position-relative'>
                  <img class="img-fluid" src={item.image} alt={item.location} />
                  <div class="highlight position-absolute start-0">
                    <h5>{item.location}</h5>
                    <span>{item.region}</span>
                  </div>
                </a>
              </div>
            })}
          </div>
        </section>

        <section class="testimoni mt-5">
          <h2>Testimonials</h2>
          <div class="row">
            <div class="col-12 col-lg-6 mt-5 left-testi">
              <div class="comment">
                <div class="stars">
                  {[...Array(5)].map(() => <FaStar />)}
                </div>
                <p>”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</p>
              </div>
              <div class="profile">
                <h5>Edward Newgate</h5>
                <span>Founder Circle</span>
              </div>
            </div>
            <div class="col-12 col-lg-6 mt-5 profile">
              <div class="image">
                <img src={user} alt="Edward" />
                <div class="ms-auto next-prev">
                  <button class="btn disabled next" aria-label="next"><GrFormPrevious /></button>
                  <button class="btn prev" aria-label="previous"><GrFormNext /></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      </>
    )
  }
}
