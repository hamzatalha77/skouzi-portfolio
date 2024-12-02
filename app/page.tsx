'use client'
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Work from './Components/Work'

const page = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Work />
    </React.Fragment>
  )
}

export default page
