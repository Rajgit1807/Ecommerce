import React from 'react'
import HomePage from '../HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Product from '../Product/Product'
import ProductDetails from '../ProductDetails/ProductDetails'
import Checkout from '../Checkout/Checkout'
import Order from '../Order/Order'
import OrderDetails from '../Order/OrderDetails'
import OrderSuccess from '../Payment/OrderSuccess'
import Orders from '../Orders/Orders'

const CustomerRouters = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<HomePage />} />
        <Route path='/register' element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/account/order' element={<Order />} />
        <Route path='/account/order/:orderId' element={<OrderDetails />} />
        <Route path='/ordersuccess' element={<OrderSuccess />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default CustomerRouters

//  {/* <HomePage/> */}
//       {/* <Product/> */}
//       {/* <ProductDetails/> */}
//       {/* <Cart/> */}
//       {/* <Checkout/> */}
//       {/* <Order/> */}
//       {/* <OrderDetails/> */}