import { Typography } from '@mui/material';
import React from 'react';
import './InfoBar.css'

export interface InfoBarPropI {
  totalSpent: number;
  totalSold: number;
  totalFees: number;
  profit: number
}

interface PropType {
  data: InfoBarPropI
}

export default function SalesHistoryInfoBar(props: PropType) {
  const { totalSold, totalSpent, totalFees, profit } = props.data;
  const profitFontColor: string = profit < 0 ? 'red' : 'green'
  return (
    <div className='Info-Bar'>
      <Typography>Total Spent: {totalSpent}</Typography>
      <Typography>Total Sold: {totalSold}</Typography>
      <Typography>Total Fees: {totalFees}</Typography>
      <Typography sx={{ color: profitFontColor }}>Profit: {profit}</Typography>
    </div>
  )
}