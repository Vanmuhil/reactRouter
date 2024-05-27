import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from './Authentication';

export default function Navbar() {
  const auth = useAuth()
  return (
    <div>
      <nav>

        <NavLink to="/">home</NavLink>
        <NavLink to="/product">product</NavLink>
        <NavLink to='/service'>service</NavLink>
        {!auth.user && <NavLink to='/login'>login</NavLink>}
        {/* <NavLink to='/login'>login</NavLink> */}
        {/* <NavLink to='/signup'>Sign up</NavLink> */}
        {auth.user && <NavLink to='/profile'>Profile</NavLink>}



      </nav>
    </div>
  )
}
