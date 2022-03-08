import React, { useEffect } from 'react'
import '../assets/css/forgot-password.css'
import {IoChevronBack} from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { changePassword } from '../redux/actions/user'
import { useDispatch } from 'react-redux'

const ForgotPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const email = document.getElementById('email').value
    dispatch(changePassword(email))
    navigate('/verify/password')
  }

  return (
    <div className='forgot'>
    <header>
      <div className="opacity">
        <div className="container">
          <Link className="back" to='/login'>
            <IoChevronBack />
            <span>Back</span>
          </Link>
          <h1 className="text-center">Don`t worry, we got your back!</h1>
          <p className="text-center">You will receive a link to reset your password. <br />
            If you haven`t received any link, click resend link</p>
          <form className="text-center form">
            <input type="email" placeholder="Enter your email address" id='email' />
            <button onClick={handleSubmit} type='submit' className="btn send-link">Send Link</button>
            <button onClick={handleSubmit} className="btn resend-link">Resend Link</button>
          </form>
        </div>
      </div>
    </header>
    </div>
  )
}

export default ForgotPassword
