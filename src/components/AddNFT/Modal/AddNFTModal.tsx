import React from 'react';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import AddNFTForm from '../Form/AddNFTForm';
import BasicModal from '../../../core/Modal/BasicModal';


export default function AddNFTModal() {

  return(
    <BasicModal
      buttonIcon={<AddBoxOutlinedIcon fontSize='large'/>}
      content={<AddNFTForm />}
      modalTitle='Modal for Adding NFT'
      modalDescription='A modal containing a form for adding nft to the collection'
    />
  )
}

