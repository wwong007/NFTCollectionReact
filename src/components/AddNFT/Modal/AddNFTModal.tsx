import React from 'react';
import { Box, Button, Modal } from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import AddNFTForm from '../Form/AddNFTForm';



export default function BasicModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <div style={{ gridColumn: 'col1-end/col2-end', gridRow: 'row1-start/row1-end' }}>
      <Button onClick={handleOpen}>
        <AddBoxOutlinedIcon fontSize='large'/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-basic'
        aria-describeby='reusable modal component' 
      >
        <AddNFTForm />
      </Modal>
        
    </div>
  )
}

