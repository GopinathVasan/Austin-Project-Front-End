import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataContacts } from "../Data/Mockdata";
// import { useEffect, useState } from "react";
// import axios from "axios"; // Import axios for API calls
import { useTheme } from "@mui/material";

const Contact = () => {
//   const [contacts, setContacts] = useState([]); // State to hold contact data
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Register ID" }, // Change to "registerId" to match backend
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",width: 125, minWidth: 150, 
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,width: 125, minWidth: 150, 
    },
    {
      field: "phone", // Change to "phoneNumber" to match backend
      headerName: "Phone Number",
      flex: 1,width: 125, minWidth: 150, 
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,width: 125, minWidth: 150, 
    },
  ];

//   useEffect(() => {
//     // Fetch contact data from backend when component mounts
//     fetch('http://127.0.0.1:8000/dashboard/contactinformation')
//       .then(response => response.json())
//       .then(data => {
//         setContacts(data); // Set the retrieved contacts in state
//       })
//       .catch(error => {
//         console.error("Error fetching contacts:", error);
//       });
//   }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <Box>
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
        <DataGrid
          rows={mockDataContacts} // Pass fetched contacts as rows
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          slotProps={{ toolbar: { 
            csvOptions: { fileName: 'Contact Information' }, 
            printOptions: { fileName: 'Contact Information' }
        } }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
