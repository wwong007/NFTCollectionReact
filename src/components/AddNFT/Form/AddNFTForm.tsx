import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};


export default function AddNFTForm () {
  return (
    <Box
      component='form'
      sx={{
        ...style,
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        required
        id='outlined-required'
        label='Name'
      />
      <TextField
        required
        id='outlined-required'
        label='Token Id'
      />
      <TextField
        required
        id='outlined-required'
        label='Purchase Price'
      />
      <TextField
        required
        id='outlined-required'
        label='Purchase Date'
        type={'date'}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        required
        id='outlined-required'
        label='Purchase Fee'
      />
      <TextField
        required
        id='outlined-required'
        label='Purchase Method'
      />
      <TextField
        required
        id='outlined-required'
        label='Url'
        type={'url'}
      />
      <Button>Submit</Button>
    </Box>
  )
}