import React, { useEffect, useState } from 'react'
// import data
import { header } from '../data'
// import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi'
// import components
import MobileNav from './MobileNav'
import Nav from './Nav'

import { Link } from 'react-router-dom'

const Navbar = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false)
  // destructure header data
  const { logo, btnText, path } = header

  return (
    <>
      <nav className='fixed z-10 w-full py-6 transition-all bg-white shadow-md lg:top-0 lg:py-4'>
        <div className='container flex items-center justify-between mx-auto '>
          {/* logo */}
          <a href='/'>
            <img src={logo} alt='' className='w-[250px]' />
          </a>
          {/* nav - initially hidden - show on dekstop mode */}
          <div className='hidden lg:flex'>
            <Nav />
          </div>
          {/* cta button - initially hidden - show on dekstoop mode */}
          <Link to={path} className='hidden btn btn-sm btn-outline lg:flex'>
            {btnText}
          </Link>
          {/* mobile nav trigger btn - hidden on dekstop */}
          <button
            className='lg:hidden'
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? (
              <HiOutlineX className='text-3xl text-300' />
            ) : (
              <HiMenuAlt4 className='text-3xl text-300' />
            )}
          </button>
          {/* mobile nav - hidden on dekstop */}
          <div
            className={`${
              mobileNav ? 'top-0' : 'left-full'
            } left-0   fixed top-[105px] bottom-0 w-full lg:hidden transition  `}
          >
            <MobileNav />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
