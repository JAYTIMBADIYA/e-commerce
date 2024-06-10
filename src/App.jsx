import React, { useState } from "react";
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
import Mycard from "./components/Mycard/index.jsx";
import Bell from "./components/Bell/index.jsx";
import Mylist from "./components/Mylist/index.jsx";
import Subpart from "./components/Subpart/index.jsx";
import Mycart from "./components/Mycart/index.jsx";
import Address from "./components/Mycart/Address/Address.jsx";
import Cartpro from "./components/Mycart/Cartpro/Cartpro.jsx";
import Order from "./components/Mycart/Order/Order.jsx";
import FinalCart from "./components/Mycart/FinalCart/FinalCart.jsx";
const App = () => {
  // const [cartCount, setCartCount] = useState(0);
  const [ cartItems, setCartItems ] = useState([]);

  const addToCart = (item) => {
    // setCartCount(cartCount + 1);
    setCartItems([...cartItems, item]);
  }


  return (
    <>
    <BrowserRouter>
      <Navbar cartCount={cartItems.length}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alloffers" element={<AllOffer />} />
        <Route path="/viewoffer" element={<ViewOffer addToCart={addToCart}/>} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/merchants" element={<Mainkfc />}/>
        <Route path="/Kfc2" element={<Kfc2 />} />
        <Route path="/KfcPro" element={<KfcPro />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<Information/>}/>
        <Route path="/settings" element={<Setting/>}/>
        <Route path="/mycard" element={<Mycard />} />
        <Route path="/Bell" element={<Bell />}/>
        <Route path="/Mylist" element={<Mylist />}/>
        <Route path="/subitem1" element={<Subpart />}/>
        <Route path="/Mycart" element={<Mycart/>}/>
        <Route path="/review-order" element={<Cartpro cartItems={cartItems} />}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/confirm-order" element={<Order />}/>
        <Route path="/finalcart" element={<FinalCart />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
};

export default App;
