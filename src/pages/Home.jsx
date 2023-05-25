import React from 'react'
import Hero from '../components/Hero'
import Invitation from '../components/Invitation'
import PriceList from '../components/PriceList'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Payment from '../components/Payment'
import Testimonials from '../components/Testimonials'
import Katalog from '../components/Katalog'
import Fitur from '../components/Fitur'

// import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div>
      {/* <TopBar /> */}
      <Hero />
      <Invitation />
      <Fitur />
      <Katalog />
      <PriceList />
      <Testimonials />
      <Faq />
      <Payment />
      <Footer />
    </div>
  )
}

export default Home
