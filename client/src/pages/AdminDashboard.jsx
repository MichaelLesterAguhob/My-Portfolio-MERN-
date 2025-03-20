import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className='h-[100vh] pt-[95px] p-4'>
      AdminDashboard <br />
      <NavLink to={'/logout'} className='p-1 bg-red-600 rounded'>Logout</NavLink>
      </div>
  )
}

export default AdminDashboard