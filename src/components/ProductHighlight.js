import React from 'react'
import { Link } from 'react-router-dom';
import noImage from '../assets/images/no-image.jpg'
import '../assets/css/product-highlight.css'

export default function ProductHighlight({props}) {
  const {image, location, brand, id} = props;
  const bg = image || noImage
  return (
    <div className="col-6 col-lg-3 mb-3 text-center product-highlight">
      <div className='d-flex overflow-hidden main-highlight' style={{backgroundColor: '#f1f2f6', borderRadius: '8px'}}>
        <Link to={`/vehicle/${id}`} className='position-relative align-self-end'>
          <img className="img-fluid mb-0" src={bg} alt={brand} />
          <div className="highlight position-absolute start-0 text-start ps-1">
            <h5>{brand}</h5>
            <span>{location}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
