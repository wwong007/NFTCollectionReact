import React from 'react';
import { Box, Button, TextField } from '@mui/material';

export interface TextFieldI {
  id: string;
  label: string;
  type?: string;
  inputLabelProps?: { [key: string]: string | number | boolean };
}

interface PropTypes {
  fieldProps: TextFieldI[];
  style: { [key: string]: string | number | boolean | { [key: string]: string | number }};
};


export default function FormPropsTextFields(props: PropTypes) {
  const { fieldProps, style } = props;
  return (
    <Box
      component='form'
      sx={style}
      noValidate
      autoComplete='off'
    >
      {fieldProps.map((fieldProp) => {
        const { id, label, type, inputLabelProps } = fieldProp;
        return (
          <TextField
            id={id}
            key={label}
            label={label}
            type={type}
            InputLabelProps={inputLabelProps}
          />
        )
      })}
      <Button variant='contained'>
        Submit
      </Button>
    </Box>
  )
}