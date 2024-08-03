import { Box } from "@mui/material";
import Header from "../Components/Header.js";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import FAQ from '../Components/FAQ';
import Sidebar from "../display/Sidebar.js";

const Faqdisplay = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    return (
      <><Sidebar /><Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
      <Box m="10px" sx={{ bgcolor: colors.box }}>
              <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box height="75vh">
<FAQ/>
      </Box>
    </Box>
    </Box></>
    );
};
export default Faqdisplay;