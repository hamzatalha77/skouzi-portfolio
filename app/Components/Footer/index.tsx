import React from 'react'
import {
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedinIn
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mt-2 w-max-[800px] border-t border-gray-500 text-center">
      <p className="my-5 text-gray-500">
        ©Skouzi 2024, <br />
        All rights reserved.
      </p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl">
        <FaGithubSquare />
        <FaInstagramSquare />
        <FaLinkedinIn />
        <FaDribbbleSquare />
      </div>
    </footer>
  )
}

export default Footer
