import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-detail.css'
import {default as axios} from 'axios'
import { useParams } from 'react-router-dom'

export default function Payment() {
  const [vehicle, setVehilcle] = useState({})

  useEffect(() => {
    getVehicle()
  }, [])

  const {id, qty} = useParams()
  const getVehicle = async () => {
    const {data} = await axios.get(`http://localhost:5000/vehicles/${id}`)
    setVehilcle(data.results)
    console.log(data.results)
  }
  
  return (
    <div className='vehicle-detail'>
      <section className="container first-section payment">
        <div className="d-flex flex-row head">
          <a href="reservation.html" className="back d-flex mb-5">
            <i className="fa-solid fa-angle-left me-5"></i>
          </a>
          <span>Payment</span>
        </div>
        <div className="row pt-5 detail-vehicle">
          <div className="col-12 col-sm-5 col-md-5 col-xl-4 img-section overflow-hidden">
            <img src="/assets/images/fixie-detail.png" alt="fixie" />
          </div>
          <div className="col-12 col-sm-7 col-md-7 col-xl-8 description-section">
            <div className="description">
              <h2 className="fw-bold">Fixie-Gray Only</h2>
              <p>Yogyakarta</p>
            </div>
            <div className="status my-3 d-flex flex-column">
              <span className="text-muted fw-bold">No prepayment</span>
            </div>
            <div className="my-auto mt-4 code-container">
              <span className="code">#FG1209878YZS</span>
            </div>
            <div className="mt-3 w-50 copy-contain">
              <button className="btn btn-green p-1">Copy booking code</button>
            </div>
          </div>
        </div>

        <div className="rent-data">
          <div className="d-flex flex-row data-item">
            <div className="first-col">
              <div className="border border-dark w-100 fw-bold">Quantity: 2 bikes</div>
            </div>
            <div className="second-col">
              <div className="border border-dark w-100">
                <span className="reservation-date fw-bold">Reservation Date: </span>
                <span>Jan 18 - 20 2021</span></div>
            </div>
          </div>

          <div className="d-flex flex-row data-item">
            <div className="first-col d-flex">
              <div className="border border-dark w-100  second-row order-details">
                <table>
                  <thead>
                    <tr>
                      <th className="fw-bold">Order details:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 bike: Rp.78.000</td>
                    </tr>
                    <tr>
                      <td>1 bike: Rp.78.000</td>
                    </tr>
                    <tr>
                      <td className="fw-bold pt-2">Total: 178.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>          
            </div>
            <div className="second-col">
              <div className="border border-dark w-100  second-row identity">
                <table>
                  <thead>
                    <tr>
                      <th className="fw-bold">Identity:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Samantha Doe(+6290987682)</td>
                    </tr>
                    <tr>
                      <td>samanthadoe@mail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center g-0 mt-4">
          <div className="col-12 col-sm-3">
            <h2 className="fw-bold">Payment Code:</h2>
          </div>
          <div className="col-12 col-sm-4 code-section">
            <div className="d-flex flex-row border justify-content-between align-items-center border-dark payment-code">
              <span className="code">#FG1209878YZS</span>
              <button className="btn btn-black btn-copy">Copy</button>
            </div>
          </div>
          <div className="col-12 col-sm-auto">
            <select className="form-select">
              <option className="d-none">Select payment method</option>
              <option>ATM</option>
              <option>Gopay</option>
            </select>
          </div>
        </div>

        <div className="pay-now mt-5 px-2">
          <a href="#" className="btn btn-green w-100 mt-3">Finish payment: <span className="text-danger time">59:30</span></a>
        </div>
      </section>
    </div>
  )
}
