import React, { useEffect, useState } from 'react'
import {default as axios} from 'axios';
import '../assets/css/home.css'
import user from '../assets/images/user-homepage.png'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
import {FaStar} from 'react-icons/fa'
import ProductHighlight from '../components/ProductHighlight';
import { Link, useNavigate } from 'react-router-dom';
import {IoChevronForward} from 'react-icons/io5'

const Home = () => {
  const [vehicle, setVehilcle] = useState([])
  const [category, setCategory] = useState([])
  const [allVehicles, setAllVehicles] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    getVehicle()
    getCategory()
  },[])

  const getVehicle = async () => {
    const {data} = await axios.get('http://localhost:5000/popular?limit=4')
    setVehilcle(data.results)
  }
  const getCategory = async () => {
    const {data} = await axios.get('http://localhost:5000/categories?limit=100')
    setCategory(data.results)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const key = document.getElementById('search').value
    const location = document.getElementById('location').value
    const date = document.getElementById('date').value
    console.log(date)
    navigate(`/search?keyword=${key}&filter=${location}&date=${date}`)
  }

  
  return (
    <>
    <header className="header-homepage home">
      <div className="opacity">
        <div className="container">
          <h1>Explore and <br/> Travel</h1>
          <p>Vehicle Finder</p>
          <div className="line"></div> 
          <form className="col-sm-12 col-lg-6">
            <div className="">
              <div className='col-12'>
                <input name='search' id='search' type='search' placeholder='Type the vehicle (ex. motorbike, cars)' className='option-form' />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <select id='location' className="option-form">
                  <option className='d-none'>Location</option>
                  <option value='Jakarta'>Jakarta</option>
                  <option value='Bandung'>Bandung</option>
                  <option value='Yogyakarta'>Yogyakarta</option>
                  <option value='Depok'>Depok</option>
                  <option value='Ngawi'>Ngawi</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label className="date-section">
                  <input name='date' type="date" className="option-form" id="date" />
                </label>
              </div>
            </div>
            <button onClick={handleSubmit} className="btn btn-green" aria-label="explore">Search</button>
          </form>
        </div>
      </div>
    </header>

    <main className="container home">
      <section className="destination">
        <div className="d-flex justify-content-between align-items-center head">
          <h2>Popular in town</h2>
          <Link to='/vehicle' className="view-all">View all <IoChevronForward /></Link>
        </div>
        <div className="row">
          {vehicle.map((data) => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            if (data.qty > 0) return <ProductHighlight key={props.id} props={props} />
          })}
        </div>
      </section>

      <section className="testimoni mt-5">
        <h2>Testimonials</h2>
        <div className="row">
          <div className="col-12 col-lg-6 mt-5 left-testi">
            <div className="comment">
              <div className="stars">
                {[...Array(5)].map((data,index) => <span key={index}><FaStar /></span>)}
              </div>
              <p>”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</p>
            </div>
            <div className="profile">
              <h5>Edward Newgate</h5>
              <span>Founder Circle</span>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-5 profile">
            <div className="image">
              <img src={user} alt="Edward" />
              <div className="ms-auto next-prev">
                <button className="btn disabled next" aria-label="next"><GrFormPrevious /></button>
                <button className="btn prev" aria-label="previous"><GrFormNext /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home