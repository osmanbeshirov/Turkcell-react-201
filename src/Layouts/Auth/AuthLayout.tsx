import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../Auth/auth.css'

const AuthLayout = () => {
  return (
    <div className='auth-container'>
      <div className='auth-menu'>
        <Link to={'/auth'}>Login</Link>
        <Link to={'register'}>Sign in</Link>
      </div>

      <hr />

      <Outlet />
    </div>
  )
}

export default AuthLayout