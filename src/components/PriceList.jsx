import React, { useState } from 'react'
// import data
import { pricing } from '../data'
// import icons
import { HiCheck, HiShoppingCart } from 'react-icons/hi'

const PriceList = () => {
  // index state
  const [index, setIndex] = useState(false)
  // destructure pricing
  const { title, subtitle, cards } = pricing
  return (
    <section className='section' id='harga'>
      <div className='container mx-auto'>
        <h1 className='flex items-center justify-center mb-2 font-bold uppercase text-400 lg:leading-6 lg:mb-5'>
          Harga Paket
        </h1>
        {/* title */}
        <h2
          className='mb-10 text-center h3 lg:mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {title}
        </h2>
        <p className='mb-10 text-center blue lg:mb-16'>{subtitle}</p>
        {/* cards */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center'>
          {cards.map((card, cardIndex) => {
            // destructure card
            const {
              subtitle,
              pretitle,
              title,
              services,
              price,
              btnText,
              delay,
            } = card
            // card
            return (
              <div
                data-aos='fade-up'
                data-aos-delay={delay}
                data-aos-offset='300'
                key={cardIndex}
              >
                <div
                  onClick={() => setIndex(cardIndex)}
                  className={`${
                    cardIndex === index
                      ? 'pricing-table'
                      : 'bg-white shadow-2xl'
                  }  rounded-[12px] w-[350px] p-[40px] cursor-pointer `}
                >
                  {/* card subtitle */}
                  <div className='flex'>
                    <div className='px-2 py-1 mb-3 text-xs border text-secondary bg-secondary/25'>
                      {subtitle}
                    </div>
                  </div>
                  {/* card pretitle */}
                  <div className='text-[32px] font-semibold mb-3 '>{title}</div>
                  {/* card title */}
                  <div className='mb-5 blue'>{pretitle}</div>

                  {/* card services */}
                  <div className='flex flex-col mb-6 gap-y-2'>
                    {services.map((service, index) => {
                      // destructure service
                      const { name } = service
                      return (
                        <div
                          className='flex items-center gap-x-[10px]'
                          key={index}
                        >
                          <HiCheck className='text-green-600' />
                          <div>{name}</div>
                        </div>
                      )
                    })}
                  </div>
                  {/*  */}
                  <div className='mb-10'>
                    <div className='flex items-center justify-center '>
                      <span className='text-5xl font-semibold text-secondary'>
                        <span className='mr-2 text-3xl'>$</span>
                        {price} /{' '}
                      </span>
                      <span className='text-xl '>month</span>
                    </div>
                  </div>
                  {/* btn */}
                  <button
                    className={`${
                      cardIndex === index
                        ? 'bg-secondary hover:bg-200 text-white'
                        : 'border border-secondary text-secondary'
                    } btn2 btn-lg  space-x-[14px]`}
                  >
                    <span>{btnText}</span>
                    <HiShoppingCart />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PriceList
