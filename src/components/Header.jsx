import React from 'react'
import logo from '../img/logo.avif'
import { Link } from 'react-router'
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'

const Header = () => {
  return (
    <header className="w-full">
      {/* Topbar */}
      <div className="py-4 border-b border-black/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/">
            <img src={logo} alt="logo" className="w-32 md:w-40" />
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm md:text-base">
            <a
              href="tel:+998999999999"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaPhoneAlt size={16} className="text-blue-600" />
              (00) 000 123 456789
            </a>
            <a
              href="mailto:oyatbek09@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <CgMail size={20} className="text-blue-600" />
              Info@example.com
            </a>
            <span className="hidden sm:block h-[24px] w-[1px] bg-black/10"></span>
            <a
              href="tel:+998999999999"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaLocationArrow size={16} className="text-blue-600" />
              Store location
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="py-4 border-b border-black/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Nav */}
          <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-base md:text-lg">
            <li className="hover:text-blue-600 transition">
              <Link to="#">Home</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="#">Collection</Link>
            </li>
            <li className="text-blue-600 font-semibold">
              <Link to="#">Shop</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="#">Biododical</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="#">Equipment</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="#">Medical Tools</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="#">Pages</Link>
            </li>
          </ul>

          {/* Right Icons */}
          <ul className="flex items-center gap-4 text-blue-600">
            <li>
              <BiSearch size={22} />
            </li>
            <li>
              <MdOutlineShoppingBag size={22} />
            </li>
            <li>
              <RxAvatar size={22} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
