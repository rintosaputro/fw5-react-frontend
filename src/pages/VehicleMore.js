import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-type.css'
import ProductHighlight from '../components/ProductHighlight'
import {default as axios} from 'axios';
import { useSearchParams } from 'react-router-dom';
import activeNav from '../helper/activeNav';
import { useDispatch, useSelector } from 'react-redux';
import { nextPopular } from '../redux/actions/vehicle';

export default function VehicleMore() {
  const [searchParams] = useSearchParams()
  const params = searchParams.get('type')
  const {vehicle, pageInfo} = useSelector(state => params ? [] : state.vehicleReducer.popular )
  const dispatch = useDispatch()
  
  const nextPage = () => {
    dispatch(nextPopular(pageInfo.currentPage + 1))
    console.log(pageInfo.currentPage)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    activeNav()
  }, [dispatch])  

  return (
    <div className='vehicle-type'>
      <section className='container'>
        <div className="head">
          <h2>{searchParams.get('type') || searchParams.get('search') || 'Popular in town'}</h2>
          {vehicle.length > 0 ? <p className="text-muted text-center">Click item to see details and reservation</p> 
          : <p className="text-center text-muted py-5">Your search '{searchParams.get('search')}' did not match any document</p>}
        </div>
        <div className='row'>
          {vehicle.map(data => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            if (data.qty > 0) return <ProductHighlight key={props.id} props={props} />
          })}
        </div>
        <div className='my-4 text-center'>
          {vehicle.length > 0 ?
          (pageInfo.next ?
            <button onClick={nextPage} className='btn btn-green w-25'>Next</button> :
            <p className="text-center text-muted py-5">There is no vehicle left</p>   
          ) : <></>
          }
        </div>
        
      </section>
    </div>
  )
}
