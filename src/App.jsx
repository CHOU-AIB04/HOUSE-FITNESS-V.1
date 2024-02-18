import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./compenents/Navbar/Navbar";
import { Supplement } from "./compenents/Products/Supplement";
import { Exercice } from "./compenents/Exercice/Exercice";
import { Contact } from "./compenents/Contact/Contact";
import { Account } from "./compenents/Account/Account";
import muscle from "./img/muscles.png";
import muscle2 from "./img/muscle2.png";
import black_house from "./img/black_version.png";
import house from "./img/house_logo_wheat.png";
import { Home } from "./compenents/Home/Home";
import { Footer } from "./compenents/Footer/Footer";
import { AppContext } from "./compenents/AppContext";
import supplement_info from "./compenents/Products/supplement_info";
import Material from "./compenents/Products/Material";
import { Materials } from "./compenents/Products/Matetials";
import { Chest } from "./compenents/Exercice/chest/Chest";
import { Back } from "./compenents/Exercice/Back/Back";
import { Arms } from "./compenents/Exercice/Arms/Arms";
import { Legs } from "./compenents/Exercice/Legs/Legs";
import { Detail } from "./compenents/Details/Detail";
import { Details } from "./compenents/Details";

function App() {
  let [detail, setdetail] = useState({
    product_name: "",
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",
    des: "",
    reviews: "",
    price: "",
    fake_price: "",
  });
  let [mode, setmode] = useState({
    icon: "bi bi-brightness-high-fill",
    icon_pos: "-left-1",
    background: "#f3f4f6",
    text_color: "text-black",
    logo: black_house,
    man: muscle2,
    product_color: "bg-slate-200",
    text_product: "text-black",
    click: "",
  });
  document.body.style.transition = "0.5s";
  document.body.style.backgroundColor = mode.background;
  return (
    <AppContext.Provider value={{ mode, setmode }}>
      <Details.Provider value={{ detail, setdetail }}>
        <Router>
          <Navbar />
          <Home />
          <Routes>
            <Route index element={<Supplement />} />
            {/* <Route inde element={<Supplement />} /> */}
            <Route path="/HOUSE-FITNESS-V2/Materials" element={<Materials />} />
            <Route path="/HOUSE-FITNESS-V2/exercices" element={<Exercice />}/>
            <Route path="/HOUSE-FITNESS-V2/Contact" element={<Contact />} />
            <Route path="/HOUSE-FITNESS-V2/account" element={<Account />} />
            <Route path="HOUSE-FITNESS-V2/Supplements/Supplement_Details" element={<Detail />} />
            <Route path="/HOUSE-FITNESS-V2/Materials/Machine_Details" element={<Detail />} />
          </Routes>
          <Footer />
        </Router>
      </Details.Provider>
    </AppContext.Provider>
  );
}

export default App;
