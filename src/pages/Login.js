import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../assets/css/login.css'
import dot from '../assets/images/dot-register.png'
import google from '../assets/images/google.png'

const Login = ({auth}) => {
  useEffect(() => {
    console.log(auth)
  })
  const handleSubmit = (ev) => {
    ev.preventDefault()
    
  }
  return (
    <>
      <header className="register login">
        <div className="opacity">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 desc">
                <div className="dot top"><img src={dot} alt="dot" /></div>
                <div className="d-flex flex-column align-items-center left-section">
                  <h1>Le`ts Explore <br /> The World</h1>
                  <div className="reverse-top">
                    <a href="#" className="dont-have">Don`t have account?</a> <br />
                    <Link to='/signup' className="btn btn-signup">Sign Up</Link>
                  </div>
                </div>
                <div className="dot bottom"><img src={dot} alt="dot" /></div>
              </div>
              
              <div className="col-12 col-md-6 form">
                <form onSubmit={handleSubmit} className="form-register row">
                  <input name='email' type="email" placeholder="Email" /> <br />
                  <input name='password' type="password" placeholder="Password" /> <br />
                  <div><Link to='/forgot-password' className="forgot">Forgot password?</Link> <br/></div>
                  <button type='submit' className="btn login">Login</button>
                  <a href="#" className="btn google"><img src={google} alt="google"/> Login With Google</a>
                  <div className="reverse-bottom d-none g-0">
                    <a href="#" className="dont-have">Don’t have account?</a> <br />
                    <Link to='/signup' className="btn btn-signup">Sign Up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

const mapStateToProps = state => ({auth: state.auth}) // read data from redux

export default connect(mapStateToProps)(Login)
