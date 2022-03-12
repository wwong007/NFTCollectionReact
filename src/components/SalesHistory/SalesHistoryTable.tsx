import React from 'react'
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../core/Table/DataTable";
import { NFTCollectionI } from "../../models/NFTCollection/NFTCollection.model";
import { DataPropI } from "../../models/Props/props.models";
import { generateSalesHistoryTableRows, SalesHistoryRowI } from "../../utils/salesHistory.factory";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 200, headerAlign: 'center', align: 'center' },
  { field: 'priceBought', headerName: 'Purchase Price', width: 115, headerAlign: 'center', align: 'center' },
  { field: 'dateBought', headerName: 'Purchase Date', width: 115, headerAlign: 'center', align: 'center' },
  { field: 'feeBought', headerName: 'Purchase Fee', width: 115, headerAlign: 'center', align: 'center' },
  { field: 'priceSold', headerName: 'Sales Price', width: 105, headerAlign: 'center', align: 'center' },
  { field: 'dateSold', headerName: 'Sales Date', width: 105, headerAlign: 'center', align: 'center' },
  { field: 'feeSold', headerName: 'Sales Fee', width: 105, headerAlign: 'center', align: 'center' },
  { field: 'methodSold', headerName: 'Sales Method', width: 115, headerAlign: 'center', align: 'center' },
  { field: 'url', headerName: 'Url', width: 300 }
];

export default function SalesHistoryTable (props: DataPropI<NFTCollectionI>) {
  const rows: SalesHistoryRowI[] = generateSalesHistoryTableRows(props.data);

  return (
    <>
      <DataTable
        rows={rows}
        columns={columns}
      />
    </>
  )
}