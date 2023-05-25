import React from 'react'

const Katalog = () => {
  return (
    <section className='section' id='katalog'>
      <div className='container mx-auto'>
        <h1 className='flex items-center justify-center mb-2 uppercase text-[#726AE3] lg:leading-6 font-bold lg:mb-5'>
          katalog kami
        </h1>
        <p className='mb-2 text-center title lg:mb-7 lg:text-[35px] lg:leading-[42px]'>
          Design Interaktive <span className='text-secondary'>Mobile</span>
        </p>
        <p className='mb-10 text-center blue lg:mb-16'>
          We hope this DigiMedia template is useful for your work. You can use
          this template for any purpose. You may contribute a little amount via
          PayPal to support TemplateMo in creating new templates regularly.
        </p>
        <div className='items-center justify-between grid-cols-2 gap-6 mx-auto lg:grid '>
          <div className='flex py-3 '>
            <div className=''>
              <img
                src='https://undangan-html.netlify.app/assets/images/wedding_banner1.png'
                alt=''
                className='gambar-katalog'
              />
            </div>
          </div>
          {/*  */}
          <div className='flex py-3 '>
            <div className=''>
              <img
                src='https://undangan-html.netlify.app/assets/images/wedding_banner2.png'
                alt=''
                className='gambar-katalog'
              />
            </div>
          </div>
          {/*  */}
          <div className='flex py-3 '>
            <div className=''>
              <img
                src='https://undangan-html.netlify.app/assets/images/wedding_banner3.png'
                alt=''
                className='gambar-katalog'
              />
            </div>
          </div>
          {/*  */}
          <div className='flex py-3 '>
            <div className='p-4'>
              <img
                src='https://undangan-html.netlify.app/assets/images/wedding_banner22.png'
                alt=''
                className='gambar-katalog'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Katalog
