import React from 'react'
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../core/Table/DataTable";
import { NFTCollectionI } from "../../models/NFTCollection/NFTCollection.model";
import { CollectionRowI, generateNFTCollectionRow } from "../../utils/nftCollection.factory"


interface PropType {
  data: NFTCollectionI[]
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', minWidth: 200, align: 'center', headerAlign: 'center' },
  { field: 'name', headerName: 'Name', width: 150, align: 'center', headerAlign: 'center' },
  { field: 'tokenId', headerName: 'Token Id', width: 100, align: 'center', headerAlign: 'center' },
  { field: 'priceBought', headerName: 'Purchase Price', type: 'number', width: 125, align: 'center', headerAlign: 'center' },
  { field: 'dateBought', headerName: 'Purchase Date', width: 125, align: 'center', headerAlign: 'center' },
  { field: 'methodBought', headerName: 'Purchase Method', width: 150, align: 'center', headerAlign: 'center' },
  { field: 'url', headerName: 'Url', width: 375 },
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