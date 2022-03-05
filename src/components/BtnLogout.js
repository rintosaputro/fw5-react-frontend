import React from 'react'
import { useDispatch } from 'react-redux'
import '../assets/css/btn-logout.css'

function BtnLogout() {
  const dispatch = useDispatch()
  const logOut = (ev) => {
    dispatch({
      type: 'AUTH_LOGOUT'
    })
  }
  return (
    <div>
      <button onClick={logOut} className='btn-logout'>Logout</button>
    </div>
  )
}

export default BtnLogout