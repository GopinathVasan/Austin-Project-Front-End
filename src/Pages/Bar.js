import { Box } from "@mui/material";
import Header from "../Components/Header.js";
import BarChart from "../chart/BarChart";
import { useTheme } from "@mui/material";
import { tokens } from "../theme.js";
import '../css/DisplayStyles.css';
import Sidebar from "../display/Sidebar.js";

const Bar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <><Sidebar /><Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
      <Box p="20px" backgroundColor={colors.primary[400]}>
        <Header title="Bar Chart" subtitle="Invested amount in each Month" />
        <Box className='chart-b'>
          <Box height="70vh" className='chart'>
            <BarChart />
          </Box>
        </Box>
      </Box>
    </Box></>

  );
}

export default Bar;
