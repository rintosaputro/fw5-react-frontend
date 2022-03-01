import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-type.css'
import ProductHighlight from '../components/ProductHighlight';
import {BiSearchAlt2} from 'react-icons/bi'
import {IoChevronForward} from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom';
import {default as axios} from 'axios';

const VehicleType = () => {
  const [popularTown, setPopularTown] = useState([])
  const [cars, setCars] = useState([])
  const [pickUP, setPickUp] = useState([])
  const [motorbike, setMotorBike] = useState([])
  const [bike, setBike] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    getVehicle(setPopularTown)
    getVehicle(setCars, 'cars')
    getVehicle(setPickUp, 'pick up')
    getVehicle(setMotorBike, 'motorbike')
    getVehicle(setBike, 'bike')
  },[])

  const getVehicle = async (setData, type, limit = 4) => {
    const url = type ? `http://localhost:5000/popular?search=${type}&limit=${limit}` : `http://localhost:5000/popular?limit=${limit}`
    const {data} = await axios.get(url)
    setData(data.results)
  }  
  
  const handleSubmit = (ev) => {
    ev.preventDefault()
    const key = ev.target.elements['brand'].value
    const fil = ev.target.elements['location'].value
    const min = ev.target.elements['minimum'].value
    const max = ev.target.elements['maximum'].value
    let url = ''
    if (key) {
      url = `/search?keyword=${key}`
    }
    if (fil) {
      url = `/search?keyword=${key}&location=${fil}`
    }
    if (min) {
      url = `/search?keyword=${key}&min=${min}`
    }
    if (max) {
      url = `/search?keyword=${key}&max=${max}`
    }
    if (min && fil) {
      url = `/search?keyword=${key}&location=${fil}&min=${min}`
    }
    if (max && fil) {
      url = `/search?keyword=${key}&location=${fil}&min=${max}`
    }
    if (fil && max && min) {
      url = `/search?keyword=${key}&location=${fil}&min=${min}&max=${max}`
    }
    navigate(url)
  }

  const product = (head, arr, type, link ) => {
    return (
      <section className='container' id='parrent'>
        <div className="d-flex justify-content-between head">
          <h2>{head}</h2>
          <Link  to={type ? `/vehicle?type=${type}` : `/vehicle`} className="view-all">View all <IoChevronForward /></Link>
        </div>
        <div className="row">
          {arr.map((data) => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            if (data.qty > 0) return <ProductHighlight key={props.id} props={props} />
          })}
        </div>
      </section>
    )
  }

  return (      
    <div className='vehicle-type'>
      <section className='form-search'>
        <form onSubmit={handleSubmit} className="container row g-2  mx-auto">
          <div className='col-12 col-md-6 my-2'>
            <input className="form-control" name='brand' type="search" placeholder="Search vehicle (ex. cars, cars name)" />
          </div>
          <div className='col-12 col-md-6 my-2'>
            <input className="form-control" name='location' type="search" placeholder="Location" />
          </div>
          <div className='col-12 col-md-6'>
            <input className='form-control my-2' name='minimum' type='number' placeholder='Min price' />
          </div>
          <div className='col-12 col-md-6'>
            <input className='form-control my-2' name='maximum' type='number' placeholder='Max price' />
          </div>
          <button type="submit" className="col-12 btn-green btn text-center fs-5" aria-label="search button">
            Search <i className="search-icon"><BiSearchAlt2 /></i>
          </button>
        </form>
      </section>
      {product('Popular in town', popularTown)}
      {product('Cars', cars, 'cars')}
      {product('Motorbike', motorbike, 'motorbike')}
      {product('Bike', bike, 'bike')}
      {product('Pick Up', pickUP, 'pick up')}
    </div>
  )
}

export default VehicleType
