import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import LoginPage from "./Pages/LoginPage";
import ClientLogin from "./Pages/ClientLogin";
import Register from "../src/scenes/register";
import OurPeople from "./routes/OurPeople";
// import Portfolio from "./footer/PortFolio";
// import SuccessLogin from './Pages/SuccessLogin';
import HomePage from "./ComponentsPages/HomePage";
import Display from "./display";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Teamdisplay from "./scenes/team";
import Faqdisplay from "./scenes/faq";
import Calendardisplay from "./scenes/calendar";
import UserList from "./Pages/Register";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/clientlogin" element={<ClientLogin />} />
        <Route path="/ourpeople" element={<OurPeople />} />
        <Route path="/ourpeople" element={<OurPeople />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/display" element={<Display />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/team" element={<Teamdisplay />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/faq" element={<Faqdisplay />} />
        <Route path="/calendar" element={<Calendardisplay />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register1" element={<UserList />} />
      </Routes>
    </div>
  );
}
