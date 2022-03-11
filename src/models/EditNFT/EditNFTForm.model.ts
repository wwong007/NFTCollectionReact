import { TextFieldI } from '../../core/Form/FormPropsTextFields';

export const editNFTFormTextFields: TextFieldI[] = [
  {
    id: 'outlined',
    label: 'Id',
    name: 'id'
  },
  {
    id: 'outlined',
    label: 'Sales Price',
    name: 'priceSold'
  },
  {
    id: 'outlined',
    label: 'Sales Date',
    name: 'dateSold',
    type: 'date',
    inputLabelProps: { shrink: true }
  },
  {
    id: 'outlined',
    label: 'Sales Fee',
    name: 'feeSold'
  },
  {
    id: 'outlined',
    label: 'Sales Method',
    name: 'methodSold'
  }
];