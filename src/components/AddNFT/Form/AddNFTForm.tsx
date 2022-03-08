import React from 'react';
import FormPropsTextFields from '../../../core/Form/FormPropsTextFields';
import { addNFTFormTextFields } from '../../../models/AddNFT/AddNFTForm.model';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 540,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
  '& .MuiTextField-root': { m: 1, width: '25ch' },
  '& button': { m: 1, width: '32.5ch' },
};


export default function AddNFTForm () {
  return (
    <FormPropsTextFields
      fieldProps={addNFTFormTextFields}
      style={style}
    />
  )
}