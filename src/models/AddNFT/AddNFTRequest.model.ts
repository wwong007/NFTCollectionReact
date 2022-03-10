import { MethodBought } from "../NFTCollection/NFTCollection.model";


export interface AddNFTRequestI {
  id: string;
  name: string;
  tokenId: number;
  priceBought: number;
  dateBought: number;
  feeBought: number;
  methodBought: MethodBought;
  url: string
};

export interface AddNFTInputsI {
  name: string;
  tokenId: string;
  priceBought: string;
  dateBought: string;
  feeBought: string;
  methodBought: MethodBought;
  url: string;
}

export const addNFTInputInitialValue: AddNFTInputsI = {
  name: '',
  tokenId: '',
  priceBought: '',
  dateBought: '',
  feeBought: '',
  methodBought: 'secondary',
  url: ''
}