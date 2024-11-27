import React from 'react'
import { Modal, Box, Typography } from "@mui/material"
import Registerform from './Registerform';
import { useLocation } from 'react-router-dom';
import Loginform from './Loginform';
const AuthModel = ({ handleClose, open }) => {

    const location = useLocation()
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        outline: 'none',
        p: 4,
    };
    return (
        <div><Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {location.pathname == "/login" ? <Loginform /> : <Registerform />}

            </Box>
        </Modal></div>
    )
}

export default AuthModel