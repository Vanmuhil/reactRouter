import React from 'react'
import { useAuth } from './Authentication'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const auth=useAuth()
    const navigate=useNavigate()
  return (
    <div>
        welcome {auth.user}<br/><br/>
        <button onClick={()=>{auth.logout();navigate('/login')}}>logout</button>
    </div>
  )
}
