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
    // dispatch({
    //   type: 'REGISTER_FULFILLED',
    //   payload: {
    //     data: {isRegistered: 'ok'}
    //   }
    // })
    // handleSubmit()
    const name = document.getElementById('name').value
  }, [registerUser])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const name = document.getElementById('name').value
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const data = {name, username, email, password}
    dispatch(register(data))
    // dispatch({
    //   type: 'REGISTER_FULFILLED',
    //   payload: {
    //     data
    //   }
    // })
    // if (!registerUser.isSuccess) {
    //   alert(`${registerUser.message}`)
    // }
    // if (registerUser.isSuccess) {
      // alert(`${registerUser.message}`)
      // navigate('/verify')
    //   console.log('test', registerUser)
    // } 
    navigate('/verify')
    // console.log(registerUser)
  }

  return (
    <main className="row signup-page">
      {auth.token !== null && <Navigate to='/profile' />}
      <div className="col col-sm-5 col-md-6 img-section">
      </div>
      <div className="col-12 col-sm-7 col-md-6 pt-5 form-section">
        <div className="opacity">
          <form className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="my-5 container header-sign">Sign Up</h2>
            <input type="text" placeholder="Name" id='name' />
            <input type="text" placeholder="Username" id='username' />
            <input type="email" placeholder="Email" id='email' />
            <input type="password" placeholder="Password" id='password'/>
            <button onClick={handleSubmit} type='submit' className="btn fw-bold mt-5 signup">Sign Up</button>
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
