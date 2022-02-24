import React, { Component, useEffect, useState } from 'react'
import '../assets/css/vehicle-detail.css'
import {BiMinus, BiPlus} from 'react-icons/bi'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import {IoChevronBack} from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'
import {default as axios} from 'axios';
import noImage from '../assets/images/no-image.jpg'

export default function VehicleDetail() {
  const {id} = useParams()

  const [vehicle, setVehilcle] = useState({})
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(1)

  useEffect(() => {
    getVehicle()
  },[])

  const getVehicle = async () => {
    const {data} = await axios.get(`http://localhost:5000/vehicles/${id}`)
    setVehilcle(data.results)
    setPrice(data.results.price)
  }
  
  const countPlus = () => {
    setPrice(price * 2)
    setCount(count + 1)
  }
  const countMinus = () => {
    if(count > 1) {
      setPrice(price / 2)
      setCount(count - 1)
    }
  }
  const priceFormat = () => {
    const res = price.reverse()
  }

  return (
    <div className='vehicle-detail mt-5'>
      <section className='container first-container'>
        <div className="row pt-5 detail-vehicle">
          <Link to='/vehicle/popular' className="back my-4 fw-bold fs-5">
            <IoChevronBack className='me-5'/>
            <span>Back</span>
          </Link>
          <div className="col-12 col-lg-6 img-section">
            <div className="cover-image overflow-hidden">
              <img src={vehicle.image || noImage} alt={vehicle.brand} className='img-fluid'/>
            </div>
            <div className="row carousel d-flex align-items-center mt-4">
              <button className="col-1 btn" aria-label="previous button">
                <GrFormPrevious className='prev' />
                <i className="fa-solid fa-angle-left prev"></i>
              </button>
              <div className="col-5 overflow-hidden rounded">
                <img src="../assets/images/fixie-detail.png" alt="fixie" className="rounded" />
              </div>
              <div className="col-5 overflow-hidden rounded">
                <img src="../assets/images/fixie-detail.png" alt="fixie" className="rounded" />
              </div>
              <button className="col-1 btn" aria-label="next button">
                <GrFormNext className='next' />
                <i className="fa-solid fa-angle-right next"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 description-section">
            <div className="description">
              <h2 className="fw-bold">{vehicle.brand}</h2>
              <p className="text-muted">{vehicle.location}</p>
            </div>
            <div className="status my-3 d-flex flex-column">
              <span className="text-success fw-bold my-2">{vehicle.status}</span>
              <span className="text-danger">No prepayment</span>
            </div>
            <div className="mt-4">
              Capacity: {vehicle.capacity} Person
            </div>
            <div className="my-2">
              Type : {vehicle.type}
            </div>
            <div>
              Reservation: before 2 PM
            </div>
            <div className="price mt-5 text-end">
              Rp.<span className='fs-1'>
                {new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(price)}
                </span>/day
            </div>
            <div className="my-auto">
              <div className="total-day d-flex flex-row justify-content-between align-items-center">
                <button className="btn plus" aria-label="button plus" onClick={countPlus}>
                  <BiPlus className=''/>
                </button>
                <div className="count">{count}</div>
                <button className="btn minus" aria-label="button minus" onClick={countMinus}>
                  <BiMinus className=''/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container form-section mt-5">
        <form className="row">
          <div className="col-12 col-md">
            <a href="#" className="btn btn-black">Chat Admin</a>
          </div>
          <div className="col-12 col-md text-center btn-reservation">
            <a href="/reservation.html" className="btn btn-green">Reservation</a>
          </div>
          <div className="col-12 col-md-3 text-end">
            <button className="btn btn-black">
              <i className="fa-solid fa-heart"></i>
              Like
            </button>
          </div>
        </form>
      </section>
    </div>
  )
    
}

// export default class VehicleDetail extends Component {
//   render() {
//     return (
//       <div className='vehicle-detail'>
//         <section className='container first-container'>

//           <div class="row pt-5 detail-vehicle">
//             <div class="col-12 col-lg-6 img-section">
//               <div class="cover-image overflow-hidden">
//                 <img src="../assets/images/fixie-detail.png" alt="fixie" />
//               </div>
//               <div class="row carousel d-flex align-items-center mt-4">
//                 <button class="col-1 btn" aria-label="previous button">
//                   <GrFormPrevious className='prev' />
//                   <i class="fa-solid fa-angle-left prev"></i>
//                 </button>
//                 <div class="col-5 overflow-hidden rounded">
//                   <img src="../assets/images/fixie-detail.png" alt="fixie" class="rounded" />
//                 </div>
//                 <div class="col-5 overflow-hidden rounded">
//                   <img src="../assets/images/fixie-detail.png" alt="fixie" class="rounded" />
//                 </div>
//                 <button class="col-1 btn" aria-label="next button">
//                   <GrFormNext className='next' />
//                   <i class="fa-solid fa-angle-right next"></i>
//                 </button>
//               </div>
//             </div>
//             <div class="col-12 col-lg-6 description-section">
//               <div class="description">
//                 <h2 class="fw-bold">Fixie-Gray Only</h2>
//                 <p class="text-muted">Yogyakarta</p>
//               </div>
//               <div class="status my-3 d-flex flex-column">
//                 <span class="text-success fw-bold my-2">Available</span>
//                 <span class="text-danger">No prepayment</span>
//               </div>
//               <div class="mt-4">
//                 Capacity: 1 Person
//               </div>
//               <div class="my-2">
//                 Type : Bike
//               </div>
//               <div>
//                 Reservation: before 2 PM
//               </div>
//               <div class="price mt-5 text-end">
//                 Rp.78.000/day
//               </div>
//               <div class="my-auto">
//                 <div class="total-day d-flex flex-row justify-content-between align-items-center">
//                   <button class="btn plus" aria-label="button plus"><BiPlus className=''/></button>
//                   <div class="count">2</div>
//                   <button class="btn minus" aria-label="button minus"><BiMinus className=''/></button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section class="container form-section mt-5">
//           <form class="row">
//             <div class="col-12 col-md">
//               <a href="#" class="btn btn-black">Chat Admin</a>
//             </div>
//             <div class="col-12 col-md text-center btn-reservation">
//               <a href="/reservation.html" class="btn btn-green">Reservation</a>
//             </div>
//             <div class="col-12 col-md-3 text-end">
//               <button class="btn btn-black">
//                 <i class="fa-solid fa-heart"></i>
//                 Like
//               </button>
//             </div>
//           </form>
//         </section>
//       </div>
//     )
//   }
// }
