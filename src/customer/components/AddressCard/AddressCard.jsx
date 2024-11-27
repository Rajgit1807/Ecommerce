import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../State/Order/Action';

const AddressCard = ({item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = () =>{
        const address = {
            firstName: item.firstName,
            lastName: item.lastName,
            streetAddress: item.streetAddress,
            city: item.city,
            state: item.state,
            zipCode: item.zipCode,
            mobile: item.mobile
          }
          const orderData = {address}
        //  dispatch(createOrder(orderData))
    }
  return (
    <Box>
    <Box className='space-y-3'>
        <Typography className="font-semibold">{item.firstName} {item.lastName}</Typography>
        <Typography>{item.streetAddress}, {item.city}, {item.state}, {item.zipCode}</Typography>
        <Box className='space-y-1'>
            <Typography className='font-semibold'> Phone Number</Typography>
            <Typography>{item.mobile}</Typography>
        </Box>
    </Box>
    <Button onClick={handleSubmit} sx={{ mt: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained'>Deliver Here</Button>
</Box>
  )
}

export default AddressCard