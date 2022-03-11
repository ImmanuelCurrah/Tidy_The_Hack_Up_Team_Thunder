import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/signup"}>Signup</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  )
}
