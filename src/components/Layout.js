import React, { Component } from 'react'
import NavAfterLogin from './Navbar/NavAfterLogin'
import NavBeforeLogin from './Navbar/NavBeforeLogin'
import NavPopular from './Navbar/NavPopular'
import Footer from './Footer'

export default class Layout extends Component {
  render() {
    const {noNavbar, signup, isLogin, vehicleMore, children} = this.props
    return (
      <div>
        {!noNavbar && (vehicleMore ? <NavPopular /> : (isLogin !== null ? <NavAfterLogin /> : <NavBeforeLogin />))}
        {children}
        {!signup && <Footer />}
      </div>
    )
  }
}
