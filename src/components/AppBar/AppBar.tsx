import * as React from 'react';

import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import  MenuIcon from '@mui/icons-material/Menu';


export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [ pageName, setPageName ] = React.useState<string>('Collection') 
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPageName(event.currentTarget.value)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={handleMenuChange}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appBar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical:'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Collection</MenuItem>
              <MenuItem onClick={handleClose}>Sale History</MenuItem>
            </Menu>
          </>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {pageName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}