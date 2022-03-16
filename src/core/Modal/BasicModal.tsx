// REACT
import React, { ReactElement } from 'react';

// MATERIAL UI
import { Button, Modal } from '@mui/material';


interface PropTypes {
  buttonIcon: ReactElement;
  content: ReactElement;
  modalTitle: string;
  modalDescription: string
}

export default function BasicModal(props: PropTypes) {
  const { buttonIcon, content, modalDescription, modalTitle} = props;
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        {buttonIcon}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={modalTitle}
        aria-describedby={modalDescription}
      >
        <>
          {content}
        </>
      </Modal>
    </div>

  )
}