// REACT
import React from 'react';

//  MATERIAL ICON
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

// MODEL
import BasicModal from '../../../core/Modal/BasicModal';

// COMPONENT
import AddNFTForm from '../Form/AddNFTForm';



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

