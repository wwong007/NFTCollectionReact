import React from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import './DataTable.css'

interface PropTypes<T> {
  rows: T[];
  columns: GridColDef[];
}

export default function DataTable<T>(props: PropTypes<T>) {
  const { rows, columns } = props;
  return(
    <div className='DataTable'>
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