import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
      
        
        <Link to='new'>New product</Link>  
        <Link to='offer'>Offer Product</Link>
        

        <Outlet/>      

    </div>
  )
}
