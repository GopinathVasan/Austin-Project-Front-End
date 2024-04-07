import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import React, { useEffect, useState } from 'react';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "position",
      headerName: "Position",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "totalInvestedAmount",
      headerName: "Total Invested Amount",
      flex: 1,
      renderCell: ({ value }) => (
        // <Typography color={colors.greenAccent[500]}><i class="fa fa-inr"></i>{value}</Typography>
        <Typography color={colors.greenAccent[500]} sx={{ display: 'flex', alignItems: 'center' }}>
  <i class="fa fa-inr" style={{ marginRight: '5px' }}></i>{value}
</Typography>

      ),
    },
  ];

  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/dashboard/teammembers')
      .then(response => response.json())
      .then(data => {
        setTeamMembers(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Box m="20px">
      {/* <Header title="TEAM" subtitle="Managing the Team Members" /> */}
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
        <DataGrid checkboxSelection rows={teamMembers} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
