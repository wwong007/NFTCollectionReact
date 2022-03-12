import { EditNFTFormI, EditNFTRequestI } from "../models/EditNFT/EditFormRequest.model";


export function editNFTRequestFactoryFromInputs(inputs: EditNFTFormI): EditNFTRequestI {
  const { id, methodSold } = inputs;
  const priceSold: number = parseInt(inputs.priceSold);
  const dateSold: number = Date.parse(inputs.dateSold);
  const feeSold: number = parseInt(inputs.feeSold);
  return {
    id,
    priceSold,
    dateSold,
    feeSold,
    methodSold
  }
}