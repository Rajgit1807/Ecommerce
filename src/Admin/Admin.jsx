import { InboxIcon } from '@heroicons/react/24/outline';
import { AccountCircle, Dashboard, EmailOutlined } from '@mui/icons-material';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';

const menu=[
    {name: "Dashboard", path:"/admin", icon:<Dashboard/>},
    {name: "Products", path:"/admin/products" ,icon:<Dashboard/>},
    {name: "Customers", path:"/admin/customers",icon:<Dashboard/>},
    {name: "Orders", path:"/admin/orders",icon:<Dashboard/>},
    {name: "AddProduct", path:"/admin/product/create",icon:<Dashboard/>},
    // {name: "",path:" "},
    ]

const Admin = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible] = useState(false);
    const navigate = useNavigate();
    
    const drawer = (
        <Box sx={{overflow:"auto",
            display: "flex",
            flexDirection: "column",
            justifyContent:"space-between",
            height:"100%"
        }}>

            {/* {isLargeScreen && <Toolbar/>} */}
            <List>
                {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </ListItemButton>
                    </ListItem>)}
            </List>

            <List>
                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                          <AccountCircle/>
                        </ListItemIcon>
                        <ListItemText>
                            Account
                        </ListItemText>
                    </ListItemButton>
                    </ListItem>
            </List>
            </Box>
    )


  return (
        <div className='relative flex h-[100vh]'>
        <CssBaseline/>
        <div className='w-[15%] fixed shadow-lg shadow-gray-600 h-full'>            
            {drawer}
        </div>
        <div className='w-[85%] ml-[15%] h-[100vh]'>
            <Routes>
                <Route path="/" element={<DashboardPage/>}></Route>
                <Route path="/product/create" element={<CreateProductForm/>}></Route>
                <Route path="/products" element={<ProductsTable/>}></Route>
                <Route path="/orders" element={<OrdersTable/>}></Route>
                <Route path="/customers" element={<CustomersTable/>}></Route>
            </Routes>
        </div>
        </div>
  )
}

export default Admin