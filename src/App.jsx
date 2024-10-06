// import { Box } from '@mui/material';

// import { DataGrid } from '@mui/x-data-grid';
// import React, { useState } from 'react'

// export default function App() {



//   const columns = [
//     { field: 'col1', headerName: 'Name', width: 150 },
//   { field: 'col2', headerName: 'phone', width: 150 },

//   ];

//   const rows = [
//     { id: 1, col1: 'suad', col2: '612233' },
//     { id: 2, col1: 'halima', col2: '623344' },
//     { id: 3, col1: 'ali', col2: '674943' },
//     { id: 4, col1: 'cumar', col2: '625258' },
//     { id: 5, col1: 'sara', col2: '635243' },
//     { id: 6, col1: 'dudi', col2: '675933' },
//     { id: 7, col1: 'dudi', col2: '675933' },
//     { id: 8, col1: 'dudi', col2: '675933' },
//     { id: 9, col1: 'dudi', col2: '675933' },
//     { id: 10, col1: 'dudi', col2: '675933' },
//     { id: 11, col1: 'dudi', col2: '675933' },
//     { id: 12, col1: 'dudi', col2: '675933' },
//     { id: 13, col1: 'dudi', col2: '675933' },
//     { id: 14, col1: 'dudi', col2: '675933' },
//     { id: 15, col1: 'dudi', col2: '675933' },
//     { id: 16, col1: 'dudi', col2: '675933' },
//     { id: 17, col1: 'dudi', col2: '675933' },
//     { id: 18, col1: 'dudi', col2: '675933' },
//     { id: 19, col1: 'dudi', col2: '675933' },
//     { id: 20, col1: 'dudi', col2: '675933' },
//   ]

//   const pageSize = 4
//   return (
//     <>
//       <Box sx={{ height: 340, width: '50%' , bgcolor: 'lime', ml: '26%' , mt: '50px' }} >
//         <DataGrid

//           rows={rows}
//           columns={columns}
//           getRowId={(row) => row.id}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: pageSize,
//               },
//             },
//           }}
//           pageSizeOptions={[rows.length === 0 ? 0 : pageSize]}

//           disableRowSelectionOnClick
//         />

//       </Box>
//     </>
//   )
// }

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 4, col1: 'MUI', col2: 'is Amazing' },
  { id: 5, col1: 'MUI', col2: 'is Amazing' },
  { id: 6, col1: 'MUI', col2: 'is Amazing' },
  { id: 7, col1: 'MUI', col2: 'is Amazing' },
  { id: 8, col1: 'MUI', col2: 'is Amazing' },
  { id: 9, col1: 'MUI', col2: 'is Amazing' },
  { id: 10, col1: 'MUI', col2: 'is Amazing' },

];

const columns = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function App() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}

      />
    </div>
  );
}
