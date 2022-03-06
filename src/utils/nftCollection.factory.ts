import { NFTCollectionI } from "../models/NFTCollection/NFTCollection.model";

export interface CollectionRowI {
  id: string;
  name: string;
  tokenId: number;
  priceBought: number;
  dateBought: string;
  methodBought: string;
  url: string;
}

export function generateNFTCollectionRow(data: NFTCollectionI[]): CollectionRowI[] {
  const collectionRows: CollectionRowI[] = [];

  for (let item of data) {
    const { id, name, tokenId, priceBought, methodBought, url} = item;
    const date = new Date(item.dateBought);
    const dateBought: string = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    const row: CollectionRowI = {
      id,
      name,
      tokenId,
      priceBought,
      dateBought,
      methodBought,
      url
    };
    collectionRows.push(row);
  };
  return collectionRows;
};
