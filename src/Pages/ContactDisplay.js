import { Box } from "@mui/material";
import Header from "../Components/Header.js";
import { useTheme } from "@mui/material";
import {tokens} from "../theme";
import Contact from '../Components/Contact';
import Sidebar from "../display/Sidebar.js";

const ContactDisplay = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return (
      <><Sidebar /><Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
          <Box m="20px" sx={{ bgcolor: colors.box }}>
            <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
  <Box height="75vh">
  <Contact />
  </Box>
</Box>
</Box></>
    );
};
export default ContactDisplay;