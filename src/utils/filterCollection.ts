import { NFTCollectionI } from "../models/NFTCollection/NFTCollection.model";

export interface FilteredCollectionI {
  collection: NFTCollectionI[];
  sold: NFTCollectionI[];
}

export function filterCollection (data: NFTCollectionI[]): FilteredCollectionI {
  const collection: NFTCollectionI[] = [];
  const sold: NFTCollectionI[] = [];

  data.forEach((item) => {
    if (item.isSold) {
      sold.push(item)
    } else {
      collection.push(item)
    }
  })

  return {
    collection,
    sold
  }
}