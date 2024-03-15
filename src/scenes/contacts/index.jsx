import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import { useState } from "react";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import Contacts from "../../DashboardC/Contacts";
import Header from "../../DashboardC/Header";

const Contactdisplay = () => {
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
              <Box m="10px">
       <Header
         title="CONTACTS"
         subtitle="List of Contacts for Future Reference"
       /></Box>
              <Contacts />
              <Box />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
};

export default Contactdisplay;