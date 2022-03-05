import React from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'name', headerName: 'Name', width: 125 },
    { field: 'tokenId', headerName: 'Token Id', width: 100 },
    { field: 'priceBought', headerName: 'Purchase Price', type: 'number', width: 100 },
    { field: 'dateBought', headerName: 'Purchase Date', width: 150 },
    { field: 'methodBought', headerName: 'Purchase Method', width: 125 },
    { field: 'url', headerName: 'URL', width: 300 },
];

const rows = [
  { id: 'K-1286', name: 'Karafuru', tokenId: 1286, priceBought: 3.49, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1287', name: 'Karafuru', tokenId: 1287, priceBought: 3.6, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1288', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1289', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1290', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1291', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1292', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1293', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1294', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1295', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1296', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1297', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1298', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
  { id: 'K-1299', name: 'Karafuru', tokenId: 1288, priceBought: 3.32, dateBought: '01/29/2022', methodBought: 'Secondary', url: 'opensea.io/karafuru' },
];

export default function DataTable() {
  const handleRowId = (id: string) => {
    console.log(id)
  }
  return(
    <div style={{ width: '100%', gridColumn: 'col1-end/col2-end', gridRow: 'row1-end/last-line'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        autoHeight={true}
        
      />
    </div>
  )
}