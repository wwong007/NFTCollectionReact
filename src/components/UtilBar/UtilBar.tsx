import React from 'react';
import AddNFTModal from '../AddNFT/Modal/AddNFTModal';
import EditNFTModal from '../EditNFT/Modal/EditNFTModal';
import './UtilBar.css'

export default function UtilBar() {
  return (
    <div className='Util-Bar'>
      <AddNFTModal />
      <EditNFTModal />
    </div>
  )
}