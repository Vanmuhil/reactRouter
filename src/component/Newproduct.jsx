import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { useAuth } from './Authentication'

export default function Newproduct() {
  const auth = useAuth()

  if (auth.user) {
    return (
      <>
        new product
      </>
    )
  }
  else {
    return <Navigate to='/login' />
  }

}
