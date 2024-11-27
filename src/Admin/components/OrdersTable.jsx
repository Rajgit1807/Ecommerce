import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { confirmOrder, deleteOrder, deliveredOrder, getAllOrders, shipOrder } from '../../State/Admin/Orders/Action';

const OrdersTable = () => {
    const [anchorEl, setAnchorEl] = React.useState([]);

    const open = Boolean(anchorEl);
    const handleClick = (event,index) => {
        const newAnchorElArray = [...anchorEl]
        newAnchorElArray[index] = event.currentTarget
        setAnchorEl(newAnchorElArray);
    };
    const handleClose = (index) => {
        const newAnchorElArray = [...anchorEl]
        newAnchorElArray[index] = null
        setAnchorEl(newAnchorElArray);
    };

    const dispatch = useDispatch();

    const { adminOrder } = useSelector(store => store)

    const handleOrderDelete = (orderId) => {
        dispatch(deleteOrder(orderId));
    }

    const handleConfirmOrder = (orderId,index) => {
        handleClose(index); // Close the menu
        dispatch(confirmOrder(orderId));
    };

    const handleShipOrder = (orderId,index) => {
        handleClose(index); // Close the menu
        dispatch(shipOrder(orderId));
    };

    const handleDeliverOrder = (orderId,index) => {
        handleClose(index); // Close the menu
        dispatch(deliveredOrder(orderId));
    };

    useEffect(() => {
        dispatch(getAllOrders());
        console.log("got it");
    }, [
        adminOrder.confirmed,
        adminOrder.placed,
        adminOrder.delivered,
        adminOrder.canceled,
        adminOrder.shipped,
        adminOrder.deleted,
        adminOrder.outfordel
    ]);
    

    return (
        <div className="p-5">
            <Card className='mt-2'>
                <CardHeader title="All Orders" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell clign='left'>Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left">Update</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders?.map((item,index) => (
                                <TableRow
                                    key={item._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="">
                                        <AvatarGroup sx={{ justifyContent: "start" }}>
                                            {item.orderItems.map((orderItem) =>
                                                <Avatar src={orderItem.product.imageUrl} >
                                                </Avatar>)}

                                        </AvatarGroup>

                                    </TableCell>
                                    <TableCell align="left" scope="row">
                                        {item.orderItems.map((orderItem) =>
                                            <p className='text-nowrap'>
                                                {orderItem.product.title}
                                            </p>)}
                                    </TableCell>
                                    <TableCell align="left">{item._id}</TableCell>
                                    <TableCell align="left">{item.totalDiscountedPrice}</TableCell>
                                    <TableCell align="left">
                                        <span
                                            className={`text-white px-5 py-2 rounded-full ${item.orderStatus === "CONFIRMED" ? "bg-[#369236]" :
                                                item.orderStatus === "SHIPPED" ? "bg-[#4141ff]" :
                                                    item.orderStatus === "PLACED" ? "bg-[#028290]" :
                                                        item.orderStatus === "PENDING" ? "bg-[gray]" :
                                                            "bg-[#025720]"
                                                }`}
                                        >
                                            {item.orderStatus}
                                        </span>
                                    </TableCell>

                                    <TableCell align="left">
                                        <Button
                                            id="basic-button"
                                            aria-controls={`basic-menu-${item._id}`}
                                            aria-haspopup="true"
                                            aria-expanded={Boolean(anchorEl[index])}
                                            onClick={(event)=>handleClick(event,index)}
                                        >
                                            Status
                                        </Button>
                                        <Menu
                                            id={`basic-menu-${item._id}`}
                                            anchorEl={anchorEl[index]}
                                            open={Boolean(anchorEl[index])}
                                            onClose={()=>handleClose(index)}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem onClick={()=>handleConfirmOrder(item._id,index)}>Confirmed</MenuItem>
                                            <MenuItem onClick={()=>handleShipOrder(item._id,index)}>Shipped</MenuItem>
                                            <MenuItem onClick={()=>handleDeliverOrder(item._id,index)}>Delivered</MenuItem>
                                        </Menu>            
                                    </TableCell>

                                    <TableCell align="left">
                                        <Button variant='outlined' onClick={() => handleOrderDelete(item._id)}>DELETE</Button>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}

export default OrdersTable