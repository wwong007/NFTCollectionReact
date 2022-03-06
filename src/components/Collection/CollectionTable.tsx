import React from 'react'
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../core/Table/DataTable";
import { NFTCollectionI } from "../../models/NFTCollection/NFTCollection.model";
import { CollectionRowI, generateNFTCollectionRow } from "../../utils/nftCollection.factory"


interface PropType {
  data: NFTCollectionI[]
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'name', headerName: 'Name', width: 125 },
  { field: 'tokenId', headerName: 'Token Id', width: 100 },
  { field: 'priceBought', headerName: 'Purchase Price', type: 'number', width: 100 },
  { field: 'dateBought', headerName: 'Purchase Date', width: 150 },
  { field: 'methodBought', headerName: 'Purchase Method', width: 125 },
  { field: 'url', headerName: 'Url', width: 300 },
]

export default function CollectionTable(props: PropType) {
  const rows: CollectionRowI[] = generateNFTCollectionRow(props.data);
  return(
    <>
      <DataTable<CollectionRowI>
        rows={rows}
        columns={columns}
      />
    </>
  )
}