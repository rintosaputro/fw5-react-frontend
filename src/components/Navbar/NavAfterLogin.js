/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavList from './NavList'
import '../../assets/css/nav-main.css'
import {FiMail} from 'react-icons/fi'
import logo from '../../assets/images/logo.png'
import photo from '../../assets/images/profile.png'
import noImage from '../../assets/images/no-pp.jpg'
import { useSelector } from 'react-redux'

const NavAfterLogin = () => {
  const {auth} = useSelector(state => state)
  return (
    <div className='nav-main'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid bg-white navigation">
          <Link to='/' className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navigation" id="navbarNav">
            <NavList />
            <div className="mail-profile ms-xl-5 d-flex align-items-center">
              <Link to='/message' className="ms-lg-3 me-4 message"><span className="text-white badge total-message">0</span><FiMail className='icon-message' /></Link>
              <Link to='/profile/41' className='profile'>
                <img src={auth.userData.image || noImage} alt="Photoprofile." />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavAfterLogin

// export default class NavAfterLogin extends Component {
//   render() {
//     return (
//       <div className='nav-main'>
//         <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
//           <div className="container-fluid bg-white navigation">
//             <Link to='/' className="navbar-brand">
//               <img src={logo} alt="Logo" />
//             </Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar button">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse navigation" id="navbarNav">
//               <NavList />
//               <div className="mail-profile ms-xl-5 d-flex align-items-center">
//                 <Link to='/message' className="ms-lg-3 me-4 message"><span className="text-white badge total-message">1</span><FiMail className='icon-message' /></Link>
//                 <Link to='/profile/41' className='profile'>
//                   <img src={photo} alt="Photoprofile." />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     )
//   }
// }
