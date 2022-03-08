import { EditOutlined } from '@mui/icons-material';
import React from 'react';
import BasicModal from '../../../core/Modal/BasicModal';
import EditNFTForm from '../Form/EditNFTForm';


export default function EditNFTModal() {
  return(
    <BasicModal
      buttonIcon={<EditOutlined fontSize='large' />}
      content={<EditNFTForm />}
      modalTitle='Modal for Editing NFT Item'
      modalDescription='A modal containing a form to edit NFT item in the table'
    />
  )
}