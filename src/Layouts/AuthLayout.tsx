import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>AuthLayout
        <hr/>

        <Outlet/>
    </div>
  )
}

export default AuthLayout