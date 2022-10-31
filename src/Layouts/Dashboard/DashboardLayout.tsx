import React from 'react'
import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu';

const DashboardLayout = () => {
  return (
    <div>


      <Menu />

      <div id='context'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout;