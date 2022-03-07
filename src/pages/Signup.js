import React, { Component, useEffect } from 'react'
import '../assets/css/signup.css'
import google from '../assets/images/google.png'
import logo from '../assets/images/logo.png'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/actions/user'

const Signup = () => {
  const dispatch = useDispatch()
  const {auth} = useSelector(state => state)
  const {registerUser} = useSelector(state => state)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const name = ev.target.elements['name'].value
    const username = ev.target.elements['username'].value
    const email = ev.target.elements['email'].value
    const password = ev.target.elements['password'].value
    const data = {name, username, email, password}
    dispatch(register(data))
    if (registerUser.isError) {
      alert(`${registerUser.message}`)
    } else {
      alert(`${registerUser.message}`)
      // navigate('/verify')
    }
  }

  return (
    <main className="row signup-page">
      {auth.token !== null && <Navigate to='/profile' />}
      <div className="col col-sm-5 col-md-6 img-section">
      </div>
      <div className="col-12 col-sm-7 col-md-6 pt-5 form-section">
        <div className="opacity">
          <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="my-5 container header-sign">Sign Up</h2>
            <input type="text" placeholder="Name" name='name' />
            <input type="text" placeholder="Username" name='username' />
            <input type="email" placeholder="Email" name='email' />
            <input type="password" placeholder="Password" name='password'/>
            <button type='submit' className="btn fw-bold mt-5 signup">Sign Up</button>
            <div className="row d-flex align-items-center another">
              <div className="col"><hr /></div>
              <div className="col-5 text-muted text-center text-another">or try another way</div>
              <div className="col"><hr /></div>
            </div>
            <Link to="#" className="btn fw-bold my-5 google"><img src={google} alt="google" /> Sign Up With Google</Link>
            <Link to='/login' className="btn fw-bold login">Login</Link> <br />
          </form>
    
          <footer className="bg-light container pt-5">
            <div>
              <Link to='/'><img src={logo} alt="logo" width="20px" /></Link>
              <p className="description">Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</p>
              <p>©2020 Vehicle Rental Center. All rights reserved</p>
            </div>
            <div className="row social">
              <ul className="list-group">
              <li> <a href="#"><FaTwitter /></a> </li>
              <li><a href="#"><FaFacebookF /></a></li>
              <li><a href="#"><FaInstagram /></a> </li>
              <li><a href="#"><FaLinkedinIn /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}

export default Signup
// export default class Signup extends Component {
//   componentDidMount() {
//     window.scrollTo(0, 0)
//   }
//   render() {
//     return (
//       <main className="row signup-page">
//         <div className="col col-sm-5 col-md-6 img-section">
//         </div>
//         <div className="col-12 col-sm-7 col-md-6 pt-5 form-section">
//           <div className="opacity">
//             <form className="d-flex flex-column justify-content-center align-items-center">
//               <h2 className="my-5 container header-sign">Sign Up</h2>
//               <input type="text" placeholder="Name" name='name' />
//               <input type="text" placeholder="Username" name='username' />
//               <input type="email" placeholder="Email" name='email' />
//               <input type="password" placeholder="Password" name='password'/>
//               <button type='submit' className="btn fw-bold mt-5 signup">Sign Up</button>
//               <div className="row d-flex align-items-center another">
//                 <div className="col"><hr /></div>
//                 <div className="col-5 text-muted text-center text-another">or try another way</div>
//                 <div className="col"><hr /></div>
//               </div>
//               <Link to="#" className="btn fw-bold my-5 google"><img src={google} alt="google" /> Sign Up With Google</Link>
//               <Link to='/login' className="btn fw-bold login">Login</Link> <br />
//             </form>
      
//             <footer className="bg-light container pt-5">
//               <div>
//                 <Link to='/'><img src={logo} alt="logo" width="20px" /></Link>
//                 <p className="description">Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</p>
//                 <p>©2020 Vehicle Rental Center. All rights reserved</p>
//               </div>
//               <div className="row social">
//                 <ul className="list-group">
//                 <li> <a href="#"><FaTwitter /></a> </li>
//                 <li><a href="#"><FaFacebookF /></a></li>
//                 <li><a href="#"><FaInstagram /></a> </li>
//                 <li><a href="#"><FaLinkedinIn /></a></li>
//                 <li><a href="#"><FaYoutube /></a></li>
//                 </ul>
//               </div>
//             </footer>
//           </div>
//         </div>
//       </main>
//     )
//   }
// }
