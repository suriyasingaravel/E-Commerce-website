import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Checkout from './Checkout'

const AllRoutes = () => {
  return (
  <Routes>
   <Route path='/'  element={<Home/>}  />
   <Route path='/checkout' element={<Checkout/>} />
  </Routes>
  )
}

export default AllRoutes