import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import Invoices from "../Components/Invoice";
import Header from "../Components/Header.js";
import { tokens } from "../theme";
import Sidebar from "../display/Sidebar.js";

const InvoicesDisplay = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <><Sidebar /><Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
              <Box m="10px" sx={{ bgcolor: colors.box }}>
<Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box height="75vh">
        <Invoices />
      </Box>
    </Box>
    </Box></>
    );
};

export default InvoicesDisplay;
