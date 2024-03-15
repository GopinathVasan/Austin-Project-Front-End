import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import LoginPage from "./Pages/LoginPage";
import ClientLogin from "./Pages/ClientLogin";
import Register from "./Pages/Register";
import OurPeople from "./routes/OurPeople";
// import Portfolio from "./footer/PortFolio";
// import SuccessLogin from './Pages/SuccessLogin';
import HomePage from "./ComponentsPages/HomePage";
import Display from "./display";
import Team from "./scenes/team";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";


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
        <Route path="/register" element={<Register />} />
        <Route path="/ourpeople" element={<OurPeople />} />
        <Route path="/ourpeople" element={<OurPeople />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/display" element={<Display />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/team" element={<Team />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </div>
  );
}
