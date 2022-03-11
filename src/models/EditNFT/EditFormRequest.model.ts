

export interface EditNFTRequestI {
  id: string;
  priceSold: number;
  dateSold: number;
  feeSold: number;
  methodSold: string;
};

export interface EditNftFormI {
  priceSold: string;
  dateSold: string;
  feeSold: string;
  methodSold: string;
};

export const editNFTFormInitialValue: EditNftFormI = {
  priceSold: '',
  dateSold: '',
  feeSold: '',
  methodSold: ''
};