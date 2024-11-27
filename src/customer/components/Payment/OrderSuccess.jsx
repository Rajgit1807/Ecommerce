import { Alert, AlertTitle, Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderTracker from '../Order/OrderTracker'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'
import ADDCard from '../AddressCard/ADDCard'

const OrderSuccess = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const orderId = searchParams.get("order_id");
    const show_alert = searchParams.get("show_alert");
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(true);
    console.log(orderId)
    const handleStep = () => {
        if (order.order?.orderStatus === "CONFIRMED") {
            setStep(2);
        } else if (order.order?.orderStatus === "SHIPPED") {
            setStep(3);
        } else if (order.order?.orderStatus === "PENDING") {
            setStep(1);
        }
        else if (order.order?.orderStatus === "DELIVERED") {
            setStep(5);
        } else if (order.order?.orderStatus === "OUTFORDELIVERY") {
            setStep(4);
        }
        else {
            setStep(1);
        }
        console.log(step)
    }

    useEffect(() => {
        dispatch(getOrderById(orderId)).then(() => setLoading(false)).catch(() => setLoading(false));
    }, [orderId])

    const { order } = useSelector(store => store)

    useEffect(() => {
        if (order.order) {
            handleStep()
        }
    }, [order.order])

    if (loading) {
        return <div>Loading...</div>; // Render a loading state while data is being fetched
      }
    
      if (!order?.order || order.order.length === 0) {
        return <div>No Orders found</div>; // Handle case where no products are found
      }
    return (
        <div className='px-2 lg:px-36'>
            <div className='flex flex-col justify-center items-center'>
                {show_alert == "true" ? <Alert
                    variant='filled'
                    severity='success'
                    sx={{ mb: 6, width: 'fit-content' }}
                >
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulations! Your order has been placed.
                </Alert> : <></>
                }
            </div>
            <OrderTracker activeStep={step} />

            <Grid container className='space-y-5 py-5 pt-20'>
                {order.order?.orderItems.map((item, index) => (
                    <Grid className='shadow-xl rounded-md p-5' container item sx={{ alignItems: "center", justifyContent: "space-between" }}>
                        <Grid item xs={6}>
                            <div className='flex items-center'>
                                <img className='w-[5rem] h-[5rem] object-cover object-top' src={item.product.imageUrl} alt=""></img>
                                <div className='ml-5 space-y-2'>
                                    <p>{item.product.title}</p>
                                    <div className='opacity-50 text-xs font-semibold space-x-5'>
                                        <span>Color: {item.color}</span>
                                        <span>Size: {item.size}</span>
                                    </div>
                                    <p>Seller: {item.product.brand}</p>
                                    <p className='text-green-500'>₹ <span >{item.product.discountedPrice}</span></p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                ))}
                <Grid className='shadow-xl pl-5 py-3' xs={12}>
                    <ADDCard item = {order.order?.shippingAddress}/>
                </Grid>
            </Grid>


        </div>
    )
}

export default OrderSuccess