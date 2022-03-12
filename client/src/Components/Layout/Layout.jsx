import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout(props) {
  return (
    <div id='layout'>
      <Navbar />
        {props.children}
      <Footer />
    </div>
  )
}
