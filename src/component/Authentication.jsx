import React, { useContext, useState } from 'react'
const Authenticationcontext=React.createContext()

export default function Authentication(props) {
    const[user,setUser]=useState(null)

    const login=(user)=>{
        setUser(user);
    }
    const logout=()=>{
        setUser(null)
    }
    return(
        <Authenticationcontext.Provider value={{user,login,logout}}>
            {props.children}
        </Authenticationcontext.Provider>
    )
}
export const useAuth=()=>{
    return useContext(Authenticationcontext)
}