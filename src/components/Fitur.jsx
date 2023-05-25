import React from 'react'
// import data
import { product } from '../data'
// import components
import Cards from './Cards'

const Fitur = () => {
  // destructure product data
  const { title, subtitle } = product
  return (
    <section className='section' id='fitur'>
      <div className='container mx-auto'>
        {/* title & subtitle */}

        <h2
          className='mb-10 text-center h3 lg:mb-10'
          data-aos='fade-up'
          data-aos-offset='400'
          data-aos-delay='300'
        >
          {title}
        </h2>
        <p
          className='mb-10 text-center blue lg:mb-16'
          data-aos='fade-up'
          data-aos-offset='400'
          data-aos-delay='400'
        >
          {subtitle}
        </p>

        {/* cards */}

        <Cards />
      </div>
    </section>
  )
}

export default Fitur
