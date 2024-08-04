import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../theme";
import { Box , Typography , useTheme } from '@mui/material';
import { mockDataInvoices } from '../Data/Mockdata';

export default function Invoice() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name", width: 125, minWidth: 150, 
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",width: 125, minWidth: 150, 
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",width: 125, minWidth: 150, 
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",width: 125, minWidth: 150, 
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          <i className="fa fa-inr"></i> {params.value !== null ? params.value : 0}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",width: 125, minWidth: 150, 
      flex: 1,
    },
  ];


  return (
<Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            // backgroundColor: theme.palette.columnHeaders.main,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
      <DataGrid checkboxSelection disableRowSelectionOnClick rows={mockDataInvoices} columns={columns} />
      </Box>
  );
}