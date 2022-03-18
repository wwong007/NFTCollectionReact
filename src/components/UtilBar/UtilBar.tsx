// REACT
import React from 'react';

// CSS/STYLE
import './UtilBar.css'
import { utilBarSearchFieldStyle } from './UtilBar.style';

// COMPONENTS
import AddNFTModal from '../AddNFT/Modal/AddNFTModal';
import EditNFTModal from '../EditNFT/Modal/EditNFTModal';
import SearchBox from '../../core/Search/SearchBox';



interface PropType {
  handleSearch: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export default function UtilBar(props: PropType) {
  return (
    <div className='Util-Bar'>
      <SearchBox
        handleInputChange={props.handleSearch}
        style={utilBarSearchFieldStyle}
        fieldId='fullWidth'
        fieldLabel='Search'
        fieldSize='small'
      />
      <AddNFTModal />
      <EditNFTModal />
    </div>
  )
}