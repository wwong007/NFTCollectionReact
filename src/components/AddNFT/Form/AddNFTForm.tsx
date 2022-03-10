import React from 'react';
import { modalFormStyle } from '../../../core/Form/Form.styles';
import FormPropsTextFields from '../../../core/Form/FormPropsTextFields';
import { addNFTFormTextFields } from '../../../models/AddNFT/AddNFTForm.model';
import { addNFTInputInitialValue, AddNFTInputsI, AddNFTRequestI } from '../../../models/AddNFT/AddNFTRequest.model';
import { addNFTApi } from '../../../services/apis/addNFTApi';
import { addNFTRequestFactoryFromInput } from '../../../utils/addNFTRequest.factory';


export default function AddNFTForm () {
  const [inputs, setInputs] = React.useState<AddNFTInputsI>(addNFTInputInitialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }))
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
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  )
}