// REACT
import * as React from 'react';

// MATERIAL UI
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import  MenuIcon from '@mui/icons-material/Menu';


export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [ pageName, setPageName ] = React.useState<string | null>('Collection') 
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }



  const handleClose = (event: React.MouseEvent<HTMLLIElement>) => {
    setPageName(event.currentTarget.innerText)
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
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appBar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical:'bottom',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Collection</MenuItem>
              <MenuItem onClick={handleClose}>Sales History</MenuItem>
            </Menu>
          </>
          <Typography variant='h6' component='div' sx={{ display: 'flex', justifyContent: 'flex-start'}}>
            {pageName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}