import React, { useEffect } from 'react'
import '../assets/css/forgot-password.css'
import { useDispatch, useSelector } from 'react-redux'
import { verify } from '../redux/actions/user'
import { useNavigate } from 'react-router-dom'

const Verify = () => {
  const {registerUser} = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [registerUser.name])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const username = ev.target.elements['username'].value
    const password = ev.target.elements['password'].value
    const code = ev.target.elements['code'].value
    dispatch(verify(username, code, password))
    navigate('/login')
  }

  return (
    <div className='forgot'>
    <header>
      <div className="opacity">
        <div className="container">
          <h1 className="text-center">Verify your new account</h1>
          <p className="text-center">{registerUser.message}</p>
          <form onSubmit={handleSubmit} className="text-center form">
            <input name='username' type="text" placeholder="Enter your username address" />
            <input name='code' type="text" placeholder="Enter your code address" />
            <input name='password' type="password" placeholder="Enter your password address" />
            <button type='submit' className="btn send-link">Send</button>
          </form>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Verify
