import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../../State/Order/Action'
import { useNavigate } from 'react-router-dom'
import AddressCard from '../AddressCard/AddressCard'
import { createAddress, findAddressesById,  } from '../../../State/Address/Action'
import { getCart } from '../../../State/Cart/Action'

const DeliveryAddressForm = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {auth} = useSelector(store=>store)
  const {cart} = useSelector(store=>store) 
  const {addressGetter} = useSelector(store=>store)

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address =  {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    }
    console.log("address", address)
    dispatch(createAddress(address))
     dispatch(getCart())
     console.log(addressGetter.address?._id)
    navigate({ search: `step=3&cart_id=${cart.cart?._id}&address_id=${addressGetter.address?._id}`})
  }

   
  useEffect(() =>  {
    const data = auth.user?.address.slice(-3)
    console.log(data)
      dispatch(findAddressesById(data)).then(() => setLoading(false)).catch(() => setLoading(false));
  
  }, [auth.user?.address]);



  if (loading) {
    return <div>Loading...</div>; // Render a loading state while data is being fetched
  }

  if (!auth.user?.address) {
    return <div>No Address found</div>; // Handle case where no products are found
  }

   console.log(addressGetter.addresses)

  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-3-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer space-y-6'>

                {/* {addressGetter.addresses?.map((item)=> <AddressCard item={item}/>)} */}
                
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField required id='firstName' name='firstName' label="First Name"
                    fullWidth autoComplete='given-name'>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='lastName' name='lastName' label="Last Name"
                    fullWidth autoComplete='given-name'>
                  </TextField>
                </Grid>
                <Grid item xs={12} >
                  <TextField required id='address' name='address' label="Address"
                    fullWidth autoComplete='given-name'
                    multiline
                    rows={4}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='city' name='city' label="City"
                    fullWidth autoComplete='given-name'>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='state' name='state' label="State/Province/Region"
                    fullWidth autoComplete='given-name'>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='zip' name='zip' label="Zip / Postal code"
                    fullWidth autoComplete='shipping postal-code'>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='phoneNumber' name='phoneNumber' label="PhoneNumber"
                    fullWidth autoComplete='given-name'>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button sx={{ py: 1, mt: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained' type="submit">Deliver Here</Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm