// MODELS
import { InfoBarPropI } from "../components/Bar/InfoBar/InfoBar";
import { NFTCollectionI } from "../models/NFTCollection/NFTCollection.model";




export function calculateInfoBarData(data: NFTCollectionI[]): InfoBarPropI {
  let totalSpent: number = 0;
  let totalSold: number = 0;
  let totalFees: number = 0;

  for (let item of data) {
    const { priceBought, priceSold, feeBought, feeSold } = item;
    totalSpent += priceBought;
    totalSold += priceSold ? priceSold : 0;
    totalFees += feeBought + (feeSold ? feeSold : 0);
  }

  const profit: number = totalSold - totalSpent - totalFees;

  return {
    totalSpent,
    totalSold,
    totalFees, 
    profit
  }
}