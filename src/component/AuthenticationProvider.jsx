import React from 'react'
import { useAuth } from './Authentication'
import {useNavigate} from 'react-router-dom'

export default function AuthenticationProvider(props) {
    const auth =useAuth()
    const navigate=useNavigate()
    if(auth.user)
    return(<>{props.children}</>)
 else{
  navigate('/login')
 }
}
