import React, { useEffect, useState } from 'react'
import AddressCard from '../AddressCard/ADDCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import PaymentModal from '../Payment/PaymentModal'
import { getCart } from '../../../State/Cart/Action'
import { findAddressById } from '../../../State/Address/Action'

const OrderSummary = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const cartId = searchParams.get("cart_id");
    const addressId = searchParams.get("address_id");
    const [open, setOpen] = useState(false);
    console.log(cartId)
    const {cart}= useSelector(store=>store)
    const {addressGetter} = useSelector(store=>store)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=>{
        dispatch(findAddressById(addressId)).then(() => setLoading(false))
        .catch(() => setLoading(false));
    },[])

    useEffect(()=>{
        dispatch(getCart()).then(() => setLoading(false))
        .catch(() => setLoading(false));
    },[cartId])

console.log(cart)
    if (loading) {
        return <div>Loading...</div>; // Render a loading state while data is being fetched
      }
    
      if (!cart.cart || cart.cart.length === 0) {
        return <div>No products found</div>; // Handle case where no products are found
      }
    
    return (
        <div>
            
            <div className='p-5 shadow-lg rounded-s-md border'>
                {/* <AddressCard item ={addressGetter.address}/> */}
            </div>
            <div>
                <div className='lg:grid grid-cols-3 relative'>
                    <div className="col-span-2">
                    {cart.cart?.cartItems?.map((item)=><CartItem item = {item} />)}
                    </div>
                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
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
                                    <span className='text-green-600'>-₹{cart.cart?.discount}</span>
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
                            <Button onClick={handleOpen} variant='contained' className='w-full' sx={{ px: "2rem", py: '0.7rem', bgcolor: "#9155fd" }}
                            >
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <PaymentModal open={open} handleClose={handleClose} address ={addressGetter.address}/>
        </div>
    )
}

export default OrderSummary