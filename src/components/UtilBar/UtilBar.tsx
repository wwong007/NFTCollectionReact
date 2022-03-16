// REACT
import React from 'react';

// CSS
import './UtilBar.css'

// COMPONENTS
import AddNFTModal from '../AddNFT/Modal/AddNFTModal';
import EditNFTModal from '../EditNFT/Modal/EditNFTModal';


export default function UtilBar() {
  return (
    <div className='Util-Bar'>
      <AddNFTModal />
      <EditNFTModal />
    </div>
  )
}