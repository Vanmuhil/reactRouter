import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()
    const handlesubmit = () => {
        axios.post('http://localhost:3001/students', { name, pass, email }).then(res => console.log(res)).catch(err => console.log(err));
        navigate('/login')
    }


    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /><br/><br/>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br/><br/>
                <label>Password</label>
                <input type="password" value={pass} onChange={(e) => { setPass(e.target.value) }} /><br/><br/>
                <button type='submit'>signUp</button><br/><br/>
            </form>

            <button onClick={()=>navigate(-1)}>Go Back {"<<<"} </button>

        </div>
    )
}
