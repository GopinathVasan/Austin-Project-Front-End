import { Box, Typography } from "@mui/material";
import Header from "../Components/Header.js";
import { useTheme } from "@mui/material";
import { tokens } from "../theme.js";
import Sidebar from "../display/Sidebar.js";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
<><Sidebar /><Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }} backgroundColor={theme.palette.background.default}>
        <Box p="20px" backgroundColor={colors.primary[400]}>
          <Header title="Calendar" subtitle="Date to schedule" />
          <Box height="70vh">
            <Typography>
                Coming Soon.....
            </Typography>
          </Box>
        </Box>
        </Box></>
  );
};

export default Calendar;
