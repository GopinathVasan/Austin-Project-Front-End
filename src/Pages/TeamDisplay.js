import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import Header from "../Components/Header.js";
import { tokens } from "../theme";
import Team from "../Components/Team";
import Sidebar from "../display/Sidebar.js";

const TeamDisplay = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <><Sidebar /><Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }} backgroundColor={theme.palette.background.default}>
        <Box m="20px">
        <Header title="TEAM" subtitle="Managing the Team Members" />
<Box height="75vh">
  <Team/>
</Box>
</Box>
</Box></>
    );
};

export default TeamDisplay;
