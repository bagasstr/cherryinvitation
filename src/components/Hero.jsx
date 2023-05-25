import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

// import data
import { hero } from '../data'
// import icons
import { HiOutlineChevronDown } from 'react-icons/hi'

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Pernikahan', 'Khitanan', 'Ulang Tahun', 'Tunangan'],
      typeSpeed: 120,
      backSpeed: 40,
      loop: true,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])
  // destructure hero data
  const { title, pretitle, subtitle, btnText, image } = hero
  return (
    <section
      className="section bg-[url('https://undangan-html.netlify.app/assets/images/slider-right-dec.jpg')]"
      id='home'
    >
      <div className='container flex items-center justify-center pt-20 mx-auto '>
        <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
          {/* text */}
          <div className='flex-1'>
            <p className='mb-2 pretitle lg:mb-5 '>{pretitle}</p>
            <h1 className='mb-2 title lg:mb-5'>
              {title}
              <br /> <span className='uppercase text-secondary' ref={el} />
            </h1>
            <p className='mb-5 blue lg:mb-10'>{subtitle}</p>
            {/* btn & comp text */}
            <div className='flex items-center max-w-sm mx-auto lg:max-w-full lg:mx-0 gap-x-2 lg:gap-x-6'>
              <button className='flex items-center justify-center mx-auto lg:mx-0 btn btn-sm lg:btn-md lg:btn-lg2 btn-outline lg:gap-x-4'>
                {btnText}
                <HiOutlineChevronDown />
              </button>
            </div>
          </div>
          {/* image */}
          <div className='flex-1'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
