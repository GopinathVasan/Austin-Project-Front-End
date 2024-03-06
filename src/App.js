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
      </Routes>
    </div>
  );
}
