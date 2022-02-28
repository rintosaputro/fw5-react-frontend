import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-type.css'
import ProductHighlight from '../components/ProductHighlight'
import {default as axios} from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {BiSearchAlt2} from 'react-icons/bi'

export default function Search(props) {
  const [vehicle, setVehilcle] = useState([])
  const [page, setPage] = useState({})
  
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const navActive = () => {
    const navList = document.getElementById('vehicleType')
    navList.classList.add('active')
    // navList.classList.remove('active')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const key = searchParams.get('keyword') || ''
    const fil = searchParams.get('location') || ''
    const min = searchParams.get('min') || 0
    const max = searchParams.get('max') || 100000000
    let url = `http://localhost:5000/vehicles/category/?limit=8&search=${key}&location=${fil}&minimum=${min}&maximum=${max}`
    getVehicle(url)
    navActive()
  }, [searchParams])

  const getVehicle = async (url) => {
    const {data} = await axios.get(url)
    setVehilcle(data.results) 
    setPage(data.pageInfo) 
  }

  const nextPage = async () => {
    try {
      const {data} = await axios.get(page.next)
      setVehilcle([...vehicle, ...data.results])
      setPage(data.pageInfo)
    } catch (err) {
      console.log(err.message)
    }
  }
  const handleSubmit = (ev) => {
    ev.preventDefault()
    // const key = ev.target.elements['search'].value
    // const fil = ev.target.elements['filter'].value
    // navigate(fil ? `/search?keyword=${key}&filter=${fil}` : `/search?keyword=${key}`)
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

  return (
    <div className='vehicle-type'>
      <section className='form-search'>
        <form onSubmit={handleSubmit} className="container row g-0  mx-auto">
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
      <section className='container'>
        {/* <form onSubmit={handleSubmit} className="container d-flex position-relative">
          <input className="form-control" name='search' type="search" placeholder="Search vehicle (ex. cars, cars name)" />
          <input className="form-control" name='filter' type="search" placeholder="location" />
          <button type="submit" className="btn position-absolute end-0" aria-label="search button">
            <i className="search-icon"><BiSearchAlt2 /></i>
          </button>
        </form> */}
        <div className="head mt-5">
          {/* <h2>{searchParams.get('type') || searchParams.get('search') || 'Popular in town'}</h2> */}
          {vehicle.length > 0 ? <p className="text-muted text-center">Click item to see details and reservation</p> 
          : <p className="text-center text-muted py-5">
            Your search '{searchParams.get('keyword')} {searchParams.get('filter')}' did not match any document
            </p>}
        </div>
        <div className='row'>
          {vehicle.map(data => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            return <ProductHighlight key={props.id} props={props} />
          })}
        </div>
        <div className='my-4 text-center'>
          {vehicle.length > 0 ?
          (page.next ?
            <button onClick={nextPage} className='btn btn-green w-25'>Next</button> :
            <p className="text-center text-muted py-5">There is no vehicle left</p>   
          ) : <></>
          }
        </div>
        
      </section>
    </div>
  )
}
