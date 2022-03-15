import { Typography } from '@mui/material';
import React from 'react';
import './InfoBar.css'

interface PropTypes {
  totalSpent: number;
  totalSold: number;
  totalFees: number;
}

export default function SalesHistoryInfoBar(props: PropTypes) {
  const { totalSold, totalSpent, totalFees } = props
  const profit: number = totalSold - totalSpent - totalFees

  return (
    <div className='Info-Bar'>
      <Typography>Total Spent: {totalSpent}</Typography>
      <Typography>Total Sold: {totalSold}</Typography>
      <Typography>Total Fees: {totalFees}</Typography>
      <Typography>Profit: {profit}</Typography>
    </div>
  )
}