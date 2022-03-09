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
  tokenId: number;
  priceBought: number;
  dateBought: string;
  feeBought: number;
  methodBought: MethodBought;
  url: string;
}