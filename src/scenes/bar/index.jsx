import { Box } from "@mui/material";
import Header from "../../DashboardC/Header";
import BarChart from "../../DashboardC/BarChart";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import { useState } from "react";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";

const Bar = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="display-app">
          <Sidebar isSidebar={isSidebar} />
          <main className="display-content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Box m="20px">
      <Header title="Bar Chart" subtitle="Invested amount in each Month" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Bar;
