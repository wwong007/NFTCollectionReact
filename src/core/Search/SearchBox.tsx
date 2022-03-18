import { Box, TextField } from '@mui/material';
import React from 'react';


interface PropType {
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  style: { [key: string]: string | number | boolean }
  fieldSize?: 'small' | 'medium';
  fieldId: string;
  fieldLabel: string;
}

export default function SearchBox (props: PropType) {
  const { handleInputChange, style, fieldId, fieldLabel, fieldSize } = props
  return (
    <>
      <Box
        sx={style}
      >
        <TextField fullWidth label={fieldLabel} id={fieldId} size={fieldSize} onChange={handleInputChange}/>
      </Box>
    </>
  )
}