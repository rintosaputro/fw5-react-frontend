import React, { Component } from 'react'
import '../assets/css/forgot-password.css'
import {GrPrevious} from 'react-icons/gr'

export default class ForgotPassword extends Component {
  render() {
    return (
      <header className='forgot'>
        <div className="opacity">
          <div className="container">
            <a className="back" href="/login.html">
              <GrPrevious />
              <span>Back</span>
            </a>
            <h1 className="text-center">Don`t worry, we got your back!</h1>
            <p className="text-center">You will receive a link to reset your password. <br />
              If you haven`t received any link, click resend link</p>
            <form className="text-center form">
              <input type="email" placeholder="Enter your email address" />
              <button className="btn send-link">Send Link</button>
              <button className="btn resend-link">Resend Link</button>
            </form>
          </div>
        </div>
      </header>
    )
  }
}
