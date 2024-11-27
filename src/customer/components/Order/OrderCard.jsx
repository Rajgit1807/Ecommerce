import { AdjustOutlined } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderCard = () => {
    const navigate = useNavigate();
    const handleClick =()=>{
    navigate(`/account/order/${5}`);
    }
    return (
        <div onClick={handleClick} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminiml.flixcart.com/image/612/612/xifoq/jean/d/s/c/ 36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70" alt="" />
                        <div className='m1-5 space-y-2'>
                            <p className=''>Men Slim Mid Rise Black Jeans</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹1099</p>
                </Grid>
                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustOutlined sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                            <span>
                                Delivered On March 03
                            </span>
                        </p>
                        <p className='text-xs'>
                          Your Item Has Been Delivered
                        </p>
                    </div>}
                    {false && <p>
                        <span>
                            Expected Delivery On Mar 03
                        </span>
                    </p>}
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard