import React from 'react';
import { Box, Button, TextField } from '@mui/material';

export interface TextFieldI {
  id: string;
  label: string;
  name: string;
  type?: string;
  inputLabelProps?: { [key: string]: string | number | boolean };
}

interface PropTypes {
  fieldProps: TextFieldI[];
  style: { [key: string]: string | number | boolean | { [key: string]: string | number }};
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};


export default function FormPropsTextFields(props: PropTypes) {
  const { fieldProps, style, handleInputChange } = props;
  return (
    <Box
      component='form'
      sx={style}
      noValidate
      autoComplete='off'
    >
      {fieldProps.map((fieldProp) => {
        const { id, label, type, inputLabelProps, name } = fieldProp;
        return (
          <TextField
            id={id}
            name={name}
            key={label}
            label={label}
            type={type}
            InputLabelProps={inputLabelProps}
            onChange={handleInputChange}
          />
        )
      })}
      <Button variant='contained'>
        Submit
      </Button>
    </Box>
  )
}