import { Box, Button, Checkbox, FormControlLabel, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../State/Order/Action';

const PaymentModal = ({open,handleClose,address}) => {

    const [isChecked, setIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const {order} = useSelector(store=>store)
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      setErrorMessage(''); // Clear the error message when the checkbox state changes
    };
    // console.log(address)

    const handleConfirmOrder = async () => {
      if (!isChecked) {
        setErrorMessage('Please choose a payment method.');
        setTimeout(() => {
            setErrorMessage('');
          }, 4000);
      } else {
        dispatch(createOrder(address))
        handleNavigate()  
      }
    };

const handleNavigate=()=>{
 
  console.log(order)
  handleClose();
  navigate(`/ordersuccess?order_id=${order.order?._id}&show_alert=true`)

}
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#19a86f',
        boxShadow: 24,
        p: 4,
        color:"white"
      };

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
     <Box sx={style}>
      <Typography sx={{fontWeight:"bold"}} id="modal-modal-title" variant="h6" component="h2">
        Payment
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
        label="Cash on Delivery"
        sx={{ mt: 2 }}
      />
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
      <Button onClick={handleClose} variant="contained" color="error">
          Cancel
        </Button>
        <Button onClick={handleConfirmOrder} variant="contained" color="success">
          Confirm Order
        </Button>
        
      </Box>
      {errorMessage && (
          <Typography sx={{ mt: 2, color: 'red' }} variant="body2">
            {errorMessage}
          </Typography>
        )}
    </Box>
  </Modal>
  )
}

export default PaymentModal