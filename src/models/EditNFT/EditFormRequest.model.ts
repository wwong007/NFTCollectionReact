

export interface EditNFTRequestI {
  id: string;
  priceSold: number;
  dateSold: number;
  feeSold: number;
  methodSold: string;
};

export interface EditNFTFormI {
  priceSold: string;
  dateSold: string;
  feeSold: string;
  methodSold: string;
};

export const editNFTFormInitialValues: EditNFTFormI = {
  priceSold: '',
  dateSold: '',
  feeSold: '',
  methodSold: ''
};