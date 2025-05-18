//import React from 'react'

import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (

    <nav className="navbar">
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Link to={'/home'}><Button color="inherit">Home</Button></Link>
          
          <Link to={'/login'}><Button color="inherit">Login</Button></Link>
          <Link to={'/signup'}><Button color="inherit">SignUP</Button></Link>
          <Link to={'/admindtl'}><Button color="inherit">AdminLogin</Button></Link>
          <Link to={'/logout'}><Button color="inherit">LogOut</Button></Link>
          {/* <Link to={'/vehicledtl'}><Button color="inherit">VehicleDetails</Button></Link> */}
          

        </Toolbar>
      </AppBar>
    </Box>


    </div>
    </nav>
  )
}

export default NavBar