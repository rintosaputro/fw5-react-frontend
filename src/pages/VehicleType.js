import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-type.css'
import ProductHighlight from '../components/ProductHighlight';
import {BiSearchAlt2} from 'react-icons/bi'
import {IoChevronForward} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import {default as axios} from 'axios';

const VehicleType = () => {
  const [popularTown, setPopularTown] = useState([])
  const [cars, setCars] = useState([])
  const [motorbike, setMotorBike] = useState([])
  const [bike, setBike] = useState([])


  useEffect(() => {
    getVehicle(setPopularTown)
    getVehicle(setCars, 'cars')
    getVehicle(setMotorBike, 'motorbike')
    getVehicle(setBike, 'bike')
  },[])

  const getVehicle = async (setData, type) => {
    const url = type ? `http://localhost:5000/popular?search=${type}&limit=4` : `http://localhost:5000/popular?limit=4`
    const {data} = await axios.get(url)
    setData(data.results)
  }

  const product = (head, arr, type, link ) => {
    return (
      <section className='container'>
        <div className="d-flex justify-content-between head">
          <h2>{head}</h2>
          <Link  to={type ? `/vehicle?type=${type}` : `/vehicle`} className="view-all">View all <IoChevronForward /></Link>
        </div>
        <div className="row">
          {arr.map((data) => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            return <ProductHighlight key={props.id} props={props} />
          })}
        </div>
      </section>
    )
  }

  return (      
    <div className='vehicle-type'>
      <form className="container d-flex position-relative">
        <input className="form-control" type="search" placeholder="Search vehicle (ex. cars, cars name)" />
        <button type="submit" className="btn position-absolute end-0" aria-label="search button">
          <i className="search-icon"><BiSearchAlt2 /></i>
        </button>
      </form>

      {product('Popular in town', popularTown)}
      {product('Cars', cars, 'cars')}
      {product('Motorbike', motorbike, 'motorbike')}
      {product('Bike', bike, 'bike')}
    </div>
  )
}

export default VehicleType
