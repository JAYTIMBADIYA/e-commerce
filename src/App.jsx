import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/home";
import AllOffer from "./components/AllOffer";
import ViewOffer from "./components/AllOffer/ViewOffer/ViewOffer";
import Partner from "./components/Partner/index.jsx";
import Mainkfc from "./components/Mainkfc/index.jsx";
import Kfc2 from "./components/Mainkfc/Kfc2/Kfc2.jsx";
import KfcPro from "./components/Mainkfc/KfcPro/KfcPro.jsx";
import Contact from "./components/Contact/index.jsx";
import Information from "./components/Information/index.jsx";
import Setting from "./components/Setting/index.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alloffers" element={<AllOffer />} />
        <Route path="/viewoffer" element={<ViewOffer />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/merchants" element={<Mainkfc />}/>
        <Route path="/Kfc2" element={<Kfc2 />} />
        <Route path="/KfcPro" element={<KfcPro />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Information" element={<Information/>}/>
        <Route path="/Setting" element={<Setting/>}/>



      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
