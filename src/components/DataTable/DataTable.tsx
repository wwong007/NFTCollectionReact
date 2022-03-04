import React from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id' },
    { field: 'name', headerName: 'Name' },
    { field: 'tokenId', headerName: 'Token Id', type: 'number' },
    { field: 'priceBought', headerName: 'Purchase Price', type: 'number' },
    { field: 'dateBought', headerName: 'Purchase Date' },
    { field: 'methodBought', headerName: 'Purchase Method' },
    { field: 'url', headerName: 'URL' },
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
  return(
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}