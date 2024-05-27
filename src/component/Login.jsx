import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useAuth } from './Authentication'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const[list,setList]=useState([])
    const[errmessage,setErrmessage]=useState('')
    const auth=useAuth()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/students').then(res=>setList(res.data)).catch(err=>console.log(err))
    },[])

    const handlesubmit=(e)=>{
        e.preventDefault()
        const user = list.find(x=>x.email===email)
        if(user){
            if(user.pass===pass)
            {
                auth.login(user.name)
                navigate('/')
            }
            else{
                setErrmessage('incorrect password')
            }

        }
        else{
            setErrmessage('user not found')
        }

    }
    
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/><br/>
            <label>password</label>
            <input type="pass" value={pass} onChange={(e)=>{setPass(e.target.value)}} /><br/><br/>
            <button type='submit'>Login</button>
        </form>
        {errmessage}
        <p>If u don't have account <button onClick={()=>navigate('/signup')}>SignUp</button></p>

    </div>
  )
}
