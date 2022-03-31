// REACT
import React from 'react';

// STYLE
import { modalFormStyle } from '../../../core/Form/Form.styles';

// MODELS
import { addNFTFormTextFields } from '../../../models/AddNFT/AddNFTForm.model';
import { addNFTInputInitialValue, AddNFTInputsI, AddNFTRequestI } from '../../../models/AddNFT/AddNFTRequest.model';

// COMPONENT
import FormPropsTextFields from '../../../core/Form/FormPropsTextFields';

// API
import { addNFTApi } from '../../../services/apis/addNFTApi';

// HANDLER
import { handleInputChange } from '../../../handlers/handleInputChange';

// FACTORY FUNCTION
import { addNFTRequestFactoryFromInput } from '../../../utils/addNFTRequest.factory';

export default function AddNFTForm () {
  const [inputs, setInputs] = React.useState<AddNFTInputsI>(addNFTInputInitialValue);

  const handleFormInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleInputChange<AddNFTInputsI>(event, setInputs)
    console.log(inputs)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const request: AddNFTRequestI = await addNFTRequestFactoryFromInput(inputs);
    addNFTApi(request);
    alert('NFT Submitted')
    window.location.reload()
  }

  return (
    <FormPropsTextFields
      fieldProps={addNFTFormTextFields}
      style={modalFormStyle}
      handleInputChange={handleFormInputChange}
      handleSubmit={handleSubmit}
    />
  )
}