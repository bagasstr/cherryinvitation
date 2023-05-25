import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Pesanan from '../pages/Pesanan'
import Home from '../pages/Home'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pesanan' element={<Pesanan />} />
    </Routes>
  )
}

export default Router
