import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Đúng theo cây thư mục bạn đang có
import BhpNavBar from './components/BhpNavBar'
import BhpHome from './components/pages/BhpHome'
import BhpAbout from './components/pages/BhpAbout'
import BhpContact from './components/pages/BhpContact'
import BhpProduct from './components/pages/BhpProduct'
import BhpProductDetail from './components/pages/BhpProductDetail'
import BhpNotFound from './components/pages/BhpNotFound'
import BhpServices from './components/pages/BhpServices'
import BhpBlog from './components/pages/BhpBlog'

export default function BhpApp() {
  return (
    <div className='container border'>
      <h1>React Route - Demo [Bùi Hữu Phúc]</h1>
      <hr />
      <BrowserRouter>
        <BhpNavBar />
        <Routes>
          <Route path='/' element={<BhpHome />} />
          <Route path='/about' element={<BhpAbout />} />
          <Route path='/contact' element={<BhpContact />} />
          <Route path='/services' element={<BhpServices />} />
          <Route path='/blog' element={<BhpBlog />} />
          {/* Nested route */}
          <Route path='/products' element={<BhpProduct />}>
            <Route path=':id' element={<BhpProductDetail />} />
          </Route>
          {/* 404 */}
          <Route path='*' element={<BhpNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
