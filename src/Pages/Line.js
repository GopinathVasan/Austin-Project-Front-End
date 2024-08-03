import { Box } from "@mui/material";
import Header from "../Components/Header.js";
import { useTheme } from "@mui/material";
import { tokens } from "../theme.js";
import LineChart from "../chart/LineChart.js";
import '../css/DisplayStyles.css';
import Sidebar from "../display/Sidebar.js";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <><Sidebar /><Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
        <Box p="20px" backgroundColor={colors.primary[400]} >
          <Header title="Line Chart" subtitle="Amount invested by each person" />
          <Box className='chart-b'>
          <Box height="70vh" className='chart'>
            <LineChart />
          </Box>
          </Box>
        </Box>
        </Box></>
  );
};

export default Line;
