import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div>
        <h1 style={{ color: 'red' }}>navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
    
    </div>
  )
}
