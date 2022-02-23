import React, { Component } from 'react'
import NavAfterLogin from './NavAfterLogin'
import NavBeforeLogin from './NavBeforeLogin'
import NavPopular from './NavPopular'
import Footer from './Footer'

export default class Layout extends Component {
  render() {
    const {noNavbar, signup, isLogin, vehiclePopular} = this.props
    return (
      <div>
        {/* {isLogin ? (vehiclePopular ? <NavPopular/> : <NavBeforeLogin />) : <NavAfterLogin />}
        {vehiclePopular ? <NavPopular /> : (isLogin ? <NavAfterLogin /> : <NavBeforeLogin />)} */}
        {!noNavbar && (vehiclePopular ? <NavPopular /> : (isLogin ? <NavAfterLogin /> : <NavBeforeLogin />))}
        {this.props.children}
        {!signup && <Footer />}
      </div>
    )
  }
}
