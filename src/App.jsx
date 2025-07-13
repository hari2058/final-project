import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./assets/pages/Products";
import Contact from "./assets/pages/Contact";
import AboutUs from "./assets/pages/AboutUs";
import Home from "./assets/pages/Home";
import Shop from "./assets/pages/Shop";
import Login from "./assets/pages/Login";
import Git from "./assets/pages/git";

function App() {
  return (
    <>
      <div className="relative">
        <div className="">
          <Navbar />
        </div>
        <Git />
        <div>
          
          <Routes>
          <Route  path="/" element={ <Home />}/>
          <Route  path="/Shop" element={ <Shop />}/>
          <Route  path="/Products" element={ <Products />}/>
          <Route  path="/Contact" element={ <Contact />}/>
          <Route  path="/Aboutus" element={ <AboutUs />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
          
       
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
