import React from 'react';
import { modalFormStyle } from '../../../core/Form/Form.styles';
import FormPropsTextFields from '../../../core/Form/FormPropsTextFields';
import { addNFTFormTextFields } from '../../../models/AddNFT/AddNFTForm.model';



export default function AddNFTForm () {
  return (
    <FormPropsTextFields
      fieldProps={addNFTFormTextFields}
      style={modalFormStyle}
    />
  )
}