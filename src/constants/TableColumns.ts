import { GridColDef } from "@mui/x-data-grid";


export const CollectionTableColumns: GridColDef[] = [
  { field: 'id', headerName: 'Id', minWidth: 200, align: 'center', headerAlign: 'center' },
  { field: 'name', headerName: 'Name', width: 150, align: 'center', headerAlign: 'center' },
  { field: 'tokenId', headerName: 'Token Id', width: 100, align: 'center', headerAlign: 'center' },
  { field: 'priceBought', headerName: 'Purchase Price', type: 'number', width: 125, align: 'center', headerAlign: 'center' },
  { field: 'dateBought', headerName: 'Purchase Date', width: 125, align: 'center', headerAlign: 'center' },
  { field: 'methodBought', headerName: 'Purchase Method', width: 150, align: 'center', headerAlign: 'center' },
  { field: 'url', headerName: 'Url', width: 500 },
]


export const SalesHistoryTableColumns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 200, headerAlign: 'center', align: 'center' },
  { field: 'priceBought', headerName: 'Purchase Price', width: 115, headerAlign: 'center', align: 'center' },
  { field: 'dateBought', headerName: 'Purchase Date', width: 115, headerAlign: 'center', align: 'center' },
  { field: 'feeBought', headerName: 'Purchase Fee', width: 115, headerAlign: 'center', align: 'center' },
  { field: 'priceSold', headerName: 'Sales Price', width: 105, headerAlign: 'center', align: 'center' },
  { field: 'dateSold', headerName: 'Sales Date', width: 105, headerAlign: 'center', align: 'center' },
  { field: 'feeSold', headerName: 'Sales Fee', width: 105, headerAlign: 'center', align: 'center' },
  { field: 'methodSold', headerName: 'Sales Method', width: 115, headerAlign: 'center', align: 'center' },
  { field: 'url', headerName: 'Url', width: 500 }
];