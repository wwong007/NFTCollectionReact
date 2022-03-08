import React from 'react';
import { modalFormStyle } from '../../../core/Form/Form.styles';
import FormPropsTextFields from '../../../core/Form/FormPropsTextFields';
import { editNFTFormTextFields } from '../../../models/EditNFT/EditNFTForm.model';


export default function EditNFTForm() {
  return(
    <FormPropsTextFields
      fieldProps={editNFTFormTextFields}
      style={modalFormStyle}
    />
  );
};