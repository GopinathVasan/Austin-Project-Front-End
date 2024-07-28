import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios for API calls
import { useTheme } from "@mui/material";

const Contacts = () => {
  const [contacts, setContacts] = useState([]); // State to hold contact data
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registerId", headerName: "Registrar ID" }, // Change to "registerId" to match backend
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber", // Change to "phoneNumber" to match backend
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
  ];

  useEffect(() => {
    // Fetch contact data from backend when component mounts
    fetch('http://127.0.0.1:8000/dashboard/contactinformation')
      .then(response => response.json())
      .then(data => {
        setContacts(data); // Set the retrieved contacts in state
      })
      .catch(error => {
        console.error("Error fetching contacts:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <Box m="20px">
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={contacts} // Pass fetched contacts as rows
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
