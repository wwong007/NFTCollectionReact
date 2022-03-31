// REACT
import React from 'react';

// STYLE
import { modalFormStyle } from '../../../core/Form/Form.styles';

// MODELS
import { editNFTFormTextFields } from '../../../models/EditNFT/EditNFTForm.model';
import { EditNFTFormI, editNFTFormInitialValues, EditNFTRequestI } from '../../../models/EditNFT/EditFormRequest.model';

// COMPONENTS
import FormPropsTextFields from '../../../core/Form/FormPropsTextFields';

// API
import { editNFTApi } from '../../../services/apis/editNFTApi';

// HANDLER
import { handleInputChange } from '../../../handlers/handleInputChange';

// FACTORY FUNCTION
import { editNFTRequestFactoryFromInputs } from '../../../utils/editNFTRequest.factory';


export default function EditNFTForm() {
  const [inputs, setInputs] = React.useState<EditNFTFormI>(editNFTFormInitialValues);
  const handleFormInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleInputChange(event, setInputs);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const requestItem: EditNFTRequestI = await editNFTRequestFactoryFromInputs(inputs);
    editNFTApi(requestItem);
    alert('Edit Request Submitted')
    window.location.reload();
  };

  return(
    <FormPropsTextFields
      fieldProps={editNFTFormTextFields}
      style={modalFormStyle}
      handleInputChange={handleFormInputChange}
      handleSubmit={handleSubmit}
    />
  );
};