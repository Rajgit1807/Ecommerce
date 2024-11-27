import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import MainCarousel from './customer/components/Carousel/MainCarousel'
import HomePage from './customer/components/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Checkout from './customer/components/Checkout/Checkout'
import Order from './customer/components/Order/Order'
import OrderDetails from './customer/components/Order/OrderDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomerRouters from './customer/components/Routers/CustomerRouters'
import AdminRouters from './customer/components/Routers/AdminRouters'

function App() {
  const [count, setCount] = useState(0)

  return (

      <Routes>
        <Route path='/*' element={<CustomerRouters />} />
        <Route path='/admin/*' element={<AdminRouters />} />
      </Routes>
  )
}

export default App
