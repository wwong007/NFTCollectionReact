export type MethodBought = 'mint' | 'secondary' | 'private' | 'trade';
export type MethodSold = 'secondary' | 'private' | 'trade' | 'N/A';

export interface NFTCollectionI {
  id: string;
  name: string;
  tokenId: number;
  priceBought: number;
  priceSold: number | null;
  dateBought: number;
  dateSold: number | null;
  feeBought: number;
  feeSold: number | null;
  url: string;
  isSold: boolean;
  methodBought: MethodBought;
  methodSold: MethodSold;
}