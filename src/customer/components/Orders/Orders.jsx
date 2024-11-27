import React, { useEffect, useState } from 'react'
import { getOrderHistoryByUserId } from '../../../State/Order/Action'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, AvatarGroup, Box, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Orders = () => {

    const dispatch = useDispatch();
    const {order} = useSelector(store=>store);
    const {auth} = useSelector(store=>store);

    useEffect(() => {
   dispatch(getOrderHistoryByUserId())
    }, [order.orders])

    console.log(order.orders)

    return (
        <div>
            {auth.user? <Grid container className='px-1 lg:px-20 mt-16 space-y-5' sx={{alignItems:"center",justifyContent:"center"}}>
                {order.orders?.map((item,index)=><Grid xs={12} item  className='shadow-lg pt-3 px-5'>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography sx={{ fontWeight: 'bold' }}>Order No: {index + 1}</Typography>
      <Typography sx={{ fontWeight: 'bold', fontSize:"14px" }}>Date: {item.orderDate.slice(0, 10)}</Typography>
    </Box>
                 <AvatarGroup className="mt-2 mb-2" sx={{ justifyContent: "start" }}>
                    {item.orderItems?.map((item)=><Avatar src={item.product.imageUrl}>
                    </Avatar>)}
                 </AvatarGroup>
                 <Typography sx={{opacity:0.7}}>Price: <span className='text-green-500'>₹ {item.totalDiscountedPrice} </span></Typography>
                 <Typography sx={{opacity:0.7}}>Total Item: <span className='text-red-500'>{item.totalItem} </span></Typography>
                 <Typography sx={{opacity:0.7}}>Items: <div>{item.orderItems?.map((order,index)=> <span key={index}> {order.product.title}{index < item.totalItem-1?",":"."}</span>)}
                </div></Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to={`/ordersuccess?order_id=${item._id}&show_alert=false`} className="text-purple-500 hover:text-purple-700">View more Details</Link>
                <Box sx={{margin:"12px 0px"}}>
                 <span 
                                            className={`text-white text-[13px] font-semibold px-5 py-2 rounded-full ${item.orderStatus === "CONFIRMED" ? "bg-[#369236]" :
                                                item.orderStatus === "SHIPPED" ? "bg-[#4141ff]" :
                                                    item.orderStatus === "PLACED" ? "bg-[#028290]" :
                                                        item.orderStatus === "PENDING" ? "bg-[gray]" :
                                                            "bg-[#025720]"
                                                }`}
                                        >
                                            {item.orderStatus}
                                        </span>
                 </Box>
                </Box>
                
              </Grid>)}             
            </Grid>:<div className='h-[70vh] flex justify-center items-center'>
            <p className='text-[60px]'><span>Please</span> <span className='text-red-800'>Login...</span></p>
        </div> }

           {order.orders.length === 0 && auth.user &&  <div className='h-[70vh] flex justify-center items-center'>
            <p className='text-[60px]'><span>Please</span> <span className='text-red-800'>Order...</span></p>
        </div>}
          
        </div>
    )
}

export default Orders