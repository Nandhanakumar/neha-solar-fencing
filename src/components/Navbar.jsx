import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'>

      <div className='max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center'>

        {/* Logo */}
        <Link to='/' className='flex items-center gap-4'>

          <img
            src={logo}
            alt='NEHA Solar Power Fence Logo'
            className='w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full shadow-md'
          />

          <div>
            <h1 className='font-["Oswald"] text-2xl sm:text-3xl leading-none text-gray-800 uppercase'>
              NEHA
            </h1>

            <p className='uppercase tracking-[4px] text-[10px] sm:text-xs text-gray-600 mt-1'>
              Solar Power Fence
            </p>
          </div>

        </Link>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex gap-8 font-medium text-[15px] items-center'>

          <li>
            <Link
              to='/'
              className='text-gray-700 hover:text-green-600 transition duration-300'
            >
              Home
            </Link>
          </li>

          <li>
            <HashLink
              smooth
              to='/#services'
              className='text-gray-700 hover:text-green-600 transition duration-300'
            >
              Services
            </HashLink>
          </li>

          <li>
            <HashLink
              smooth
              to='/#projects'
              className='text-gray-700 hover:text-green-600 transition duration-300'
            >
              Projects
            </HashLink>
          </li>

          <li>
            <HashLink
              smooth
              to='/#testimonials'
              className='text-gray-700 hover:text-green-600 transition duration-300'
            >
              Testimonials
            </HashLink>
          </li>

          <li>
            <Link
              to='/enquiry'
              className='text-gray-700 hover:text-green-600 transition duration-300'
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Desktop Button */}
        <div className='hidden lg:block'>

          <Link
            to='/enquiry'
            className='relative overflow-hidden bg-emerald-400 text-white px-6 py-3 rounded-xl group inline-block hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-500'
          >

            <span className='relative z-10 font-semibold'>
              Get a Quote
            </span>

            <span className='absolute left-0 bottom-0 w-full h-0 bg-black transition-all duration-500 ease-out group-hover:h-full'></span>

          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='lg:hidden text-black text-3xl'
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >

        <div className='px-6 pb-6 bg-white border-t border-gray-200'>

          <ul className='flex flex-col gap-5 pt-6 font-medium text-gray-800'>

            <li>
              <Link
                to='/'
                onClick={() => setMenuOpen(false)}
                className='hover:text-green-500 transition duration-300'
              >
                Home
              </Link>
            </li>

            <li>
              <HashLink
                smooth
                to='/#services'
                onClick={() => setMenuOpen(false)}
                className='hover:text-green-500 transition duration-300'
              >
                Services
              </HashLink>
            </li>

            <li>
              <HashLink
                smooth
                to='/#projects'
                onClick={() => setMenuOpen(false)}
                className='hover:text-green-500 transition duration-300'
              >
                Projects
              </HashLink>
            </li>

            <li>
              <HashLink
                smooth
                to='/#testimonials'
                onClick={() => setMenuOpen(false)}
                className='hover:text-green-500 transition duration-300'
              >
                Testimonials
              </HashLink>
            </li>

            <li>
              <Link
                to='/enquiry'
                onClick={() => setMenuOpen(false)}
                className='hover:text-green-500 transition duration-300'
              >
                Contact
              </Link>
            </li>

          </ul>

          {/* Mobile Button */}
          <Link
            to='/enquiry'
            onClick={() => setMenuOpen(false)}
            className='mt-6 relative overflow-hidden bg-green-600 text-white px-6 py-3 rounded-xl group inline-block w-full text-center hover:shadow-lg transition-all duration-500'
          >

            <span className='relative z-10 font-semibold'>
              Get a Quote
            </span>

            <span className='absolute left-0 bottom-0 w-full h-0 bg-black transition-all duration-500 ease-out group-hover:h-full'></span>

          </Link>

        </div>

      </div>

    </nav>
  )
}