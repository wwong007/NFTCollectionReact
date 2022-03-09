import { TextFieldI } from '../../core/Form/FormPropsTextFields';

export const addNFTFormTextFields: TextFieldI[] = [
  {
    id: 'outlined-required',
    label: 'Name',
    name: 'name'
  },
  {
    id: 'outlined',
    label: 'Token Id',
    name: 'tokenId'
  },
  {
    id: 'outlined',
    label: 'Purchase Price',
    name: 'priceBough'
  },
  {
    id: 'outlined',
    label: 'Purchase Date',
    name: 'dateBought',
    type: 'date',
    inputLabelProps: { shrink: true }
  },
  {
    id: 'outlined',
    label: 'Purchase Fee',
    name: 'feeBought'
  },
  {
    id: 'outlined',
    label: 'Purchase Method',
    name: 'methodBought'
  },
  {
    id: 'outlined',
    label: 'Url',
    name: 'url',
    type: 'url'
  }

]