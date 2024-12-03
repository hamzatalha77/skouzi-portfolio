'use client'
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Work from './Components/Work'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const page = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default page
