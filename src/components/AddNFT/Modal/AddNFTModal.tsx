import React from 'react';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import AddNFTForm from '../Form/AddNFTForm';
import BasicModal from '../../../core/Modal/BasicModal';

const modalPosition: { [key: string]: string } = { 
  gridColumn: 'col1-end/col2-end', 
  gridRow: 'row1-start/row1-end' 
};

export default function AddNFTModal() {

  return(
    <BasicModal
      buttonIcon={<AddBoxOutlinedIcon fontSize='large'/>}
      content={<AddNFTForm />}
      style={modalPosition}
      modalTitle='Modal for Adding NFT'
      modalDescription='A modal containing a form for adding nft to the collection'
    />
  )
}

