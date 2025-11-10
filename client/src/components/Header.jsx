import React from 'react'
import { Link } from 'react-router-dom'
import DarkmodeToggle from '../DarkmodeToggle'


export default function Header() {
  return (
    <div>
        <h1 className='bg-primary'>navbar</h1>
        <DarkmodeToggle/>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
    
    </div>
  )
}
