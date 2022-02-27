import React from 'react'
import '../assets/css/vehicle-detail.css'

export default function Payment() {
  return (
    <div className='vehicle-detail'>
      <section class="container first-section payment">
        <div class="d-flex flex-row head">
          <a href="reservation.html" class="back d-flex mb-5">
            <i class="fa-solid fa-angle-left me-5"></i>
          </a>
          <span>Payment</span>
        </div>
        <div class="row pt-5 detail-vehicle">
          <div class="col-12 col-sm-5 col-md-5 col-xl-4 img-section overflow-hidden">
            <img src="/assets/images/fixie-detail.png" alt="fixie" />
          </div>
          <div class="col-12 col-sm-7 col-md-7 col-xl-8 description-section">
            <div class="description">
              <h2 class="fw-bold">Fixie-Gray Only</h2>
              <p>Yogyakarta</p>
            </div>
            <div class="status my-3 d-flex flex-column">
              <span class="text-muted fw-bold">No prepayment</span>
            </div>
            <div class="my-auto mt-4 code-container">
              <span class="code">#FG1209878YZS</span>
            </div>
            <div class="mt-3 w-50 copy-contain">
              <button class="btn btn-green p-1">Copy booking code</button>
            </div>
          </div>
        </div>

        <div class="rent-data">
          <div class="d-flex flex-row data-item">
            <div class="first-col">
              <div class="border border-dark w-100 fw-bold">Quantity: 2 bikes</div>
            </div>
            <div class="second-col">
              <div class="border border-dark w-100">
                <span class="reservation-date fw-bold">Reservation Date: </span>
                <span>Jan 18 - 20 2021</span></div>
            </div>
          </div>

          <div class="d-flex flex-row data-item">
            <div class="first-col d-flex">
              <div class="border border-dark w-100  second-row order-details">
                <table>
                  <thead>
                    <th class="fw-bold">Order details:</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 bike: Rp.78.000</td>
                    </tr>
                    <tr>
                      <td>1 bike: Rp.78.000</td>
                    </tr>
                    <tr>
                      <td class="fw-bold pt-2">Total: 178.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>          
            </div>
            <div class="second-col">
              <div class="border border-dark w-100  second-row identity">
                <table>
                  <thead>
                    <th class="fw-bold">Identity:</th>
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

        <div class="row align-items-center g-0 mt-4">
          <div class="col-12 col-sm-3">
            <h2 class="fw-bold">Payment Code:</h2>
          </div>
          <div class="col-12 col-sm-4 code-section">
            <div class="d-flex flex-row border justify-content-between align-items-center border-dark payment-code">
              <span class="code">#FG1209878YZS</span>
              <button class="btn btn-black btn-copy">Copy</button>
            </div>
          </div>
          <div class="col-12 col-sm-auto">
            <select class="form-select">
              <option class="d-none">Select payment method</option>
              <option>ATM</option>
              <option>Gopay</option>
            </select>
          </div>
        </div>

        <div class="pay-now mt-5 px-2">
          <a href="#" class="btn btn-green w-100 mt-3">Finish payment: <span class="text-danger time">59:30</span></a>
        </div>
      </section>
    </div>
  )
}
