import * as React from 'react';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'Zakhele Ntambazinduna', col2: '15', col3: '30%' },
  { id: 2, col1: 'Theo', col2: '30', col3: '90%' },
  { id: 3, col1: 'James', col2: '15', col3: '47%' },
  { id: 4, col1: 'Moloto', col2: '25', col3: '27%' },
  { id: 5, col1: 'Evans', col2: '12', col3: '97%' },
  { id: 6, col1: 'Tom', col2: '43', col3: '87%' },
  { id: 7, col1: 'Sabelo', col2: '37', col3: '37%' },
  { id: 8, col1: 'Akhaya', col2: '41', col3: '67%' },

];

const columns = [
  { field: 'col1', headerName: 'Name', width: 200 },
  { field: 'col2', headerName: '# Cases', width: 80 },
  { field: 'col3', headerName: 'Success rate', width: 100 },
  {
    field: 'col4', headerName: 'Actions', width: 100,
    renderCell: ((params) => (
      <Button variant='outlined' size='small'>Open</Button>
    ))
  },
];

export function CustomGridTable() {
  return (
    <div style={{ height: 455, width: '100%' }}>
      <DataGrid
        sx={{
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '.MuiDataGrid-columnHeaders': {
            backgroundColor: '#9ad29c'
          },
          '.MuiDataGrid-columnHeaderTitle': {
            fontSize: 14,
            fontWeight: 'bold',
          },
          '.MuiDataGrid-cell': {
            fontSize: 16,
            fontWeight: 'Normal',
          },
        }} rows={rows} columns={columns} />
    </div>
  );
}
