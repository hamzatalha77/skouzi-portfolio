'use client'
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'

const page = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
    </React.Fragment>
  )
}

export default page
