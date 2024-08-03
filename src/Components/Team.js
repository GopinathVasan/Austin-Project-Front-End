import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataTeam } from "../Data/Mockdata";
import React from 'react';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,width: 125, minWidth: 150, 
      cellClassName: "name-column--cell",
    },
    {
      field: "access",
      headerName: "Position",
      flex: 1,width: 125, minWidth: 150, 
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,width: 125, minWidth: 150, 
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,width: 125, minWidth: 150,
    },
    {
      field: "age",
      headerName: "AGE",
      flex: 1,width: 125, minWidth: 150, 
      renderCell: ({ value }) => (
        // <Typography color={colors.greenAccent[500]}><i class="fa fa-inr"></i>{value}</Typography>
        <Typography color={colors.greenAccent[500]} sx={{ display: 'flex', alignItems: 'center' }}>
  <i class="fa fa-inr" style={{ marginRight: '5px' }}></i>{value}
</Typography>

      ),
    },
  ];

  return (
    <Box>
      {/* <Header title="TEAM" subtitle="Managing the Team Members" /> */}
      <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "1px solid",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
