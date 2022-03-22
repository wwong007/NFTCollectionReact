// REACT
import React from 'react';

// CSS/STYLE
import './InfoBar.css'
import { infoBarSearchFieldStyle } from './InfoBar.style';

// MATERIAL UI
import { Typography } from '@mui/material';

// COMPONENT
import SearchBox from '../../../core/Search/SearchBox';


export interface InfoBarPropI {
  totalSpent: number;
  totalSold: number;
  totalFees: number;
  profit: number
}

interface PropType {
  data: InfoBarPropI;
  handleSearch: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export default function SalesHistoryInfoBar(props: PropType) {
  const { totalSold, totalSpent, totalFees, profit } = props.data;
  const profitFontColor: string = profit < 0 ? 'red' : 'green';
  return (
    <div className='Info-Bar'>
      <SearchBox
        handleInputChange={props.handleSearch}
        style={infoBarSearchFieldStyle}
        fieldId='fullWidth'
        fieldLabel='Search'
        fieldSize='small'
      />
      <Typography>Total Spent: {totalSpent}</Typography>
      <Typography>Total Sold: {totalSold}</Typography>
      <Typography>Total Fees: {totalFees}</Typography>
      <Typography sx={{ color: profitFontColor }}>Profit: {profit}</Typography>
    </div>
  )
}