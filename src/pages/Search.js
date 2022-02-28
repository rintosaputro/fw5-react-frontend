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
    // if (fil) {
    //   url = `http://localhost:5000/vehicles/category/?limit=8&search=${key}&location=${fil}`
    // }
    // if (min) {
    //   url = `http://localhost:5000/vehicles/category/?limit=8&search=${key}&minimum=${min}`
    // }
    // if (max) {
    //   url = `http://localhost:5000/vehicles/category/?limit=8&search=${key}&maximum=${max}`
    // }
    // if (min && fil) {
    //   url = `http://localhost:5000/vehicles/category/?limit=8&search=${key}&location=${fil}&minimum=${min}`
    // }
    // if (max && fil) {
    //   url = `http://localhost:5000/vehicles/category/?limit=8&search=${key}&location=${fil}&minimum=${max}`
    // }
    // if (fil && max && min) {
    //   url = `http://localhost:5000/vehicles/category/?limit=8&search=${key}&location=${fil}&minimum=${min}&maximum=${max}`
    // }
    // console.log(type)
    console.log(url)
    // const params = searchParams.get('type') ? {type: searchParams.get('type')} 
    // : {search: searchParams.get('keyword') || '', filter: searchParams.get('filter') || ''}

    getVehicle(url)
    navActive()
  }, [searchParams])

  const getVehicle = async (url) => {
    // let url = ''
    // const key = searchParams.get('search')
    // const fil = searchParams.get('location')
    // const min = searchParams.get('minimum')
    // const max = searchParams.get('maximum')

    // if (fil) {
    //   url = `?search=${key}&location=${fil}`
    // }
    // if (min) {
    //   url = `?search=${key}&minimum=${min}`
    // }
    // if (max) {
    //   url = `?search=${key}&maximum=${max}`
    // }
    // if (min && fil) {
    //   url = `?search=${key}&location=${fil}&minimum=${min}`
    // }
    // if (max && fil) {
    //   url = `?search=${key}&location=${fil}&minimum=${max}`
    // }
    // if (fil && max && min) {
    //   url = `?search=${key}&location=${fil}&minimum=${min}&maximum=${max}`
    // }
    // const resUrl = params.search ?
    // (params.type ? 
    //   `http://localhost:5000/popular?limit=8&search=${params.type}` 
    //   : `http://localhost:5000/vehicles/category/?search=${params.search}&filter=${params.filter}&limit=8`) 
    // : 'http://localhost:5000/popular?limit=8'
    // const resUrl = searchParams
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
    const key = ev.target.elements['search'].value
    const fil = ev.target.elements['filter'].value
    navigate(fil ? `/search?keyword=${key}&filter=${fil}` : `/search?keyword=${key}`)
  }

  return (
    <div className='vehicle-type'>
      <section className='container'>
        <form onSubmit={handleSubmit} className="container d-flex position-relative">
          <input className="form-control" name='search' type="search" placeholder="Search vehicle (ex. cars, cars name)" />
          <input className="form-control" name='filter' type="search" placeholder="location" />
          <button type="submit" className="btn position-absolute end-0" aria-label="search button">
            <i className="search-icon"><BiSearchAlt2 /></i>
          </button>
        </form>
        <div className="head">
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
