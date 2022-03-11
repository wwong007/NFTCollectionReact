import { AddNFTInputsI, AddNFTRequestI } from "../models/AddNFT/AddNFTRequest.model";

function getNameInitials(name: string): string {
  const wordArr: string[] = name.split(' ');
  let initials: string = '';

  for (let word of wordArr) {
    initials += word[0];
  }

  return initials
}

export function addNFTRequestFactoryFromInput(inputs: AddNFTInputsI): AddNFTRequestI {
  const { name, tokenId, priceBought, feeBought, methodBought, url } = inputs;
  const dateBought: number = Date.parse(inputs.dateBought);
  const initials: string = getNameInitials(name);
  const id: string = `${initials}-${tokenId}-${dateBought}`;
  const request: AddNFTRequestI = {
    id,
    name,
    tokenId: parseInt(tokenId),
    priceBought: parseInt(priceBought),
    dateBought,
    feeBought: parseInt(feeBought),
    methodBought,
    url
  };

  return request;
}