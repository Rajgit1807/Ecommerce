import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cart}= useSelector(store=>store)
    const {auth} = useSelector(store=>store)

    const handleCheckout = ()=>{
     navigate('/checkout?step=2')
    }
    
    useEffect(()=>{
        dispatch(getCart())
    },[cart.updateCartItem,cart.deleteCartItem,cart.cartItems])
    console.log(cart)
    return (
        <div>
            {auth.user ? 
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className="col-span-2">
                    {cart.cart?.cartItems?.map((item)=><CartItem item = {item} />)}
                </div>
                {cart.cartItems?.length > 0 && <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>
                            Price Details
                        </p>
                        <hr />
                        <div className='space-y-3 font-semibold mb-5'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span className='text-green-600'>₹{cart.cart?.totalPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Discount</span>
                                <span className='text-green-600'>₹{cart.cart?.discount}</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Delivery Charges</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>₹{cart.cart?.totalDiscountedPrice}</span>
                            </div>
                        </div>
                        <Button onClick={handleCheckout} variant='contained' className='w-full' sx={{ px: "2rem", py: '0.7rem', bgcolor: "#9155fd" }}
                        >
                            Checkout
                        </Button>
                    </div>
                </div>}
                
            </div>
            :<div className='h-[70vh] flex justify-center items-center'>
                <p className='text-[60px]'><span>Please</span> <span className='text-red-800'>Login...</span></p>
            </div>}
            {cart.cartItems?.length == 0 && auth.user  && <div className='h-[70vh] flex justify-center items-center'>
                <p className='text-[60px]'><span>Your Cart is</span> <span className='text-red-800'>Empty...</span></p>
            </div>}
        </div>
    )
}

export default Cart