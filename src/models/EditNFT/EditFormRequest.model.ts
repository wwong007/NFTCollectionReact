

export interface EditNFTRequestI {
  id: string;
  priceSold: number;
  dateSold: number;
  feeSold: number;
  methodSold: string;
};

export interface EditNFTFormI {
  id: string;
  priceSold: string;
  dateSold: string;
  feeSold: string;
  methodSold: string;
};

export const editNFTFormInitialValues: EditNFTFormI = {
  id: '',
  priceSold: '',
  dateSold: '',
  feeSold: '',
  methodSold: ''
};