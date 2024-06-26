import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import { useState } from "react";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import Calendar from "./calendar";

const Calendardisplay = () => {
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
      <Box height="75vh">
        <Calendar />
      </Box>
    </Box>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
};
export default Calendardisplay;