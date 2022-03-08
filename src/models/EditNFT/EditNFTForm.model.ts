import { TextFieldI } from '../../core/Form/FormPropsTextFields';

export const editNFTFormTextFields: TextFieldI[] = [
  {
    id: 'outlined',
    label: 'Sales Price'
  },
  {
    id: 'outlined',
    label: 'Sales Date',
    type: 'date',
    inputLabelProps: { shrink: true }
  },
  {
    id: 'outlined',
    label: 'Sales Fee'
  },
  {
    id: 'outlined',
    label: 'Sales Method'
  }
];