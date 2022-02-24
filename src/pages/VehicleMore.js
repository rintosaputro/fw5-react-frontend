import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-type.css'
import ProductHighlight from '../components/ProductHighlight'
import {default as axios} from 'axios';
import { useSearchParams } from 'react-router-dom';

export default function VehicleMore() {
  const [vehicle, setVehilcle] = useState([])
  const [page, setPage] = useState({})

  useEffect(() => {
    getVehicle()
  }, [])

  const [searchParams] = useSearchParams()
  const getVehicle = async () => {
    const params = searchParams.get('type')
    const url = params ? `http://localhost:5000/popular?limit=8&search=${params}` : 'http://localhost:5000/popular?limit=8'
    const {data} = await axios.get(url)
    setVehilcle(data.results) 
    setPage(data.pageInfo)
  }

  const nextPage = async () => {
    const {data} = await axios.get(page.next)
    setVehilcle([...vehicle, ...data.results])
    setPage(data.pageInfo)
  }

  return (
    <div className='vehicle-type'>
      <section className='container'>
        <div className="head">
          <h2>Popular in town</h2>
          <p className="text-muted text-center">Click item to see details and reservation</p>
        </div>
        <div className='row'>
          {vehicle.map(data => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            return <ProductHighlight props={props} />
          })}
        </div>
        <div className='my-4 text-center'>
          {page.next ?
            <button onClick={nextPage} className='btn btn-success w-50'>Next</button> :
            <p class="text-center text-muted py-5">There is no vehicle left</p>    
          }
        </div>
        
      </section>
    </div>
  )
}
