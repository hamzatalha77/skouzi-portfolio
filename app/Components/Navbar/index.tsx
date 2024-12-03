import { Link } from 'react-scroll'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import ThemeSwitch from '../ThemeSwitch'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
      <h1 className="text-3xl font-bold primary-color ml-4">SKOUZI</h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <Link
            to="hero"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="p-5">
          <Link
            to="about"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="p-5">
          <Link
            to="work"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="p-5">
          <Link
            to="experience"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="p-5">
          <Link
            to="contact"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li className="p-5">
          <ThemeSwitch />
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden /*z-10*/">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#202121] duration-500 ease-in-out'
            : 'fixed left-[-100%] top-0 h-full ease-in-out duration-500'
        }
      >
        <h1 className="text-3xl font-bold primary-color m-4">SKOUZI</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <Link
              to="hero"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="about"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="work"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="experience"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="contact"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
