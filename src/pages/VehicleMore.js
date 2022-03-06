import React, { useEffect } from 'react'
import '../assets/css/vehicle-type.css'
import ProductHighlight from '../components/ProductHighlight'
import { useSearchParams } from 'react-router-dom';
import activeNav from '../helper/activeNav';
import { useDispatch, useSelector } from 'react-redux';
import { nextPopular } from '../redux/actions/vehicle';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function VehicleMore() {
  const [searchParams] = useSearchParams()
  const params = searchParams.get('type')
  const state = params ? `${params}` : 'popular'
  const data = useSelector(state => state.vehicleReducer)
  const dispatch = useDispatch()
  
  const nextPage = () => {
    dispatch(nextPopular(data[state].pageInfo.currentPage + 1))
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    activeNav()
  }, [])

  return (
    <div className='vehicle-type'>
      <section className='container'>
        <div className="head">
          <h2>{searchParams.get('type') || searchParams.get('search') || 'Popular in town'}</h2>
          {data[state].vehicle.length > 0 ? <p className="text-muted text-center">Click item to see details and reservation</p> 
          : <p className="text-center text-muted py-5">Your search '{searchParams.get('search')}' did not match any document</p>}
        </div>
        <div className='row'>
          {data[state].isLoading && <LoadingSkeleton count='8' />}
          {data[state].vehicle.map(data => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            if (data.qty > 0) return <ProductHighlight key={props.id} props={props} />
          })}
        </div>
        <div className='my-4 text-center'>
          {data[state].vehicle.length > 0 ?
          (data[state].pageInfo.next ?
            <button onClick={nextPage} className='btn btn-green w-25'>Next</button> :
            <p className="text-center text-muted py-5">There is no vehicle left</p>   
          ) : <></>
          }
        </div>
        
      </section>
    </div>
  )
}
