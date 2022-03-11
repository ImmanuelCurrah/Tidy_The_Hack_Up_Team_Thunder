import React from 'react'
import Navbar from './Navbar'

export default function Layout(props) {
  return (
    <div id='layout'>
      <Navbar></Navbar>
      {props.children}
    </div>
  )
}
