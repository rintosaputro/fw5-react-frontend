import React from 'react'

export default function Reservation() {
  return (
    <div className='vehicle-detail'>
      <section className="container first-section reservation">
        <div className="d-flex flex-row head">
          <a href="/more-detail-2.html" className="back d-flex mb-5">
            <i className="fa-solid fa-angle-left me-5"></i>
          </a>
          <span>Reservation</span>
        </div>
        <div className="row pt-5 detail-vehicle">
          <div className="col-12 col-lg-7 img-section overflow-hidden">
            <img src="/assets/images/fixie-detail.png" alt="fixie" />
            <div className="cover-image overflow-hidden">
              
            </div>
          </div>
          <div className="col-12 col-lg-5 description-section">
            <div className="description">
              <h2 className="fw-bold">Fixie-Gray Only</h2>
              <p className="text-muted">Yogyakarta</p>
            </div>
            <div className="status my-3 d-flex flex-column">
              <span className="text-danger fw-bold">No prepayment</span>
            </div>
            <div className="my-auto">
              <div className="total-day d-flex flex-row justify-content-between align-items-center">
                <button className="btn" aria-label="button minus"><i className="fa-solid fa-minus minus"></i></button>
                <div className="count">2</div>
                <button className="btn" aria-label="button plus"><i className="fa-solid fa-plus plus"></i></button>           
              </div>
            </div>
            <form>
              <h4 className="fw-bold mt-5">Reservation Date:</h4>
              <input type="text" placeholder="Select date" className="form-control" />
              <select name="date" id="date" className="form-select mt-3">
                <option value="1">1 Day</option>
                <option value="2">2 Day</option>
              </select>
            </form>        
          </div>
        </div>
        <div className="pay-now mt-5 px-2">
          <a href="payment.html" className="btn btn-green w-100 mt-3">Pay now: Rp.178.000</a>
        </div>
      </section>
    </div>
  )
}
