import { Box, Typography } from '@mui/material'
import React from 'react'

const ADDCard = ({item}) => {
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
        </Box>
    )
}

export default ADDCard