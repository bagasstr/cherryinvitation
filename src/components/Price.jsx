import React from 'react'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <section className='section' id='harga'>
      <div className='container mx-auto'>
        <h1 className='flex items-center justify-center mb-2 uppercase text-[#726AE3] lg:leading-6 font-bold lg:mb-5'>
          harga paket
        </h1>
        {/* title */}
        <h2
          className='mb-10 text-center h3 lg:mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          Lorem ipsum dolor sit amet.
        </h2>
        <p className='mb-10 text-center blue lg:mb-16'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          voluptate!
        </p>
      </div>
      {/* */}
      <div className='flex flex-col gap-8 p-10 xl:flex-row'>
        <PriceCard
          color='#7BE3FC'
          name='basic'
          description='Get Started with the plan'
          feaatures={['1 User', '2 Project', '5 GB Storage']}
          btnText='Start Free Plan'
        />

        <PriceCard
          color='#7BE3FC'
          name='basic'
          description='Get Started with the plan'
          feaatures={['1 User', '2 Project', '5 GB Storage']}
          btnText='Start Free Plan'
        />

        <PriceCard
          color='#7BE3FC'
          name='basic'
          description='Get Started with the plan'
          feaatures={['1 User', '2 Project', '5 GB Storage']}
          btnText='Start Free Plan'
        />
      </div>
      {/*  */}
    </section>
  )
}

export default Price
