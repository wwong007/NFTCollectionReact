import { TextFieldI } from '../../core/Form/FormPropsTextFields';

export const addNFTFormTextFields: TextFieldI[] = [
  {
    id: 'outlined-required',
    label: 'Name',
  },
  {
    id: 'outlined',
    label: 'Token Id'
  },
  {
    id: 'outlined',
    label: 'Purchase Price'
  },
  {
    id: 'outlined',
    label: 'Purchase Date',
    type: 'date',
    inputLabelProps: { shrink: true }
  },
  {
    id: 'outlined',
    label: 'Purchase Fee'
  },
  {
    id: 'outlined',
    label: 'Purchase Method'
  },
  {
    id: 'outlined',
    label: 'Url',
    type: 'url'
  }

]