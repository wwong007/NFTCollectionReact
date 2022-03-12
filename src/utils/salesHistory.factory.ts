import { NFTCollectionI } from "../models/NFTCollection/NFTCollection.model";


export interface SalesHistoryRowI {
  id: string;
  priceBought: number;
  dateBought: string;
  feeBought: number;
  priceSold: number | null;
  dateSold: string;
  feeSold: number | null;
  methodSold: string;
  url: string;
};

export function generateSalesHistoryTableRows (data: NFTCollectionI[]): SalesHistoryRowI[] {
  const salesHistoryRows: SalesHistoryRowI[] = [];

  for (let item of data) {
    const { id, priceBought, feeBought, priceSold, feeSold, methodSold, url } = item;
    const purchaseDate: Date = new Date(item.dateBought);
    const salesDate: Date = item.dateSold ? new Date(item.dateSold) : new Date();
    const dateBought: string = `${purchaseDate.getMonth()}/${purchaseDate.getDate()}/${purchaseDate.getFullYear()}`;
    const dateSold: string = `${salesDate.getMonth()}/${salesDate.getMonth()}/${salesDate.getFullYear()}`;

    const row: SalesHistoryRowI = {
      id,
      priceBought,
      dateBought,
      feeBought,
      priceSold,
      dateSold,
      feeSold,
      methodSold,
      url
    }

    salesHistoryRows.push(row)
  }

  return salesHistoryRows;
}