import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'

const TriangleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute",
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})

const Achievement = () => {

  return (
    <Card sx={{position:"relative"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                Shop With Raj
            </Typography>
            <Typography variant='body2' sx={{}}>
                Congratulations 🥳
            </Typography>
            <Typography variant='h5' sx={{my:3.1,color:"#3228C8"}}>
                120.4k
            </Typography>
            <Button size="small" variant="contained" sx={{}}>
             View Sales
            </Button>
            <TriangleImg src=""></TriangleImg>
            <TrophyImg src="https://ecommerce-codewithzosh.vercel.app/images/misc/trophy.png"/>
        </CardContent>
    </Card>
  )

}

export default Achievement