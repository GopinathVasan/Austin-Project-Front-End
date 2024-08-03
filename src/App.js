import "./styles.css";
import React, { useEffect } from 'react';
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import ClientLogin from "./Pages/ClientLogin";
import OurPeople from "./routes/OurPeople";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Pie from './Pages/Pie';
import Line from './Pages/Line';
import Bar from './Pages/Bar';
import Faqdisplay from './Pages/FaqDisplay';
import InvoicesDisplay from './Pages/InvoiceDisplay';
import TeamDisplay from './Pages/TeamDisplay';
import Register from './Pages/Register';
import ContactDisplay from './Pages/ContactDisplay';
import Calendar from './Pages/Calendar';
import PrivateRoute from './Components/PrivateRouter';

export default function App() {
  const [theme, colorMode] = useMode();

  useEffect(() => {
    const handleBeforeUnload = () => {
        localStorage.removeItem('token');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
    };
}, []);

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/clientlogin" element={<ClientLogin />} />
              <Route path="/ourpeople" element={<OurPeople />} />
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/faq" element={<Faqdisplay />} />
                <Route path="/invoice" element={<InvoicesDisplay />} />
                <Route path="/team" element={<TeamDisplay />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dcontact" element={<ContactDisplay />} />
                <Route path="/calendar" element={<Calendar />} />
              </Route>
            </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}
