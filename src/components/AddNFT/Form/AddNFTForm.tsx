import React from 'react';
import { modalFormStyle } from '../../../core/Form/Form.styles';
import FormPropsTextFields from '../../../core/Form/FormPropsTextFields';
import { addNFTFormTextFields } from '../../../models/AddNFT/AddNFTForm.model';
import { AddNFTInputsI, AddNFTRequestI } from '../../../models/AddNFT/AddNFTRequest.model';
import { addNFTApi } from '../../../services/apis/addNFTApi';
import { addNFTRequestFactoryFromInput } from '../../../utils/addNFTRequest.factory';


export default function AddNFTForm () {
  const [inputs, setInputs] = React.useState<AddNFTInputsI>({
    name: '',
    tokenId: Infinity,
    priceBought: Infinity,
    dateBought: '',
    feeBought: Infinity,
    methodBought: 'secondary',
    url: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const request: AddNFTRequestI = addNFTRequestFactoryFromInput(inputs);
    // addNFTApi(request);
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