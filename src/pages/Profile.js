import React from 'react'
import '../assets/css/profile.css'

export default function Profile() {
  return (
    <div className='profile'>
      <header className="container">
        <h1>Profile</h1>
        <div className="profle-header">
          <div className="text-center">
            <div className="image-profile">
              <img src="/assets/images/profile.png" alt="photo profile" />
              <button className="btn-pen badge"><i className="fa-solid fa-pen"></i></button>
            </div>
            <h2 className="mt-5">Samantha Doe</h2>
            <p className="text-muted">samanthadoe@mail.com<br/>
              +62833467823 <br/>
              Has been active since 2013
            </p>
          </div>
        </div>
      </header>
      
      <section className="container mb-5">
        <form>
          <div className="gender mb-5">
            <input type="radio" className="form-check-input" id="male" name="gender" />
            <label for="male" className="me-5 text-muted">Male</label>
            <input type="radio" className="form-check-input ms-5" id="female" name="gender" checked />
            <label for="female">Female</label>
          </div>
          <h4>Contact</h4>
          <div className="row-cols-12 contact">
            <div className="col mt-4">
              <label>Email Adress:</label>
              <input className="form-control form-contact" type="email" value="zulaikha17@gmail.com" />
            </div>
            <div className="col mt-4">
              <label>Adress:</label>
              <textarea className="form-control form-contact">Iskandar Street no. 67 Block A Near Bus Stop</textarea>
            </div>
            <div className="col mt-4"> 
              <label>Mobile number:</label>
              <input className="form-control form-contact" type="text" value="(+62)813456782" />
            </div>
          </div>
          <h4 className="mt-5">Identity</h4>
          <div className="row mt-4 identity">
            <div className="col-6 pe-lg-5">
              <label>Display name:</label> <br/>
              <input className="form-control form-contact" type="text" value="zulaikha" />
            </div>
            <div className="col-6 ps-lg-5">
              <label>DD/MM/YY</label> <br/>
              <input className="form-control form-contact" type="text" value="03/09/2003" />
            </div>
          </div>
          <div className="row btn-group d-flex flex-row justify-content-between">
            <div className="col-lg-4 text-center">
              <button className="my-3 btn btn-save">Save Changes</button>
            </div>
            <div className="col-lg-4 text-center">
              <button className="my-3 btn btn-edit">Edit Password</button>
            </div>
            <div className="col-lg-4 text-center">
              <button className="my-3 btn btn-cancel">Cancel</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
